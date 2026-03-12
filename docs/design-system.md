# Design System — Beco 360

## Aesthetic Direction
- Direction: Sophistication & Trust + Boldness & Clarity
- Tone words: premium, técnico, cálido, colombiano

## Typography
- Display: Plus Jakarta Sans (weights: 700)
- Body: Plus Jakarta Sans (weights: 400, 600)
- Mono: ui-monospace, 'Cascadia Code', monospace
- Scale: Fluid type con clamp() — hero: clamp(2.5rem, 6vw, 4.5rem)

## Color Palette
- Surface base: #0F0F0F (negro cálido)
- Surface elevado: #1A1A1A (carbón)
- Surface borde: #2A2A2A
- Primary accent: #D4755E (cobre)
- Accent hover: #C4654E
- Texto primario: #F5F5F5
- Texto secundario: #ADADAD
- Texto muted: #888888
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

## Variants
(ninguno aún — agregar cuando una sub-página diverja del aesthetic base)
