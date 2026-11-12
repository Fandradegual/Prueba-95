export default function Contacto({ contacto, setContacto, onVolver, onConfirmar }) {
  const valido =
    contacto.nombre.trim() && (contacto.email.trim() || contacto.telefono.trim())

  return (
    <section className="screen">
      <button type="button" className="back" onClick={onVolver}>
        <span className="material-symbols-outlined">arrow_back</span>
        Volver
      </button>
      <h1 className="screen__title">Datos de contacto</h1>
      <p className="screen__subtitle">Indica tu nombre y un email o un teléfono (basta uno de los dos).</p>

      <label className="field">
        <span className="field__label">Nombre completo</span>
        <input
          className="input"
          type="text"
          autoComplete="name"
          value={contacto.nombre}
          onChange={(e) => setContacto({ ...contacto, nombre: e.target.value })}
        />
      </label>
      <label className="field">
        <span className="field__label">Email</span>
        <input
          className="input"
          type="email"
          autoComplete="email"
          value={contacto.email}
          onChange={(e) => setContacto({ ...contacto, email: e.target.value })}
        />
      </label>
      <label className="field">
        <span className="field__label">Teléfono</span>
        <input
          className="input"
          type="tel"
          autoComplete="tel"
          value={contacto.telefono}
          onChange={(e) => setContacto({ ...contacto, telefono: e.target.value })}
        />
      </label>

      <button type="button" className="btn" disabled={!valido} onClick={onConfirmar}>
        Confirmar reserva
      </button>
    </section>
  )
}
