export default function Footer() {
  return (
    <footer style={{ background: '#23090f', color: '#c9a9a8' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(40px,6vw,64px) clamp(18px,5vw,40px)',
      }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: 32,
          justifyContent: 'space-between', alignItems: 'flex-start',
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 340 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
              <svg width="58" height="40" viewBox="0 0 62 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="62" height="40" rx="2" fill="#3d1019" />
                <text x="31" y="26" fontFamily="Archivo,Arial,sans-serif" fontWeight="900" fontSize="20" letterSpacing="-1" fill="#f3e7df" textAnchor="middle">KM</text>
                <rect x="4" y="8" width="54" height="2" fill="#f3e7df" opacity="0.15" />
                <rect x="4" y="14" width="54" height="2" fill="#f3e7df" opacity="0.15" />
                <rect x="4" y="20" width="54" height="2" fill="#f3e7df" opacity="0.15" />
                <rect x="4" y="26" width="54" height="2" fill="#f3e7df" opacity="0.15" />
              </svg>
              <span style={{
                fontFamily: "'Archivo', sans-serif", fontWeight: 900,
                fontSize: 18, letterSpacing: '-0.02em', color: '#f3e7df',
              }}>KM GARAGE DOORS</span>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, margin: '18px 0 0', fontWeight: 500 }}>
              Reliable garage door repairs, installation and servicing across Birmingham,
              Leicester, Hinckley, Coventry and Nuneaton. Over 25 years of fast, friendly,
              dependable service.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: 'clamp(36px,6vw,80px)', flexWrap: 'wrap' }}>
            <div>
              <div style={{
                fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 13,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d9a3ab', marginBottom: 14,
              }}>Explore</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[['#services', 'Services'], ['#coverage', 'Coverage'], ['#about', 'About'], ['#faq', 'FAQ']].map(([href, label]) => (
                  <a key={href} href={href} style={{ color: '#c9a9a8', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>{label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{
                fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 13,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: '#d9a3ab', marginBottom: 14,
              }}>Contact</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="tel:+447958323265" style={{ color: '#f3e7df', textDecoration: 'none', fontSize: 15, fontWeight: 700 }}>07958 323265</a>
                <a href="mailto:kmgaragedoors@gmail.com" style={{ color: '#c9a9a8', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>kmgaragedoors@gmail.com</a>
                <a href="https://www.facebook.com/p/KM-Garage-Doors-100090478355691/" target="_blank" rel="noreferrer" style={{ color: '#c9a9a8', textDecoration: 'none', fontSize: 15, fontWeight: 500 }}>Facebook</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(243,231,223,0.12)', marginTop: 40, paddingTop: 22,
          display: 'flex', flexWrap: 'wrap', gap: 10,
          justifyContent: 'space-between', fontSize: 13, color: '#9a7f86',
        }}>
          <span>© 2026 KM Garage Doors — All Rights Reserved.</span>
          <span>Birmingham · Leicester · Hinckley · Coventry · Nuneaton</span>
        </div>
      </div>
    </footer>
  )
}
