# Arquitectura base — Reserva de transporte turístico (MVP)

Insumo de arquitectura para el taller de 9punto5. Este documento es el punto de partida a partir del cual se refinan historias de usuario y se generan los prompts para Claude Code.

## Objetivo del prototipo

Permitir a un turista reservar un cupo en un transporte turístico (catamarán, lancha u otro) sin necesidad de crear una cuenta ni procesar un pago real.

## Alcance del MVP

**Incluido:**
- Un solo operador, varias rutas/tours de ejemplo (mock)
- Reserva sin login, solo datos de contacto
- Datos de rutas y horarios como mock (hardcodeados, sin backend)
- Confirmación visual con código de reserva
- Web app responsive: mobile-first, pero se ve bien en pantallas más anchas
- Navegación inferior con dos pestañas: Inicio y Reservas
- Historial de reservas confirmadas durante la sesión actual (no necesita sobrevivir a un refresh de página)

**Explícitamente fuera de alcance (backlog):**
- Pago en línea
- Autenticación o cuentas de usuario
- Panel de administración de horarios
- Múltiples operadores o marketplace
- Notificaciones por email o SMS reales
- Persistencia de reservas entre sesiones (no hace falta guardar en backend ni en localStorage — basta con que se mantenga mientras la pestaña está abierta)

## Elementos globales (presentes en todas las pantallas)

- **Header fijo arriba**: muestra el nombre de la app/marca (se define en la skill de scaffold) en el color de acento, sobre el color primario. Actúa como el "logo" del prototipo.
- **Navegación inferior fija**: visible en las 6 pantallas sin excepción, incluido todo el flujo de reserva — no se oculta en ningún momento. Debe usar posicionamiento fijo al fondo del viewport (`position: fixed`), y el contenido de cada pantalla necesita suficiente padding inferior para no quedar tapado detrás de ella.
  - Pestaña "Inicio" → Inicio
  - Pestaña "Reservas" → Reservas (historial)

## Mapa de pantallas

### 1. Inicio
- **Objetivo:** mostrar las rutas/tours disponibles
- **Contenido:** tarjetas con miniatura placeholder (mismo estilo que el placeholder de fotos: fondo gris + ícono de imagen), nombre de la ruta, horario, precio, cupos disponibles
- **Acción:** seleccionar una ruta → va a Detalle de ruta

### 2. Detalle de ruta
- **Objetivo:** dar toda la info necesaria para decidir reservar
- **Contenido:** carrusel/slider con 2-3 fotos de ejemplo — arrastre/swipe nativo para touch **y también** flechas de avance/retroceso visibles para quien use mouse o trackpad, más indicador de puntos. No es "uno u otro": ambos deben funcionar a la vez, porque el mismo prototipo se usa en mobile y en desktop. Duración, descripción breve, precio por persona, cupos restantes
- **Placeholder de fotos:** fondo gris claro + ícono de imagen centrado — nunca una imagen real, nunca un emoji a modo de foto
- **Acción:** botón "Reservar" (ancho 100%) → va a Reservar

### 3. Reservar
- **Objetivo:** capturar fecha, horario y cantidad de pasajeros
- **Contenido:**
  - Fecha: input de calendario nativo del navegador (`<input type="date">`), no chips de fechas fijas — los chips fuerzan un set predefinido que no escala a un caso real. No permite fechas pasadas ni más de 90 días hacia adelante
  - Horario: chips con los horarios definidos para esa ruta — aquí el chip sí funciona, porque las salidas reales de un tour son un set fijo y pequeño (2-4 opciones), a diferencia de la fecha. Si la fecha elegida es hoy, los horarios ya pasados aparecen deshabilitados
  - Selector numérico de pasajeros: mínimo 1, valor inicial 1, máximo igual a los cupos disponibles del horario elegido. Un solo precio por persona — no hay tipos de pasajero (adulto/niño) en este alcance
  - Cálculo de precio total en vivo, en CLP, formato `$XX.XXX` sin decimales y sin desglose
- **Cupos:** son un valor fijo del mock — no se descuentan con cada reserva hecha durante la sesión (simularlo agrega estado y complejidad que no aporta a una demo de taller)
- **Comportamiento de navegación:** si el usuario vuelve atrás desde Datos de contacto, sus selecciones de fecha/horario/pasajeros deben conservarse, no resetearse
- **Acción:** "Continuar" (ancho 100%), deshabilitado hasta tener fecha y horario elegidos → va a Datos de contacto

### 4. Datos de contacto
- **Objetivo:** capturar quién hace la reserva
- **Contenido:** nombre completo, email o teléfono (uno de los dos, no ambos obligatorios)
- **Acción:** "Confirmar reserva" (ancho 100%) → va a Confirmación

### 5. Confirmación
- **Objetivo:** cerrar el flujo con sensación de reserva completa
- **Contenido:** resumen (ruta, fecha, horario, pasajeros, precio total), código de reserva generado, mensaje "recibirás la confirmación por email" (simulado, no hay envío real)
- **Acción:** al confirmar, la reserva se agrega al historial de la pestaña Reservas. Botón para volver a Inicio (ancho 100%)

### 6. Reservas (historial)
- **Objetivo:** mostrar las reservas confirmadas durante la sesión actual
- **Contenido:** si hay reservas, una tarjeta por reserva con el resumen (ruta, fecha, horario, código); si no hay ninguna, estado vacío con ícono + mensaje "Aún no tienes reservas"
- **Acción:** ninguna — no hay pantalla de detalle de reserva en este alcance

## Convenciones de UI

- **Precios:** siempre en CLP, formato `$XX.XXX` sin decimales y sin desglose — aplica a todas las pantallas que muestran un precio (Inicio, Detalle, Reservar, Confirmación, Reservas)
- **Botones de acción principal:** ancho 100% del contenedor, nunca ajustados al contenido
- **Iconografía:** usar Material Symbols (vía Google Fonts, mismo mecanismo que la tipografía) para todo ícono de la interfaz. Sin emojis en ningún lugar — ni en la UI ni en los datos mock
- **Placeholders de imagen:** fondo gris claro (`#E5E7EB`) + ícono de imagen (`#9CA3AF`) centrado
- **Alineación:** el título y la bajada de cada pantalla comparten el mismo padding horizontal — revisar que no queden desalineados entre sí

## Datos mock sugeridos

```json
{
  "rutas": [
    {
      "id": "cat-01",
      "nombre": "Catamarán Lago — Tour panorámico",
      "duracion": "2 horas",
      "precio": 25000,
      "horarios": ["10:00", "13:00", "16:00"],
      "cuposPorHorario": 20,
      "fotos": 3
    }
  ]
}
```

## Notas técnicas para Claude Code

- Front-end only, sin backend real: los datos mock viven en un archivo JSON o array dentro del código
- Mobile-first pero responsive: en pantallas anchas, el contenido se mantiene centrado en un contenedor de ancho máximo de **1000px** (token `--max-content-width` en `tokens.css`) en vez de estirarse a pantalla completa. Es el mismo layout de una sola columna en mobile y en desktop — en mobile el contenedor ocupa el 100% del viewport, en desktop se topa en 1000px y se centra
- Navegación inferior: `position: fixed` al fondo del viewport, con el contenido de cada pantalla dejando un padding inferior equivalente a su altura para que nada quede tapado detrás
- Carrusel de fotos: usar scroll-snap de CSS nativo, no una librería de carrusel — más rápido de implementar y no agrega una dependencia nueva
- Historial de reservas: basta con estado de React compartido (levantado a `App.jsx` o un context simple) — no se requiere localStorage ni backend
- Sin autenticación de ningún tipo
- Preparado para deploy directo en Vercel desde un repo de GitHub

## Uso de este documento

Este documento está escrito para ser autosuficiente: el prompt de construcción no necesita repetir estos detalles, solo apuntar aquí y pedir que se siga al pie de la letra.

Es el insumo para:
1. Refinar 1-2 historias de usuario con IA (Ejercicio 1 del taller)
2. Servir de contexto/prompt inicial para Claude Code (Ejercicio 2 del taller)
