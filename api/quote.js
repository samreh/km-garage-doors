// Vercel Serverless Function: POST /api/quote
// Validates a quote request, then delivers it via email (Resend) and Telegram.
// No npm dependencies — uses the global fetch available on Vercel's Node runtime.
//
// Required env vars (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY        — Resend API key (re_...)
//   TELEGRAM_BOT_TOKEN    — Telegram bot token from @BotFather
//   TELEGRAM_CHAT_ID      — chat ID to receive notifications
// Optional:
//   QUOTE_TO_EMAIL        — recipient (default kmgaragedoors@gmail.com)
//   QUOTE_FROM_EMAIL      — verified sender (default onboarding@resend.dev for testing)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  // Vercel parses JSON bodies, but guard for a raw string just in case.
  let data = req.body
  if (typeof data === 'string') {
    try { data = JSON.parse(data) } catch { data = {} }
  }
  data = data || {}

  const name = String(data.name || '').trim()
  const email = String(data.email || '').trim()
  const phone = String(data.phone || '').trim()
  const service = String(data.service || '').trim()
  const message = String(data.message || '').trim()

  // Honeypot: bots fill hidden fields. Pretend success, send nothing.
  if (String(data.company || '').trim()) {
    return res.status(200).json({ ok: true, results: { spam: true } })
  }

  // Server-side validation — every field is required.
  const errors = {}
  if (!name) errors.name = 'Name is required'
  if (!EMAIL_RE.test(email)) errors.email = 'A valid email is required'
  if (!phone) errors.phone = 'Phone is required'
  if (!service) errors.service = 'Please select a service'
  if (!message) errors.message = 'Please add some details'
  if (Object.keys(errors).length) {
    return res.status(400).json({ ok: false, errors })
  }

  const summary =
    `New quote request from ${name}\n` +
    `Email: ${email}\n` +
    `Phone: ${phone}\n` +
    `Service: ${service}\n\n` +
    `Details:\n${message}`

  const results = {}

  // 1) Email via Resend
  try {
    const key = process.env.RESEND_API_KEY
    const to = process.env.QUOTE_TO_EMAIL || 'kmgaragedoors@gmail.com'
    const from = process.env.QUOTE_FROM_EMAIL || 'KM Garage Doors <onboarding@resend.dev>'
    if (key) {
      const html =
        `<div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;color:#241419;line-height:1.6">` +
        `<h2 style="margin:0 0 12px;color:#5b1a2b">New quote request</h2>` +
        `<p style="margin:0 0 4px"><strong>Name:</strong> ${escapeHtml(name)}</p>` +
        `<p style="margin:0 0 4px"><strong>Email:</strong> ${escapeHtml(email)}</p>` +
        `<p style="margin:0 0 4px"><strong>Phone:</strong> ${escapeHtml(phone)}</p>` +
        `<p style="margin:0 0 12px"><strong>Service:</strong> ${escapeHtml(service)}</p>` +
        `<p style="margin:0 0 4px"><strong>Details:</strong></p>` +
        `<p style="margin:0;white-space:pre-wrap">${escapeHtml(message)}</p>` +
        `</div>`
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `New quote request — ${name} (${service})`,
          text: summary,
          html,
        }),
      })
      results.email = r.ok
      if (!r.ok) results.emailError = await r.text()
    } else {
      results.email = false
      results.emailError = 'RESEND_API_KEY not set'
    }
  } catch (e) {
    results.email = false
    results.emailError = String(e && e.message ? e.message : e)
  }

  // 2) Telegram via Bot API
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    if (token && chatId) {
      const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: `🔔 ${summary}`,
          disable_web_page_preview: true,
        }),
      })
      results.telegram = r.ok
      if (!r.ok) results.telegramError = await r.text()
    } else {
      results.telegram = false
      results.telegramError = 'Telegram env vars not set'
    }
  } catch (e) {
    results.telegram = false
    results.telegramError = String(e && e.message ? e.message : e)
  }

  // Success if the lead reached at least one channel.
  const ok = Boolean(results.email || results.telegram)
  return res.status(ok ? 200 : 502).json({ ok, results })
}
