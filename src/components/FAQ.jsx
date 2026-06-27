import { useState } from 'react'

const faqData = [
  { q: 'Do you offer free garage door quotes?', a: 'Yes. Every quote is free and no-obligation. Tell us what you need and we\'ll give you a clear, honest price with no hidden costs.' },
  { q: 'Which areas do you cover?', a: 'We cover Birmingham, Leicester, Hinckley, Coventry, Nuneaton and the surrounding Midlands. If you\'re nearby, just ask.' },
  { q: 'How quickly can you repair a broken garage door?', a: 'We pride ourselves on fast response times and can often attend the same or next day for urgent repairs such as broken springs, snapped cables or doors stuck open.' },
  { q: 'Do you fit Hörmann garage doors?', a: 'Yes. We supply and install Hörmann garage doors as well as bespoke made-to-measure options to suit your home and budget.' },
  { q: 'What types of garage doors do you repair?', a: 'We repair and install all major types including up-and-over, roller, sectional and side-hinged garage doors, plus electric automation and openers.' },
  { q: 'Are your garage door repairs guaranteed?', a: 'Yes. With over 25 years of experience we stand behind our workmanship, using quality parts and backing our repairs and installations with a guarantee.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" style={{
      maxWidth: 980, margin: '0 auto',
      padding: 'clamp(54px,8vw,104px) clamp(18px,5vw,40px)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 40px' }}>
        <span style={{
          fontSize: 13, fontWeight: 700, letterSpacing: '0.16em',
          textTransform: 'uppercase', color: '#9a4a58',
        }}>Good to know</span>
        <h2 style={{
          fontFamily: "'Archivo', sans-serif", fontWeight: 900,
          fontSize: 'clamp(30px,4.4vw,48px)', lineHeight: 1.02,
          letterSpacing: '-0.025em', margin: '14px 0 0', color: '#2e0f17',
        }}>Garage door questions, answered</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {faqData.map((f, i) => (
          <div key={i} style={{
            background: '#fff', border: '1px solid #ece2db',
            borderRadius: 5, overflow: 'hidden',
          }}>
            <button
              onClick={() => toggle(i)}
              className="faq-button"
              style={{
                width: '100%', textAlign: 'left', background: 'none',
                border: 'none', cursor: 'pointer', padding: '20px 22px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                fontFamily: "'Archivo', sans-serif", fontWeight: 700, fontSize: 17, color: '#2e0f17',
              }}
            >
              <span>{f.q}</span>
              <span style={{ flex: 'none', fontSize: 22, fontWeight: 700, color: '#9a4a58', lineHeight: 1 }}>
                {openIndex === i ? '–' : '+'}
              </span>
            </button>
            {openIndex === i && (
              <p style={{
                margin: 0, padding: '0 22px 22px',
                fontSize: 15.5, lineHeight: 1.62, color: '#6b5860', fontWeight: 500,
              }}>{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
