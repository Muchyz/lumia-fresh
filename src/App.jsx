import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer, WhatsAppFab } from './ui.jsx'
import Testimonials from './Testimonials.jsx'
import Gallery from './Gallery.jsx'
import { Home, About, Products, Export, Contact, Certifications } from './pages.jsx'

function ScrollTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) { window.scrollTo(0, 0); return }
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }), 120)
    return () => clearTimeout(t)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/export" element={<Export />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
