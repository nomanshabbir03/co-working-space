import { useState } from 'react'

const locations = [
  'Bali, Indonesia',
  'Lisbon, Portugal',
  'Chiang Mai, Thailand',
  'Medellin, Colombia',
  'Berlin, Germany',
]

// To use your own background, drop a file at public/hero.jpg and set HERO_IMG = '/hero.jpg'.
const HERO_IMG =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80'

export default function Hero() {
  const [loc, setLoc] = useState('')

  const submit = (e) => {
    e.preventDefault()
    alert(loc ? `Searching workspaces in ${loc}...` : 'Please choose a location first.')
  }

  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${HERO_IMG})` }} />
      <div className="hero__overlay" />

      <div className="card">
        <h1 className="card__title">
          Discover Your Ideal
          <br />
          Workspace for
          <br />
          Digital Nomads
        </h1>

        <form className="card__form" onSubmit={submit}>
          <label className="select">
            <span className="select__label">Find Workspace</span>
            <svg className="select__pin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            <select value={loc} onChange={(e) => setLoc(e.target.value)}>
              <option value="">Select location</option>
              {locations.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </label>
          <button type="submit" className="cta">Get Started</button>
        </form>

        <p className="card__text">
          Use the digital nomad lifestyle to the fullest on your location-
          independent journey. Find a workspace ideally fit for your needs.
          Enjoy the freedom to choose where you work, connect with like-minded
          people, and stay productive wherever you go.
        </p>
      </div>

      <div className="scroll" aria-hidden="true">
        <svg viewBox="0 0 40 40" width="40" height="40" className="scroll__ring">
          <circle cx="20" cy="20" r="18" fill="none" stroke="#fff" strokeWidth="1.2" strokeDasharray="4 4" />
        </svg>
        <span className="scroll__arrow">↓</span>
      </div>
    </section>
  )
}
