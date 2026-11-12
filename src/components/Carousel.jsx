import { useRef, useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder.jsx'

export default function Carousel({ cantidad }) {
  const pista = useRef(null)
  const [actual, setActual] = useState(0)

  const ir = (delta) => {
    const el = pista.current
    if (!el) return
    el.scrollBy({ left: delta * el.clientWidth, behavior: 'smooth' })
  }

  const alScroll = () => {
    const el = pista.current
    if (!el) return
    setActual(Math.round(el.scrollLeft / el.clientWidth))
  }

  return (
    <div className="carousel">
      <div className="carousel__track" ref={pista} onScroll={alScroll}>
        {Array.from({ length: cantidad }).map((_, i) => (
          <div className="carousel__slide" key={i}>
            <ImagePlaceholder height={220} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        aria-label="Foto anterior"
        onClick={() => ir(-1)}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        aria-label="Foto siguiente"
        onClick={() => ir(1)}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
      <div className="carousel__dots">
        {Array.from({ length: cantidad }).map((_, i) => (
          <span key={i} className={'carousel__dot' + (i === actual ? ' is-active' : '')} />
        ))}
      </div>
    </div>
  )
}
