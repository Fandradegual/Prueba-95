import Foto from './Foto.jsx'
import { formatearPrecio } from '../utils.js'

export default function RutaCard({ ruta, onElegir }) {
  return (
    <button
      type="button"
      className="card card--ruta"
      onClick={() => onElegir(ruta)}
      aria-label={`Ver detalle de ${ruta.nombre}`}
    >
      <div className="card__media">
        <Foto foto={ruta.fotos[0]} height={160} ancho={800} radius={false} />
      </div>
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
        <div className="card__footer">
          <p className="price">{formatearPrecio(ruta.precio)} por persona</p>
          <span className="card__cta">
            Ver detalle
            <span className="material-symbols-outlined">chevron_right</span>
          </span>
        </div>
      </div>
    </button>
  )
}
