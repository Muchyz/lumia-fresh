import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CaretDown, Leaf, Plant, GlobeHemisphereWest, Truck, ShieldCheck, Package, Sun,
  Handshake, MagnifyingGlass, PaperPlaneTilt, Phone, EnvelopeSimple, MapPin, WhatsappLogo, MapTrifold,
  Certificate, Airplane, Boat, SealCheck, CalendarCheck, ChatCircleDots, FileText, Tag, Drop, Users, Headset, Snowflake } from '@phosphor-icons/react'
import { C, PRODUCTS } from './data'
import { Img, Reveal, wa } from './ui.jsx'

const Head = ({ t, p, bg }) => (<div className="page-head" style={bg ? { backgroundImage: `linear-gradient(180deg,#06281acc,#06281ae6),url(/images/${bg})` } : undefined}><div className="wrap"><h1>{t}</h1><p>{p}</p></div></div>)
const Sec = ({ e, t, l }) => (<div className="center"><p className="eyebrow">{e}</p><h2>{t}</h2>{l && <p className="lead">{l}</p>}</div>)
const IconCard = ({ I, t, d, i = 0 }) => (
  <Reveal delay={i * 90}><div className="card"><div className="pad"><div className="ico"><I size={30} weight="duotone" /></div><h3>{t}</h3><p>{d}</p></div></div></Reveal>
)

function ProductCard({ p, i = 0 }) {
  return (
    <Reveal delay={(i % 3) * 90}>
      <div className="card pc">
        <div className="media"><Img src={p.img} alt={p.name} className="pimg" /><span className="tag">{p.cat}</span></div>
        <div className="pad">
          <h3>{p.name}</h3><p>{p.desc}</p>
          <a className="link" target="_blank" rel="noreferrer" href={wa(`Hello LUMIA FRESH, I would like a quote for ${p.name}.`)}>
            Request quote <ArrowRight size={18} weight="bold" /></a>
        </div>
      </div>
    </Reveal>
  )
}

const WHY = [
  [Sun, 'Year-round supply', 'Equatorial climate means steady harvests with no seasonal gaps.'],
  [Plant, 'Organic farming', 'Grown sustainably in rich volcanic soils, without harsh chemicals.'],
  [MapTrifold, 'Traceable origin', 'Authentic Kenyan produce, committed to Geographical Indication standards.'],
  [Package, 'Export-ready packing', 'Ventilated cartons marked Produce of Kenya, packed for freshness.'],
  [Drop, 'Drip-irrigated crops', 'Efficient drip irrigation keeps plants healthy and water use low.'],
  [Snowflake, 'Harvested fresh', 'Cut, graded and packed quickly to protect aroma and shelf life.'],
  [Users, 'Flexible volumes', 'From wholesale to bulk orders, with contract farming for specific needs.'],
  [Headset, 'Direct, fast support', 'Talk to us on WhatsApp, phone or email and get your quote quickly.'],
]
const OFFERS = [
  [Handshake, 'Dedicated Contract Farming', 'Secure a reliable year-round supply. We grow specific varieties to your quality specs, volumes and delivery schedules.'],
  [Truck, 'Ready-Crop Supply', 'Export-ready harvests straight from our highland farms, available on demand all season.'],
  [ShieldCheck, 'Organic Products', 'Sustainably grown, traceable herbs ready for international retail and foodservice markets.'],
  [Tag, 'Custom Packaging & Labelling', 'Packed to your required sizes and cartons, with private labelling available on request.'],
  [Airplane, 'Air & Sea Freight', 'Fresh herbs by air, dried products in bulk by sea, with trade terms to suit your port.'],
  [PaperPlaneTilt, 'Samples & Fast Quotes', 'Ask for samples and specifications, and get a clear quote before you commit to a bulk order.'],
]
const STEPS = [
  ['Send an enquiry', 'Tell us the herbs, volumes and destination.'],
  ['Quote & samples', 'We share pricing, specs and sample options.'],
  ['Harvest & pack', 'Cut fresh, graded, packed in export cartons.'],
  ['Ship worldwide', 'Air or sea freight with full export documents.'],
]
const STEP_ICONS = [ChatCircleDots, FileText, Package, Airplane]

export function Home() {
  const names = [...PRODUCTS, ...PRODUCTS]
  return (
    <>
      <section className="hero" id="home">
        <Img src="cilantro.jpg" alt="Herb fields" />
        <div className="wrap">
          <span className="badge"><Leaf size={18} weight="duotone" /> {C.tag}</span>
          <h1>Fresh organic herbs from the <em>heart of the Equator</em></h1>
          <p>Premium herbs grown in Kenya's fertile highlands and supplied to importers, wholesalers and distributors worldwide.</p>
          <div className="row">
            <Link to="/products" className="btn btn-lime">View Products <ArrowRight size={18} weight="bold" /></Link>
            <a href={wa()} target="_blank" rel="noreferrer" className="btn btn-glass"><WhatsappLogo size={20} weight="fill" /> WhatsApp</a>
          </div>
          <div className="hchips">
            {[[SealCheck, 'Organic grown'], [CalendarCheck, 'Year-round'], [Airplane, 'Export-ready']].map(([I, t]) => (
              <span key={t}><I size={18} weight="duotone" /> {t}</span>))}
          </div>
          <a href="#about" className="scroll" aria-label="Scroll down"><CaretDown size={22} weight="bold" /></a>
        </div>
      </section>

      <div className="wrap">
        <div className="stats">
          {[['19+', 'Herb varieties'], ['12', 'Months of supply'], ['100%', 'Kenyan grown'], ['Global', 'Export focus']].map(([a, b]) => (
            <div className="stat" key={b}><b>{a}</b><span>{b}</span></div>))}
        </div>
      </div>

      <section id="about">
        <div className="wrap split">
          <Reveal><div>
            <p className="eyebrow">About us</p><h2>Pioneers of organic herbs on the Equator</h2>
            <p className="lead">{C.about}</p>
            <div className="row"><Link to="/about" className="btn btn-d">Our story <ArrowRight size={18} weight="bold" /></Link></div>
          </div></Reveal>
          <Reveal delay={120}><div className="imgwrap"><Img src="harvest.jpg" alt="Harvesting" />
            <div className="float"><SealCheck size={28} weight="duotone" /><div><b>Organic</b><span>Grown in Kenya</span></div></div></div></Reveal>
        </div>
      </section>

      <div className="marquee"><div className="track">
        {names.map((p, i) => <span key={i}><Leaf size={18} weight="fill" /> {p.name}</span>)}
      </div></div>

      <section className="alt" id="products">
        <div className="wrap">
          <Sec e="Our products" t="Herbs, leaves & flowers" l="A growing range of fresh and dried herbs for export." />
          <div className="grid">{PRODUCTS.filter(p => p.img).slice(0, 6).map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}</div>
          <div className="center row" style={{ justifyContent: 'center' }}>
            <Link to="/products" className="btn btn-p">See all products <ArrowRight size={18} weight="bold" /></Link></div>
        </div>
      </section>

      <section className="dark" id="why">
        <div className="wrap"><Sec e="Why LUMIA FRESH" t="Quality you can build a business on" />
          <div className="grid">{WHY.map(([I, t, d], i) => <IconCard key={t} I={I} t={t} d={d} i={i} />)}</div></div>
      </section>

      <section className="offer" id="offer">
        <div className="wrap"><Sec e="What we offer" t="Built for international buyers" />
          <div className="grid">{OFFERS.map(([I, t, d], i) => <IconCard key={t} I={I} t={t} d={d} i={i} />)}</div>
          <Reveal><div className="ofcta">
            <div><h3>Need something specific?</h3><p>Tell us the herb, volume and destination and we will tailor a supply plan.</p></div>
            <a href={wa('Hello LUMIA FRESH, I need a custom supply plan.')} target="_blank" rel="noreferrer" className="btn btn-wa"><WhatsappLogo size={20} weight="fill" /> Talk to us</a>
          </div></Reveal></div>
      </section>

      <section className="alt process" id="process">
        <div className="wrap"><Sec e="How it works" t="From our farm to your market" />
          <div className="tl">{STEPS.map(([t, d], i) => { const I = STEP_ICONS[i]; return (
            <Reveal key={t} delay={i * 120}><div className="tstep"><div className="tdot"><I size={28} weight="duotone" /><span>{i + 1}</span></div><div className="tbody"><h3>{t}</h3><p>{d}</p></div></div></Reveal>) })}</div></div>
      </section>

      <section><div className="wrap"><div className="cta">
        <h2>Ready to source organic herbs?</h2>
        <p>Tell us what you need and we will send a quote.</p>
        <div className="row" style={{ justifyContent: 'center' }}>
          <Link to="/contact" className="btn btn-lime">Request a quote <PaperPlaneTilt size={18} weight="bold" /></Link>
          <a href={`tel:${C.phone.replace(/\s/g, '')}`} className="btn btn-glass"><Phone size={18} weight="duotone" /> Call us</a>
        </div></div></div></section>
    </>
  )
}

export function About() {
  return (
    <>
      <Head t="About LUMIA FRESH" p={C.tag} />
      <section><div className="wrap split">
        <Reveal><Img src="greenhouse.jpg" alt="Greenhouse" /></Reveal>
        <Reveal delay={120}><div><p className="eyebrow">Our story</p><h2>Grown where the sun is steady</h2><p className="lead">{C.about}</p></div></Reveal>
      </div></section>
      <section className="alt"><div className="wrap"><div className="grid">
        <IconCard I={GlobeHemisphereWest} t="Our Mission" d={C.mission} />
        <IconCard I={Plant} t="Our Vision" d={C.vision} i={1} />
      </div></div></section>
      <section><div className="wrap"><Sec e="Gallery" t="Our farms" />
        <div className="grid">{['seedlings.jpg', 'basil.jpg', 'tarragon.jpg'].map((i, k) => (
          <Reveal key={i} delay={k * 90}><div className="card"><Img src={i} alt="Farm" className="pimg" /></div></Reveal>))}</div></div></section>
    </>
  )
}

export function Products() {
  const [q, setQ] = useState(''); const [cat, setCat] = useState('All')
  const cats = ['All', ...new Set(PRODUCTS.map(p => p.cat))]
  const list = PRODUCTS.filter(p => (cat === 'All' || p.cat === cat) && p.name.toLowerCase().includes(q.toLowerCase()))
  return (
    <>
      <Head t="Our Products" p="Leaves, flowers and botanicals for export." bg="hero.jpg" />
      <section><div className="wrap">
        <div className="search"><MagnifyingGlass size={20} weight="duotone" /><input placeholder="Search herbs..." value={q} onChange={e => setQ(e.target.value)} /></div>
        <div className="chips">{cats.map(c => <button key={c} className={'chip' + (c === cat ? ' on' : '')} onClick={() => setCat(c)}>{c}</button>)}</div>
        <div className="grid">{list.map((p, i) => <ProductCard key={p.name} p={p} i={i} />)}</div>
        {!list.length && <p className="lead" style={{ marginTop: 30 }}>No products found.</p>}
      </div></section>
    </>
  )
}

export function Export() {
  const items = [
    [Airplane, 'Air freight', 'Fresh herbs shipped by air to preserve quality and shelf life.'],
    [Boat, 'Sea freight', 'Dried leaves and flowers shipped in bulk by sea.'],
    [Package, 'Packaging', 'Ventilated export cartons marked Produce of Kenya. Custom packing on request.'],
    [Certificate, 'Documents', 'Export paperwork and certification documents available on request.'],
  ]
  return (
    <>
      <Head t="Export & Wholesale" p="Flexible supply for importers, wholesalers and distributors." />
      <section><div className="wrap split">
        <Reveal><div><p className="eyebrow">Trade information</p><h2>Wholesale and bulk orders</h2>
          <p className="lead">We supply both wholesale and bulk quantities, with contract farming available for buyers who need specific varieties year-round. Trade terms such as FOB and CIF are available depending on your destination.</p>
          <div className="row"><a className="btn btn-wa" href={wa('Hello LUMIA FRESH, I would like export pricing.')} target="_blank" rel="noreferrer"><WhatsappLogo size={20} weight="fill" /> Get export pricing</a></div></div></Reveal>
        <Reveal delay={120}><Img src="boxes.jpg" alt="Export cartons" /></Reveal>
      </div></section>
      <section className="alt"><div className="wrap"><div className="grid">
        {items.map(([I, t, d], i) => <IconCard key={t} I={I} t={t} d={d} i={i} />)}
      </div></div></section>
    </>
  )
}

export function Contact() {
  const [f, setF] = useState({ name: '', email: '', company: '', product: '', msg: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const t = `Hello LUMIA FRESH,\nName: ${f.name}\nCompany: ${f.company}\nEmail: ${f.email}\nProduct: ${f.product}\n\n${f.msg}`
    window.open(wa(t), '_blank')
  }
  return (
    <>
      <Head t="Contact & Enquiries" p="Request a quote or ask us anything." />
      <section><div className="wrap split" style={{ alignItems: 'start' }}>
        <div>
          <h2>Let's talk</h2>
          <div className="info"><div className="ico"><Phone size={26} weight="duotone" /></div><div><b>Phone / WhatsApp</b><br />{C.phone}</div></div>
          <div className="info"><div className="ico"><EnvelopeSimple size={26} weight="duotone" /></div><div><b>Email</b><br />{C.email}</div></div>
          <div className="info"><div className="ico"><MapPin size={26} weight="duotone" /></div><div><b>Location</b><br />{C.location}</div></div>
          <a className="btn btn-wa" href={wa()} target="_blank" rel="noreferrer"><WhatsappLogo size={20} weight="fill" /> Chat on WhatsApp</a>
        </div>
        <form className="f card" onSubmit={submit}>
          <input required placeholder="Your name" value={f.name} onChange={set('name')} />
          <input placeholder="Company" value={f.company} onChange={set('company')} />
          <input type="email" required placeholder="Email" value={f.email} onChange={set('email')} />
          <select value={f.product} onChange={set('product')}><option value="">Product of interest</option>
            {PRODUCTS.map(p => <option key={p.name}>{p.name}</option>)}</select>
          <textarea placeholder="Volumes, destination, packaging..." value={f.msg} onChange={set('msg')} />
          <button className="btn btn-p" type="submit"><PaperPlaneTilt size={18} weight="bold" /> Send via WhatsApp</button>
        </form>
      </div></section>
    </>
  )
}
