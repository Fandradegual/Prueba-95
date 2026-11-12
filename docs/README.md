# Documentación del proyecto

Aquí guardamos las notas y guías de **Prueba-95** (prototipo "Turismo Dalmata").

## Orden de trabajo
- Cada documento va en esta carpeta (`docs/`) como archivo `.md`.
- Los nombres van en minúsculas y con guiones: `guia-vercel.md`.
- Este índice se actualiza cada vez que se agrega un documento o se construye algo nuevo.

## Índice de documentos
- [arquitectura-base-reserva-transporte.md](arquitectura-base-reserva-transporte.md): alcance del MVP, mapa de pantallas y convenciones de UI (fuente de verdad).

## Estado de la implementación
Construido según `arquitectura-base-reserva-transporte.md`:

| # | Pantalla | Archivo | Estado |
|---|---|---|---|
| 1 | Inicio | `src/pages/Inicio.jsx` | Hecha |
| 2 | Detalle de ruta | `src/pages/DetalleRuta.jsx` | Hecha |
| 3 | Reservar | `src/pages/Reservar.jsx` | Hecha |
| 4 | Datos de contacto | `src/pages/Contacto.jsx` | Hecha |
| 5 | Confirmación | `src/pages/Confirmacion.jsx` | Hecha |
| 6 | Reservas (historial) | `src/pages/Reservas.jsx` | Hecha |

Elementos globales: `src/components/Header.jsx` (fijo arriba) y `src/components/BottomNav.jsx` (fija abajo, visible en las 6 pantallas).

Otros archivos clave:
- `src/App.jsx`: navegación entre pantallas y estado compartido (selecciones, contacto, historial).
- `src/data/mock.json`: 3 rutas de ejemplo con precios en CLP, sus fotos y la foto de portada.
- `src/utils.js`: formato de precios (`$XX.XXX`), fechas, horarios y código de reserva.
- `src/components/Carousel.jsx`: carrusel con scroll-snap, flechas y puntos.
- `src/components/Foto.jsx`: muestra una foto de Unsplash; si no carga, muestra el placeholder gris.
- `src/styles/tokens.css` y `src/styles/app.css`: colores, tipografía y estilos.

Fuera de alcance (backlog): pago en línea, cuentas de usuario, panel de administración, varios operadores, notificaciones reales y persistencia entre sesiones.

## Publicación en Vercel
- `vercel.json` fija la configuración: framework Vite, `npm run build` y carpeta publicada `dist/`.
- Cada cambio guardado en la rama `main` de GitHub se publica solo en Vercel.
- `index.html` es solo la puerta de entrada: el código del prototipo vive en `src/` y Vercel lo compila al publicar.

## Créditos de fotos
Todas las fotos son de [Unsplash](https://unsplash.com) y se usan bajo la licencia gratuita de Unsplash. Se enlazan directamente (no están guardadas en el proyecto).

| Uso | Autor | Enlace |
|---|---|---|
| Portada de Inicio | Karla Robinson | https://unsplash.com/photos/HT2jDxe6UF4 |
| Catamarán Lago | (ver enlace) | https://unsplash.com/photos/LExlOWiuwR0 |
| Catamarán Lago | Cat Guffin | https://unsplash.com/photos/EhluUi8R1E0 |
| Catamarán Lago | Michael Hamments | https://unsplash.com/photos/SHE3ALFxYYA |
| Lancha Isla | Clovis Wood | https://unsplash.com/photos/O9jbauQ6GGM |
| Lancha Isla | Alex Wolowiecki | https://unsplash.com/photos/S4XILWcz4Tc |
| Catamarán Atardecer | Jacob Diehl | https://unsplash.com/photos/C0Bv2CNfNfw |
| Catamarán Atardecer | Patrick Schiele | https://unsplash.com/photos/3Lewwn7yaCc |
| Catamarán Atardecer | Tapio Haaja | https://unsplash.com/photos/BkLjwZu-kWo |
