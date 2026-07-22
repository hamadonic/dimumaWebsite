/**
 * Pricing copy.
 *
 * IMPORTANT: no published figures exist yet, and none are invented here.
 * Susmatic ESG has no self-serve signup — workspaces are provisioned by an
 * administrator — so pricing is quote-based, scoped to a customer's entities
 * and volumes. Each tier's `price` is intentionally `null` and renders as
 * "Custom".
 *
 * TODO: when finance signs off published pricing, set `price` on each tier
 * (e.g. "From USD X / month") and update `priceNote`.
 */

export type Tier = {
  key: string;
  name: string;
  audience: string;
  /** TODO: pricing not finalised — keep null until finance confirms. */
  price: null;
  summary: string;
  cta: { label: string; href: string };
  highlighted?: boolean;
  features: string[];
};

export const pricingHero = {
  eyebrow: "Pricing",
  title: "Priced to your entities — not a checkout page.",
  lead: "Susmatic ESG is set up for you — there's no self-serve signup and the site never asks for card details. Pricing is scoped to the entities you report for and the volume of data behind them.",
};

export const tiers: Tier[] = [
  {
    key: "entity",
    name: "Entity",
    audience: "A single reporting entity",
    price: null, // TODO
    summary:
      "Get one entity's ESG data onto a single defensible record — collected, proven and reported.",
    cta: { label: "Request a trial", href: "/contact" },
    features: [
      "ESG indicator catalogue (Environmental, Social, Governance, Business)",
      "Smart Data Entry (AI) with reviewed extraction",
      "Emission Library — consistent factors",
      "GCC Fuel Prices — per country and grade",
      "Approvals — maker/checker with record locking",
      "Policy library with approval workflow",
      "Disclosure status across Environmental, Social & Governance",
      "Insights dashboards",
      "Reports with framework index (GRI, CBB)",
      "RBAC, MFA/SSO and immutable audit log",
    ],
  },
  {
    key: "group",
    name: "Group",
    audience: "Groups consolidating several entities",
    price: null, // TODO
    summary:
      "Roll several entities into one consolidated, defensible view for the board.",
    cta: { label: "Book a demo", href: "/contact?intent=demo" },
    highlighted: true,
    features: [
      "Everything in Entity",
      "Multiple entities with consolidation",
      "AI Studio — generated board packs",
      "Expanded roles and approval routing",
      "SSO with your identity provider",
      "Priority onboarding and configuration",
    ],
  },
  {
    key: "partner",
    name: "Partner",
    audience: "Consultants running several clients",
    price: null, // TODO
    summary:
      "Run multiple client engagements on one consistent, defensible method.",
    cta: { label: "Talk to us", href: "/contact" },
    features: [
      "Everything in Group",
      "Multiple client workspaces",
      "Shared Emission Library method across clients",
      "Per-client isolation and access control",
      "Partner onboarding support",
    ],
  },
];

/** Rendered near the tiers so the "Custom" pricing reads as deliberate. */
export const priceNote =
  "Every workspace is configured by a Susmatic ESG specialist. Request a trial and we'll scope pricing to your entities — no card details, ever.";

export const faqs: { q: string; a: string }[] = [
  {
    q: "Can I sign up and start on my own?",
    a: "Not today. Workspaces are provisioned by an administrator who configures your entities and indicators, then emails you a link. It's a short setup, not an instant self-serve account.",
  },
  {
    q: "Will the site ask for payment or card details?",
    a: "No. There is no checkout on this site and we never ask for a password or payment details here. Commercial terms are handled directly with you.",
  },
  {
    q: "What happens after I request a trial?",
    a: "A Susmatic ESG specialist reviews your request, sets up your workspace and emails you a link to sign in. You review the fit against your own data before any commitment.",
  },
  {
    q: "Which frameworks does it help with?",
    a: "Susmatic ESG helps teams report against GRI, ISSB/IFRS S1 & S2 and CBB guidelines, and appends a framework index to reports. That's support for your reporting, not a certification.",
  },
  {
    q: "Is our data isolated from other customers?",
    a: "Yes — each organisation runs in its own isolated tenant, with role-based access inside it. See Security & trust for the full picture.",
  },
];
