import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Coverage from './components/Coverage'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div style={{ maxWidth: '100%', overflowX: 'hidden' }}>
      <Header />
      <Hero />
      <Services />
      <About />
      <Coverage />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
