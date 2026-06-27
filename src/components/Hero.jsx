const trust = [
  { big: '25+ yrs', label: 'On the tools locally' },
  { big: 'Free', label: 'No-obligation quotes' },
  { big: 'Hörmann', label: 'Authorised installer' },
  { big: '5 towns', label: 'Across the Midlands' },
]

export default function Hero() {
  return (
    <section id="top" style={{
      position: 'relative',
      background: 'linear-gradient(160deg,#3a0f1a 0%,#2e0f17 60%,#23090f 100%)',
      color: '#f3e7df', overflow: 'hidden',
    }}>
      {/* stripe overlay */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.5,
        background: 'repeating-linear-gradient(180deg,transparent 0,transparent 62px,rgba(0,0,0,0.35) 62px,rgba(0,0,0,0.35) 64px)',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div style={{
        position: 'relative', maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(56px,8vw,104px) clamp(18px,5vw,40px)',
        display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px,5vw,64px)', alignItems: 'center',
      }}>
        {/* Left copy */}
        <div style={{ flex: '1 1 440px', minWidth: 300 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 9,
            fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#d9a3ab', border: '1px solid rgba(217,163,171,0.32)',
            borderRadius: 100, padding: '7px 15px',
          }}>Garage door specialists</span>

          <h1 style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 900,
            fontSize: 'clamp(40px,6.4vw,72px)', lineHeight: 0.98,
            letterSpacing: '-0.03em', margin: '22px 0 0', color: '#fbf4ef',
          }}>
            Reliable garage<br />doors, done<br />properly.
          </h1>

          <p style={{
            fontSize: 'clamp(17px,1.6vw,20px)', lineHeight: 1.55, color: '#e2c7c0',
            maxWidth: 520, margin: '24px 0 0', fontWeight: 500,
          }}>
            Fast, friendly garage door repairs, installation and servicing across{' '}
            <strong style={{ color: '#fbf4ef', fontWeight: 700 }}>
              Birmingham, Leicester, Hinckley, Coventry and Nuneaton
            </strong>{' '}
            — backed by over 25 years on the tools.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 34 }}>
            <a
              href="#contact"
              className="hero-cta-primary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: '#f3e7df', color: '#2e0f17', fontWeight: 800, fontSize: 16,
                padding: '15px 26px', borderRadius: 3, textDecoration: 'none',
                boxShadow: '0 3px 0 #b89a91',
              }}
            >Get a free quote</a>
            <a
              href="tel:+447958323265"
              className="hero-cta-secondary"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 9,
                background: 'transparent', color: '#f3e7df', fontWeight: 700, fontSize: 16,
                padding: '15px 26px', borderRadius: 3, textDecoration: 'none',
                border: '1px solid rgba(243,231,223,0.4)',
              }}
            >Call 07958 323265</a>
          </div>
        </div>

        {/* Right image placeholder */}
        <div style={{ flex: '1 1 380px', minWidth: 280 }}>
          <div style={{
            position: 'relative', width: '100%', aspectRatio: '4/3.4',
            borderRadius: 6, overflow: 'hidden',
            background: 'repeating-linear-gradient(135deg,#4a1322 0,#4a1322 11px,#421019 11px,#421019 22px)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.45),inset 0 0 0 1px rgba(243,231,223,0.12)',
            display: 'flex', alignItems: 'flex-end',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(180deg,transparent 0,transparent 17%,rgba(0,0,0,0.28) 17%,rgba(0,0,0,0.28) calc(17% + 2px))',
            }} />
            <span style={{
              position: 'relative', margin: 16,
              fontFamily: 'ui-monospace,monospace', fontSize: 12, letterSpacing: '0.04em',
              color: '#e8d4cd', background: 'rgba(35,9,15,0.7)',
              padding: '7px 11px', borderRadius: 3,
            }}>[ photo: sectional door install — Birmingham ]</span>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div style={{ position: 'relative', borderTop: '1px solid rgba(243,231,223,0.12)' }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          padding: '0 clamp(18px,5vw,40px)',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
        }}>
          {trust.map((t, i) => (
            <div key={i} style={{
              padding: '22px 18px 22px 0',
              borderRight: '1px solid rgba(243,231,223,0.1)',
            }}>
              <div style={{
                fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 26,
                color: '#fbf4ef', letterSpacing: '-0.02em',
              }}>{t.big}</div>
              <div style={{ fontSize: 14, color: '#d9b3ab', marginTop: 5, fontWeight: 500 }}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
