export default function BottomNav({ activa, onIr }) {
  const items = [
    { id: 'inicio', etiqueta: 'Inicio', icono: 'home' },
    { id: 'reservas', etiqueta: 'Reservas', icono: 'calendar_month' },
  ]
  return (
    <nav className="bottomnav" aria-label="Navegación principal">
      <div className="bottomnav__inner">
        {items.map((it) => (
          <button
            key={it.id}
            type="button"
            className={'bottomnav__item' + (activa === it.id ? ' is-active' : '')}
            onClick={() => onIr(it.id)}
          >
            <span className="material-symbols-outlined">{it.icono}</span>
            {it.etiqueta}
          </button>
        ))}
      </div>
    </nav>
  )
}
