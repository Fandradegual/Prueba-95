import RutaCard from '../components/RutaCard.jsx'

export default function Inicio({ rutas, onElegir }) {
  return (
    <section className="screen">
      <h1 className="screen__title">Rutas disponibles</h1>
      <p className="screen__subtitle">Elige un paseo para ver el detalle y reservar tu cupo.</p>
      <div className="stack">
        {rutas.map((r) => (
          <RutaCard key={r.id} ruta={r} onElegir={onElegir} />
        ))}
      </div>
    </section>
  )
}
