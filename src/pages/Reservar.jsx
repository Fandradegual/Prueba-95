import { formatearPrecio, hoyISO, maxISO, horarioPasado } from '../utils.js'

export default function Reservar({ ruta, draft, setDraft, onVolver, onContinuar }) {
  const hoy = hoyISO()
  const max = maxISO()
  const fechaValida = draft.fecha && draft.fecha >= hoy && draft.fecha <= max
  const puedeContinuar = fechaValida && draft.horario
  const total = ruta.precio * draft.pasajeros

  const cambiarFecha = (fecha) => {
    const limpiar = draft.horario && horarioPasado(fecha, draft.horario)
    setDraft({ ...draft, fecha, horario: limpiar ? '' : draft.horario })
  }

  const cambiarPasajeros = (delta) => {
    const n = Math.min(ruta.cuposPorHorario, Math.max(1, draft.pasajeros + delta))
    setDraft({ ...draft, pasajeros: n })
  }

  return (
    <section className="screen">
      <button type="button" className="back" onClick={onVolver}>
        <span className="material-symbols-outlined">arrow_back</span>
        Volver
      </button>
      <h1 className="screen__title">Reservar</h1>
      <p className="screen__subtitle">{ruta.nombre}</p>

      <label className="field">
        <span className="field__label">Fecha</span>
        <input
          type="date"
          className="input"
          min={hoy}
          max={max}
          value={draft.fecha}
          onChange={(e) => cambiarFecha(e.target.value)}
        />
      </label>

      <div className="field">
        <span className="field__label">Horario</span>
        <div className="chips">
          {ruta.horarios.map((h) => {
            const pasado = draft.fecha && horarioPasado(draft.fecha, h)
            return (
              <button
                key={h}
                type="button"
                disabled={pasado}
                className={'chip' + (draft.horario === h ? ' is-active' : '')}
                onClick={() => setDraft({ ...draft, horario: h })}
              >
                {h}
              </button>
            )
          })}
        </div>
      </div>

      <div className="field">
        <span className="field__label">Pasajeros</span>
        <div className="stepper">
          <button
            type="button"
            className="stepper__btn"
            aria-label="Menos pasajeros"
            disabled={draft.pasajeros <= 1}
            onClick={() => cambiarPasajeros(-1)}
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span className="stepper__value">{draft.pasajeros}</span>
          <button
            type="button"
            className="stepper__btn"
            aria-label="Más pasajeros"
            disabled={draft.pasajeros >= ruta.cuposPorHorario}
            onClick={() => cambiarPasajeros(1)}
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <span className="caption">Máximo {ruta.cuposPorHorario} pasajeros</span>
      </div>

      <div className="total">
        <span>Total</span>
        <strong>{formatearPrecio(total)}</strong>
      </div>

      <button type="button" className="btn" disabled={!puedeContinuar} onClick={onContinuar}>
        Continuar
      </button>
    </section>
  )
}
