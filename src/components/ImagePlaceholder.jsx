export default function ImagePlaceholder({ height = 200 }) {
  return (
    <div
      style={{
        height,
        background: 'var(--color-placeholder-bg)',
        borderRadius: 'var(--radius-card)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        className="material-symbols-outlined"
        style={{ color: 'var(--color-placeholder-icon)', fontSize: '48px' }}
      >
        image
      </span>
    </div>
  )
}
