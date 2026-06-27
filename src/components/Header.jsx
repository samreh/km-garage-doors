// KM Garage Doors logo mark (garage door stripes)
function Logo() {
  return (
    <svg width="62" height="40" viewBox="0 0 62 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="62" height="40" rx="2" fill="#2e0f17" />
      <text
        x="31" y="26"
        fontFamily="Archivo, Arial, sans-serif"
        fontWeight="900"
        fontSize="20"
        letterSpacing="-1"
        fill="#f3e7df"
        textAnchor="middle"
      >KM</text>
      <rect x="4" y="8" width="54" height="2" fill="#2e0f17" opacity="0.5" />
      <rect x="4" y="14" width="54" height="2" fill="#2e0f17" opacity="0.5" />
      <rect x="4" y="20" width="54" height="2" fill="#2e0f17" opacity="0.5" />
      <rect x="4" y="26" width="54" height="2" fill="#2e0f17" opacity="0.5" />
    </svg>
  )
}

export default function Header() {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#faf6f3', borderBottom: '1px solid #ece2db',
    }}>
      {/* Top bar */}
      <div style={{ background: '#2e0f17', color: '#e8d4cd', fontSize: '12.5px', letterSpacing: '0.02em' }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          padding: '7px clamp(18px,5vw,40px)',
          display: 'flex', flexWrap: 'wrap', gap: '6px 22px',
          alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
            Over 25 years serving Birmingham &amp; the Midlands
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="tel:+447958323265" style={{ color: '#f3e7df', textDecoration: 'none', fontWeight: 600 }}>07958 323265</a>
            <a href="mailto:kmgaragedoors@gmail.com" style={{ color: '#e8d4cd', textDecoration: 'none' }}>kmgaragedoors@gmail.com</a>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '12px clamp(18px,5vw,40px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18,
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none', color: '#241419' }}>
          <Logo />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 18,
              letterSpacing: '-0.02em', color: '#2e0f17',
            }}>KM GARAGE DOORS</span>
            <span style={{
              fontSize: 11, letterSpacing: '0.16em', fontWeight: 600,
              color: '#9a7f86', marginTop: 4, textTransform: 'uppercase',
            }}>Repairs · Installation · Servicing</span>
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2.4vw,30px)' }}>
          <a href="#services" style={{ fontWeight: 600, fontSize: 15, color: '#43232c', textDecoration: 'none' }}>Services</a>
          <a href="#coverage" style={{ fontWeight: 600, fontSize: 15, color: '#43232c', textDecoration: 'none' }}>Coverage</a>
          <a href="#about" style={{ fontWeight: 600, fontSize: 15, color: '#43232c', textDecoration: 'none' }}>About</a>
          <a href="#faq" style={{ fontWeight: 600, fontSize: 15, color: '#43232c', textDecoration: 'none' }}>FAQ</a>
          <a
            href="#contact"
            className="nav-cta"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#5b1a2b', color: '#f3e7df', fontWeight: 700, fontSize: 15,
              padding: '11px 20px', borderRadius: 3, textDecoration: 'none',
              boxShadow: '0 2px 0 #3a0f1a',
            }}
          >Get a free quote</a>
        </nav>
      </div>
    </header>
  )
}
