import { useState, useEffect } from 'react'
import kmLogo from '../assets/km-b-logo.svg'

const navLinks = [
  ['#services', 'Services'],
  ['#coverage', 'Coverage'],
  ['#about', 'About'],
  ['#faq', 'FAQ'],
]

export default function Header() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close the menu on Escape for accessibility
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

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
          <span className="topbar-tagline" style={{ alignItems: 'center', gap: 8, fontWeight: 500 }}>
            Over 25 years serving Birmingham &amp; the Midlands
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <a href="tel:+447958323265" style={{ color: '#f3e7df', textDecoration: 'none', fontWeight: 600 }}>07958 323265</a>
            <a className="topbar-email" href="mailto:kmgaragedoors@gmail.com" style={{ color: '#e8d4cd', textDecoration: 'none' }}>kmgaragedoors@gmail.com</a>
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div style={{
        maxWidth: 1180, margin: '0 auto',
        padding: '12px clamp(18px,5vw,40px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18,
      }}>
        <a href="#top" onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 16, textDecoration: 'none', color: '#241419' }}>
          <img src={kmLogo} alt="KM Garage Doors" style={{ height: 40, width: 'auto', display: 'block', flex: 'none' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{
              fontFamily: "'Archivo', sans-serif", fontWeight: 900, fontSize: 18,
              letterSpacing: '-0.02em', color: '#2e0f17',
            }}>KM GARAGE DOORS</span>
            <span className="brand-subline" style={{
              fontSize: 11, letterSpacing: '0.16em', fontWeight: 600,
              color: '#9a7f86', marginTop: 4, textTransform: 'uppercase',
            }}>Repairs · Installation · Servicing</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href} style={{ fontWeight: 600, fontSize: 15, color: '#43232c', textDecoration: 'none' }}>{label}</a>
          ))}
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

        {/* Burger button (mobile / tablet) */}
        <button
          className={`burger-btn${open ? ' open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(o => !o)}
        >
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </button>
      </div>

      {/* Mobile dropdown nav */}
      <nav id="mobile-nav" className={`mobile-nav${open ? ' open' : ''}`}>
        {navLinks.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="mobile-cta" href="#contact" onClick={() => setOpen(false)}>Get a free quote</a>
      </nav>
    </header>
  )
}
