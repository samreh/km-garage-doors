import { useState } from 'react'

const serviceNames = [
  'Garage Door Repairs',
  'New Door Installation',
  'Bespoke & Made-to-Measure',
  'Hörmann Doors',
  'Springs & Cables',
  'Automation & Openers',
  'Servicing & Maintenance',
  'Roller, Sectional & Up-and-Over',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  const set = (field) => (e) => setForm(f => ({ ...f, [field]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmittedName((form.name || 'there').trim())
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%', padding: '13px 15px',
    border: '1px solid #e0cfc7', borderRadius: 4,
    fontSize: 15, background: '#fff', color: '#241419', marginBottom: 14,
    outline: 'none',
  }

  const labelStyle = {
    display: 'block', fontSize: 13, fontWeight: 700, color: '#5b3a3f', marginBottom: 6,
  }

  return (
    <section id="contact" style={{
      background: 'linear-gradient(160deg,#3a0f1a 0%,#2e0f17 70%)',
      color: '#f3e7df',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(54px,8vw,100px) clamp(18px,5vw,40px)',
        display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px,5vw,64px)',
      }}>
        {/* Left info */}
        <div style={{ flex: '1 1 360px', minWidth: 300 }}>
          <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#d9a3ab',
          }}>Get in touch</span>
          <h2 style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 900,
            fontSize: 'clamp(30px,4.6vw,52px)', lineHeight: 1.0,
            letterSpacing: '-0.03em', margin: '14px 0 0', color: '#fbf4ef',
          }}>Get your free<br />quote today.</h2>
          <p style={{
            fontSize: 17, lineHeight: 1.6, color: '#e2c7c0',
            margin: '20px 0 0', fontWeight: 500, maxWidth: 420,
          }}>
            Tell us what you need and we'll get straight back to you with a free,
            no-obligation quote. Fast, friendly and reliable — across Birmingham,
            Leicester, Hinckley, Coventry and Nuneaton.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 34 }}>
            <a href="tel:+447958323265" style={{
              display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: '#f3e7df',
            }}>
              <span style={{
                width: 44, height: 44, borderRadius: '50%',
                border: '1px solid rgba(243,231,223,0.32)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Archivo', sans-serif", fontWeight: 900, flex: 'none',
              }}>📞</span>
              <span>
                <span style={{ display: 'block', fontSize: 13, color: '#d9a3ab', fontWeight: 600 }}>Call us</span>
                <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 20 }}>07958 323265</span>
              </span>
            </a>
            <a href="mailto:kmgaragedoors@gmail.com" style={{
              display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: '#f3e7df',
            }}>
              <span style={{
                width: 44, height: 44, borderRadius: '50%',
                border: '1px solid rgba(243,231,223,0.32)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Archivo', sans-serif", fontWeight: 900, flex: 'none',
              }}>✉</span>
              <span>
                <span style={{ display: 'block', fontSize: 13, color: '#d9a3ab', fontWeight: 600 }}>Email us</span>
                <span style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 18 }}>kmgaragedoors@gmail.com</span>
              </span>
            </a>
          </div>
        </div>

        {/* Right form */}
        <div style={{ flex: '1 1 380px', minWidth: 300 }}>
          <div style={{
            background: '#fbf4ef', borderRadius: 8,
            padding: 'clamp(24px,3vw,36px)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.32)',
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 8px' }}>
                <div style={{
                  width: 58, height: 58, borderRadius: '50%',
                  background: '#5b1a2b', color: '#f3e7df',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 26,
                  margin: '0 auto',
                }}>✓</div>
                <h3 style={{
                  fontFamily: "'Archivo', sans-serif", fontWeight: 900,
                  fontSize: 24, color: '#2e0f17', margin: '20px 0 0',
                }}>Thanks, {submittedName}!</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: '#6b5860', margin: '12px 0 0', fontWeight: 500 }}>
                  Your request is on its way. We'll be in touch shortly with your free quote.
                  Need us urgently? Call{' '}
                  <a href="tel:+447958323265" style={{ color: '#5b1a2b', fontWeight: 700 }}>07958 323265</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h3 style={{
                  fontFamily: "'Archivo', sans-serif", fontWeight: 900,
                  fontSize: 22, color: '#2e0f17', margin: '0 0 18px',
                }}>Request a free quote</h3>

                <label style={labelStyle}>Name</label>
                <input value={form.name} onChange={set('name')} required
                  placeholder="Your name" style={inputStyle} />

                <label style={labelStyle}>Email</label>
                <input type="email" value={form.email} onChange={set('email')} required
                  placeholder="you@email.com" style={inputStyle} />

                <label style={labelStyle}>Phone</label>
                <input value={form.phone} onChange={set('phone')}
                  placeholder="07000 000000" style={inputStyle} />

                <label style={labelStyle}>Service required</label>
                <select value={form.service} onChange={set('service')} style={inputStyle}>
                  <option value="">Select a service…</option>
                  {serviceNames.map(n => <option key={n} value={n}>{n}</option>)}
                </select>

                <label style={labelStyle}>Details</label>
                <textarea value={form.message} onChange={set('message')} rows={3}
                  placeholder="Tell us a little about the job…"
                  style={{ ...inputStyle, resize: 'vertical' }} />

                <button
                  type="submit"
                  className="submit-btn"
                  style={{
                    width: '100%', background: '#5b1a2b', color: '#f3e7df',
                    border: 'none', fontFamily: "'Archivo', sans-serif",
                    fontWeight: 800, fontSize: 16, padding: 15, borderRadius: 4,
                    cursor: 'pointer', boxShadow: '0 3px 0 #3a0f1a',
                  }}
                >Send my request</button>
                <p style={{ fontSize: 12, color: '#9a7f86', margin: '12px 0 0', textAlign: 'center' }}>
                  No obligation. We'll only use your details to reply to your enquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
