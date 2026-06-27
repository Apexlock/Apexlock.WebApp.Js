"use client";

import type { Lang } from "@/config/content";

export default function LanguageToggle({
  lang,
  onToggle
}: {
  lang: Lang;
  onToggle: () => void;
}) {
  const nextLang = lang === "es" ? "EN" : "ES";

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={onToggle}
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a13.5 13.5 0 0 1 0 18" />
        <path d="M12 3a13.5 13.5 0 0 0 0 18" />
      </svg>
      <span>{nextLang}</span>
    </button>
  );
}
