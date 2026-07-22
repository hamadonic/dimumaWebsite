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
export const basePath = "/products/susmaticesg";

/**
 * Canonical production URL (origin + base path) — used by metadataBase,
 * canonicals, sitemap, robots and JSON-LD.
 */
export const siteOrigin = "https://dimuma.com";
export const siteUrl = `${siteOrigin}${basePath}`;

/** Absolute OG image URL (basePath-correct — relative metadata would drop the subfolder). */
export const ogImage = `${siteUrl}/opengraph-image`;

/**
 * Demo / trial lead delivery via Netlify Forms — free, no third-party account,
 * no activation email to click. The contact form (app/products/susmaticesg/contact
 * /request-form.tsx) posts to public/__forms.html, which Netlify's build-time
 * crawler uses to detect the "lead" form's schema (Next.js doesn't emit static
 * HTML for the real client-component form — see
 * https://opennext.js.org/netlify/forms).
 *
 * SETUP (once, in the Netlify dashboard, after the first deploy):
 *   Site configuration → Forms → Form notifications → Add notification →
 *   Email notification → enter info@dimuma.com (and any other recipients).
 *   That's it — no code change needed to add/change recipients.
 */

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
