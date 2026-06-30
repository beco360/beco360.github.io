# Design: Pivote a consultoría forward-deployed
Date: 2026-06-30
Status: Approved
Approach: Reposicionar Beco de "features bajo retainer" a consultoría por fases (Diagnóstico → Construcción → Evolución)

## Problem

El modelo de "features sueltas bajo retainer mensual" (ver `2026-03-12-sitio-web-rebrand.md`)
posicionaba a Beco como mano de obra barata ("un programador por 1 salario mínimo"). Competía
por precio, sonaba a commodity y sufría churn ("ya terminé lo que necesitaba"). El founder dejó
de creer en ese concepto.

Referencia: OpenAI (DeployCo, FDEs, consultoría $10M+), Anthropic (Applied AI, Partner Network)
y Palantir (modelo FDE raíz) demostraron que el valor está en la **implementación embebida**,
no en vender unidades de trabajo. Detalle en `docs/research/2026-06-30-forward-deployed-ai-consulting.md`.

## Solution

Reposicionar Beco como **consultoría de transformación con IA forward-deployed para PyMEs
colombianas** (mismo ICP). Toda relación recorre un ciclo de 3 fases; todas arrancan por el
diagnóstico pagado.

| Fase | Qué es | Precio (COP) |
|---|---|---|
| **Diagnóstico** | Embebido 1–2 sem calendario (~10–15h efectivas). Entrega informe + roadmap priorizado. Acreditable al primer Build. | **$3,500,000** one-time |
| **Construcción** | Construye la oportunidad de mayor retorno: prototipo → producción. Precio cerrado por alcance. | **desde $8,000,000** (típico $8M–$30M) |
| **Evolución** | Mantenimiento + nuevas oportunidades del roadmap. Sin permanencia. | **desde $2,500,000/mes** |

### Pricing — postura Equilibrada
Elegida sobre Premium y Accesible. Racional: el Diagnóstico debe cubrir el costo de oportunidad
del founder (no subcotizar) y la Construcción anclar en el piso del mercado colombiano de
software a medida (proyectos acotados COP $10–28M). TRM de referencia ~COP $3,444/USD (jun-2026).

### Programa fundador (no publicado en el sitio)
El precio de lista NO se baja para "darse a conocer". En su lugar, una **tarifa fundador**
temporal para los primeros ~3 clientes (Diagnóstico con descuento/gratis + % en la primera
Construcción) a cambio de testimonio + caso de estudio. Se ofrece en la llamada, se retira al
acumular ~3 casos. Detalle y racional en `docs/business-model.md`.

## Cambios en el sitio

- **Nuevo:** `src/components/EngagementModel.astro` — sección de 3 fases con precios y flujo
  Diagnóstico → Construcción → Evolución (reemplaza el slider). Ancla `#modelo`.
- **Eliminados:** `PricingSlider.astro` (slider de features) y `PlanCard.astro` (planes
  Mínimo/Estándar/Pro, ya era código muerto).
- **Copy reescrito:** `index.astro` (hero, "cómo trabajamos", stats, FAQs, CTAs),
  `FeaturesDeliverablesGrid.astro` (de "una feature = una solución" a "del problema a un sistema"),
  `faqs.astro` (10 FAQs), `cultura.astro` (valores), `legal/terms.astro` (términos a 3 fases),
  `Layout.astro` (JSON-LD, metas, OG), `Nav`/`Footer` (links).
- **Chatbot:** `api/chat.ts` system prompt reescrito al modelo por fases; `ChatWidget.tsx`
  (welcome + sugeridas).
- **OG image:** `public/og.svg` (tagline actualizado).

## Edge Cases

- Nav "Servicios" apuntaba a `#features` inexistente → se reasignó a `#modelo` (engagement) y
  `#features` (lo que construimos, ahora con `id`).
- El diagnóstico se comunica como "1–2 semanas" (calendario), no como horas-hombre, para no
  confundir al cliente; el desglose real (~10–15h) vive solo en `business-model.md`.

## Trade-offs

- **Revenue menos suave** que el MRR puro anterior: los Builds son ticket grande pero
  intermitente. La capa de Evolución (MRR) da estabilidad → convertir Builds a Evolución es
  prioritario.
- **Se pierde el gancho memorable** del "1 salario mínimo". A cambio se gana posicionamiento
  premium y un ICP (PyME que busca socio de transformación) menos sensible a precio.
- **El diagnóstico pagado añade fricción** vs. la "llamada gratis". Se mitiga acreditándolo al
  Build y entregando un roadmap que vale por sí solo.

## Open Questions

- ¿Crear un evento de Cal.com dedicado al "diagnóstico" o mantener `llamada-inicial`?
- ¿El piso de Construcción "desde $8M" filtra demasiado a la PyME pequeña? Validar con los
  primeros diagnósticos reales.
- ¿Publicar el programa fundador en el sitio en algún momento, o mantenerlo siempre como oferta
  personal en la llamada?
- Componentes genéricos sin uso (`ProductCard`, `PortfolioItem`, `FeatureCategory`, `CalEmbed`,
  `Button`) — ¿limpiar o conservar para v2?
