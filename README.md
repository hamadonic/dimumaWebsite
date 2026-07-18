# Dimuma Website

Single codebase for **Dimuma** — a sustainability software company — and its product
suite. The corporate site plus every product ship as **one Next.js app** (App Router,
Tailwind v4), so there is no proxy and one deploy.

- Main site design: **Momentum** — dark-navy hero with emerald glow, emerald/indigo accents.
- **Susmatic** lives in-app at `/products/susmatic` as a self-contained subtree with its
  own scoped Tailwind v4 tokens, fonts (Inter/Sora), and dark-by-default theme — its look
  is preserved exactly. It never mixes styles with the main site.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Script            | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start the dev server            |
| `npm run build`   | Production build                |
| `npm start`       | Serve the production build      |
| `npm run lint`    | ESLint                          |
| `npm run type-check` | TypeScript check             |

## Project structure

```
app/
  layout.tsx         Root layout + metadata
  globals.css        Tailwind + brand tokens
  page.tsx           Homepage (hero, products preview, why, about, contact)
  products/page.tsx  /products — product listing (Susmatic + Project Masar)
  health/route.ts    Health check endpoint (for the Docker HEALTHCHECK)
components/
  logo.tsx           Infinity-leaf mark + wordmark (light/dark variants)
  navbar.tsx         Sticky dark nav — Platform (/products), About, Contact
  footer.tsx         Dark footer with contact details + product links
  products-grid.tsx  Reusable product boxes (live / coming-soon)
  sections/
    hero.tsx         Company hero: "Software that moves sustainability forward"
    products-preview.tsx  Home "Our products" section (uses products-grid)
    features.tsx     6-up grid — platform value props ("Why teams build on Dimuma")
    about.tsx        Company story (Bahrain) + values
    cta.tsx          Contact section: address, email, hours, CR
lib/
  products.ts        Product catalogue (single source of truth)
public/
  infinity-leaf-icon.svg / favicon.svg
```

## How Susmatic is nested (one codebase, no proxy)

Susmatic was merged in from its standalone repo:

- Its pages live under `app/products/susmatic/**`; its components under
  `components/{layout,marketing,ui}/**`; its helpers under `lib/{site,cn,lead}.ts`.
- `app/products/susmatic/layout.tsx` is a nested layout that imports Susmatic's own
  `globals.css` (scoped Tailwind v4 tokens), loads its fonts, and renders a
  `#susmatic-root` wrapper with `.dark` (its default look). Because the wrapper is a
  subtree, Susmatic's theme never affects the main site.
- Internal Susmatic links are prefixed with `/products/susmatic` (there is no Next
  `basePath` in a shared app); its lead API is at `/products/susmatic/api/lead`.
- The whole app is Tailwind **v4** (Susmatic's version); the main site's small design
  system was ported to v4 `@theme` tokens in `app/globals.css`.

Run everything with a single `npm run dev` — no second server, no proxy.

## Products architecture

Dimuma is the parent platform; each product lives under `/products/<slug>` and is its
own standalone app/deploy. The main site proxies the product's URL under the domain
via a Next.js rewrite, so the product's own look and code are never merged in.

- `/products` — listing page (this repo).
- `/products/susmatic` — **Susmatic ESG**, a separate Next.js app in `D:\dimuma\susmatic`
  (basePath `/products/susmatic`). Proxied here via `rewrites()` in `next.config.js`.
- `/products/masar` — **Project Masar**, coming soon (placeholder box, no route yet).

### Running Susmatic locally alongside the main site

```bash
# terminal 1 — Susmatic on 3001
cd D:\dimuma\susmatic && npm install && npm run dev -- -p 3001

# terminal 2 — main site on 3000 (proxies /products/susmatic -> localhost:3001)
cd D:\dimuma\website && npm run dev
```

In production, set `SUSMATIC_ORIGIN` on the main site to Susmatic's internal URL.
(Alternatively, route `/products/susmatic/*` to the Susmatic container at the load
balancer and the rewrite becomes a no-op.)

## Brand palette

| Token          | Value      | Use                          |
| -------------- | ---------- | ---------------------------- |
| navy           | `#2B2A66`  | Brand primary                |
| teal           | `#5FB496`  | Brand accent                 |
| emerald        | `#059669`  | Primary CTA / accent         |
| emerald.light  | `#34d399`  | Glow / dark-mode accent      |
| indigo         | `#6366f1`  | Secondary accent             |
| deep           | `#0b1120`  | Dark hero canvas             |
| canvas         | `#f4f6f8`  | Light section canvas         |

## Deployment (AWS)

```bash
docker build -t dimuma-website .
docker tag dimuma-website:latest 210948570129.dkr.ecr.us-east-1.amazonaws.com/dimuma-website:latest
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 210948570129.dkr.ecr.us-east-1.amazonaws.com
docker push 210948570129.dkr.ecr.us-east-1.amazonaws.com/dimuma-website:latest
```

> Create the `dimuma-website` ECR repository first if it doesn't exist:
> `aws ecr create-repository --repository-name dimuma-website --region us-east-1`
>
> Remember to set `SUSMATIC_ORIGIN` in the container environment.
