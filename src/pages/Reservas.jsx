import { formatearFecha, formatearPrecio } from '../utils.js'

export default function Reservas({ reservas }) {
  return (
    <section className="screen">
      <h1 className="screen__title">Mis reservas</h1>
      <p className="screen__subtitle">Reservas confirmadas en esta sesión.</p>

      {reservas.length === 0 ? (
        <div className="empty">
          <span className="material-symbols-outlined">event_busy</span>
          <p>Aún no tienes reservas</p>
        </div>
      ) : (
        <div className="stack">
          {reservas.map((r) => (
            <article key={r.codigo} className="card card--static">
              <h2 className="card__title">{r.ruta}</h2>
              <p className="meta">
                <span className="material-symbols-outlined">event</span>
                {formatearFecha(r.fecha)} · {r.horario}
              </p>
              <p className="meta">
                <span className="material-symbols-outlined">confirmation_number</span>
                {r.codigo}
              </p>
              <p className="price">{formatearPrecio(r.total)}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
