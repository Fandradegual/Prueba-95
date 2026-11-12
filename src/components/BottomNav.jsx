export default function BottomNav() {
  const itemStyle = {
    flex: 1,
    minHeight: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: 'var(--color-text)',
  }

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        background: '#fff',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.08)',
      }}
    >
      <div style={itemStyle}>
        <span className="material-symbols-outlined">home</span>
        Inicio
      </div>
      <div style={itemStyle}>
        <span className="material-symbols-outlined">calendar_month</span>
        Reservas
      </div>
    </nav>
  )
}
