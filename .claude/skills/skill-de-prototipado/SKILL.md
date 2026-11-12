---
name: "skill-de-prototipado"
description: "Usa esta skill al iniciar un nuevo proyecto de prototipo web front-end con Claude Code, especialmente en el contexto del taller \"Diseño a MVP con IA\" de 9punto5. Hace unas preguntas rápidas de diseño (nombre de marca, paleta de colores, tipografía, referencia de inspiración) con opciones predefinidas para no perder tiempo, y luego genera la estructura inicial de carpetas, un archivo de tokens de diseño (tokens.css) y un CLAUDE.md con las convenciones del proyecto (Material Design, mobile-first responsive, iconografía sin emojis, sin backend, mock data, deploy a Vercel). Dispara esta skill ante frases como \"empecemos el proyecto\", \"arma la estructura inicial\", \"crea el scaffold\", \"necesito el setup base\", \"quiero armar el proyecto en Claude Code\", o cualquier mención de iniciar un prototipo de app o sitio desde cero. Solo prepara la base: no construye pantallas ni sube nada a GitHub."
---

# Skill de prototipado

Prepara un proyecto front-end nuevo para prototipar rápido con Claude Code. La idea central: alguien sin mucho tiempo (o sin background técnico) debería poder tomar decisiones de diseño básicas en menos de 5 minutos y quedar con un proyecto listo para que la IA empiece a construir pantallas de inmediato.

## Límites: qué NO hace esta skill

Esta skill termina cuando la base está creada y confirmada. Todo lo demás lo pide la persona después, con sus propias órdenes.

- **No construye ninguna pantalla ni lógica.** Aunque `docs/` ya contenga una arquitectura del sitio o historias de usuario, o aunque la conversación anterior hable de ellos, no los uses para construir ahora: no crees páginas en `src/pages/`, no llenes `mock.json` y no armes flujos. Esos documentos se dejan exactamente como están.
- **No sube nada a GitHub.** No ejecutes `git init`, `git commit`, `git push` ni `gh` (ni `gh repo create`), y tampoco ofrezcas hacerlo al terminar.
- **No propone ni inicia los siguientes pasos.** Al terminar, no preguntes "¿quieres que construya el prototipo?" ni "¿lo subo a GitHub?". Espera la siguiente orden.

## Por qué las preguntas son de opción fija, no abiertas

Si preguntas "¿qué colores quieres?" en abierto, la persona se pone a dudar entre veinte tonos de azul y se pierden minutos valiosos — sobre todo en un taller en vivo con tiempo acotado. Ofrecer 3-4 paletas y 3 combinaciones tipográficas ya resueltas convierte una decisión de diseño en una elección rápida, sin sacrificar que el resultado se vea intencional. Si la persona ya tiene algo específico en mente, siempre se puede usar la opción personalizada.

## Paso 1 — Preguntas rápidas

Antes de tocar el sistema de archivos, pregunta esto (en este orden, y deja que la persona responda todas antes de seguir):

**1. Nombre de la app/marca** — ofrécelo como selección, igual que las preguntas de paleta y tipografía, no como un campo de texto abierto. Una pregunta abierta corta el ritmo de las dos anteriores y genera una pausa incómoda cuando varias personas están respondiendo en paralelo en un taller.

Ofrece dos opciones predefinidas — **"Prototipo de prueba"** y **"Mi Proyecto"** — para quien no tenga un nombre en mente. Con una sola opción predefinida la herramienta de preguntas de Claude Code falla (necesita mínimo dos), así que no la dejes en una sola. No listes también un "Otro" explícito como tercera opción — la herramienta ya agrega automáticamente un campo de texto libre al final de cualquier pregunta de selección; si la persona quiere un nombre propio, lo escribe ahí directo.

Este nombre se usa dos veces: como nombre técnico del proyecto (`package.json`, en formato kebab-case, y también el nombre de la carpeta, pero solo si el Paso 2 tiene que crear una) y como texto visible en el header de la app, a modo de logo. Si la persona quiere que se vean distintos (ej. nombre técnico "reserva-turismo" pero header "TuruTa"), que lo diga al escribir su respuesta; si no, se usa el mismo texto para ambos.

**2. Paleta de colores** — ofrece estas opciones y pide que elija una, o que dé 1-2 códigos hex si prefiere algo personalizado:

| Paleta | Primario | Secundario | Fondo | Texto |
|---|---|---|---|---|
| Lago | `#0B7285` | `#FFB703` | `#F7FAFA` | `#1B1B1B` |
| Atardecer | `#D9480F` | `#FFD43B` | `#FFF8F1` | `#2B2118` |
| Bosque | `#2B8A3E` | `#A9744F` | `#F4F8F2` | `#1E2A1D` |

**3. Tipografía** — ofrece estas combinaciones (todas cargables desde Google Fonts) y pide que elija una, o el nombre de una fuente propia:

| Combo | Encabezados | Cuerpo | Sensación |
|---|---|---|---|
| Material clásico | Roboto | Roboto | Neutra, familiar, la opción "segura" |
| Moderna | Space Grotesk | Inter | Contemporánea, un poco técnica |
| Cálida | Fraunces | Work Sans | Editorial, cercana |

**4. Referencia de inspiración** (opcional) — un sitio o app que le guste visualmente. Si no tiene ninguna en mente, se salta sin problema; no es bloqueante.

No sigas al paso 2 sin tener al menos nombre, paleta y tipografía. La inspiración es la única opcional de las cuatro.

## Paso 2 — Ubicar el proyecto y crear la estructura de carpetas

### 2a. Decidir dónde va el proyecto (antes de crear nada)

En el taller, la persona ya creó la carpeta del proyecto y dejó dentro `docs/` con los documentos de los ejercicios anteriores (por ejemplo, la arquitectura del sitio y las historias de usuario), y abrió Claude Code dentro de esa carpeta. Si esta skill creara otra carpeta con el nombre del proyecto, esos documentos quedarían fuera del repo y la persona tendría que moverlos a mano. Para evitarlo, mira el directorio actual y decide así:

1. **Si el directorio actual ya tiene una carpeta `docs/`** (con o sin archivos), o **si está vacío** (ignorando archivos ocultos como `.git` o `.claude`): **usa el directorio actual como raíz del proyecto.** No crees una subcarpeta con el nombre del proyecto. No renombres ni muevas la carpeta actual: su nombre puede ser distinto al nombre de marca, y no importa.
2. **Si el directorio actual tiene otros archivos y no tiene `docs/`:** crea la subcarpeta `<nombre-proyecto>/` (kebab-case, el mismo del Paso 1) y trabaja dentro de ella.
3. **Si en la raíz elegida ya existen `package.json`, `src/` o `CLAUDE.md`:** no sobrescribas nada. Muestra qué encontraste y pregunta cómo seguir (por ejemplo, conservar los existentes y crear solo lo que falte).

En el resumen del Paso 6 dile a la persona cuál de los casos se aplicó, en una línea (por ejemplo: "Usé esta carpeta como raíz del proyecto; tus documentos de `docs/` quedaron intactos.").

### 2b. Crear la estructura

Crea esta estructura en la raíz elegida (Vite + React es el default recomendado por ser el más rápido de levantar):

```
<raíz>/
├── CLAUDE.md
├── docs/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── BottomNav.jsx
│   │   └── ImagePlaceholder.jsx
│   ├── pages/
│   ├── styles/
│   │   └── tokens.css
│   ├── data/
│   │   └── mock.json
│   ├── App.jsx
│   └── main.jsx
├── public/
└── README.md
```

**Archivos de arranque de Vite (obligatorios).** Vite no arranca sin ellos, así que créalos siempre junto con el resto, aunque no estén en la lista de componentes:
- `index.html` en la raíz, con el `<div id="root"></div>`, el `<script type="module" src="/src/main.jsx"></script>`, las fuentes de Google Fonts del Paso 3 y los íconos Material Symbols.
- `vite.config.js` con el plugin de React (`@vitejs/plugin-react`).
- `src/main.jsx`, que monta `App` en `#root` e importa `./styles/tokens.css`.
- `package.json` con nombre en kebab-case, `"type": "module"`, los scripts `dev`, `build` y `preview`, las dependencias `react` y `react-dom`, y las devDependencies `vite` y `@vitejs/plugin-react`.
- `.gitignore` con `node_modules` y `dist`, para que más adelante no se suba la carpeta de dependencias.

**`docs/` es de la persona, no de la skill.** Si ya existe, déjala exactamente como está: no borres, muevas, renombres ni sobrescribas ningún archivo de ahí, y no agregues archivos nuevos. Si no existe, créala vacía. Es el lugar donde viven la arquitectura del sitio (el mapa de pantallas) y las historias de usuario ya refinadas; crearla desde este paso (cuando falta) evita que cada asistente decida una ubicación distinta para esos archivos. No asumas nombres de archivo: lista lo que haya en `docs/` tal cual (cualquier `.md`) para usarlo en el `CLAUDE.md` del Paso 4.

`Header.jsx` muestra el nombre de marca del paso 1. `BottomNav.jsx` es la navegación inferior de 2 pestañas (Inicio / Reservas) — su comportamiento exacto de a qué pantallas aplica lo define la arquitectura del sitio, no esta skill. `ImagePlaceholder.jsx` es el componente reutilizable para donde iría una foto real: fondo gris claro + ícono de imagen centrado, nunca una foto real ni un emoji.

`App.jsx` debe quedar como un placeholder mínimo, sin armar una pantalla real. No lo uses para "demostrar" que los tokens funcionan renderizando el `Header`, el `BottomNav` y un `ImagePlaceholder` juntos con texto descriptivo — eso ya es diseñar una pantalla de bienvenida que nadie pidió, y esta skill no decide diseño de pantallas, solo prepara el terreno técnico.

Lo único que debe mostrar es un **aviso temporal**: un texto centrado (horizontal y verticalmente, con estilos en línea, sin importar componentes ni tokens) que diga exactamente **"Base lista para empezar a construir el prototipo."** Así, cuando el navegador abre la vista previa al terminar, la persona ve confirmación en vez de una página en blanco. Agrega en el archivo un comentario que diga que es temporal, por ejemplo `{/* Aviso temporal: reemplazar por completo al construir la primera pantalla */}`. Toda pantalla real —incluyendo cuál de estos componentes va en cada una— se construye en el siguiente ejercicio, a partir de los documentos de `docs/`, y ahí `App.jsx` se reemplaza y el aviso desaparece.

`src/data/mock.json` empieza vacío o con un placeholder — se llena en el siguiente ejercicio del taller, cuando se construyen las pantallas a partir de los documentos de `docs/`. Esta skill no lee esos documentos para armar pantallas ni datos, ni construye lógica de negocio; solo prepara el terreno.

## Paso 3 — Generar `src/styles/tokens.css` e iconografía

Traduce las respuestas del paso 1 a variables CSS. Ejemplo con la paleta "Bosque" y tipografía "Material clásico":

```css
:root {
  --color-primary: #2B8A3E;
  --color-secondary: #A9744F;
  --color-background: #F4F8F2;
  --color-text: #1E2A1D;

  --color-placeholder-bg: #E5E7EB;
  --color-placeholder-icon: #9CA3AF;

  --font-heading: 'Roboto', sans-serif;
  --font-body: 'Roboto', sans-serif;

  --radius-card: 12px;
  --radius-button: 24px;
  --spacing-unit: 8px;

  --max-content-width: 1000px;
}
```

`--color-placeholder-bg` y `--color-placeholder-icon` son fijos (gris neutro) independientemente de la paleta elegida — son para donde falta una foto real, no deben llevar color de marca. `--max-content-width` es la base de la estrategia responsive: mobile-first, pero en pantallas anchas el contenido se mantiene centrado en ese ancho máximo en vez de estirarse a pantalla completa. Así se ve bien en desktop sin tener que diseñar un layout aparte.

Para los íconos, agrega Material Symbols en el `index.html` (mismo mecanismo que la fuente de Google Fonts, sin instalar ninguna librería):

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

Cada ícono se usa como `<span class="material-symbols-outlined">home</span>` (o el nombre del ícono que corresponda). Esto reemplaza cualquier emoji — en esta skill, y en todo lo que se construya después, no se usan emojis en ningún lugar de la interfaz ni de los datos mock.

## Paso 4 — Generar `CLAUDE.md`

Este archivo es el que guía cada prompt posterior durante el taller, así que debe quedar claro y corto. Usa esta plantilla, reemplazando los placeholders:

```markdown
# {{nombre_proyecto}}

## Contexto
Prototipo front-end construido en un taller en vivo. Prioriza velocidad y claridad visual sobre completitud.

## Documentos del proyecto (fuente de verdad)
Lee estos archivos antes de construir o modificar pantallas; si algo de aquí contradice un prompt, avisa en vez de improvisar:
{{lista_docs}}

## Alcance
- Sin backend real: los datos viven en `src/data/mock.json`
- Sin autenticación de ningún tipo
- Web app responsive, mobile-first: diseña primero para celular, pero el contenido se mantiene centrado en `--max-content-width` en pantallas anchas en vez de estirarse a pantalla completa
- Pensado para deploy directo en Vercel desde GitHub

## Marca y sistema de diseño
- Nombre visible en el header: {{nombre_marca}}
- Paleta: {{paleta_elegida}} (ver `src/styles/tokens.css`)
- Tipografía: {{combo_tipografico}}
- Iconografía: Material Symbols únicamente — nunca emojis, ni en la UI ni en los datos mock
- Sigue principios de Material Design: ver sección más abajo
- Inspiración: {{referencia_inspiracion, o "sin referencia específica"}}

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
```

`{{lista_docs}}` es una línea por archivo que haya en `docs/`, con su ruta (por ejemplo: `- docs/arquitectura-base-reserva-transporte.md`, `- docs/historias-usuario.md`), usando los nombres reales que encontraste en el Paso 2. **Si `docs/` está vacía o no existe, elimina la sección completa "Documentos del proyecto"** del `CLAUDE.md` en vez de dejarla con el placeholder.

## Paso 5 — Instalar y levantar la vista previa

La persona debe ver algo funcionando al terminar, no solo archivos. Haz esto en orden:

1. Ejecuta `npm install` en la raíz del proyecto. Puede tardar un minuto; avísale. Si falla porque no encuentra `npm` o `node`, dile que cierre y abra de nuevo esta aplicación; si en Windows dice que la ejecución de scripts está deshabilitada, indícale `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` en PowerShell y reintenta.
2. Arranca el servidor de desarrollo con `npm run dev`, en segundo plano para que quede corriendo. Anota la URL local que muestre (normalmente `http://localhost:5173`).
3. Abre la vista previa. Si la herramienta tiene una vista previa integrada, úsala; si no, abre la URL en el navegador del sistema (`open` en Mac, `start` en Windows) o entrégasela a la persona.
4. Comprueba que la página muestre el aviso "Base lista para empezar a construir el prototipo." y que no haya errores en la consola del servidor. Si hay errores, corrígelos y reintenta antes de seguir.

Deja el servidor corriendo. No cambies nada más del proyecto en este paso.

## Paso 6 — Confirmar antes de seguir

Muestra un resumen breve de lo que se generó (nombre, paleta, tipografía, estructura de carpetas) y la URL donde quedó la vista previa, incluyendo en una línea dónde quedó el proyecto (el caso del Paso 2a que se aplicó) y qué documentos de `docs/` detectaste y dejaste intactos (si había). Pregunta solo si quiere ajustar algo de esa base (nombre, paleta o tipografía). La vista previa todavía no es un diseño: `App.jsx` solo muestra el aviso "Base lista para empezar a construir el prototipo." (ver paso 2), y eso es lo esperado. Si `docs/` quedó vacía, avísale que ahí deberá dejar la arquitectura del sitio y las historias de usuario antes de construir.

Cierra con una sola frase: la base está lista y esperas su siguiente instrucción. No construyas pantallas ni uses el contenido de `docs/` por tu cuenta, y no ofrezcas subir el proyecto a GitHub: esas órdenes las dará la persona más adelante.