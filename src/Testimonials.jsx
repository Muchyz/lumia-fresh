import { Link } from 'react-router-dom'

const items = [
  { name: 'Specialty Food Importer', place: 'Hamburg, Germany', quote: 'The thyme and mint arrived fresh and fragrant, with none of the wilting we often see on long routes. Documentation was complete, so customs clearance was smooth.' },
  { name: 'Organic Wholesale Buyer', place: 'London, United Kingdom', quote: 'Lumia Fresh is one of the few suppliers whose organic certification we never have to chase. Quality has been consistent across every shipment this season.' },
  { name: 'Herbal Tea Producer', place: 'Dubai, UAE', quote: 'Their dried herbs have a strong aroma and colour that carry through into our blends. Packaging was tight and moisture-free on arrival.' },
  { name: 'Restaurant Group Procurement', place: 'Amsterdam, Netherlands', quote: 'Our chefs noticed the difference straight away. The herbs last longer in the kitchen and the flavour is far more intense than our previous supplier.' },
  { name: 'Natural Wellness Brand', place: 'Toronto, Canada', quote: 'Communication was prompt from the first enquiry to delivery. They answered every sourcing and traceability question we had, which mattered for our labelling.' },
  { name: 'Regional Distributor', place: 'Nairobi, Kenya', quote: 'Orders are packed on time and delivered as promised. It is a pleasure to buy highland-grown organic produce from a team that keeps its word.' },
]

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
                <strong>{t.name}</strong>
                <span>{t.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <Link to="/contact" className="tm-cta">Work with us</Link>
      </div>
    </section>
  )
}
