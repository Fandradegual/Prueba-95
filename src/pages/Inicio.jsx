import RutaCard from '../components/RutaCard.jsx'
import Foto from '../components/Foto.jsx'

export default function Inicio({ rutas, portada, onElegir }) {
  return (
    <section className="screen">
      <div className="hero">
        <Foto foto={portada} height={220} ancho={1200} />
        <div className="hero__overlay">
          <p className="hero__title">Descubre el lago desde el agua</p>
          <p className="hero__subtitle">Paseos en catamarán y lancha con salida diaria.</p>
        </div>
      </div>

      <h1 className="screen__title">Rutas disponibles</h1>
      <p className="screen__subtitle">Elige un paseo para ver el detalle y reservar tu cupo.</p>
      <div className="stack">
        {rutas.map((r) => (
          <RutaCard key={r.id} ruta={r} onElegir={onElegir} />
        ))}
      </div>
      <p className="credits">Fotos: Unsplash</p>
    </section>
  )
}
