import { siteConfig } from "@/config/site";

const capabilities = [
  {
    title: "Software a medida",
    description:
      "Plataformas internas, portales B2B y herramientas operativas disenadas con el equipo que las usa todos los dias.",
    icon: "code"
  },
  {
    title: "Datos & BI",
    description:
      "Modelos analiticos, dashboards ejecutivos y pipelines que convierten data dispersa en decisiones repetibles.",
    icon: "data"
  },
  {
    title: "Integraciones",
    description:
      "Conectamos ERP, CRM y sistemas legacy con APIs robustas, contratos versionados y monitoreo end-to-end.",
    icon: "stack"
  },
  {
    title: "IA aplicada",
    description:
      "Modelos predictivos y copilotos internos auditables, con guardrails y metricas claras de retorno.",
    icon: "spark"
  }
];

const processSteps = [
  {
    number: "01",
    title: "Diagnostico",
    description:
      "Mapeamos procesos, costos y deuda tecnica. Entregable: roadmap priorizado."
  },
  {
    number: "02",
    title: "Diseno",
    description:
      "Prototipos navegables y arquitectura tecnica aprobada por su equipo IT."
  },
  {
    number: "03",
    title: "Construccion",
    description:
      "Sprints quincenales, demos en vivo y trazabilidad del progreso real."
  },
  {
    number: "04",
    title: "Operacion",
    description:
      "SLAs claros, soporte ANS, mejora continua y transferencia de conocimiento."
  }
];

const sectors = ["Fintech", "Insurtech", "Banca", "Logistica", "Enterprise"];

function Icon({ name }: { name: string }) {
  if (name === "data") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" />
      </svg>
    );
  }

  if (name === "stack") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    );
  }

  if (name === "spark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2v6" />
        <path d="M12 16v6" />
        <path d="m4.93 4.93 4.24 4.24" />
        <path d="m14.83 14.83 4.24 4.24" />
        <path d="M2 12h6" />
        <path d="M16 12h6" />
        <path d="m4.93 19.07 4.24-4.24" />
        <path d="m14.83 9.17 4.24-4.24" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 6 2 12l6 6" />
      <path d="m16 6 6 6-6 6" />
      <path d="m14 4-4 16" />
    </svg>
  );
}

function ApertureMark() {
  return (
    <div className="aperture-wrap" aria-hidden="true">
      <div className="hero-orb" />
      <div className="hero-orb hero-orb-secondary" />
      <svg viewBox="0 0 480 480" fill="none">
        <defs>
          <linearGradient id="ap-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2C078" />
            <stop offset="100%" stopColor="#9A7B34" />
          </linearGradient>
          <radialGradient id="ap-center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E2C078" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#C8A24B" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="240" cy="240" r="60" fill="url(#ap-center-glow)" className="aperture-core" />

        <g className="aperture-frame" stroke="#9A7B34" strokeWidth="1.2" opacity="0.55">
          <path d="M70 96V70h26" />
          <path d="M410 96V70h-26" />
          <path d="M70 384v26h26" />
          <path d="M410 384v26h-26" />
        </g>

        <g className="aperture-crosshair" stroke="url(#ap-stroke)" strokeWidth="0.75" opacity="0.28">
          <line x1="240" y1="40" x2="240" y2="440" />
          <line x1="40" y1="240" x2="440" y2="240" />
        </g>

        <circle cx="240" cy="240" r="210" stroke="#9A7B34" strokeWidth="0.5" strokeDasharray="4 12" opacity="0.2" />

        <g className="aperture-ring">
          <circle cx="240" cy="240" r="178" stroke="url(#ap-stroke)" strokeWidth="1" opacity="0.5" />
          <circle cx="240" cy="240" r="178" stroke="#C8A24B" strokeWidth="3" strokeDasharray="2 26" opacity="0.7" />
        </g>

        <circle className="aperture-scan" cx="240" cy="240" r="155" stroke="#E2C078" strokeWidth="2" strokeDasharray="35 930" opacity="0.75" />
        <circle className="aperture-ring-rev" cx="240" cy="240" r="138" stroke="url(#ap-stroke)" strokeWidth="0.75" strokeDasharray="60 18" opacity="0.45" />

        <g className="aperture-core" stroke="url(#ap-stroke)" strokeWidth="1.25" fill="none" opacity="0.7">
          <polygon points="240,128 337,184 337,296 240,352 143,296 143,184" />
          <polygon points="240,160 318,205 318,295 240,340 162,295 162,205" opacity="0.55" />
          <polygon points="240,192 296,224 296,288 240,320 184,288 184,224" opacity="0.4" />
        </g>

        <circle cx="240" cy="240" r="20" stroke="#C8A24B" strokeWidth="0.5" fill="none" opacity="0.25" className="aperture-core" />
        <circle cx="240" cy="240" r="12" stroke="#C8A24B" strokeWidth="0.75" fill="none" opacity="0.5" />
        <circle className="aperture-dot" cx="240" cy="240" r="4" fill="#E2C078" />
      </svg>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <header className="site-nav">
        <a className="brand" href="#inicio" aria-label={siteConfig.brandName}>
          <span className="brand-mark">A</span>
          <span>{siteConfig.brandName}</span>
        </a>
        <nav className="nav-links" aria-label="Principal">
          <a href="#capacidades">Capacidades</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="btn btn-primary nav-cta" href="#contacto">Hablemos</a>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="apex-container hero-grid">
            <div className="hero-copy reveal-in">
              <span className="eyebrow"><span className="dot" />Consultoria en ingenieria de software & datos</span>
              <h1 className="h-display home-hero-title">
                Arquitecturas <span>robustas</span><br />
                datos limpios e <br />
                <span>integraciones</span> core<br />
                acelere <span>decisiones</span>
              </h1>
              <p className="lede">
                Transformamos operaciones complejas en ventajas competitivas. Software a medida,
                inteligencia de datos y optimizacion de procesos, disenados para el impacto que su
                directorio necesita ver.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contacto">
                  Solicitar diagnostico gratuito
                  <span className="arrow">→</span>
                </a>
                <a className="btn btn-outline" href="#capacidades">Explorar soluciones</a>
              </div>
              <div className="hero-meta">
                30 minutos <span /> Sin compromiso <span /> Analisis personalizado
              </div>
            </div>

            <div className="hero-art reveal-in delay-1">
              <ApertureMark />
            </div>
          </div>
        </section>

        <section className="domain-strip" aria-label="Sectores">
          <div className="apex-container strip-content">
            <div className="strip-label">Sectores donde<br />la ingenieria<br />tiene costo real</div>
            {sectors.map((sector) => (
              <div className="sector-mark" key={sector}>
                <span>{sector[0]}</span>{sector}
              </div>
            ))}
          </div>
        </section>

        <section id="capacidades" className="section">
          <div className="apex-container">
            <div className="section-head reveal-in">
              <span className="eyebrow"><span className="dot" />Capacidades</span>
              <h2>Software que opera como infraestructura critica.</h2>
              <p>
                Construimos productos digitales para escalar. Cada decision tecnica se toma pensando
                en costos, observabilidad y continuidad operativa.
              </p>
            </div>

            <div className="card-grid">
              {capabilities.map((capability, index) => (
                <article className={`card reveal-in delay-${(index % 3) + 1}`} key={capability.title}>
                  <div className="card-num">0{index + 1}</div>
                  <div className="card-icon"><Icon name={capability.icon} /></div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="section process-section">
          <div className="apex-container">
            <div className="section-head reveal-in">
              <span className="eyebrow"><span className="dot" />Como trabajamos</span>
              <h2>Cuatro pasos. Sin sorpresas en la facturacion.</h2>
              <p>
                Cada etapa tiene entregables concretos y criterios de cierre. Usted decide si
                avanzamos al siguiente sprint o pivoteamos.
              </p>
            </div>

            <div className="process">
              {processSteps.map((step) => (
                <article className="process-step" key={step.number}>
                  <div className="process-bullet">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section quote-section">
          <div className="apex-container">
            <div className="quote-block reveal-in">
              <span className="quote-mark">"</span>
              <p>
                Necesitabamos ordenar decisiones tecnicas que impactaban operacion, datos e integraciones.
                El valor estuvo en bajar ruido y dejar un plan ejecutable.
              </p>
              <div className="quote-attr">
                <div className="avatar">CT</div>
                <div>
                  <strong>Direccion de Tecnologia</strong>
                  <span>Sector financiero regional</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="section cta-section">
          <div className="cta-orb" />
          <div className="apex-container cta-container">
            <div className="cta-banner reveal-in">
              <h2>Cuanto le cuesta no actuar hoy?</h2>
              <p>
                Cada mes sin optimizar operaciones, integrar datos o proteger procesos financieros
                tiene un costo real. Conversemos 30 minutos y lo cuantificamos.
              </p>
              <a className="btn btn-primary" href={`mailto:${siteConfig.contactEmail}`}>
                Hablemos esta semana
                <span className="arrow">→</span>
              </a>
              <small>Sin compromiso · Diagnostico personalizado · Respuesta en menos de 24 hs</small>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
