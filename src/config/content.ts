export type Lang = "es" | "en";

export interface SiteContent {
  nav: {
    links: { href: string; label: string }[];
    cta: string;
  };
  hero: {
    eyebrow: string;
    titleLine1Pre: string;
    titleLine1Em: string;
    titleLine2Pre: string;
    titleLine2Em: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  metrics: { value: string; label: string }[];
  sectors: {
    label: string;
    items: string[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { index: string; title: string; description: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { number: string; title: string; description: string; tag: string }[];
  };
  quote: {
    text: string;
    attribution: string;
  };
  cta: {
    title: string;
    body: string;
    button: string;
    micro: string;
  };
  footer: {
    links: { href: string; label: string }[];
  };
}

export const content: Record<Lang, SiteContent> = {
  es: {
    nav: {
      links: [
        { href: "#cap", label: "Capacidades" },
        { href: "#proc", label: "Proceso" },
        { href: "#cta", label: "Contacto" }
      ],
      cta: "Hablemos"
    },
    hero: {
      eyebrow: "Ingeniería de software para sectores regulados",
      titleLine1Pre: "Sistemas que ",
      titleLine1Em: "resisten",
      titleLine2Pre: " la escala. Decisiones que ",
      titleLine2Em: "no fallan",
      lede:
        "Más de 10 años construyendo y operando software crítico en Fintech, Insurtech y Banca. Costos claros, deuda técnica bajo control, cero sorpresas en la facturación.",
      ctaPrimary: "Solicitar diagnóstico →",
      ctaSecondary: "Ver capacidades",
      scroll: "scroll"
    },
    metrics: [
      { value: "99.97%", label: "Uptime · 30d" },
      { value: "24", label: "Integraciones activas" },
      { value: "8", label: "Pipelines de datos" },
      { value: "0", label: "Incidentes · 30d" }
    ],
    sectors: {
      label: "Sectores",
      items: ["Fintech", "Insurtech", "Banca", "Logística", "Enterprise"]
    },
    capabilities: {
      eyebrow: "Capacidades",
      title: "Software que opera como\ninfraestructura crítica.",
      intro:
        "Cada decisión técnica se toma con costos, observabilidad y continuidad operativa sobre la mesa. Nada que no podamos defender en un comité de riesgo.",
      items: [
        {
          index: "01 — A MEDIDA",
          title: "Software a medida",
          description:
            "Plataformas internas, portales B2B y herramientas operativas construidas con el equipo que las usa todos los días. Código que su gente puede mantener."
        },
        {
          index: "02 — DATOS & BI",
          title: "Datos & BI",
          description:
            "Modelos analíticos, tableros ejecutivos y pipelines que convierten data dispersa en decisiones repetibles y auditables."
        },
        {
          index: "03 — INTEGRACIONES CORE",
          title: "Integraciones core",
          description:
            "Conectamos ERP, CRM y sistemas legacy con APIs robustas, contratos versionados y monitoreo end-to-end. Sin acoplar lo que no debe acoplarse."
        },
        {
          index: "04 — IA APLICADA",
          title: "IA aplicada",
          description:
            "Modelos predictivos y copilotos internos auditables, con guardrails y métricas claras de retorno. IA donde mueve el número, no donde queda bien en un pitch."
        }
      ]
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Cuatro pasos.\nSin sorpresas en la facturación.",
      intro:
        "Cada etapa tiene entregables concretos y criterios de cierre. Al final de cada una, usted decide si avanzamos o pivoteamos.",
      steps: [
        {
          number: "01",
          title: "Diagnóstico",
          description: "Mapeamos procesos, costos reales y deuda técnica. Sin maquillaje.",
          tag: "→ Roadmap priorizado"
        },
        {
          number: "02",
          title: "Diseño",
          description: "Prototipos navegables y arquitectura técnica aprobada por su equipo de IT.",
          tag: "→ Spec técnico"
        },
        {
          number: "03",
          title: "Construcción",
          description: "Sprints quincenales, demos en vivo y trazabilidad del progreso real.",
          tag: "→ Software en producción"
        },
        {
          number: "04",
          title: "Operación",
          description: "SLAs claros, soporte con ANS y transferencia de conocimiento a su gente.",
          tag: "→ SLA documentado"
        }
      ]
    },
    quote: {
      text: "“Necesitábamos ordenar decisiones técnicas que tocaban operación, datos e integraciones a la vez. El valor real estuvo en bajar el ruido y dejarnos un plan que el equipo pudo ejecutar sin nosotros.”",
      attribution: "Dirección de Tecnología · Sector financiero regional"
    },
    cta: {
      title: "¿Cuánto le cuesta no actuar hoy?",
      body:
        "Cada mes con integraciones frágiles, datos sin reconciliar o deuda técnica acumulándose tiene un costo real. Conversemos 30 minutos y lo cuantificamos.",
      button: "Hablemos esta semana →",
      micro: "Sin compromiso · 30 min · Respuesta en menos de 24 hs"
    },
    footer: {
      links: [
        { href: "#cap", label: "Capacidades" },
        { href: "#proc", label: "Proceso" },
        { href: "#cta", label: "Contacto" }
      ]
    }
  },
  en: {
    nav: {
      links: [
        { href: "#cap", label: "Capabilities" },
        { href: "#proc", label: "Process" },
        { href: "#cta", label: "Contact" }
      ],
      cta: "Let's talk"
    },
    hero: {
      eyebrow: "Software engineering for regulated industries",
      titleLine1Pre: "Systems that ",
      titleLine1Em: "withstand",
      titleLine2Pre: " scale. Decisions that ",
      titleLine2Em: "don't fail",
      lede:
        "Over 10 years building and operating mission-critical software in Fintech, Insurtech and Banking. Clear costs, technical debt under control, zero billing surprises.",
      ctaPrimary: "Request a diagnostic →",
      ctaSecondary: "See capabilities",
      scroll: "scroll"
    },
    metrics: [
      { value: "99.97%", label: "Uptime · 30d" },
      { value: "24", label: "Active integrations" },
      { value: "8", label: "Data pipelines" },
      { value: "0", label: "Incidents · 30d" }
    ],
    sectors: {
      label: "Sectors",
      items: ["Fintech", "Insurtech", "Banking", "Logistics", "Enterprise"]
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Software that operates like\ncritical infrastructure.",
      intro:
        "Every technical decision is made with cost, observability and operational continuity on the table. Nothing we can't defend in a risk committee.",
      items: [
        {
          index: "01 — CUSTOM SOFTWARE",
          title: "Custom software",
          description:
            "Internal platforms, B2B portals and operational tools built with the team that uses them every day. Code your people can maintain."
        },
        {
          index: "02 — DATA & BI",
          title: "Data & BI",
          description:
            "Analytics models, executive dashboards and pipelines that turn scattered data into repeatable, auditable decisions."
        },
        {
          index: "03 — CORE INTEGRATIONS",
          title: "Core integrations",
          description:
            "We connect ERP, CRM and legacy systems with robust APIs, versioned contracts and end-to-end monitoring. Without coupling what shouldn't be coupled."
        },
        {
          index: "04 — APPLIED AI",
          title: "Applied AI",
          description:
            "Predictive models and auditable internal copilots, with guardrails and clear return metrics. AI where it moves the number, not where it looks good in a pitch."
        }
      ]
    },
    process: {
      eyebrow: "How we work",
      title: "Four steps.\nNo billing surprises.",
      intro:
        "Each stage has concrete deliverables and closing criteria. At the end of each one, you decide whether we move forward or pivot.",
      steps: [
        {
          number: "01",
          title: "Diagnostic",
          description: "We map processes, real costs and technical debt. No makeup.",
          tag: "→ Prioritized roadmap"
        },
        {
          number: "02",
          title: "Design",
          description: "Navigable prototypes and technical architecture approved by your IT team.",
          tag: "→ Technical spec"
        },
        {
          number: "03",
          title: "Build",
          description: "Biweekly sprints, live demos and real progress traceability.",
          tag: "→ Software in production"
        },
        {
          number: "04",
          title: "Operation",
          description: "Clear SLAs, supported with an SLA agreement and knowledge transfer to your people.",
          tag: "→ Documented SLA"
        }
      ]
    },
    quote: {
      text: "“We needed to bring order to technical decisions that touched operations, data and integrations all at once. The real value was cutting through the noise and leaving us with a plan the team could execute on its own.”",
      attribution: "Head of Technology · Regional financial sector"
    },
    cta: {
      title: "What does it cost you not to act today?",
      body:
        "Every month with fragile integrations, unreconciled data or accumulating technical debt has a real cost. Let's talk for 30 minutes and put a number on it.",
      button: "Let's talk this week →",
      micro: "No commitment · 30 min · Reply within 24 hours"
    },
    footer: {
      links: [
        { href: "#cap", label: "Capabilities" },
        { href: "#proc", label: "Process" },
        { href: "#cta", label: "Contact" }
      ]
    }
  }
};
