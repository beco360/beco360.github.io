# Prompt: Rebuild beco360.com
Date: 2026-03-12
Status: Ready for execution

## Objetivo

Reemplazar el sitio HTML/Bootstrap 4 de `C:/Dev/beco360/` con un sitio Astro 4 + Tailwind CSS completo, posicionado como AI-first digital studio colombiano con modelo de retainer por capacidad, desplegado en GitHub Pages vía GitHub Actions.

## Contexto

**Leer primero:**
- `docs/designs/2026-03-12-sitio-web-rebrand.md` — diseño completo, posicionamiento, modelo de negocio, Visual Design Brief
- `docs/design-system.md` — tokens, tipografía, colores, motion, anti-patterns
- `C:/Dev/cotejo.landing/package.json` — stack de referencia a replicar exactamente

**Stack:**
- Astro 4 + `@astrojs/tailwind` + `@astrojs/sitemap`
- `astro-font` para Plus Jakarta Sans (pesos 400, 500, 600, 700, 800)
- `sharp` para optimización de imágenes
- Biome para lint/format
- pnpm como package manager
- TypeScript estricto

**Assets a conservar (no borrar):**
- `assets/brand/Logo.png` + `assets/brand/favicon.ico`
- `assets/clients/Ingenieros AB.webp` + `assets/clients/lsj.webp`
- `CNAME` → mover a `public/CNAME` para que Astro lo copie al build

**Todo lo demás se reemplaza** (HTML, CSS, JS legacy).

## Fase 1 — Setup del proyecto

Inicializar Astro en `C:/Dev/beco360/`:
```
pnpm create astro@latest . --template minimal --typescript strict --no-git
pnpm add @astrojs/tailwind @astrojs/sitemap astro-font sharp
pnpm add -D @biomejs/biome tailwindcss
```

**`tailwind.config.mjs`** — tokens del design system:
```js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'surface':     '#0F0F0F',
        'surface-2':   '#1A1A1A',
        'surface-3':   '#2A2A2A',
        'copper':      '#D4755E',
        'copper-dark': '#C4654E',
        'text-1':      '#F5F5F5',
        'text-2':      '#9B9B9B',
        'text-3':      '#6B6B6B',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
}
```

**`astro.config.mjs`:**
```js
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://www.beco360.com',
  integrations: [tailwind(), sitemap()],
})
```

**`.github/workflows/deploy.yml`** — build + deploy a GitHub Pages en cada push a `master`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [master]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v3
        with: { version: 9 }
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: pnpm }
      - run: pnpm install
      - run: pnpm build
      - uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: dist
          branch: gh-pages
```

## Fase 2 — Estructura de archivos

```
src/
├── layouts/
│   └── Layout.astro            → HTML base, meta SEO, fonts, analytics
├── components/
│   ├── Nav.astro               → Sticky nav + mobile drawer
│   ├── Footer.astro            → Footer completo
│   ├── Button.astro            → Props: variant (primary|outline), href
│   ├── Badge.astro             → Props: text, variant (active|beta|coming-soon)
│   ├── Section.astro           → Wrapper py-24 + max-w-6xl + bg alternante
│   ├── PlanCard.astro          → Card de plan con precio, features, CTA
│   ├── ProductCard.astro       → Card producto con hover effects
│   ├── PortfolioItem.astro     → Item de portafolio con imagen + datos
│   ├── FeatureCategory.astro   → Grid de ejemplos de features por categoría
│   ├── FaqItem.astro           → Accordion item para FAQs
│   └── CalEmbed.astro          → Cal.com popup embed
├── pages/
│   ├── index.astro             → Homepage completo
│   ├── faqs.astro              → Página FAQ con acordeón
│   ├── cultura.astro           → Cultura y valores Beco 360
│   ├── legal/
│   │   ├── terms.astro
│   │   └── privacy.astro
│   └── 404.astro
└── styles/
    └── global.css              → resets, clase .reveal, animaciones
public/
└── CNAME                       → www.beco360.com (mover del root)
```

## Fase 3 — Homepage (index.astro)

Secciones en orden:

### 1. Nav
- Sticky top, fondo transparente → `bg-surface/90 backdrop-blur-md` al hacer scroll (JS vanilla ~10 líneas en `<script>` del componente)
- Links: Servicios | Productos | Portafolio | FAQs
- CTA derecha: botón copper "Agenda una llamada"
- Mobile (<768px): hamburger `aria-label="Abrir menú"` → drawer lateral desde la derecha, fondo `surface-2`, cierra con X o click fuera

### 2. Hero
```
Headline (h1, clamp 2.5rem→4.5rem, weight 800, text-1):
  "Contrata un programador experimentado
   por 1 salario mínimo al mes."

Sub-copy (text-2, text-xl, max-w-2xl):
  "Convierte tus ideas de negocio en realidad con AI.
   Sin prestaciones. Sin liquidaciones. Sin drama."

CTAs:
  [Agenda una llamada]  →  abre Cal.com popup  (botón copper primario)
  [Ver cómo funciona ↓] →  smooth scroll a #como-funciona  (botón outline)
```
- Sección: `py-32 md:py-40`, centrada, sin imagen de fondo
- Nota pequeña debajo del headline (text-3, text-sm):
  `"COP $2,921,000/mes = el costo real de un empleado al salario mínimo"`

### 3. Cómo funciona (id="como-funciona")
3 pasos en grid horizontal (desktop) / stack (mobile):
- **1. Agenda tu llamada** — Cuéntanos qué necesitas. Primera llamada gratis.
- **2. Pide tu feature** — Descríbela en un mensaje. Nosotros la construimos.
- **3. Recíbela lista** — En días, no semanas. Con AI trabajando de nuestro lado.

Cada paso: número grande en copper (weight 800), título, descripción corta.

### 4. Planes (id="planes")
3 cards `PlanCard.astro` en grid. Card "Estándar" con badge "Más popular":

| Campo | Mínimo | Estándar | Pro |
|---|---|---|---|
| Precio | COP $2,921,000/mes | COP $5,800,000/mes | COP $11,600,000/mes |
| Features/mes | 2 (1 cada 15 días) | 4 (1 por semana) | 8 (2 por semana) |
| Syncs/mes | 1 × 30 min | 2 × 45 min | 4 × 60 min |
| Turnaround | 7 días hábiles | 5 días hábiles | 3 días hábiles |
| Comunicación | WhatsApp async | Async prioritario | Canal dedicado |
| CTA | Agendar | Agendar | Agendar |

Nota debajo de los planes (text-3, centered):
`"El plan Mínimo cuesta exactamente lo mismo que contratar un empleado al salario mínimo — incluyendo prestaciones, ARL y todo lo demás."`

### 5. Ejemplos de features (id="features")
Grid por categoría usando `FeatureCategory.astro`. 7 categorías:
- Web y presencia: rediseño de homepage, formulario a WhatsApp, calculadora de precios, galería con filtros, testimonios, FAQ interactivo
- Automatizaciones: bot WhatsApp 24/7, email de bienvenida, recordatorio de citas, factura automática, reporte semanal, alerta de inventario
- Integraciones: pasarela de pago (Wompi/PSE/Nequi), Google Sheets, CRM, WhatsApp Business API
- AI y datos: chatbot con conocimiento del negocio, resumen de correos, categorización de pedidos, análisis de reseñas, transcripción de llamadas
- Dashboards: ventas del mes, KPIs en tiempo real, comparativo mensual, top clientes
- Herramientas internas: cotizador automático, inventario con alertas, generador de contratos PDF, registro de asistencia
- E-commerce: catálogo con filtros, cupones, seguimiento de pedidos, pasarela completa

### 6. Productos (id="productos")
2 cards `ProductCard.astro`:
- **Alfil**: "Inteligencia política para Colombia impulsada por AI y datos públicos." Badge: "Activo". Link externo placeholder.
- **Cotejo**: "Plataforma de fútbol — conecta canchas, organizadores y jugadores." Badge: "Beta". Link externo placeholder.

Hover: `border-copper`, `translateY(-4px)`, badge "Ver proyecto" aparece con `opacity-0 → opacity-100`.

### 7. Portafolio (id="portafolio")
Grid de clientes con `PortfolioItem.astro`:
- Ingenieros AB — Civil — `assets/clients/Ingenieros AB.webp`
- LSJ — E-commerce — `assets/clients/lsj.webp`
- Real State — Inmobiliaria — placeholder image

### 8. CTA final
Sección `surface-2`, centrada:
```
Headline: "¿Listo para convertir tu próxima idea en realidad?"
Sub:      "Primera llamada gratis. Sin compromisos."
CTA:      [Agenda tu llamada ahora]  → Cal.com popup
```

### 9. Footer
- Logo (texto "Beco 360" si el PNG no se ve bien en dark) + tagline
- Links: Servicios | Productos | FAQs | Cultura | Términos | Privacidad
- Contacto: team@beco360.com | wa.me/573508108761
- Redes: Facebook | Instagram
- Copyright: © 2026 Beco 360

## Fase 4 — Animaciones

**`global.css`:**
```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 300ms ease, transform 300ms ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal { transition-duration: 0ms; }
}
/* Stagger vía delay inline en cada elemento: style="transition-delay: 80ms" */
```

**Script en `Layout.astro`** (vanilla JS, ~15 líneas):
```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
}, { threshold: 0.1 })
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
```

Aplicar `.reveal` + `style="transition-delay: {n*80}ms"` a cada elemento dentro de secciones.

Micro-interactions vía Tailwind utility classes:
- Botones: `active:scale-[0.97] transition-transform duration-150`
- Nav links: `relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-copper hover:after:w-full after:transition-all`
- Cards: `hover:-translate-y-1 transition-transform duration-200`

## Fase 5 — Analytics y Cal.com

**`Layout.astro`** — scripts con placeholders claramente marcados:
```html
<!-- GA4: reemplazar G-XXXXXXXXXX con el ID real de GA4 -->
<!-- FB Pixel: mantener ID 1333394283480495 del sitio actual -->
<!-- GTM: mantener ID GTM-TMJ9B58 del sitio actual -->
```

**`CalEmbed.astro`** — usar `beco360/llamada-inicial` como placeholder del cal.com link. El componente expone un atributo `data-cal-link` para fácil reemplazo.

## Acceptance Criteria

**Build:**
- [ ] `pnpm build` genera `dist/` sin errores ni warnings de TypeScript
- [ ] `public/CNAME` contiene `www.beco360.com` y aparece en `dist/`
- [ ] GitHub Actions workflow hace deploy exitoso a rama `gh-pages`
- [ ] Todas las páginas tienen `<title>` y `<meta name="description">` únicos

**Funcional:**
- [ ] Cal.com popup abre desde todos los botones "Agenda una llamada"
- [ ] Nav scroll: transparente → blur+opaco al bajar 50px
- [ ] Hamburger abre/cierra drawer sin saltos ni scroll lock issues
- [ ] Smooth scroll a secciones `#como-funciona`, `#planes`, `#productos`, `#portafolio`
- [ ] 404.astro sirve correctamente con copy de marca

**Diseño — tokens:**
- [ ] Cero valores hex hardcodeados en componentes — todo via `text-text-1`, `bg-surface`, `bg-copper`, etc.
- [ ] Plus Jakarta Sans cargada con `astro-font`, `font-display: swap`
- [ ] Hero h1: `clamp(2.5rem, 6vw, 4.5rem)`, weight 800
- [ ] Secciones alternan fondo `surface` ↔ `surface-2`

**Diseño — interacciones:**
- [ ] Cards de producto: borde copper + `-translate-y-1` en hover
- [ ] Botón primario: copper → copper-dark en hover, `scale-[0.97]` en press
- [ ] Nav links: underline copper animado en hover

**Animaciones:**
- [ ] `.reveal` + `IntersectionObserver` activos en todas las secciones
- [ ] Stagger de 80ms entre elementos de la misma sección
- [ ] `prefers-reduced-motion` desactiva transiciones de entrada

**Accesibilidad:**
- [ ] Landmarks: `<nav>`, `<main>`, `<footer>`, secciones con `<section>` + `aria-labelledby`
- [ ] Todas las imágenes con `alt` descriptivo + `width` + `height`
- [ ] Hamburger: `aria-label="Abrir menú"` + `aria-expanded` dinámico
- [ ] Focus visible en todos los elementos interactivos (no `outline: none` sin reemplazo)
- [ ] Contraste texto/fondo ≥ 4.5:1

**Anti-AI-slop (bloqueado — cualquiera de estos es rechazo):**
- [ ] Ningún gradiente purple-to-blue de fondo
- [ ] Inter/Roboto/Arial NO usadas como display font
- [ ] Ninguna ilustración stock isométrica
- [ ] Hero copy NO es "Bienvenido a Beco 360" ni variante genérica
- [ ] Cards NO tienen sombra `box-shadow` idéntica entre sí

## Implementation Notes

- **Logo en dark**: si `Logo.png` tiene fondo blanco, aplicar `class="invert"` (Tailwind) para invertir en dark mode. Alternativa: usar solo texto "Beco 360" en nav.
- **`astro-font`**: cargar pesos 400, 500, 600, 700, 800. Subset: `latin`.
- **Mobile nav drawer**: implementar con clase CSS `translate-x-full` → `translate-x-0`, no con `display:none`, para que la animación sea suave.
- **Imágenes de clientes**: usar `<Image>` de Astro (`import { Image } from 'astro:assets'`) para optimización automática a WebP.
- **Biome**: copiar configuración de `C:/Dev/cotejo.landing/biome.json` como base.
- **No usar**: Bootstrap, jQuery, ni ninguna dependencia del sitio anterior.
- **`node_modules/` del legacy**: el repo actual no tiene `node_modules` de Astro. Inicializar desde cero es limpio.
