# Design: Pricing Slider con descuento por volumen
Date: 2026-03-12
Status: Approved
Approach: Slider único con syncs incluidos por tier

## Problem
La sección de planes actual tiene 3 tarjetas fijas (Mínimo, Estándar, Pro) con precios
esencialmente lineales — casi sin descuento por volumen. No hay interacción ni incentivo
visible para contratar más features.

## Solution
Reemplazar las 3 tarjetas con un componente `PricingSlider.astro`: slider horizontal de
1-12 features con cálculo de precio en tiempo real. A más features, menor precio por
feature. Syncs y nivel de comunicación se incluyen automáticamente según el rango elegido.
Turnaround fijo en 5 días hábiles para todos los tiers.

## Data Model

```typescript
const tiers = [
  { max: 1,  precioUnitario: 1_800_000, syncs: '1 × 30 min', comms: 'Async (WhatsApp)',  ahorro: 0  },
  { max: 3,  precioUnitario: 1_500_000, syncs: '1 × 30 min', comms: 'Async (WhatsApp)',  ahorro: 17 },
  { max: 6,  precioUnitario: 1_300_000, syncs: '2 × 45 min', comms: 'Async prioritario', ahorro: 28 },
  { max: 10, precioUnitario: 1_100_000, syncs: '4 × 60 min', comms: 'Canal dedicado',    ahorro: 39 },
  { max: 12, precioUnitario: 1_000_000, syncs: '4 × 60 min', comms: 'Canal dedicado',    ahorro: 44 },
]
```

## Component Structure

```
PricingSlider.astro
├── Slider (input range 1-12) con tick marks en breakpoints
├── Price display: total COP (grande) + COP/feature (pequeño) + USD
├── Savings badge ("Ahorras X% vs. precio unitario") — oculto en feature=1
├── Incluye: syncs + turnaround (fijo 5 días) + comunicación
└── CTA: data-cal-link="beco360/llamada-inicial"
```

## Edge Cases
- feature=1: sin badge de ahorro
- Sin JS: fallback estático mostrando 4 features / $5,200,000 (tier Estándar)
- prefers-reduced-motion: transición del número desactivada
- Mobile: thumb mínimo 44px, slider full-width

## Trade-offs
- PlanCard.astro ya no se usa en home (se puede mantener por si acaso o eliminar)
- Eliminar los 3 planes fijos puede confundir usuarios que ya conocen los nombres "Mínimo/Estándar/Pro"
- La curva de precios propuesta es más agresiva en descuento que la actual (lineal → escalonada)

## Open Questions
- ¿Se actualiza el texto del Cal.com link para pasar la cantidad de features seleccionada?
- ¿Se mantiene la nota "El plan Mínimo cuesta lo mismo que un empleado al salario mínimo"?
