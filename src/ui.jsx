import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { List, X, Phone, EnvelopeSimple, MapPin, WhatsappLogo, Leaf, CaretRight, ArrowUp, CaretDown, House, Info, Target, Plant, Package, Airplane, Flower, SquaresFour, ArrowRight , Certificate } from '@phosphor-icons/react'
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

const MENU = [
  { to: '/', label: 'Home' },
  { label: 'Company', items: [['/about', 'About Us', Info], ['/about#foundation', 'Vision & Mission', Target], ['/about#farms', 'Our Farms', Plant], ['/certifications', 'Certifications', Certificate]] },
  { label: 'Products', items: [['/products', 'All Products', SquaresFour], ['/products?cat=Herbs', 'Herbs', Leaf], ['/products?cat=Flowers', 'Flowers', Flower], ['/products?cat=Vegetables', 'Vegetables', Plant], ['/products?cat=Fruits', 'Fruits', Leaf]] },
  { to: '/export', label: 'Export & Wholesale' },
  { to: '/contact', label: 'Contact' },
]

function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 500)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <button className={'totop' + (show ? ' on' : '')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      <ArrowUp size={22} weight="bold" />
    </button>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [sc, setSc] = useState(false)
  const [grp, setGrp] = useState('Products')
  const close = () => setOpen(false)
  useEffect(() => {
    const f = () => setSc(window.scrollY > 10)
    f(); window.addEventListener('scroll', f)
    return () => window.removeEventListener('scroll', f)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return (
    <>
      <header className={'nav' + (sc ? ' sc' : '')}>
        <div className="wrap">
          <Link to="/" className="brand"><Img src="logo.png" alt="LUMIA FRESH" /></Link>
          <nav className="links">
            {LINKS.map(([to, l]) => (
              <NavLink key={to} to={to} end={to === '/'}>{l}</NavLink>
            ))}
            <a href={wa()} className="btn btn-wa" target="_blank" rel="noreferrer"><WhatsappLogo size={20} weight="fill" /> WhatsApp</a>
          </nav>
          <button className="burger" onClick={() => setOpen(true)} aria-label="Menu"><List size={28} weight="bold" /></button>
        </div>
      </header>
      <div className={'ovl' + (open ? ' on' : '')} onClick={close} />
      <aside className={'drawer' + (open ? ' on' : '')} aria-hidden={!open}>
        <div className="dhead">
          <Link to="/" onClick={close}><Img src="logo.png" alt="LUMIA FRESH" /></Link>
          <button onClick={close} aria-label="Close menu"><X size={28} weight="bold" /></button>
        </div>
        <div className="dbody">
          {MENU.map(m => m.items ? (
            <div key={m.label} className={'dgrp' + (grp === m.label ? ' on' : '')}>
              <button className="dgh" onClick={() => setGrp(grp === m.label ? '' : m.label)}>
                {m.label}<CaretDown size={18} weight="bold" />
              </button>
              <div className="dsub">
                {m.items.map(([to, l, I]) => (
                  <Link key={l} to={to} onClick={close}><span className="di"><I size={22} weight="duotone" /></span>{l}</Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={m.label} to={m.to} onClick={close} className="dlink">{m.label}</Link>
          ))}
          <a className="dphone" href={`tel:${C.phone.replace(/\s/g, '')}`}><Phone size={22} weight="duotone" /> {C.phone}</a>
          <a className="dcta" href={wa('Hello LUMIA FRESH, I would like a quote.')} target="_blank" rel="noreferrer">
            Request a Quote <ArrowRight size={18} weight="bold" /></a>
        </div>
      </aside>
      <ScrollTop />
    </>
  )
}

export function Footer() {
  const tel = C.phone.replace(/\s/g, '')
  const Col = ({ t, items }) => (
    <div className="ftcol"><h4>{t}</h4>
      {items.map(([to, l]) => <Link key={l} to={to}><CaretRight size={12} weight="bold" /> {l}</Link>)}
    </div>
  )
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ftbrand">
          <Link to="/" className="ftlogo"><Img src="logo.png" alt="LUMIA FRESH" /></Link>
          <p className="fttag">{C.tag}</p>
        </div>
        <div className="ftabout">
          <p>Certified organic herbs grown in the fertile Kenyan highlands along the Equator and exported worldwide.</p>
          <span><MapPin size={16} weight="duotone" /> {C.location}</span>
          <a href={`tel:${tel}`}><Phone size={16} weight="duotone" /> {C.phone}</a>
          <a href={`mailto:${C.email}`}><EnvelopeSimple size={16} weight="duotone" /> {C.email}</a>
        </div>
        <div className="ftgrid">
          <Col t="Company" items={[['/', 'Home'], ['/about', 'About Us'], ['/export', 'Export & Wholesale'], ['/certifications', 'Certifications'], ['/testimonials', 'Testimonials'], ['/contact', 'Contact']]} />
          <Col t="Products" items={[['/products', 'All Products'], ['/products?cat=Herbs', 'Herbs'], ['/products?cat=Vegetables', 'Vegetables'], ['/products?cat=Flowers', 'Flowers'], ['/products?cat=Fruits', 'Fruits']]} />
          <Col t="Support" items={[['/contact', 'Contact Us'], ['/contact', 'Request a Quote'], ['/export', 'Shipping & Packaging'], ['/about', 'Our Story']]} />
        </div>
        <div className="ftsocial">
          <a href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="s1"><WhatsappLogo size={24} weight="fill" /></a>
          <a href={`tel:${tel}`} aria-label="Call" className="s2"><Phone size={24} weight="fill" /></a>
          <a href={`mailto:${C.email}`} aria-label="Email" className="s3"><EnvelopeSimple size={24} weight="fill" /></a>
        </div>
        <div className="ftbar">
          <small>© {new Date().getFullYear()} {C.name}. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}

export const WhatsAppFab = () => (
  <a className="fab" href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsappLogo size={32} weight="fill" /></a>
)
