import ImagePlaceholder from './ImagePlaceholder.jsx'
import { formatearPrecio } from '../utils.js'

export default function RutaCard({ ruta, onElegir }) {
  return (
    <button type="button" className="card card--ruta" onClick={() => onElegir(ruta)}>
      <ImagePlaceholder height={96} />
      <div className="card__body">
        <h2 className="card__title">{ruta.nombre}</h2>
        <p className="meta">
          <span className="material-symbols-outlined">schedule</span>
          {ruta.horarios.join(' · ')}
        </p>
        <p className="meta">
          <span className="material-symbols-outlined">group</span>
          {ruta.cuposPorHorario} cupos disponibles
        </p>
        <p className="price">{formatearPrecio(ruta.precio)} por persona</p>
      </div>
    </button>
  )
}
