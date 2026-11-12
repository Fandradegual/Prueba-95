import { formatearFecha, formatearPrecio } from '../utils.js'

export default function Confirmacion({ reserva, onInicio }) {
  return (
    <section className="screen">
      <div className="success">
        <span className="material-symbols-outlined">check_circle</span>
      </div>
      <h1 className="screen__title">Reserva confirmada</h1>
      <p className="screen__subtitle">Recibirás la confirmación por email.</p>

      <div className="card card--static">
        <p className="caption">Código de reserva</p>
        <p className="code">{reserva.codigo}</p>
        <dl className="summary">
          <dt>Ruta</dt>
          <dd>{reserva.ruta}</dd>
          <dt>Fecha</dt>
          <dd>{formatearFecha(reserva.fecha)}</dd>
          <dt>Horario</dt>
          <dd>{reserva.horario}</dd>
          <dt>Pasajeros</dt>
          <dd>{reserva.pasajeros}</dd>
          <dt>Total</dt>
          <dd>{formatearPrecio(reserva.total)}</dd>
        </dl>
      </div>

      <button type="button" className="btn" onClick={onInicio}>
        Volver a Inicio
      </button>
    </section>
  )
}
