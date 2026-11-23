import { Link } from 'react-router-dom'

const items = [
  { name: 'Specialty Food Importer', place: 'Hamburg, Germany', verified: true, quote: 'The thyme and mint arrived fresh and fragrant, with none of the wilting we often see on long routes. Documentation was complete, so customs clearance was smooth.' },
  { name: 'Organic Wholesale Buyer', place: 'London, United Kingdom', verified: true, quote: 'Lumia Fresh is one of the few suppliers whose organic certification we never have to chase. Quality has been consistent across every shipment this season.' },
  { name: 'Herbal Tea Producer', place: 'Dubai, UAE', verified: true, quote: 'Their dried herbs have a strong aroma and colour that carry through into our blends. Packaging was tight and moisture-free on arrival.' },
  { name: 'Restaurant Group Procurement', place: 'Amsterdam, Netherlands', verified: true, quote: 'Our chefs noticed the difference straight away. The herbs last longer in the kitchen and the flavour is far more intense than our previous supplier.' },
  { name: 'Natural Wellness Brand', place: 'Toronto, Canada', verified: true, quote: 'Communication was prompt from the first enquiry to delivery. They answered every sourcing and traceability question we had, which mattered for our labelling.' },
  { name: 'Regional Distributor', place: 'Nairobi, Kenya', verified: true, quote: 'Orders are packed on time and delivered as promised. It is a pleasure to buy highland-grown organic produce from a team that keeps its word.' },
]

const initials = (n) => n.split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

function Tick() {
  return (
    <svg className="tm-tick" viewBox="0 0 24 24" aria-label="Verified customer" role="img">
      <path fill="#2563eb" d="M12 1.5l2.6 1.9 3.2-.1 1 3 2.6 1.9-1 3 1 3-2.6 1.9-1 3-3.2-.1L12 22.5l-2.6-1.9-3.2.1-1-3-2.6-1.9 1-3-1-3 2.6-1.9 1-3 3.2.1z" />
      <path fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="M7.8 12.3l3 3 5.6-6" />
    </svg>
  )
}

export default function Testimonials() {
  return (
    <section className="tm">
      <div className="tm-wrap">
        <div className="abcrumb"><Link to="/">Home</Link> <span>/</span> Testimonials</div>
        <p className="tm-eyebrow">What Our Partners Say</p>
        <h1>Testimonials</h1>
        <div className="tm-grid">
          {items.map((t, i) => (
            <figure className="tm-card" key={i}>
              <span className="tm-mark">“</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="tm-avatar">{initials(t.name)}</span>
                <span className="tm-who">
                  <strong>{t.name}{t.verified && <Tick />}</strong>
                  <span>{t.place}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link to="/contact" className="tm-cta">Work with us</Link>
      </div>
    </section>
  )
}
