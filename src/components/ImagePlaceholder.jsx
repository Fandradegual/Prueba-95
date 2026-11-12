export default function ImagePlaceholder({ height = 200, radius = true }) {
  return (
    <div
      className="placeholder"
      style={{ height, borderRadius: radius ? 'var(--radius-card)' : 0 }}
    >
      <span className="material-symbols-outlined">image</span>
    </div>
  )
}
