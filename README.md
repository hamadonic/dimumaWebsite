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
  `basePath` in a shared app).
- The whole app is Tailwind **v4** (Susmatic's version); the main site's small design
  system was ported to v4 `@theme` tokens in `app/globals.css`.

Run everything with a single `npm run dev` — no second server, no proxy.

## Products architecture

Dimuma is the parent platform; each product lives under `/products/<slug>` in this
same codebase.

- `/products` — listing page.
- `/products/susmatic` — **Susmatic ESG**, merged in from its original standalone repo
  (`D:\dimuma\susmatic`, kept as-is for reference). See "How Susmatic is nested" above.
- `/products/masar` — **Project Masar**, coming soon (placeholder box, no route yet).

## Susmatic's contact form (Netlify Forms)

The "Request a trial / Book a demo" form
(`app/products/susmatic/contact/request-form.tsx`) submits via Netlify Forms —
free, no third-party account, no activation email to click (this replaced an
earlier Formsubmit-based setup).

Because this form lives in a client component, Next.js doesn't emit static HTML
for it, so Netlify's build-time form scanner can't see it directly. The fix is
the officially documented workaround for the Next.js App Router
(https://opennext.js.org/netlify/forms): `public/__forms.html` is a static,
never-rendered stub declaring the same field names, purely so Netlify detects
the "lead" form's schema at deploy time. The real form posts its data to
`/__forms.html` via `fetch()`. Keep the field names in both files in sync if
the form changes.

**To receive submissions by email**, set this up once after the first deploy:
Netlify dashboard → your site → **Site configuration → Forms → Form
notifications → Add notification → Email notification** → enter
`info@dimuma.com` (add more recipients as needed). Submissions also always
appear in **Forms** in the Netlify dashboard regardless of notifications.

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

## Deployment (Netlify)

The site deploys to Netlify from the `main` branch on GitHub
(`hamadonic/dimumaWebsite`) — every push auto-deploys. Build settings live in
`netlify.toml` (build command + the official `@netlify/plugin-nextjs` runtime);
nothing else to configure. `dimuma.com` / `www.dimuma.com` point at Netlify via
DNS records at the registrar (Name.com), with Force HTTPS enabled once the SSL
certificate provisions.

A `Dockerfile` and AWS/ECR notes are kept in git history if this ever needs to
move to a container-based host instead.
