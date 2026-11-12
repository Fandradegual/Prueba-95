export const formatearPrecio = (n) =>
  '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.')

const pad = (n) => String(n).padStart(2, '0')

export const aISO = (d) =>
  `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

export const hoyISO = () => aISO(new Date())

export const maxISO = () => {
  const d = new Date()
  d.setDate(d.getDate() + 90)
  return aISO(d)
}

export const formatearFecha = (iso) => {
  if (!iso) return ''
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export const horarioPasado = (fechaISO, hora) => {
  if (fechaISO !== hoyISO()) return false
  const [h, m] = hora.split(':').map(Number)
  const ahora = new Date()
  return h * 60 + m <= ahora.getHours() * 60 + ahora.getMinutes()
}

export const generarCodigo = () => {
  const letras = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let s = ''
  for (let i = 0; i < 6; i++) s += letras[Math.floor(Math.random() * letras.length)]
  return 'DLM-' + s
}

export const urlFoto = (id, ancho = 800) =>
  `https://unsplash.com/photos/${id}/download?w=${ancho}`
