import { useState } from 'react'
import { useSectionProgress, seg, lerp, ease, img } from '../hooks.js'

const fields = [
  ['first', 'First name'],
  ['last', 'Last name'],
  ['company', 'Company name'],
  ['phone', 'Phone number'],
  ['email', 'Email address'],
  ['city', 'Preferred city'],
]

export default function FindSpace() {
  const [ref, p] = useSectionProgress()
  const [sent, setSent] = useState(false)

  // image grows from a thin strip at the bottom to full screen
  const grow = ease(seg(p, 0, 0.35))
  const card = ease(seg(p, 0.3, 0.55))

  return (
    <section className="find" ref={ref} id="ideas">
      <div className="find__sticky">
        <div
          className="find__img"
          style={{
            backgroundImage: `url(${img('1497366811353-6870744d04b2', 2000)})`,
            clipPath: `inset(${lerp(92, 0, grow)}% ${lerp(5, 0, grow)}% 0% ${lerp(5, 0, grow)}% round ${lerp(14, 0, grow)}px)`,
          }}
        />
        <form
          className="find__card"
          style={{ opacity: card, transform: `translateY(${lerp(50, 0, card)}px)` }}
          onSubmit={(e) => { e.preventDefault(); setSent(true) }}
        >
          <h2>Let us help you find<br />your ideal space</h2>
          <p className="find__sub">Tell us a little about what you need and we will match you.</p>
          {sent ? (
            <p className="find__done">Thanks! A workspace expert will contact you shortly.</p>
          ) : (
            <>
              <div className="find__fields">
                {fields.map(([k, label]) => (
                  <label key={k} className="field">
                    <span>{label}</span>
                    <input name={k} type={k === 'email' ? 'email' : 'text'} required={k === 'email'} />
                  </label>
                ))}
              </div>
              <p className="find__legal">By submitting, you agree to be contacted about workspace options.</p>
              <button className="cta" type="submit">Submit</button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
