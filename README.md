# Datharian static Next.js site

Static Next.js landing page for Datharian, prepared for Vercel. Includes a client-side ES/EN
language toggle (no server-side i18n routing, since the site is fully static-exported).

## Change the brand name

Edit `src/config/site.ts`:

```ts
export const siteConfig = {
  brandName: "Datharian",
  ...
};
```

## Change copy / translations

Edit `src/config/content.ts` — all UI copy lives in a single `content = { es: {...}, en: {...} }`
dictionary consumed by `src/components/SiteContent.tsx`.

## Run locally

```bash
npm install
npm run dev
```

## Static build

```bash
npm run build
```

The project uses `output: "export"` in `next.config.mjs`, so the static output is generated in `out/`.
