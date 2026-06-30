# Research — Consultoría forward-deployed: qué hicieron OpenAI, Anthropic y Palantir
Fecha: 2026-06-30
Estado: Referencia (insumo para el pivote de Beco a consultoría)

---

## Por qué este research

Beco está pivotando de un modelo de **"features bajo retainer mensual"** a un modelo de **consultoría forward-deployed**. Antes de reescribir el modelo de negocio y el sitio, se investigó qué hicieron los líderes del sector (OpenAI y Anthropic) cuando montaron sus brazos de consultoría, y de dónde sacaron el modelo (Palantir).

**Insight central que justifica el pivote:**
> El valor ya no está en el modelo de IA (se está volviendo commodity). El valor está en la **implementación dentro del cliente** — "builders close to the user". Quien se incrusta en la operación del cliente y resuelve el problema de negocio captura el valor, no quien vende acceso a la herramienta.

Esto es exactamente lo que separa una **consultoría** de un **taller de features baratas**: la consultoría vende *resultado de negocio + despliegue*, no *unidades de trabajo de un menú*.

---

## 1. La raíz: el modelo "Forward-Deployed Engineer" de Palantir

Palantir inventó hace ~20 años el rol de **Forward-Deployed Engineer (FDE / FDSE)**:

- En vez de "entregar software y desaparecer", el ingeniero **se incrusta físicamente dentro del cliente**.
- Mapea los flujos reales, aprende sistemas que no conocía, encuentra los puntos de dolor de primera mano.
- Configura la plataforma al contexto local del cliente y **mezcla consultoría con ingeniería hands-on**.
- Cultura clave: comodidad con la ambigüedad, iteración rápida, humildad sobre las suposiciones iniciales (muchas ideas iniciales se revisan).

Tanto OpenAI como Anthropic copiaron **explícitamente** este modelo. Es el patrón que mejor encaja con despliegues de IA de alto riesgo, donde el problema no es la capacidad técnica del modelo sino la integración organizacional.

---

## 2. OpenAI → construirlo ellos mismos, ticket alto

### El programa de consultoría de $10M+ (julio 2025)
- OpenAI lanzó un brazo de consultoría con engagements **a partir de USD $10 millones** (reportado por The Information).
- Clientes tempranos: **Departamento de Defensa de EE.UU.** (~$200M) y **Grab** (Sudeste Asiático, usando GPT-4o Vision para mapear vías desde imágenes 360°).
- Contratos **multi-año**, que pueden escalar a cientos de millones. OpenAI cree que eventualmente habrá deals de mil millones.

### El modelo de entrega
- Mandan sus propios **Forward Deployed Engineers (FDEs) a trabajar _dentro_ del cliente**.
- Afinan GPT-4o sobre los datos propietarios del cliente, construyen chatbots / agentes / workflows a medida, lo cosen al core del negocio.
- **No es "te vendo la API y arréglate"** — es entrega completa, hombro a hombro con los equipos de ingeniería y dominio del cliente.
- Ventaja para OpenAI: control de calidad (evita resultados inconsistentes de integradores terceros) + nuevo flujo de ingresos de alto margen + más influencia sobre el éxito del cliente (retención).

### La OpenAI Deployment Company ("DeployCo") (mayo 2026)
- Lo formalizaron como **empresa aparte**, con **+$4 mil millones** de inversión inicial y valuación en las decenas de miles de millones.
- Partnership con 19 firmas de inversión, consultoras e integradores.
- **Adquirieron Tomoro** (consultora de IA aplicada) para arrancar con **~150 FDEs y Deployment Specialists** desde el día uno.

### El ciclo de un engagement (DeployCo)
1. **Diagnóstico enfocado** de dónde la IA crea más valor.
2. Eligen **pocos workflows prioritarios** junto con el liderazgo y los equipos operativos del cliente.
3. **Diseñan, construyen, prueban y despliegan** sistemas en producción, conectando los modelos a los datos, herramientas, controles y procesos del cliente.
4. Sistemas pensados para **mejorar con el tiempo** a medida que salen nuevos modelos/capacidades.

---

## 3. Anthropic → habilitar un ecosistema, modelo de palanca

Anthropic NO se metió a hacer la entrega masiva ellos mismos. Jugó a **escalar vía terceros + pre-venta técnica**:

### Applied AI team
- **Solutions Architects** que actúan como **asesor técnico de confianza en pre-venta**.
- Ayudan al cliente enterprise a entender el valor de Claude, "pintar la visión" de cómo integrarlo, diseñar **evals** y arquitecturas escalables.
- Acompañan del descubrimiento técnico → evaluación → despliegue. Viajan ocasionalmente a sitio del cliente para workshops.
- Salario de referencia: **~$240K–270K USD** (OTE) → indica lo alto que el mercado valora el rol híbrido ingeniería+consultoría.

### Empresa de servicios enterprise
- Anthropic creó una empresa de servicios de IA enterprise junto con **Blackstone, Hellman & Friedman y Goldman Sachs**.
- Objetivo: meter Claude en las operaciones más importantes de **empresas medianas**, con Applied AI engineers de Anthropic trabajando junto al equipo de ingeniería.

### Claude Partner Network (marzo 2026)
- **$100 millones** comprometidos para 2026 (y crecerá) para entrenar/certificar a consultoras y agencias que implementan Claude.
- Una porción significativa va directo a los partners: training, sales enablement, market development, co-marketing.
- **Escalaron el equipo de cara a partners 5×**: Applied AI engineers de apoyo a partners en deals vivos, arquitectos técnicos para scope de implementaciones complejas, GTM localizado.
- Recursos: Partner Portal con Anthropic Academy, playbooks de venta del propio equipo GTM, Services Partner Directory (donde los compradores enterprise encuentran firmas con experiencia en Claude).
- Primera certificación técnica: **Claude Certified Architect, Foundations** (para arquitectos que construyen apps en producción con Claude). Vienen más para sellers, arquitectos y devs.
- **Code Modernization starter kit**: kit para migrar código legacy y remediar deuda técnica — es el workload enterprise #1 de demanda, donde las capacidades agénticas de Claude se traducen más directo en resultados.

---

## 4. El contraste OpenAI vs Anthropic

| | **OpenAI** | **Anthropic** |
|---|---|---|
| Estrategia | Lo construyen ellos (DeployCo, FDEs incrustados) | Habilitan un ecosistema de partners + arquitectos pre-venta |
| Ticket | $10M+ por engagement | Enterprise mediano vía partners |
| Mecanismo | Entrega de alto contacto, control directo | Palanca / canal / certificación |
| Riesgo asumido | Alto (entregan ellos) | Bajo (habilitan a otros) |

Ambos parten del **mismo patrón Palantir** (forward-deployed). La diferencia es si lo internalizan (OpenAI) o lo distribuyen (Anthropic).

---

## 5. El patrón replicable: el ciclo de engagement forward-deployed

Lo importante para Beco **no es el ticket de $10M** (eso es el extremo enterprise). Lo replicable y valioso es **el ciclo estructural**, idéntico en Palantir, OpenAI y Anthropic:

### Discovery → Prototipo → Build → Escalar/Soportar

1. **Discovery (descubrimiento).** Sprint embebido de 1–4 semanas: entrevistas, observar workflows, mapear sistemas, recolectar datos de dolores y oportunidades. **Entregable: un informe + roadmap priorizado** de intervenciones de IA con impacto estimado. *Esto se cobra — no es una llamada gratis.*
2. **Prototipo.** Construir 1–2 quick wins que demuestran valor, con **métricas de éxito claras** (ej. menos tiempo de atención, mejor precisión de extracción). El objetivo es validar valor y factibilidad, no pulir producción.
3. **Build & integrate.** Lo que prueba valor se lleva a producción: integraciones endurecidas, monitoreo, seguridad/gobernanza de datos, trabajando con los equipos del cliente.
4. **Escalar & soportar.** Escalar a más equipos/funciones, capacitación, SOPs, soporte de incidentes y mejoras. **Aquí vive el recurrente** — pero justificado por un sistema en producción, no por "features pendientes en un menú".

---

## 6. Cómo se baja a escala estudio/PyME (blueprint para Beco)

El research de mercado sugiere, para un estudio boutique que replica el modelo:

- **Posicionamiento:** no competir en escala. Posicionarse como **socio de transformación con IA especializado en un nicho** (industria, función o región) que las grandes ignoran. → Para Beco: **PyMEs colombianas**.
- **Diagnóstico pagado como puerta de entrada.** Reemplazar la "llamada gratis" por un **sprint de discovery pagado** que califica al cliente, te paga por pensar y te posiciona como asesor, no como proveedor de mano de obra.
- **Pricing por engagement, no por unidad.** El research cita para el mercado gringo discovery+prototipo en USD $100K–300K y builds en seis/siete cifras. **Para PyME colombiana hay que bajarlo fuerte** — el diagnóstico en el rango de cientos de USD / pocos millones COP, el build según scope, y el recurrente como soporte/evolución del sistema.
- **Habilidades:** ingeniería sólida + conocimiento de modelos frontera (Claude/GPT: prompting, fine-tuning, integración) + **capacidades de cara al cliente** (entrevistas de discovery, mapeo de procesos, comunicar valor, navegar política organizacional).
- **Cultura:** comodidad con ambigüedad, auditorías detalladas, prototipos rápidos, aceptar que las ideas iniciales se revisan, foco ético/seguro.
- **Palanca de credibilidad:** unirse a los partner networks de Anthropic / OpenAI (gratis en el caso de Anthropic) da training, certificación, co-sell y señal de alineación oficial → permite cobrar más y aparecer en directorios de servicios.

---

## Fuentes principales
- OpenAI — "OpenAI launches the Deployment Company" (2026-05-11): https://openai.com/index/openai-launches-the-deployment-company/
- The Information vía AINews — "OpenAI Launches $10M+ Custom AI Consulting" (2025-07-02)
- Forbes — "OpenAI's $10M+ AI Consulting Business" (2025-07-16)
- Anthropic — "Anthropic invests $100 million into the Claude Partner Network" (2026-03-12): https://www.anthropic.com/news/claude-partner-network
- Anthropic — job listing "Solutions Architect, Applied AI (Industries)"
- Contexto Palantir FDE/FDSE model (múltiples fuentes de mercado)
