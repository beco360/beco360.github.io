# Design System — Beco 360

## Aesthetic Direction
- Direction: Sophistication & Trust + Boldness & Clarity
- Tone words: premium, técnico, cálido, colombiano

## Typography
- Display / headlines: **Fraunces** (serif, optical-sizing, weights 400–600 + italic). Clase `.font-display`, letter-spacing -0.02em. Editorial, alto contraste. Se usa a peso 400 (no bold), con una palabra clave en `<em>` cobre como acento.
- Body / UI: Plus Jakarta Sans (weights: 400, 600, 700)
- Eyebrow / labels: Plus Jakarta Sans uppercase, tracking 0.22em (clase `.eyebrow`)
- Mono: ui-monospace, 'Cascadia Code', monospace (números de proceso, datos)
- Scale: Fluid type con clamp() — hero: clamp(2.75rem, 5.6vw, 4.75rem); H2 secciones: clamp(2rem, 4vw, 3rem)

## Color Palette
- Surface base: #0F0F0F (negro cálido)
- Surface elevado: #161514 (carbón cálido)
- Surface borde: #2A2724 (cálido)
- Primary accent: #CC8354 (cobre — coincide con el logo)
- Accent hover: #BC7344
- Texto primario: #F5F3F0 (off-white cálido)
- Texto secundario: #B3ADA6
- Texto muted: #8A8378
- Nota: la paleta migró a tonos cálidos (tinte marrón) para alejarse del gris neutro y dar calidez bespoke sobre el cobre.
- Scheme: monochromático oscuro + acento cobre
- Background treatment: flat (sin gradientes de fondo)
- Dark mode: sí — modo principal y único

## Motion Design
- Entry: fade-up con stagger (80ms entre elementos), opacity 0→1, translateY 20px→0
- Scroll: reveal on scroll via IntersectionObserver (CSS + JS vanilla)
- Micro-interactions: botones scale(0.97) en press, nav links underline desde izquierda, cards translateY(-4px) en hover
- Timing: balanced (200-350ms), micro-interacciones 150ms
- Reduced motion: animaciones de entrada instantáneas, escalas preservadas

## Spatial Composition
- Grid: max-w-6xl centrado, px-6 mobile / px-8 desktop, secciones full-bleed
- Whitespace: generous (py-24 entre secciones)
- Visual tension: hero enorme vs. cards compactas
- Content flow: top-to-bottom linear (historia: quiénes → productos → servicios → portafolio → contacto)

## Anti-Patterns (Blocked)
- Inter/Roboto/Arial como fuente display
- Gradientes purple-to-blue de fondo
- Layout single-column centrado genérico
- Ilustraciones stock isométricas o "blob people"
- Card grids con sombra idéntica en todas las cards
- Texto en gradiente arco iris
- Hero "Bienvenido a Beco 360" o copy genérico sin posicionamiento

## Editorial direction (desde 2026-06)
Rediseño hacia **editorial premium** para alejar el sitio del look "AI-generated".
Referencias: Palantir (narrativa systematic), Linear (labels tracked, minimal), Unseen Studio / Work & Co (editorial).
- **Layout asimétrico**, no centrado: hero con texto a la izquierda + diagrama de proceso a la derecha; secciones tratadas como "spreads" art-directed, no como card-farm.
- **Índices editoriales** con hairlines + numeración mono en vez de grids de cards (ver sección "Por qué Beco" y los stats con divisores).
- **Profundidad**: grain sutil global (SVG noise, opacity 0.04, mix-blend overlay) + glow cobre radial detrás del hero. Nada de sombras duras ni neón.
- **Motion calmo**: reveal con ease-out cinematográfico `cubic-bezier(0.16, 1, 0.3, 1)` a 700ms (no el fade-up genérico de antes). LCP del hero sin animar.
- **Headlines en serif** a peso 400 con una palabra clave en italic cobre; eyebrows uppercase tracked para estructura.

## Variants
(ninguno aún — agregar cuando una sub-página diverja del aesthetic base)
