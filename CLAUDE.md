# Turismo Dalmata

## Contexto
Prototipo front-end construido en un taller en vivo. Prioriza velocidad y claridad visual sobre completitud.

## Documentos del proyecto (fuente de verdad)
Lee estos archivos antes de construir o modificar pantallas; si algo de aquí contradice un prompt, avisa en vez de improvisar:
- docs/README.md

## Alcance
- Sin backend real: los datos viven en `src/data/mock.json`
- Sin autenticación de ningún tipo
- Web app responsive, mobile-first: diseña primero para celular, pero el contenido se mantiene centrado en `--max-content-width` en pantallas anchas en vez de estirarse a pantalla completa
- Pensado para deploy directo en Vercel desde GitHub

## Marca y sistema de diseño
- Nombre visible en el header: Turismo Dalmata
- Paleta: Atardecer (ver `src/styles/tokens.css`)
- Tipografía: Cálida (Fraunces para encabezados, Work Sans para cuerpo)
- Iconografía: Material Symbols únicamente — nunca emojis, ni en la UI ni en los datos mock
- Sigue principios de Material Design: ver sección más abajo
- Inspiración: sin referencia específica

## Principios de Material Design a seguir
- Escala de espaciado en múltiplos de 8px (8, 16, 24, 32...)
- Esquinas redondeadas: 12px en tarjetas, 24px (pill) en botones
- Elevación con sombras suaves, nunca bordes duros para separar capas
- Escala tipográfica: H1 32px, H2 24px, cuerpo 16px, caption 12px
- Todo elemento interactivo con un área táctil mínima de 48px
- Iconografía consistente con Material Symbols, nunca mezclada con emojis

## Convenciones de UI
- Los botones de acción principal ocupan el 100% del ancho de su contenedor
- El título y la bajada de cada pantalla comparten el mismo padding horizontal
- Placeholders de imagen: `--color-placeholder-bg` de fondo + ícono de imagen en `--color-placeholder-icon`, nunca una foto real ni un emoji

## Convenciones de código
- Componentes funcionales, un componente por archivo en `src/components/`
- Sin librerías de estado externas — `useState`/`useReducer` es suficiente para este alcance
- Mantén cada componente lo más simple posible; este es un prototipo, no producción
- `src/App.jsx` parte con un aviso temporal ("Base lista para empezar a construir el prototipo."): al construir la primera pantalla, reemplázalo por completo; no lo conserves ni lo muevas a otra pantalla
