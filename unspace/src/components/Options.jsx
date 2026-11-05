import { useEffect, useState } from 'react'
import { useSectionProgress, seg, lerp, ease } from '../hooks.js'

/* Simple line illustrations on colored blocks */
function Ill({ kind }) {
  const colors = { office: '#ff5a1f', desk: '#ffd400', meeting: '#6c5cf7', space: '#ff5a1f' }
  return (
    <svg viewBox="0 0 200 150" className="ill" role="img" aria-hidden="true">
      <rect width="200" height="150" fill="#fff" />
      {kind === 'office' && <rect x="20" y="40" width="88" height="86" fill={colors.office} />}
      {kind === 'desk' && <rect x="70" y="14" width="90" height="70" fill={colors.desk} />}
      {kind === 'meeting' && <rect x="24" y="22" width="110" height="26" fill={colors.meeting} />}
      {kind === 'space' && (
        <g>
          <rect x="30" y="26" width="64" height="48" fill={colors.space} />
          <rect x="94" y="74" width="64" height="48" fill="#6c5cf7" />
          <rect x="94" y="26" width="64" height="48" fill="#ffd400" />
        </g>
      )}
      <g fill="none" stroke="#111" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {kind === 'space' ? (
          <>
            <rect x="26" y="22" width="136" height="104" />
            <path d="M94 22v104M26 74h136" />
          </>
        ) : (
          <>
            <rect x="62" y="48" width="70" height="44" />
            <path d="M97 92v14M78 106h38M40 128h120" />
            <path d="M36 70c0-12 10-18 20-18M40 128l4-34M60 128l-4-34" />
          </>
        )}
      </g>
    </svg>
  )
}

const cards = [
  { kind: 'office', title: 'Private Office', text: 'Lockable rooms for focused teams that need quiet.' },
  { kind: 'desk', title: 'Dedicated Desk', text: 'Your own desk, monitor and storage, every day.' },
  { kind: 'meeting', title: 'Meeting Room', text: 'Bookable rooms with screens, whiteboards and coffee.' },
  { kind: 'space', title: 'Co-working Space', text: 'Flexible hot desks in a lively shared community.' },
]

const lines = ['Workspace', 'Options for', 'Every Need']

export default function Options() {
  const [ref, p] = useSectionProgress()
  const [mobile, setMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(max-width: 860px)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 860px)')
    const on = () => setMobile(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  const enter = ease(seg(p, 0.04, 0.38)) // cards fly in from the right
  const settle = ease(seg(p, 0.3, 0.5)) // tilt straightens
  const spread = ease(seg(p, mobile ? 0.45 : 0.58, 0.95)) // desktop: row slides over heading; mobile: row scrolls sideways

  // mobile: 4 cards of 66vw + gaps; scroll the row so every card gets shown
  const trackLeft = mobile ? lerp(6, -173.6, spread) : lerp(46, 3, spread)
  const titleScale = mobile ? 1 : lerp(1, 0.62, spread)

  return (
    <section className="options" ref={ref} id="workspaces">
      <div className="options__sticky">
        <h2
          className="options__title"
          style={{ transform: `scale(${titleScale})`, transformOrigin: 'top left' }}
        >
          {lines.map((l, i) => {
            const t = ease(seg(p, i * 0.05, i * 0.05 + 0.14))
            return (
              <span
                key={l}
                className="options__line"
                style={{
                  opacity: lerp(0.4, 1, t),
                  transform: `translateY(${lerp(30, 0, t)}px)`,
                  color: '#111',
                }}
              >
                {l.split(' ').map((w, k) => (
                  <span key={k} className={w === 'for' ? 'italic-up' : ''} style={w === 'for' ? { fontStyle: t > 0.95 ? 'normal' : 'italic' } : undefined}>
                    {w}{' '}
                  </span>
                ))}
              </span>
            )
          })}
        </h2>

        <a
          className="pill pill--outline options__more"
          href="#listing"
          style={{ bottom: '4vh' }}
        >
          Learn more ↗
        </a>

        <div
          className="options__track"
          style={{
            left: `${trackLeft}vw`,
            transform: `translateX(${lerp(75, 0, enter)}vw)`,
          }}
        >
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="ocard"
              style={{
                transform: `translateY(${lerp(60 + i * 30, 0, settle)}px) rotate(${lerp(-14 + i * 2.5, 0, settle)}deg)`,
              }}
            >
              <Ill kind={c.kind} />
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span className="ocard__more">More info →</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
