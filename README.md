# Apexlock static Next.js site

Static Next.js version of the current .NET landing page, prepared for Vercel.

## Change the brand name

Edit `src/config/site.ts`:

```ts
export const siteConfig = {
  brandName: "Apexlock",
  ...
};
```

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
