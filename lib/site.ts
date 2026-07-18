/**
 * Site-wide constants shared across the marketing route group.
 * Copy that belongs to a single page lives in that page's own `content.ts`.
 */

export const site = {
  name: "Susmatic ESG",
  tagline: "Simplify Sustainability",
  // Susmatic ESG is one product within the wider Dimuma platform.
  parentPlatform: "Dimuma",
  // Public contact address (shown in the footer + contact page).
  email: "info@dimuma.com",
} as const;

/**
 * Base path the app is served under (a subfolder of the Dimuma platform).
 * Keep in sync with `basePath` in next.config.ts. Used to prefix client fetches
 * (which Next does NOT auto-prefix, unlike next/link).
 */
export const basePath = "/products/susmatic";

/**
 * Canonical production URL (origin + base path) — used by metadataBase,
 * canonicals, sitemap, robots and JSON-LD.
 */
export const siteOrigin = "https://dimuma.com";
export const siteUrl = `${siteOrigin}${basePath}`;

/** Absolute OG image URL (basePath-correct — relative metadata would drop the subfolder). */
export const ogImage = `${siteUrl}/opengraph-image`;

/**
 * Demo / trial lead delivery via Formsubmit (https://formsubmit.co) — free,
 * no account, no server. Each submission is emailed to the address below.
 *
 * SETUP (once, before publishing):
 *   1. Put your inbox in the URL, e.g.
 *      "https://formsubmit.co/ajax/sales@susmatic.com".
 *   2. Submit the form once — Formsubmit emails that inbox an activation link.
 *      Click it. From then on, submissions arrive automatically.
 *   3. RECOMMENDED: Formsubmit then gives you an alias endpoint that hides your
 *      address (looks like "https://formsubmit.co/ajax/el/xxxxxxxx"). Paste that
 *      here instead, so your email isn't visible in the page source.
 *
 * TODO: set this to a real inbox before launch — the placeholder will error.
 */
export const leadFormEndpoint = "https://formsubmit.co/ajax/info@dimuma.com";

/**
 * Extra recipients CC'd on every demo/trial submission. Only the primary inbox
 * (in leadFormEndpoint) needs Formsubmit activation; CC'd addresses receive
 * copies automatically. Comma-separate to add more.
 */
export const leadFormCc = "platform@dimuma.com";

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Home", href: basePath },
  { label: "Product", href: `${basePath}/product` },
  { label: "Security", href: `${basePath}/security` },
  { label: "Pricing", href: `${basePath}/pricing` },
  { label: "Resources", href: `${basePath}/resources` },
  { label: "About", href: `${basePath}/about` },
];

export const cta = {
  trial: { label: "Request a trial", href: `${basePath}/contact` },
  demo: { label: "Book a demo", href: `${basePath}/contact?intent=demo` },
} as const;

/** GCC markets covered by the maintained fuel-price library. */
export const gccCountries = [
  "Bahrain",
  "Saudi Arabia",
  "United Arab Emirates",
  "Qatar",
  "Kuwait",
  "Oman",
] as const;

/**
 * Frameworks Susmatic ESG helps teams *report against* — support, never a
 * compliance or certification claim.
 */
export const frameworks = [
  { short: "GRI", long: "Global Reporting Initiative" },
  { short: "ISSB / IFRS S1 & S2", long: "IFRS Sustainability Disclosure Standards" },
  { short: "CBB", long: "Central Bank of Bahrain guidelines" },
] as const;

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Product",
    items: [
      { label: "Overview", href: `${basePath}/product` },
      { label: "Security & trust", href: `${basePath}/security` },
      { label: "Pricing", href: `${basePath}/pricing` },
      { label: "Resources", href: `${basePath}/resources` },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: `${basePath}/about` },
      { label: "Contact", href: `${basePath}/contact` },
      { label: "Request a trial", href: `${basePath}/contact` },
    ],
  },
];
