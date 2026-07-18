# Dimuma Website

Marketing website for **Dimuma** — the ESG program management platform. Built with
Next.js (App Router) + Tailwind CSS, using the same brand palette and deploy flow as
the ESG platform.

Design direction: **Momentum** — bold dark-navy hero with emerald glow, centered
headline, floating product dashboard, and emerald/indigo accents throughout.

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
  layout.tsx         Root layout + metadata + fonts
  globals.css        Tailwind + brand tokens
  page.tsx           Homepage (assembles all sections)
  health/route.ts    Health check endpoint (for the Docker HEALTHCHECK)
components/
  logo.tsx           Brand mark + wordmark (light/dark variants)
  navbar.tsx         Sticky dark nav
  footer.tsx         Dark footer with real contact details
  sections/
    hero.tsx         Dark hero: "Collect, report, and analyze your ESG data"
    dashboard-shot.tsx  Floating product screenshot mock
    video.tsx        Embedded Dimuma ESG platform demo (YouTube)
    features.tsx     6-up grid — the real "What Dimuma does" capabilities
    insights.tsx     Split section: actionable insights + unified ESG view
    about.tsx        Company story (Bahrain) + values
    cta.tsx          Contact section: address, email, hours, CR
public/
  dimuma-logo.jpg    Leaf/infinity brand mark
```

## Content

All copy is drawn from the live site at [dimuma.com](https://dimuma.com) — tagline,
capabilities, company story, values, demo video, and contact details (Dimuma W.L.L,
Manama, Bahrain · info@dimuma.com · CR 174450-1). Fabricated statistics from the
initial mockup were removed.

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

## Deployment (AWS — same flow as the platform)

```bash
docker build -t dimuma-website .
docker tag dimuma-website:latest 210948570129.dkr.ecr.us-east-1.amazonaws.com/dimuma-website:latest
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 210948570129.dkr.ecr.us-east-1.amazonaws.com
docker push 210948570129.dkr.ecr.us-east-1.amazonaws.com/dimuma-website:latest
```

> Create the `dimuma-website` ECR repository first if it doesn't exist:
> `aws ecr create-repository --repository-name dimuma-website --region us-east-1`
