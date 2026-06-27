const services = [
  { num: '01', title: 'Garage Door Repairs', blurb: 'Fast, reliable repairs for doors that are stuck, noisy, off their tracks or won\'t open — often same or next day.' },
  { num: '02', title: 'New Door Installation', blurb: 'Supply and fit of quality new garage doors, measured and installed properly to last for years.' },
  { num: '03', title: 'Bespoke & Made-to-Measure', blurb: 'Non-standard opening? We make doors to measure so they fit your home perfectly, first time.' },
  { num: '04', title: 'Hörmann Doors', blurb: 'As an authorised installer we supply and fit the full Hörmann range — sectional, roller and up-and-over.' },
  { num: '05', title: 'Springs & Cables', blurb: 'Snapped spring or frayed cable? We replace worn parts safely so your door lifts smoothly again.' },
  { num: '06', title: 'Automation & Openers', blurb: 'Electric openers and remote automation fitted or repaired — open your garage without lifting a finger.' },
  { num: '07', title: 'Servicing & Maintenance', blurb: 'Regular servicing to keep your door safe, quiet and working — catching small issues before they cost more.' },
  { num: '08', title: 'Roller, Sectional & Up-and-Over', blurb: 'We work on every major door type, helping you choose the right style and finish for your property.' },
]

export default function Services() {
  return (
    <section id="services" style={{
      maxWidth: 1180, margin: '0 auto',
      padding: 'clamp(54px,8vw,104px) clamp(18px,5vw,40px)',
    }}>
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end',
        justifyContent: 'space-between', gap: 18, marginBottom: 42,
      }}>
        <div style={{ maxWidth: 640 }}>
          <span style={{
            fontSize: 13, fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#9a4a58',
          }}>What we do</span>
          <h2 style={{
            fontFamily: "'Archivo', sans-serif", fontWeight: 900,
            fontSize: 'clamp(30px,4.4vw,48px)', lineHeight: 1.02,
            letterSpacing: '-0.025em', margin: '14px 0 0', color: '#2e0f17',
          }}>Garage door services across the Midlands</h2>
        </div>
        <p style={{
          flex: '1 1 280px', maxWidth: 380, fontSize: 16, lineHeight: 1.6,
          color: '#6b5860', fontWeight: 500, margin: 0,
        }}>
          From a snapped spring to a brand-new bespoke door, we repair, install and service
          every type of garage door — quickly and to a standard we'd be happy with at home.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill,minmax(270px,1fr))',
        gap: 14,
      }}>
        {services.map((s) => (
          <div
            key={s.num}
            className="service-card"
            style={{
              position: 'relative', background: '#fff',
              border: '1px solid #ece2db', borderRadius: 5,
              padding: '26px 24px 28px',
            }}
          >
            <span style={{
              fontFamily: "'Archivo', sans-serif", fontWeight: 900,
              fontSize: 13, letterSpacing: '0.08em', color: '#b07c84',
            }}>{s.num}</span>
            <h3 style={{
              fontFamily: "'Archivo', sans-serif", fontWeight: 800, fontSize: 20,
              lineHeight: 1.12, letterSpacing: '-0.01em', margin: '12px 0 0', color: '#2e0f17',
            }}>{s.title}</h3>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#6b5860', margin: '11px 0 0', fontWeight: 500 }}>
              {s.blurb}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
