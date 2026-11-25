import { useState } from 'react'
import { Link } from 'react-router-dom'

const PHONE = '254711552410'

// EDIT THIS LIST: crop, available kg, expected harvest date, status
const crops = [
  { crop: 'Basil', kg: 200, date: '28 Nov 2026', status: 'Ready now' },
  { crop: 'Mint', kg: 120, date: '30 Nov 2026', status: 'Ready now' },
  { crop: 'Coriander (Cilantro)', kg: 150, date: '2 Dec 2026', status: 'This week' },
  { crop: 'Parsley', kg: 100, date: '5 Dec 2026', status: 'Next week' },
  { crop: 'French beans', kg: 500, date: '8 Dec 2026', status: 'Next week' },
  { crop: 'Kale', kg: 300, date: '10 Dec 2026', status: 'Next week' },
]

export default function Harvest() {
  const [f, setF] = useState({ company: '', email: '', phone: '', order: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const add = (c) =>
    setF((s) => ({ ...s, order: (s.order ? s.order + '\n' : '') + c.crop + ' - ___ kg' }))
  const send = (e) => {
    e.preventDefault()
    const msg =
      'Hello LUMIA FRESH, I would like to place a local order.\n' +
      'Company: ' + f.company + '\nEmail: ' + f.email + '\nPhone: ' + f.phone +
      '\nOrder:\n' + f.order
    window.open('https://wa.me/' + PHONE + '?text=' + encodeURIComponent(msg), '_blank')
  }
  return (
    <section className="tm hv">
      <div className="tm-wrap">
        <div className="abcrumb"><Link to="/">Home</Link> <span>/</span> Ready to Harvest</div>
        <p className="tm-eyebrow">Local Market</p>
        <h1>Ready to Harvest</h1>
        <p className="hv-lead">Pre-order fresh produce straight from our farm. Quantities and dates are estimates and may change with weather.</p>

        <div className="hv-scroll">
          <table className="hv-table">
            <thead>
              <tr><th>Crop</th><th>Available (kg)</th><th>Expected harvest</th><th>Status</th><th></th></tr>
            </thead>
            <tbody>
              {crops.map((c) => (
                <tr key={c.crop}>
                  <td data-l="Crop"><strong>{c.crop}</strong></td>
                  <td data-l="Available">{c.kg} kg</td>
                  <td data-l="Harvest">{c.date}</td>
                  <td data-l="Status"><span className="hv-pill">{c.status}</span></td>
                  <td><button type="button" className="hv-btn" onClick={() => add(c)}>Order this</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <form className="hv-form" onSubmit={send}>
          <h2>Place your order</h2>
          <input required placeholder="Company name" value={f.company} onChange={set('company')} />
          <input required type="email" placeholder="Email address" value={f.email} onChange={set('email')} />
          <input placeholder="Phone (optional)" value={f.phone} onChange={set('phone')} />
          <textarea required rows="5" placeholder="Your order, e.g. Basil - 20 kg" value={f.order} onChange={set('order')} />
          <button type="submit" className="tm-cta">Send order on WhatsApp</button>
        </form>
      </div>
    </section>
  )
}
