const portfolio = [
  { cap: '[ photo: anthracite sectional ]' },
  { cap: '[ photo: white up-and-over ]' },
  { cap: '[ photo: roller door + opener ]' },
  { cap: '[ photo: bespoke timber-effect ]' },
  { cap: '[ photo: Hörmann install ]' },
  { cap: '[ photo: before / after repair ]' },
]

export default function Portfolio() {
  return (
    <section style={{
      background: '#f3ece7',
      borderTop: '1px solid #ece2db',
      borderBottom: '1px solid #ece2db',
    }}>
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: 'clamp(54px,8vw,100px) clamp(18px,5vw,40px)',
      }}>
        <div style={{ marginBottom: 36, maxWidth: 640 }}>
          <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#9a4a58',
          }}>Recent work</span>
          <h2 style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 900,
            fontSize: 'clamp(30px,4.4vw,48px)', lineHeight: 1.02,
            letterSpacing: '-0.025em', margin: '14px 0 0', color: '#2e0f17',
          }}>A few doors we're proud of</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))',
          gap: 14,
        }}>
          {portfolio.map((w, i) => (
            <div key={i} style={{
              position: 'relative', aspectRatio: '1/1', borderRadius: 5, overflow: 'hidden',
              background: 'repeating-linear-gradient(135deg,#e3d4cd 0,#e3d4cd 10px,#dccabf 10px,#dccabf 20px)',
              border: '1px solid #e0cfc7', display: 'flex', alignItems: 'flex-end',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'repeating-linear-gradient(180deg,transparent 0,transparent 23%,rgba(46,15,23,0.1) 23%,rgba(46,15,23,0.1) calc(23% + 2px))',
              }} />
              <span style={{
                position: 'relative', margin: 13,
                fontFamily: 'ui-monospace,monospace', fontSize: 11.5,
                color: '#5b3a3f', background: 'rgba(255,255,255,0.78)',
                padding: '6px 10px', borderRadius: 3,
              }}>{w.cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
