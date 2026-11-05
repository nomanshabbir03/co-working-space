import { useSectionProgress, img } from '../hooks.js'

// Full-screen color wipes: each word's letters tilt/fade in one by one.
// (pic + cap are only shown on mobile, see video.css)
const words = [
  { text: 'Community', bg: '#ff5a1f', pic: '1531973576160-7125cd663d86', cap: 'Meet people who work like you.' },
  { text: 'Productivity', bg: '#6c5cf7', pic: '1497366811353-6870744d04b2', cap: 'Quiet, fast, ready from day one.' },
  { text: 'Flexibility', bg: '#000', pic: '1524758631624-e2822e304c36', cap: 'Book by the day, stay as long as you like.' },
]

export default function WordReel() {
  const [ref, p] = useSectionProgress()
  const active = Math.min(words.length - 1, Math.floor(p * words.length))

  return (
    <section className="reel" ref={ref} id="communities">
      <div className="reel__sticky" style={{ background: words[active].bg }}>
        {words.map((w, wi) => {
          const state = wi === active ? 'on' : wi < active ? 'out' : 'idle'
          return (
            <h2 key={w.text} className={`reel__word reel__word--${state}`} aria-hidden={state !== 'on'}>
              {w.text.split('').map((ch, i) => (
                <span key={i} className="wl" style={{ '--i': i }}>{ch}</span>
              ))}
            </h2>
          )
        })}
        {words.map((w, wi) => (
          <div key={w.text} className={`reel__pic ${wi === active ? 'reel__pic--on' : ''}`} aria-hidden="true">
            <div className="reel__img" style={{ backgroundImage: `url(${img(w.pic, 900)})` }} />
            <span className="reel__cap">{w.cap}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
