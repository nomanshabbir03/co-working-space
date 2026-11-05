import { useEffect, useState } from 'react'

const links = [
  ['Search', '#listing'],
  ['Communities', '#communities'],
  ['Workspaces', '#workspaces'],
  ['Ideas', '#ideas'],
  ['About Us', '#about-us'],
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const on = () => setHidden(window.scrollY > window.innerHeight * 0.5)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className="nav" style={{ translate: hidden ? '0 -160%' : '0 0' }}>
      <a className="nav__logo" href="#">Urbanspace</a>
      <nav className="nav__links" aria-label="Main">
        {links.map(([l, href]) => (
          <a key={l} href={href}>{l}</a>
        ))}
      </nav>
      <div className="nav__right">
        <a className="nav__phone" href="tel:+18005550120">1-800-555-0120</a>
        <button className="nav__register">Register</button>
      </div>
    </header>
  )
}
