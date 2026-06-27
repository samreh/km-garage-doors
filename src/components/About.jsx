export default function About() {
  return (
    <section id="about" style={{ background: '#2e0f17', color: '#f3e7df' }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(54px,8vw,100px) clamp(18px,5vw,40px)',
        display: 'flex', flexWrap: 'wrap', gap: 'clamp(36px,5vw,68px)', alignItems: 'center',
      }}>
        {/* Image placeholder */}
        <div style={{ flex: '1 1 320px', minWidth: 280 }}>
          <div style={{
            position: 'relative', width: '100%', aspectRatio: '4/3.2',
            borderRadius: 6, overflow: 'hidden',
            background: 'repeating-linear-gradient(135deg,#3d1019 0,#3d1019 11px,#360e16 11px,#360e16 22px)',
            boxShadow: 'inset 0 0 0 1px rgba(243,231,223,0.12)',
            display: 'flex', alignItems: 'flex-end',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(180deg,transparent 0,transparent 17%,rgba(0,0,0,0.2) 17%,rgba(0,0,0,0.2) calc(17% + 2px))',
            }} />
            <span style={{
              position: 'relative', margin: 16,
              fontFamily: 'ui-monospace,monospace', fontSize: 12,
              color: '#e8d4cd', background: 'rgba(35,9,15,0.65)',
              padding: '7px 11px', borderRadius: 3,
            }}>[ photo: KM van / team on site ]</span>
          </div>
        </div>

        {/* Copy */}
        <div style={{ flex: '1 1 380px', minWidth: 300 }}>
          <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#d9a3ab',
          }}>About KM Garage Doors</span>
          <h2 style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 900,
            fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.04,
            letterSpacing: '-0.025em', margin: '14px 0 0', color: '#fbf4ef',
          }}>25+ years of doors that just work.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.62, color: '#e2c7c0', margin: '22px 0 0', fontWeight: 500 }}>
            KM Garage Doors has been providing dependable garage door solutions across Birmingham
            and the surrounding Midlands for more than 25 years. We're a local, family-minded
            business built on fast response times, reliable workmanship and genuinely friendly service.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.62, color: '#e2c7c0', margin: '16px 0 0', fontWeight: 500 }}>
            Whether it's an emergency repair or a bespoke new installation, you'll deal with people
            who turn up when they say they will, do the job right, and leave you with a door you
            don't have to think about.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 11, marginTop: 26 }}>
            {['Hörmann authorised', 'Free no-obligation quotes', 'Workmanship guaranteed'].map((tag) => (
              <span key={tag} style={{
                fontSize: 14, fontWeight: 600, color: '#fbf4ef',
                border: '1px solid rgba(243,231,223,0.28)',
                borderRadius: 100, padding: '9px 16px',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
