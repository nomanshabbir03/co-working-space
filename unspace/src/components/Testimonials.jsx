import { useEffect, useState } from 'react'
import { img } from '../hooks.js'

const quotes = [
  {
    q: 'Traveling with a group of digital nomads can be chaotic, but this hub ensures we always have reliable workspaces at each stop. It has become an essential part of our community, helping us connect, collaborate, and grow together.',
    who: 'Sophie Khan',
  },
  {
    q: 'I love the freedom and flexibility of freelancing, and this workspace rental hub amplifies that. It allows me to work wherever I want while enjoying all the amenities and networking opportunities of a traditional office. It is a win-win!',
    who: 'James Saunders',
  },
]

const faces = [
  '1507003211169-0a1dd7228f2d',
  '1494790108377-be9c29b29330',
  '1438761681033-6461ffad8d80',
  null, // "Tell us your story" tile
  '1494790108377-be9c29b29330',
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % quotes.length), 3000)
    return () => clearInterval(t)
  }, [i])

  const go = (d) => setI((x) => (x + d + quotes.length) % quotes.length)

  return (
    <section className="quotes" id="about-us">
      <div className="quotes__main">
        <span className="quotes__mark">“</span>
        <button className="quotes__arrow quotes__arrow--l" aria-label="Previous" onClick={() => go(-1)}>←</button>
        <div className="quotes__body" key={i}>
          <p>{quotes[i].q}</p>
          <span>{quotes[i].who}</span>
        </div>
        <button className="quotes__arrow quotes__arrow--r" aria-label="Next" onClick={() => go(1)}>→</button>
      </div>
      <div className="quotes__strip">
        {faces.map((f, n) =>
          f ? (
            <img key={n} src={img(f, 500)} alt="" loading="lazy" />
          ) : (
            <div key={n} className="quotes__tile">
              <h3 key={i}>Tell us<br />your story</h3>
              <a className="pill pill--dark" href="#ideas">Join now</a>
            </div>
          )
        )}
      </div>
    </section>
  )
}
