import Carousel from '../components/Carousel.jsx'
import { formatearPrecio } from '../utils.js'

export default function DetalleRuta({ ruta, onVolver, onReservar }) {
  return (
    <section className="screen">
      <button type="button" className="back" onClick={onVolver}>
        <span className="material-symbols-outlined">arrow_back</span>
        Volver
      </button>
      <h1 className="screen__title">{ruta.nombre}</h1>
      <p className="screen__subtitle">{ruta.descripcion}</p>
      <Carousel cantidad={ruta.fotos} />
      <div className="card card--static">
        <p className="meta">
          <span className="material-symbols-outlined">schedule</span>
          Duración: {ruta.duracion}
        </p>
        <p className="meta">
          <span className="material-symbols-outlined">group</span>
          {ruta.cuposPorHorario} cupos por horario
        </p>
        <p className="price">{formatearPrecio(ruta.precio)} por persona</p>
      </div>
      <button type="button" className="btn" onClick={onReservar}>
        Reservar
      </button>
    </section>
  )
}
