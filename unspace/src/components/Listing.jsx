import Reveal from './Reveal.jsx'
import { img } from '../hooks.js'

const items = [
  { name: 'Skyline Hall', area: 'Downtown, Lisbon', price: 16800, tag: 'Dedicated desk', photo: '1497366811353-6870744d04b2' },
  { name: 'The Atrium', area: 'Mitte, Berlin', price: 16800, tag: 'Private office', photo: '1524758631624-e2822e304c36' },
  { name: 'Pod Row', area: 'Canggu, Bali', price: 8100, tag: 'Phone booth', photo: '1604328698692-f76ea9498e76' },
  { name: 'Glass House', area: 'Nimman, Chiang Mai', price: 11800, tag: 'Meeting room', photo: '1531973576160-7125cd663d86' },
]

export default function Listing() {
  return (
    <section className="listing" id="listing">
      <Reveal className="listing__head">
        <h2>Featured workspaces</h2>
        <a className="pill pill--outline" href="#search">View all</a>
      </Reveal>
      <div className="listing__grid">
        {items.map((it, i) => (
          <Reveal key={it.name} delay={(i % 2) * 120} className="lcard">
            <div className="lcard__img">
              <img src={img(it.photo, 900)} alt={it.name} loading="lazy" />
              <span className="lcard__tag">{it.tag}</span>
            </div>
            <div className="lcard__row">
              <strong>Rs {it.price.toLocaleString('en-PK')}<small>/day</small></strong>
              <span className="lcard__meta">4 seats · Wi-Fi · 24/7</span>
            </div>
            <p className="lcard__name">{it.name} · {it.area}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
