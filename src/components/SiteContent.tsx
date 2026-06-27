"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import { content, type Lang } from "@/config/content";
import LanguageToggle from "@/components/LanguageToggle";

const LANG_STORAGE_KEY = "datharian-lang";

function Logo({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 19 H62 L78 35 V65 L62 81 H22 Z M35 34 H53 L64 45 V55 L53 66 H35 Z"
        fill="#6E2EF6"
      />
      <path d="M66 19 H78 V31 Z" fill="#FFA50A" />
    </svg>
  );
}

function CodeColumn({
  animation,
  opacity,
  reconcileLabel
}: {
  animation: string;
  opacity?: number;
  reconcileLabel: string;
}) {
  return (
    <div className="hero-code-col" style={{ animation, opacity }}>
      <div>// ledger/post.ts</div>
      <div>
        <span className="hl-kw">export async function</span> postEntry(tx: Tx) {"{"}
      </div>
      <div>
        {"  "}assert(tx.debit === tx.credit, <span className="hl-str">&quot;unbalanced&quot;</span>);
      </div>
      <div>
        {"  "}
        <span className="hl-kw">const</span> key = idempotencyKey(tx);
      </div>
      <div>
        {"  "}
        <span className="hl-kw">if</span> (<span className="hl-kw">await</span> seen(key)) <span className="hl-kw">return</span> cached(key);
      </div>
      <div>
        {"  "}
        <span className="hl-kw">return</span> db.tx(<span className="hl-kw">async</span> (t) =&gt; {"{"}
      </div>
      <div>
        {"    "}
        <span className="hl-kw">await</span> t.insert(<span className="hl-str">&quot;journal&quot;</span>, tx.lines);
      </div>
      <div>
        {"    "}
        <span className="hl-kw">await</span> t.bump(<span className="hl-str">&quot;balances&quot;</span>, tx.account);
      </div>
      <div>
        {"    "}
        <span className="hl-kw">await</span> audit.log(tx, actor.id);
      </div>
      <div>{"  "}{"}"});</div>
      <div>{"}"}</div>
      <div>&nbsp;</div>
      <div>-- etl/reconcile.sql</div>
      <div>
        <span className="hl-kw">SELECT</span> acct, <span className="hl-kw">SUM</span>(amount) <span className="hl-kw">AS</span> bal
      </div>
      <div>
        <span className="hl-kw">FROM</span> journal
      </div>
      <div>
        <span className="hl-kw">WHERE</span> posted_at &lt; :cutoff
      </div>
      <div>
        <span className="hl-kw">GROUP BY</span> acct
      </div>
      <div>
        <span className="hl-kw">HAVING SUM</span>(amount) &lt;&gt; expected(acct);
      </div>
      <div>-- 0 rows =&gt; {reconcileLabel}</div>
    </div>
  );
}

export default function SiteContent() {
  const [lang, setLang] = useState<Lang>("es");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    if (stored === "es" || stored === "en") {
      setLang(stored);
      return;
    }
    if (navigator.language?.toLowerCase().startsWith("en")) {
      setLang("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(LANG_STORAGE_KEY, lang);
  }, [lang]);

  const t = content[lang];
  const toggleLang = () => setLang((current) => (current === "es" ? "en" : "es"));
  const reconcileLabel = lang === "es" ? "libro conforme" : "ledger balanced";
  const menuLabel = lang === "es" ? (menuOpen ? "Cerrar menú" : "Abrir menú") : menuOpen ? "Close menu" : "Open menu";

  return (
    <>
      <nav className="dth-nav">
        <div className="dth-nav-inner">
          <button
            type="button"
            className="dth-nav-toggle"
            aria-label={menuLabel}
            aria-expanded={menuOpen}
            aria-controls="dth-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
          <a href="#top" className="dth-brand" aria-label={siteConfig.brandName}>
            <Logo size={22} />
            {siteConfig.brandName}
          </a>
          <div className="dth-nav-links">
            {t.nav.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="dth-nav-actions">
            <LanguageToggle lang={lang} onToggle={toggleLang} />
            <a href="#cta" className="dth-nav-cta">
              {t.nav.cta}
            </a>
          </div>
        </div>
        {menuOpen ? (
          <div className="dth-nav-mobile" id="dth-mobile-menu">
            <div className="dth-nav-mobile-inner">
              {t.nav.links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a href="#cta" className="dth-nav-cta" onClick={() => setMenuOpen(false)}>
                {t.nav.cta}
              </a>
            </div>
          </div>
        ) : null}
      </nav>

      <main>
        <section id="top" className="dth-hero">
          <div className="hero-code" aria-hidden="true">
            <CodeColumn animation="dth-up 38s linear infinite" reconcileLabel={reconcileLabel} />
            <CodeColumn animation="dth-dn 52s linear infinite" opacity={0.8} reconcileLabel={reconcileLabel} />
            <CodeColumn animation="dth-up 64s linear infinite" opacity={0.6} reconcileLabel={reconcileLabel} />
          </div>
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-fade" aria-hidden="true" />

          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="hero-dot" />
              {t.hero.eyebrow}
            </div>
            <h1 className="hero-title">
              {t.hero.titleLine1Pre}
              <em>{t.hero.titleLine1Em}</em>
              {t.hero.titleLine2Pre}
              <em>{t.hero.titleLine2Em}</em>.
            </h1>
            <p className="hero-lede">{t.hero.lede}</p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary">
                {t.hero.ctaPrimary}
              </a>
              <a href="#cap" className="btn btn-outline">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="hero-scroll" aria-hidden="true">
            {t.hero.scroll}
            <span />
          </div>
        </section>

        <div className="metrics">
          <div className="metrics-inner">
            {t.metrics.map((metric, index) => (
              <div className="metric" key={metric.label}>
                <div className="metric-value">
                  <span>{metric.value}</span>
                  {index === 0 ? <span className="metric-up">↑</span> : null}
                </div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sectors">
          <div className="sectors-inner">
            <span className="sectors-label">{t.sectors.label}</span>
            <div className="sectors-list">
              {t.sectors.items.map((sector) => (
                <span key={sector}>{sector}</span>
              ))}
            </div>
          </div>
        </div>

        <section id="cap" className="section cap-section">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-eyebrow">
                <span className="eyebrow-dot" />
                {t.capabilities.eyebrow}
              </div>
              <h2 className="section-title">
                {t.capabilities.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 ? <br /> : null}
                  </span>
                ))}
              </h2>
              <p className="section-intro">{t.capabilities.intro}</p>
            </div>

            <div className="cap-grid">
              {t.capabilities.items.map((item, index) => (
                <div className="cap-card" key={item.title}>
                  {index === 0 ? <span className="cap-notch" aria-hidden="true" /> : null}
                  <div className="cap-index">{item.index}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proc" className="section proc-section">
          <div className="section-inner">
            <div className="section-head">
              <div className="section-eyebrow">
                <span className="eyebrow-dot" />
                {t.process.eyebrow}
              </div>
              <h2 className="section-title">
                {t.process.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 ? <br /> : null}
                  </span>
                ))}
              </h2>
              <p className="section-intro">{t.process.intro}</p>
            </div>

            <div className="proc">
              <div className="proc-line" aria-hidden="true" />
              <div className="proc-grid">
                {t.process.steps.map((step, index) => (
                  <div className="proc-step" key={step.number}>
                    <div className={`proc-bullet${index === 0 ? " proc-bullet-active" : ""}`}>{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    <span className="proc-tag">{step.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section quote-section">
          <div className="section-inner">
            <div className="quote-block">
              <span className="quote-mark" aria-hidden="true" />
              <p>{t.quote.text}</p>
              <div className="quote-attr">{t.quote.attribution}</div>
            </div>
          </div>
        </section>

        <section id="cta" className="cta-section">
          <span className="cta-notch" aria-hidden="true" />
          <div className="section-inner">
            <div className="cta-block">
              <h2>{t.cta.title}</h2>
              <p>{t.cta.body}</p>
              <a className="btn cta-btn" href={`mailto:${siteConfig.contactEmail}`}>
                {t.cta.button}
              </a>
              <div className="cta-micro">{t.cta.micro}</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="dth-footer">
        <div className="dth-footer-inner">
          <a href="#top" className="dth-brand">
            <Logo size={20} />
            {siteConfig.brandName}
          </a>
          <div className="dth-footer-links">
            {t.footer.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="dth-footer-email" href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
        </div>
      </footer>
    </>
  );
}
