import { useState } from 'react'
import Header from './components/Header.jsx'
import BottomNav from './components/BottomNav.jsx'
import Inicio from './pages/Inicio.jsx'
import DetalleRuta from './pages/DetalleRuta.jsx'
import Reservar from './pages/Reservar.jsx'
import Contacto from './pages/Contacto.jsx'
import Confirmacion from './pages/Confirmacion.jsx'
import Reservas from './pages/Reservas.jsx'
import mock from './data/mock.json'
import { generarCodigo } from './utils.js'

const MARCA = 'Turismo Dalmata'
const DRAFT_INICIAL = { fecha: '', horario: '', pasajeros: 1 }
const CONTACTO_INICIAL = { nombre: '', email: '', telefono: '' }

export default function App() {
  const [pantalla, setPantalla] = useState('inicio')
  const [ruta, setRuta] = useState(null)
  const [draft, setDraft] = useState(DRAFT_INICIAL)
  const [contacto, setContacto] = useState(CONTACTO_INICIAL)
  const [reservas, setReservas] = useState([])
  const [ultima, setUltima] = useState(null)

  const irAPestana = (id) => setPantalla(id)

  const elegirRuta = (r) => {
    setRuta(r)
    setDraft(DRAFT_INICIAL)
    setContacto(CONTACTO_INICIAL)
    setPantalla('detalle')
  }

  const confirmar = () => {
    const reserva = {
      codigo: generarCodigo(),
      ruta: ruta.nombre,
      fecha: draft.fecha,
      horario: draft.horario,
      pasajeros: draft.pasajeros,
      total: ruta.precio * draft.pasajeros,
    }
    setReservas((prev) => [reserva, ...prev])
    setUltima(reserva)
    setPantalla('confirmacion')
  }

  const pestanaActiva = pantalla === 'reservas' ? 'reservas' : 'inicio'

  return (
    <>
      <Header marca={MARCA} />
      <main className="main">
        {pantalla === 'inicio' && <Inicio rutas={mock.rutas} onElegir={elegirRuta} />}
        {pantalla === 'detalle' && (
          <DetalleRuta
            ruta={ruta}
            onVolver={() => setPantalla('inicio')}
            onReservar={() => setPantalla('reservar')}
          />
        )}
        {pantalla === 'reservar' && (
          <Reservar
            ruta={ruta}
            draft={draft}
            setDraft={setDraft}
            onVolver={() => setPantalla('detalle')}
            onContinuar={() => setPantalla('contacto')}
          />
        )}
        {pantalla === 'contacto' && (
          <Contacto
            contacto={contacto}
            setContacto={setContacto}
            onVolver={() => setPantalla('reservar')}
            onConfirmar={confirmar}
          />
        )}
        {pantalla === 'confirmacion' && (
          <Confirmacion reserva={ultima} onInicio={() => setPantalla('inicio')} />
        )}
        {pantalla === 'reservas' && <Reservas reservas={reservas} />}
      </main>
      <BottomNav activa={pestanaActiva} onIr={irAPestana} />
    </>
  )
}
