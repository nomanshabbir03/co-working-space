import { useEffect, useState } from 'react'
import { img } from '../hooks.js'

// Small portrait window cycles through photos on a white screen,
// then grows to fill the viewport and becomes the hero (as in the video).
const FRAMES = [
  img('1524758631624-e2822e304c36', 500),
  img('1604328698692-f76ea9498e76', 500),
  img('1531973576160-7125cd663d86', 500),
  img('1497366216548-37526070297c', 2000),
]
const STEP = 650

export default function Preloader() {
  const [i, setI] = useState(0)
  const [expand, setExpand] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('is-loading')
    window.scrollTo(0, 0)
    FRAMES.forEach((s) => { const im = new Image(); im.src = s })

    const iv = setInterval(() => setI((x) => Math.min(x + 1, FRAMES.length - 1)), STEP)
    const t1 = setTimeout(() => setExpand(true), STEP * FRAMES.length + 200)
    const t2 = setTimeout(() => {
      setGone(true)
      root.classList.remove('is-loading')
    }, STEP * FRAMES.length + 200 + 1200)
    return () => {
      clearInterval(iv)
      clearTimeout(t1)
      clearTimeout(t2)
      root.classList.remove('is-loading')
    }
  }, [])

  if (gone) return null
  return (
    <div className="pre" aria-hidden="true">
      <div className={`pre__box ${expand ? 'pre__box--expand' : ''}`}>
        {FRAMES.map((src, n) => (
          <img key={src} src={src} alt="" className={n === i ? 'on' : ''} />
        ))}
      </div>
    </div>
  )
}
