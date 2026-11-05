import { useSectionProgress } from '../hooks.js'

// Full-screen color wipes: each word's letters tilt/fade in one by one.
const words = [
  { text: 'Community', bg: '#ff5a1f' },
  { text: 'Productivity', bg: '#6c5cf7' },
  { text: 'Flexibility', bg: '#000' },
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
      </div>
    </section>
  )
}
