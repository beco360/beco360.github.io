# Design: Rebuild Completo — beco360.com
Date: 2026-03-12
Status: ⚠️ Partially superseded (2026-06-30)
Approach: Astro + Tailwind + GitHub Pages — sitio estático AI-first

> **PARCIALMENTE SUPERSEDED — 2026-06-30.** Sigue **vigente**: el stack (Astro + Tailwind),
> el design system visual, la arquitectura del sitio y las decisiones de diseño/motion.
> Está **superado** todo lo relativo al **modelo de negocio**: el posicionamiento de
> "programador por 1 salario mínimo", el "retainer por capacidad mensual", la definición de
> "feature" y los planes Mínimo/Estándar/Pro. Beco pivotó a consultoría forward-deployed por
> fases. Ver: `docs/designs/2026-06-30-pivote-consultoria.md` y `docs/business-model.md`.

## Problema

El sitio actual (2019-2020) usa Bootstrap 4 + jQuery, tiene Universal Analytics deprecated (sin datos desde 2023), la mayoría de servicios comentados, y posiciona a Beco 360 como una agencia de páginas web básica. No refleja la realidad: una empresa paraguas con productos propios de AI y datos.

## Solución

Rebuild completo desde cero en Astro + Tailwind CSS. El nuevo sitio posiciona a Beco 360 como un **AI-first digital studio** colombiano — construye productos con AI y ayuda a empresas a implementarla. Desplegado en GitHub Pages via GitHub Actions (misma infraestructura, cero costo adicional).

## Posicionamiento

**Gancho principal:**
> "Contrata un programador experimentado por 1 salario mínimo al mes y convierte tus ideas de negocio en realidad."

**Tagline corporativo:**
> "Construimos productos con AI y llevamos esa inteligencia a tu empresa."

Beco 360 es la empresa paraguas de:
- **Alfil** (= Datos-co): Plataforma de inteligencia política para Colombia, AI + datos públicos
- **Cotejo**: Plataforma de fútbol — canchas, organizadores, jugadores, gamificación

Y ofrece servicios a empresas externas bajo modelo de **retainer mensual** (capacidad, no entregables fijos):
- Implementación de AI en procesos de negocio
- Desarrollo de software y automatizaciones
- Páginas web, e-commerce y presencia digital
- Identidad de marca y contenido
- Marketing digital

Audiencia dual: PYMEs colombianas que buscan presencia digital + inversores/aliados que evalúan el portafolio.

## Modelo de negocio — Retainer por capacidad

### Filosofía
No se vende por proyecto ni por entregable específico. Se vende **capacidad mensual**. El cliente agenda features según sus necesidades — pueden ser automatizaciones, webs, AI, dashboards, integraciones. Lo que sea que quepa en la definición de feature.

**Una feature = cualquier trabajo acotable descrito en 1 oración con un resultado claro, ejecutable en ~3 horas con AI.**

Ejemplos de features:
- Web y presencia: rediseño de homepage, formulario de contacto a WhatsApp, calculadora de precios, galería con filtros, sección de testimonios, FAQ interactivo
- Automatizaciones: bot de WhatsApp 24/7, email de bienvenida automático, recordatorio de citas, factura automática, reporte semanal, alerta de inventario
- Integraciones: pasarela de pago (Wompi/PSE/Nequi), sincronización con Google Sheets, conexión CRM, WhatsApp Business API
- AI y datos: chatbot con conocimiento del negocio, resumen automático de correos, categorización de pedidos, análisis de reseñas de clientes, transcripción de llamadas
- Dashboards: ventas del mes, KPIs en tiempo real, comparativo mensual, top clientes
- Herramientas internas: cotizador automático, registro de asistencia, inventario con alertas, generador de contratos PDF
- E-commerce: catálogo con filtros, cupones de descuento, seguimiento de pedidos, pasarela completa

**NO es una feature:** "un e-commerce completo" (son 8-10 features), "una app móvil" (es un proyecto).

### Planes (dólar a COP $3,300 — marzo 2026)

| | Plan Mínimo | Plan Estándar | Plan Pro |
|---|---|---|---|
| Precio/mes | COP $2,921,000 (~$885 USD) | COP $5,800,000 (~$1,758 USD) | COP $11,600,000 (~$3,515 USD) |
| Features/mes | 2 (1 cada 15 días) | 4 (1/semana) | 8 (2/semana) |
| Syncs/mes | 1 × 30 min | 2 × 45 min | 4 × 60 min (semanal) |
| Turnaround | 7 días hábiles | 5 días hábiles | 3 días hábiles |
| Comunicación | Async (WhatsApp) | Async prioritario | Canal dedicado |
| Costo por feature | ~$1,460,000 COP | ~$1,450,000 COP | ~$1,450,000 COP |

**Referencia del gancho:** COP $2,921,000 = costo real al empleador de 1 empleado al salario mínimo 2026 (incluye salud 8.5%, pensión 12%, ARL, prima, cesantías, vacaciones).

### Horas por cliente al mes

| Plan | Features | Syncs | Comms async | **Total horas** | COP/hora |
|---|---|---|---|---|---|
| Mínimo | 6h (2×3h) | 0.5h | 0.5h | **7h** | $417,000 |
| Estándar | 12h (4×3h) | 1.5h | 1h | **14.5h** | $400,000 |
| Pro | 24h (8×3h) | 4h | 2h | **30h** | $387,000 |

### Escenario meta: COP $60M/mes con 8 clientes

| Mix | Clientes | Horas/mes | Ingreso/mes |
|---|---|---|---|
| 4 Pro + 3 Estándar + 1 Mínimo | 8 | 170.5h | COP $66,721,000 |

Horas libres (~5.5h/mes): ventas, admin, onboarding.

### Comparación de mercado

| | Dev junior al mínimo (empleado) | Dev senior freelance | Beco Mínimo |
|---|---|---|---|
| Costo/mes | $2,921,000 | $5-8M | $2,921,000 |
| Features/mes | 3-4 (baja calidad) | 4-6 | 2 (AI-quality, garantizadas) |
| Overhead | Alto (gestión, RRHH) | Medio | Ninguno |
| Riesgo | Alto (liquidación) | Medio | Bajo (cancela en 1 mes) |

## Arquitectura del sitio

### Páginas

```
index.astro              → Homepage (única página necesaria en v1)
cultura.astro            → Cultura y valores de Beco 360
servicios/index.astro    → Detalle de servicios
legal/terms.astro        → Términos y condiciones
legal/privacy.astro      → Política de privacidad
faqs.astro               → FAQs
404.astro                → Página no encontrada
```

### Secciones del Homepage (en orden)

```
1. Nav          → Logo | Productos | Servicios | Portafolio | FAQs | [Agenda una llamada]
2. Hero         → Headline gancho + sub-copy AI + 2 CTAs
3. Cómo funciona → 3 pasos: Agenda → Pide tu feature → Recíbela
4. Planes       → Tabla comparativa Mínimo / Estándar / Pro + CTA Cal.com
5. Features     → Grid de ejemplos por categoría (web, AI, automatizaciones, etc.)
6. Productos    → Cards: Alfil · Cotejo
4. Servicios    → Web · Branding · Contenido · Marketing · AI Implementation
5. Portafolio   → Clientes: Ingenieros AB, LSJ, Real State...
6. CTA final    → "Agenda una llamada" → Cal.com embed
7. Footer       → Links + contacto + redes sociales
```

### Componentes Astro

```
Layout.astro             → HTML base, meta tags, analytics
Nav.astro                → Sticky nav con mobile drawer
Hero.astro               → Sección hero homepage
ProductCard.astro        → Card para Alfil, Cotejo
ServiceCard.astro        → Card para cada servicio
PortfolioItem.astro      → Showcase de clientes
CalEmbed.astro           → Cal.com booking embed
Footer.astro             → Footer completo
Button.astro             → Componente botón reutilizable
Badge.astro              → Badges de estado (activo, beta)
Section.astro            → Wrapper de sección con padding estándar
```

## Edge Cases

- **Sin JavaScript**: El sitio debe ser funcional sin JS (Astro genera HTML estático). Cal.com embed requiere JS — fallback: link directo a cal.com/{username}.
- **Carga de fuentes**: Plus Jakarta Sans via Google Fonts con `font-display: swap` para evitar FOIT.
- **Imágenes**: Todas en formato WebP, con `width` y `height` definidos para evitar layout shift. Usar `<Image>` de Astro para optimización automática.
- **Analytics**: Migrar de Universal Analytics (deprecated) a GA4. Mantener FB Pixel. GTM como contenedor.
- **Cal.com free tier**: Si el free tier solo permite 1 tipo de reunión, crear "Llamada inicial — 30 min" como el único evento.
- **Mobile nav**: Drawer/hamburger para mobile, no dropdown. Todos los links accesibles sin hover.

## Trade-offs

- **Astro estático vs SSR**: Sin formulario de contacto nativo (usamos Cal.com). Aceptado — simplifica el stack y el hosting.
- **Dark mode único**: No toggle light/dark. El sitio es dark-first. Simplifica el design system y evita inconsistencias.
- **Una sola página en v1**: Las páginas de servicios individuales y páginas de productos (Alfil, Cotejo) se construyen en v2. En v1, todo en el homepage + páginas legales.

## FAQs — contenido sugerido para faqs.astro

Preguntas que el cliente tiene antes de contratar:

1. **¿Qué es una "feature"?** → Cualquier mejora o funcionalidad descrita en 1 oración con un resultado claro. Ej: "Quiero que me llegue un WhatsApp cuando alguien llene el formulario de contacto."
2. **¿Qué pasa si mi idea es muy grande para 1 feature?** → La dividimos juntos en el sync. Tú priorizas cuál va primero.
3. **¿Puedo cancelar cuando quiera?** → Sí. Sin contratos de permanencia. Cancelas con 15 días de anticipación.
4. **¿Las features que no uso en el mes se acumulan?** → No. El modelo es como un gimnasio — la capacidad no acumula. Úsala o la pierdes.
5. **¿Qué tecnologías usan?** → Las que mejor resuelven tu problema. Web, mobile, automatizaciones, AI, integraciones — sin restricción de stack.
6. **¿Cuánto tarda cada feature?** → El turnaround depende del plan: 7 días (Mínimo), 5 días (Estándar), 3 días (Pro).
7. **¿Cómo les digo qué quiero?** → Por WhatsApp o en el sync mensual. No necesitas saber de tecnología — describes el problema, nosotros lo resolvemos.
8. **¿Qué pasa si la feature no queda como esperaba?** → Incluye 1 ronda de ajustes sin costo adicional.
9. **¿Tienen experiencia con empresas de mi sector?** → Hemos trabajado con civil, e-commerce, política, deportes y más. Agenda una llamada y cuéntanos tu caso.
10. **¿Por qué "1 salario mínimo"?** → Porque eso es exactamente lo que te cuesta un empleado al mínimo cuando sumas prestaciones, ARL y todo lo demás: COP $2,921,000. Por ese mismo valor tienes un desarrollador senior con AI — sin los dolores de cabeza de tener un empleado.

## Roadmap de features del sitio (v1 vs v2)

### v1 — Lanzamiento
- Homepage completo (todas las secciones)
- Página FAQs
- Páginas legales (términos, privacidad)
- Cultura Beco 360
- Deploy en GitHub Pages con GitHub Actions
- GA4 + FB Pixel (reemplazando UA deprecated)
- Cal.com embed para agendar llamadas

### v2 — Post-lanzamiento
- **Chatbot AI** que explica costos, planes, ejemplos de features y evalúa si la idea del cliente es 1 feature o varias + precio estimado (powered by Claude API)
- Página de servicios detallada
- Páginas de productos (Alfil, Cotejo)
- Blog / casos de estudio
- Versión en inglés para mercado internacional

## Open Questions

- ¿Cuál es el username de Cal.com? → Definir al momento de implementar.
- ¿El logo de Beco 360 se rediseña? → El actual (PNG) es muy básico. Recomendado: SVG limpio para dark mode.
- ¿Hay video de demo de Alfil o Cotejo para usar en las cards? → Si existe, usar en hover de las cards de producto.
- ¿GA4 property ID ya creado? → Migrar de UA-144506037-1 a GA4.

---

## Visual Design Brief

### Inspiración

- **Vercel** (vercel.com): Fondo `#000` + tipografía blanca enorme + 1 acento + CTA clarísimo. Patrón hero de referencia.
- **Linear** (linear.app): Precisión técnica, sin imágenes stock, el producto es el protagonista.
- **Olya Black** (olyablack.com): Agencia con personalidad oscura + acento no-azul. Referencia de "agencia que se siente como producto tech".

### Layout & Hierarchy

- Estructura primaria: full-width sections, contenido centrado en `max-w-6xl`
- Jerarquía visual: (1) Headline hero → (2) Sub-copy → (3) CTAs → (4) Productos → (5) Servicios
- Navegación: sticky top bar con fondo transparente que se vuelve `#0F0F0F/90` con blur al hacer scroll

### Key Interactions

- **CTA primario** ("Agenda una llamada"): click → abre Cal.com popup embed
- **CTA secundario** ("Ver productos"): smooth scroll a sección productos
- **Product cards**: hover → borde en cobre + leve lift (`translateY(-4px)`) + badge "Ver proyecto" aparece
- **Nav mobile**: hamburger → drawer desde la derecha con fondo `#1A1A1A`

### Estados

- **Loading**: Astro estático = no hay loading states críticos. Cal.com embed muestra su propio skeleton.
- **Error**: Página `404.astro` custom con copy en tono de marca + link al homepage.
- **Success**: No aplica en v1 (no hay formularios propios).

### Responsive Strategy

- Approach: **mobile-first**
- Breakpoints clave:
  - Mobile (<640px): nav colapsado, hero en 1 col, cards en 1 col, font-size del hero reduce de 72px a 40px
  - Tablet (640-1024px): hero en 1 col centrado, cards en 2 cols
  - Desktop (>1024px): hero asimétrico, cards en 3 cols (Alfil, Cotejo, + próximamente)
- Nav mobile: hamburger drawer, no dropdown

### Design System Notes

- Color intent: cobre `#D4755E` para CTAs primarios, hover states, y elementos de énfasis. Nunca para texto de body.
- Tipografía: Plus Jakarta Sans en todos los pesos — 800 hero, 600 headings, 400 body
- Iconos: Lucide Icons (1 sola librería SVG)
- Tokens: definidos en `tailwind.config.mjs` como `colors.copper`, `colors.surface`, etc.

### Aesthetic Direction

- Direction: **Sophistication & Trust + Boldness & Clarity**
- Tone words: **premium, técnico, cálido, colombiano**
- Anti-patterns bloqueados:
  - Inter/Roboto/Arial como fuente display (usamos Plus Jakarta Sans)
  - Gradientes purple-to-blue (usamos cobre sobre negro)
  - Layout single-column centrado genérico (usamos secciones full-bleed con tensión visual)
  - Ilustraciones stock isométricas (sin ilustraciones — producto y datos como héroes)
  - Card grids uniformes con sombra idéntica (variamos elevación y borde en hover)
  - Texto en gradiente arco iris (el acento cobre se usa con intención, no en texto)
  - Hero "Bienvenido a Beco 360" (el copy es activo y posicional, no genérico)

### Typography

- Display: **Plus Jakarta Sans** — weights: 700-800
- Body: **Plus Jakarta Sans** — weights: 400-500
- Mono: `ui-monospace, 'Cascadia Code', monospace` — para snippets de código o datos técnicos
- Scale strategy: Fluid type con `clamp()`:
  - Hero h1: `clamp(2.5rem, 6vw, 4.5rem)`
  - H2 secciones: `clamp(1.75rem, 3.5vw, 2.5rem)`
  - Body: `1rem` (16px base)

### Color Palette

- Surface base: `#0F0F0F` — negro cálido (casi negro, no puro)
- Surface elevado: `#1A1A1A` — carbón para cards y nav
- Surface borde: `#2A2A2A` — bordes sutiles
- Primary accent: `#D4755E` — cobre (CTAs, hover, énfasis)
- Accent hover: `#C4654E` — cobre más oscuro para hover de botones
- Texto primario: `#F5F5F5` — blanco suave (no puro blanco)
- Texto secundario: `#9B9B9B` — gris medio para copy de apoyo
- Texto muted: `#6B6B6B` — para labels y metadata
- Scheme: monochromático oscuro + acento complementario cálido
- Background treatment: **flat** — sin gradientes de fondo. La profundidad viene de la elevación de surface.
- Dark mode: sí — es el modo principal y único.

### Motion Design

- Entry animations: **fade-up con stagger** — cada elemento de una sección aparece 80ms después del anterior al entrar en viewport. `opacity: 0 → 1`, `translateY: 20px → 0`.
- Scroll behavior: **reveal on scroll** usando `IntersectionObserver` (sin librería pesada — CSS + JS vanilla en Astro).
- Micro-interactions:
  - Botones: `scale(0.97)` en active/press, transición 150ms
  - Links de nav: underline animado en cobre desde izquierda
  - Product cards: `translateY(-4px)` en hover + borde cobre
  - Badge "Ver proyecto": `opacity: 0 → 1` en hover de card
- Timing: **balanced** — 200-350ms para la mayoría. 150ms para micro-interacciones de botones.
- Reduced motion: cuando `prefers-reduced-motion: reduce` — todas las animaciones de entrada se vuelven instantáneas (`transition-duration: 0ms`), fade-up desaparece, micro-interacciones de escala se preservan (no son movimiento vestibular).

### Spatial Composition

- Grid: `max-w-6xl` centrado con padding horizontal `px-6` (24px) en mobile, `px-8` en desktop. Secciones full-bleed con fondo alternado (`#0F0F0F` ↔ `#1A1A1A`) para crear ritmo sin líneas divisorias.
- Whitespace: **generous** — secciones con `py-24` (96px) vertical. El espacio en blanco (negro) es un elemento de diseño, no un vacío.
- Tensión visual: Headline hero en `clamp(2.5rem, 6vw, 4.5rem)` contra las service cards compactas. El contraste de escala crea jerarquía sin decoración.
- Content flow: **top-to-bottom linear** — el homepage cuenta una historia en secuencia: quiénes somos → qué construimos → qué ofrecemos → con quién hemos trabajado → hablemos.
