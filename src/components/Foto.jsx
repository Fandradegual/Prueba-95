import { useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder.jsx'
import { urlFoto } from '../utils.js'

export default function Foto({ foto, height = 200, ancho = 800, radius = true }) {
  const [fallo, setFallo] = useState(false)

  if (!foto || fallo) return <ImagePlaceholder height={height} radius={radius} />

  return (
    <img
      className="foto"
      src={urlFoto(foto.id, ancho)}
      alt={foto.alt}
      loading="lazy"
      onError={() => setFallo(true)}
      style={{ height, borderRadius: radius ? 'var(--radius-card)' : 0 }}
    />
  )
}
