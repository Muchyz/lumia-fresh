import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { List, X, Phone, EnvelopeSimple, MapPin, WhatsappLogo, Leaf } from '@phosphor-icons/react'
import { C } from './data'

export const wa = (t = 'Hello LUMIA FRESH, I would like to enquire about your herbs.') =>
  `https://wa.me/${C.phone.replace(/\D/g, '')}?text=${encodeURIComponent(t)}`

export const img = (n) => `/images/${n}`

export function Img({ src, alt, className }) {
  const [bad, setBad] = useState(false)
  if (!src || bad) return <div className={'ph ' + (className || '')}><Leaf size={48} weight="duotone" /></div>
  return <img className={className} src={img(src)} alt={alt} loading="lazy" onError={() => setBad(true)} />
}

export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.1 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={'rv' + (on ? ' in' : '')} style={{ transitionDelay: delay + 'ms' }}>{children}</div>
}

const LINKS = [['/', 'Home'], ['/about', 'About'], ['/products', 'Products'], ['/export', 'Export'], ['/contact', 'Contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)
  useEffect(() => {
    const f = () => setSc(window.scrollY > 10)
    f(); window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={'nav' + (sc ? ' sc' : '')}>
      <div className="wrap">
        <Link to="/" className="brand"><Img src="logo.png" alt="LUMIA FRESH" /></Link>
        <nav className={'links' + (open ? ' open' : '')}>
          {LINKS.map(([to, l]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{l}</NavLink>
          ))}
          <a href={wa()} className="btn btn-wa" target="_blank" rel="noreferrer"><WhatsappLogo size={20} weight="fill" /> WhatsApp</a>
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
        </button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="cols">
          <div>
            <h4 className="fb"><Leaf size={24} weight="duotone" /> {C.name}</h4>
            <p>{C.tag}. Organic herbs grown on the Equator, exported worldwide.</p>
          </div>
          <div><h4>Pages</h4>{LINKS.map(([to, l]) => <Link key={to} to={to}>{l}</Link>)}</div>
          <div><h4>Contact</h4>
            <a href={`tel:${C.phone.replace(/\s/g, '')}`}><Phone size={18} weight="duotone" /> {C.phone}</a>
            <a href={`mailto:${C.email}`}><EnvelopeSimple size={18} weight="duotone" /> {C.email}</a>
            <a href={wa()} target="_blank" rel="noreferrer"><WhatsappLogo size={18} weight="duotone" /> WhatsApp us</a>
            <span className="loc"><MapPin size={18} weight="duotone" /> {C.location}</span>
          </div>
        </div>
        <small>© {new Date().getFullYear()} {C.name}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export const WhatsAppFab = () => (
  <a className="fab" href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsappLogo size={32} weight="fill" /></a>
)
