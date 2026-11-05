import { img } from '../hooks.js'

const cols = [
  { h: 'Company', l: ['About', 'Careers', 'Press', 'Contact'] },
  { h: 'Workspaces', l: ['Private offices', 'Dedicated desks', 'Meeting rooms', 'Co-working'] },
  { h: 'Support', l: ['Help center', 'Pricing', 'Terms', 'Privacy'] },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div
          className="footer__logo"
          style={{ backgroundImage: `url(${img('1524758631624-e2822e304c36', 1600)})` }}
        >
          Urbanspace
        </div>
        <div className="footer__cols">
          {cols.map((c) => (
            <div key={c.h}>
              <h4>{c.h}</h4>
              {c.l.map((x) => (<a key={x} href="#">{x}</a>))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__mid">
        <address>
          12 Workspace Street<br />Lisbon, Portugal<br />hello@unspace.example
        </address>
        <div className="footer__social">
          {['f', 'in', 'X', 'ig'].map((s) => (<a key={s} href="#" aria-label={s}>{s}</a>))}
        </div>
      </div>
      <div className="footer__bar">© {new Date().getFullYear()} Urbanspace. All rights reserved.</div>
      <div className="footer__photo" style={{ backgroundImage: `url(${img('1497366811353-6870744d04b2', 1800)})` }} />
    </footer>
  )
}
