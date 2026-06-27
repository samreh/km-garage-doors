const pins = [
  { name: 'Birmingham', left: '24%', top: '64%' },
  { name: 'Coventry',   left: '50%', top: '62%' },
  { name: 'Nuneaton',   left: '60%', top: '44%' },
  { name: 'Hinckley',   left: '70%', top: '35%' },
  { name: 'Leicester',  left: '84%', top: '22%' },
]

export default function Coverage() {
  return (
    <section id="coverage" style={{
      maxWidth: 1180, margin: '0 auto',
      padding: 'clamp(54px,8vw,104px) clamp(18px,5vw,40px)',
    }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,60px)', alignItems: 'center',
      }}>
        {/* Left copy */}
        <div style={{ flex: '1 1 320px', minWidth: 280 }}>
          <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#9a4a58',
          }}>Where we work</span>
          <h2 style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 900,
            fontSize: 'clamp(30px,4.4vw,48px)', lineHeight: 1.02,
            letterSpacing: '-0.025em', margin: '14px 0 0', color: '#2e0f17',
          }}>Covering Birmingham &amp; the wider Midlands</h2>
          <p style={{
            fontSize: 16.5, lineHeight: 1.62, color: '#6b5860',
            margin: '18px 0 0', fontWeight: 500, maxWidth: 440,
          }}>
            We're on the road across the region every day. If you're in or around any of these
            towns, we can usually be with you fast — often the same or next day for urgent repairs.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9,
            marginTop: 26, maxWidth: 420,
          }}>
            {pins.map((p) => (
              <div key={p.name} style={{
                display: 'flex', alignItems: 'center', gap: 11,
                background: '#fff', border: '1px solid #ece2db',
                borderRadius: 4, padding: '12px 14px',
              }}>
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: '#5b1a2b', flex: 'none',
                  boxShadow: '0 0 0 4px rgba(91,26,43,0.12)',
                }} />
                <span style={{ fontWeight: 700, fontSize: 15, color: '#2e0f17' }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div style={{ flex: '1 1 400px', minWidth: 300 }}>
          <div style={{
            position: 'relative', width: '100%', aspectRatio: '1/0.82',
            background: '#fbf4ef', border: '1px solid #ece2db',
            borderRadius: 8, overflow: 'hidden',
            boxShadow: '0 18px 40px rgba(46,15,23,0.08)',
          }}>
            {/* dot grid bg */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(circle,#e7d8d0 1px,transparent 1px)',
              backgroundSize: '26px 26px', opacity: 0.7,
            }} />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              <ellipse cx="50" cy="50" rx="42" ry="36"
                fill="rgba(91,26,43,0.06)" stroke="rgba(91,26,43,0.18)"
                strokeWidth="0.4" strokeDasharray="2 1.6" />
              <polyline
                points="24,62 50,60 60,42 70,33 84,20"
                fill="none" stroke="rgba(91,26,43,0.4)"
                strokeWidth="0.7" strokeDasharray="1.6 1.6" strokeLinecap="round"
              />
            </svg>
            {pins.map((p) => (
              <div key={p.name} style={{
                position: 'absolute', left: p.left, top: p.top,
                transform: 'translate(-50%,-100%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 12.5,
                  color: '#2e0f17', background: '#fff', border: '1px solid #e3d2cb',
                  padding: '4px 9px', borderRadius: 100, whiteSpace: 'nowrap',
                  boxShadow: '0 3px 8px rgba(46,15,23,0.12)', marginBottom: 5,
                }}>{p.name}</span>
                <span style={{
                  width: 14, height: 14, borderRadius: '50% 50% 50% 0',
                  background: '#5b1a2b', transform: 'rotate(45deg) translateY(-2px)',
                  boxShadow: '0 2px 5px rgba(46,15,23,0.3)',
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
