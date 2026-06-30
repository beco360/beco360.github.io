# Modelo de Negocio — Beco 360
Fecha: 2026-06-30
Estado: Activo (pre-revenue) · Pivote de "features bajo retainer" → consultoría forward-deployed

> Contexto del pivote y referencias de mercado (OpenAI, Anthropic, Palantir):
> ver [docs/research/2026-06-30-forward-deployed-ai-consulting.md](research/2026-06-30-forward-deployed-ai-consulting.md).

---

## Resumen ejecutivo

Beco 360 es una **consultoría de transformación con IA** para PyMEs colombianas. En vez de vender "features sueltas de un menú", Beco se **incrusta en la operación del cliente** (modelo *forward-deployed*), diagnostica dónde el negocio pierde tiempo y plata, y construye el sistema de software/IA que lo resuelve — y lo deja funcionando en producción.

El cambio respecto al modelo anterior:
- **Antes:** features por retainer mensual. Posicionaba a Beco como mano de obra barata ("un dev por 1 salario mínimo") → competía por precio y sufría churn ("ya terminé lo que necesitaba").
- **Ahora:** consultoría que vende **resultado de negocio + despliegue**. Cada relación arranca con un **diagnóstico pagado** y avanza por un ciclo de engagement (Diagnóstico → Construcción → Evolución). El recurrente existe, pero justificado por un sistema vivo en producción, no por unidades pendientes.

Beco usa AI como parte central del equipo para ejecutar a velocidad de estudio grande con equipo mínimo, manteniendo márgenes altos.

---

## Propuesta de valor

**Para el cliente:**
> No vendemos horas ni "features". Entramos a tu operación, encontramos dónde estás perdiendo tiempo y dinero, y construimos el sistema con IA que lo resuelve — y lo dejamos andando. Como tener un equipo de tecnología senior, sin contratarlo.

**El gancho de entrada:** un **diagnóstico de bajo riesgo y precio fijo**. En 1–2 semanas el cliente recibe un mapa claro de sus oportunidades de automatización/IA y un plan priorizado por retorno — algo accionable, le contrate o no el resto a Beco.

**Diferenciadores:**
- **Forward-deployed:** nos incrustamos en la operación real, no entregamos desde afuera y desaparecemos.
- **Diagnóstico antes de cotizar:** entendemos el problema de negocio antes de proponer software. Nada de "construir lo que pidieron" sin validar que resuelva algo.
- **Velocidad con AI:** del diagnóstico a un prototipo funcionando en días, no meses.
- **Resultado medible:** cada intervención se ata a una métrica (tiempo ahorrado, ventas, errores reducidos).
- **Sin contratos de permanencia** en la fase de evolución — se continúa porque el sistema da valor, no por obligación contractual.

---

## Segmento objetivo (ICP)

**Cliente ideal (sin cambios respecto al modelo anterior):**
- Dueño o gerente de PyME colombiana.
- Tiene procesos manuales, repetitivos o software sin resolver (cotizaciones, facturación, inventario, atención al cliente, reportería, agendamiento).
- No puede o no quiere contratar un equipo de tecnología full-time (costo, burocracia, riesgo).
- Tiene presupuesto de **$3–10M/mes** para tecnología, o capacidad de invertir en un proyecto acotado.
- Bogotá, Colombia — primario. Resto de Colombia — secundario.

**No es el cliente ideal:**
- Empresas que necesitan un equipo dedicado full-time interno.
- Quien busca "una cotización por una feature" sin querer entender su propio problema.
- Clientes que quieren "todo por nada".

---

## El modelo de engagement (núcleo del negocio)

Toda relación con un cliente recorre el ciclo *forward-deployed*. No todos los clientes llegan al final, pero **todos arrancan por el diagnóstico**.

### Fase 0 — Diagnóstico (Discovery) · *puerta de entrada, pagada*
- **Duración:** ~10–15 horas de trabajo efectivo (con AI), repartidas en 1–2 semanas calendario. No es dedicación full-time: el calendario es para coordinar las sesiones con el cliente. Desglose típico: descubrimiento 2–3h, walkthrough de la operación 2–3h, revisión de sistemas 1–2h, análisis y priorización 3–4h, redacción del informe 2–3h.
- **Qué hacemos:** entrevistas con el equipo, observamos los flujos reales, mapeamos los sistemas actuales, identificamos dónde la IA/automatización da más retorno.
- **Entregable:** un **informe de oportunidades + roadmap priorizado** por impacto y esfuerzo, con estimación de retorno. Es del cliente — se lo lleva aunque no continúe.
- **Por qué pagado:** califica al cliente, nos paga por pensar, y posiciona a Beco como asesor, no como proveedor de mano de obra. Reemplaza la antigua "llamada gratis".

### Fase 1 — Construcción (Build & Deploy)
- Tomamos las 1–2 oportunidades prioritarias del roadmap y las construimos.
- Empezamos por un **prototipo / quick win** con métricas de éxito claras, y lo endurecemos a producción: integraciones con sus sistemas, monitoreo, seguridad de datos.
- Trabajamos hombro a hombro con el cliente. Entregable: un sistema **funcionando dentro de su operación**, no un repositorio.

### Fase 2 — Evolución (Scale & Support) · *recurrente legítimo*
- Una vez el sistema vive en producción, lo mantenemos, lo escalamos a más áreas y construimos las siguientes oportunidades del roadmap.
- Aquí vive el ingreso recurrente — pero anclado a un sistema que ya da valor, no a "features pendientes de un menú".

---

## Modelo de ingresos

### Pricing por fase (PyME Colombia)

| Fase | Formato | Precio (COP) | Notas |
|---|---|---|---|
| **Diagnóstico** | Precio fijo, one-time | **$3,500,000** | ~10–15h de trabajo efectivo en 1–2 semanas calendario. Acreditable al primer Build. |
| **Construcción** | Por proyecto acotado | **desde $8,000,000** (típico $8M–$30M) | Precio cerrado por el alcance definido en el Diagnóstico. |
| **Evolución** | Retainer mensual | **desde $2,500,000/mes** (típico $2.5M–$5M) | Mantenimiento + nuevas oportunidades del roadmap. Cancelable con 15 días. |

> **Postura de precios: Equilibrada.** Fija el precio de lista de modo que el Diagnóstico cubra el costo de oportunidad del founder y la Construcción quede en el piso del mercado colombiano de software a medida, sin subcotizar.
>
> Referencia de mercado (TRM ~COP $3,444/USD, jun-2026): boutiques globales cobran USD $3K–7K por un discovery a PyME y USD $7K–40K por builds; el mercado colombiano de software a medida ubica proyectos acotados en COP $10–28M. Beco se ancla en el piso accesible de ese rango. El extremo enterprise (OpenAI, desde USD $10M) está fuera de este mercado. Detalle en [research](research/2026-06-30-forward-deployed-ai-consulting.md).

### Tipos de revenue
- **Diagnósticos** (one-time): volumen de entrada, alto margen, bajo riesgo. Motor de pipeline.
- **Builds** (por proyecto): ticket grande, ingreso principal en la fase de validación.
- **Evolución** (MRR): recurrente que crece con la base de sistemas en producción.

### Estrategia de expansión
- **Adquisición:** diagnóstico de bajo riesgo y precio fijo — fácil de decir que sí.
- **Conversión:** un buen roadmap genera el primer Build casi solo (el diagnóstico se acredita).
- **Expansión:** cada sistema en producción abre las siguientes oportunidades del roadmap → más Builds y más Evolución, sin nueva venta en frío.

**Métrica clave de expansión:** % de diagnósticos que convierten a Build, y nº de Builds adicionales por cliente a los 6 meses.

---

## Estrategia de precios de lanzamiento (programa fundador)

Beco es nueva: necesita darse a conocer y conseguir los primeros casos. La tentación es bajar el precio de lista — **error**. En consultoría B2B el precio es señal de calidad: un precio bajo no compra confianza, la rompe ("¿será junior?"). Y bajar el precio de lista genera churn cuando toca subirlo.

**La estrategia correcta separa dos cosas:**
- **Precio de lista** = la tabla de arriba. Es lo que vale el trabajo y lo que ve el público. No se baja.
- **Tarifa fundador** = descuento **explícito y temporal** para los **primeros ~3 clientes**, a cambio de un entregable concreto: **testimonio + permiso para usarlo como caso de estudio**. Puede ser el Diagnóstico con descuento fuerte (o gratis) y/o un % en la primera Construcción.

**Reglas:**
- Se ofrece **en la llamada**, no se publica en el sitio (más potente como oferta personal "exclusiva"; mantiene el posicionamiento premium intacto).
- Se enmarca como "tarifa de lanzamiento, primeros N clientes" → cuando se retira no es "subí el precio" sino "se acabó la promo".
- **Condición de salida:** se retira al acumular ~3 casos documentados.

**Por qué importa especialmente para Beco:** el founder opera en paralelo, con tiempo limitado y alto costo de oportunidad. Muchos clientes baratos = más overhead y soporte por menos margen → riesgo de colapso antes de despegar. **Pocos clientes que pagan bien > muchos que pagan poco.**

---

## Estructura de costos

### Costos fijos (hoy)
| Ítem | Costo mensual |
|---|---|
| AI (Claude, Cursor, etc.) | ~$1,000,000 |
| **Total fijos** | **~$1,000,000** |

### Costos variables (al escalar con freelancers)
| Ítem | Costo |
|---|---|
| Dev freelancer (build) | ~$700,000–$800,000 por sprint-semana de trabajo delegado |
| Margen retenido en builds delegados | ~35–50% |

### Al contratar empleados (Fase 3 del negocio)
| Ítem | Costo mensual |
|---|---|
| Dev/consultor junior-mid (salario + prestaciones) | ~$5,000,000–$7,000,000 |
| Dev/consultor senior | ~$8,000,000–$12,000,000 |

---

## Capacidad de entrega

### Unidad de trabajo
La unidad ya no es la "feature" sino el **sprint de construcción** (~2 semanas) y el **diagnóstico** (~1–2 semanas). Con AI, un ingeniero senior ejecuta en un sprint lo que un equipo tradicional haría en 1–2 meses.

### Capacidad por modalidad
| Modalidad | Diagnósticos/mes | Builds activos en paralelo |
|---|---|---|
| Founder paralelo (noches + fines de semana) | 1–2 | 1 |
| Founder full-time | 3–4 | 2–3 |
| + 1 freelancer | — | +1–2 |
| + 1 dev/consultor empleado | +2 | +2–3 |

---

## Fases de crecimiento del negocio

### Fase 1 — Validación (Meses 1–9)
**Modalidad:** Paralelo, solo (mientras mantiene empleo actual).
**Foco:** vender diagnósticos y convertir 2–4 en Builds.
**Meta:** 3–5 clientes que pasaron por el ciclo completo, primeros casos de éxito documentados.
**Objetivo real:** validar que la PyME paga por diagnóstico y que el diagnóstico convierte a Build.
**Costos:** ~$1M fijos → margen casi total.

### Fase 2 — Escalar sin renunciar (Meses 9–18)
**Modalidad:** Paralelo + 1–2 freelancers para los Builds.
**Foco:** founder lidera diagnósticos y arquitectura, delega construcción.
**Meta:** pipeline constante de diagnósticos, varios sistemas en Evolución (MRR base), $15–28M de revenue mensual mezclado (builds + MRR).
**Trigger de contratación:** más demanda de Builds de la que puede atender solo.

### Fase 3 — Salida del empleo + equipo (Meses 18–24)
**Trigger de salida:** revenue consistente (~$50M/mes mezclado) por 2–3 meses seguidos.
**Modalidad:** Founder full-time + 2 devs/consultores empleados.
**Estructura:** founder hace discovery + arquitectura; el equipo ejecuta Builds y Evolución.

### Fase 4 — Escala (Mes 24+)
Cada consultor adicional agrega capacidad de diagnóstico + Build. Modelo predecible: más diagnósticos → más Builds → más MRR de Evolución.

---

## Proyecciones de revenue

| Fase | Clientes activos | Mix de ingreso | Revenue bruto/mes | Take-home estimado |
|---|---|---|---|---|
| Fase 1 (solo, paralelo) | 3–5 | Diagnósticos + 1–2 Builds | $8–14M | $7–13M |
| Fase 2 (paralelo + freelancers) | 8–12 | Builds + MRR Evolución | $20–34M | $14–24M |
| Fase 3 (full-time + 2 devs) | 12–15 | Builds grandes + MRR estable | $50–72M | $40–55M |

> Nota: el revenue ahora es **menos suave** que el MRR puro del modelo anterior (los Builds son ticket grande pero intermitente). La capa de Evolución (MRR) es la que da estabilidad — por eso converter Builds a Evolución es prioritario.

---

## Métricas clave a trackear

| Métrica | Por qué importa |
|---|---|
| Diagnósticos vendidos/mes | Salud del pipeline de entrada |
| % diagnóstico → Build | La conversión más importante del modelo |
| Ticket promedio de Build | Tamaño del ingreso principal |
| MRR de Evolución | Estabilidad del negocio |
| Builds adicionales por cliente a 6 meses | Señal de expansión (land & expand) |
| Churn de Evolución | Calidad del sistema entregado |
| Margen por Build | Salud operacional al delegar |

---

## Go-to-market (primer cliente)

### Canal primario: red personal
El primer cliente casi siempre viene de alguien que ya conoce al founder.
**Acción:** identificar 5–10 contactos con negocios y procesos manuales sin resolver, y ofrecerles el **diagnóstico** (no "una feature").

### Canal secundario: Meta Ads
**Audiencia:** dueños de negocio, gerentes, Colombia, 28–50 años.
**Copy:** "¿Tu negocio pierde horas en tareas manuales? Te hacemos un diagnóstico y te mostramos qué automatizar con IA — y lo construimos."
**CTA:** Agenda tu diagnóstico (Cal.com).
**Presupuesto de prueba:** $200,000–$300,000 COP para validar el mensaje.

### Modelo de conversión
Anuncio / referido → **llamada de 20 min (Cal.com)** → contratación del **diagnóstico pagado** → roadmap → **Build** → **Evolución**.

> La llamada de 20 min sigue siendo gratis y sin compromiso; lo que cambia es que su objetivo es **vender el diagnóstico**, no cerrar un retainer de features.

---

## Ventaja competitiva

1. **Diagnóstico antes que código:** entendemos el problema de negocio — las agencias tradicionales cotizan lo que el cliente pidió sin cuestionarlo.
2. **Forward-deployed:** nos incrustamos en la operación, no entregamos desde afuera.
3. **Velocidad con AI:** del diagnóstico a un sistema en producción en una fracción del tiempo de una agencia tradicional.
4. **Productos propios en producción:** Alfil, Cotejo, LSJ — prueba de ejecución real.
5. **Nicho desatendido:** OpenAI/Anthropic y las grandes consultoras apuntan al enterprise. La PyME colombiana queda sin un socio serio de transformación con IA — ese es el espacio de Beco.

---

## Riesgos y mitigaciones

| Riesgo | Probabilidad | Mitigación |
|---|---|---|
| La PyME no entiende por qué pagar un "diagnóstico" | Media-Alta | Acreditarlo al Build + entregar un roadmap tangible y accionable que valga por sí solo |
| Revenue irregular (Builds intermitentes) | Media | Priorizar convertir Builds a Evolución (MRR); mantener pipeline de diagnósticos lleno |
| Scope creep en los Builds | Media | Precio cerrado por scope definido en el diagnóstico; cambios = nuevo sprint |
| Capacidad colapsada por Builds simultáneos | Media | Límite de Builds activos en paralelo; delegar a freelancers revisados |
| Competencia que copia el modelo | Alta a largo plazo | Velocidad de ejecución + casos de éxito + relación incrustada = moat real |
| No conseguir el primer cliente | Media | Red personal como canal primario; el diagnóstico de bajo riesgo baja la fricción de entrada |
