import { useState } from 'react'
import { Link } from 'react-router-dom'

const photos = [
  { src: 'harvest.jpg', cap: 'Harvesting fresh basil in our greenhouse' },
  { src: 'sorting.jpg', cap: 'Sorting and trimming fresh herbs' },
  { src: 'grading.jpg', cap: 'Weighing and grading every batch' },
  { src: 'packing.jpg', cap: 'Packing into export cartons' },
  { src: 'cartons.jpg', cap: 'Cartons stacked and ready on pallets' },
  { src: 'loading.jpg', cap: 'Loading the truck for delivery' },
]

export default function Gallery() {
  const [open, setOpen] = useState(null)
  return (
    <section className="tm gal">
      <div className="tm-wrap">
        <div className="abcrumb"><Link to="/">Home</Link> <span>/</span> Gallery</div>
        <p className="tm-eyebrow">From Our Farm</p>
        <h1>Gallery</h1>

        <div className="gal-video">
          <video controls playsInline preload="metadata" src="/gallery/airport-delivery.mp4" />
          <div>
            <h2>Ready for airport delivery</h2>
            <p>Freshly packed cartons loaded and on their way to the airport for export.</p>
          </div>
        </div>

        <div className="gal-grid">
          {photos.map((p) => (
            <figure className="gal-item" key={p.src} onClick={() => setOpen(p)}>
              <img src={'/gallery/' + p.src} alt={p.cap} loading="lazy" />
              <figcaption>{p.cap}</figcaption>
            </figure>
          ))}
        </div>
        <Link to="/contact" className="tm-cta">Work with us</Link>
      </div>

      {open && (
        <div className="gal-lb" onClick={() => setOpen(null)}>
          <button type="button" className="gal-x" aria-label="Close">×</button>
          <img src={'/gallery/' + open.src} alt={open.cap} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  )
}
