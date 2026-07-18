import type { Metadata } from "next";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/layout";
import { FeatureCard } from "@/components/marketing/cards";
import { InsightsShowcase } from "@/components/marketing/dashboard/insights-showcase";
import { DisclosureStatus } from "@/components/marketing/dashboard/disclosure-status";
import { TrackAreas } from "@/components/marketing/track-areas";
import { HeroBackdrop } from "@/components/marketing/hero-backdrop";
import { CTASection } from "@/components/marketing/cta-section";
import { ButtonLink } from "@/components/ui/button";
import { cta, ogImage, siteUrl } from "@/lib/site";
import { groups, productHero } from "./content";

export const metadata: Metadata = {
  title: "ESG data collection, evidence & reporting",
  description:
    "Automated ESG data collection to a one-click sustainability report: data entry, AI extraction, emission factors, GCC fuel prices, approvals and reports.",
  alternates: { canonical: `${siteUrl}/product` },
  openGraph: {
    title: "Susmatic ESG — the product",
    description:
      "Collect ESG data, prove it against its source, report it, and act on it.",
    url: `${siteUrl}/product`,
    images: [ogImage],
  },
};

export default function ProductPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
        <HeroBackdrop />
        <Container>
          <div className="flex max-w-3xl flex-col gap-6">
            <Eyebrow className="animate-in">{productHero.eyebrow}</Eyebrow>
            <h1 className="animate-in animate-in-1 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              {productHero.title}
            </h1>
            <p className="animate-in animate-in-2 text-lg leading-relaxed text-muted text-pretty">
              {productHero.lead}
            </p>
          </div>

          {/* In-page group nav */}
          <nav aria-label="Feature groups" className="animate-in animate-in-3 mt-10">
            <ul className="flex flex-wrap gap-2">
              {groups.map((g) => (
                <li key={g.key}>
                  <a
                    href={`#${g.key}`}
                    className="inline-flex items-center rounded-full border border-subtle bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-strong hover:text-foreground"
                  >
                    {g.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Section>

      {/* Feature groups */}
      {groups.map((group, i) => (
        <Section
          key={group.key}
          id={group.key}
          className={
            i % 2 === 1
              ? "hairline-gradient scroll-mt-20 border-b border-subtle bg-surface/40"
              : "scroll-mt-20"
          }
        >
          <Container>
            <SectionHeading
              eyebrow={group.label}
              title={group.title}
              lead={group.lead}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {group.features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
            {group.key === "collect" && (
              <div className="mt-8">
                <TrackAreas />
              </div>
            )}
            {group.key === "report" && (
              <div className="mt-8">
                <DisclosureStatus className="mx-auto max-w-2xl" />
              </div>
            )}
            {group.key === "act" && (
              <div className="mt-8">
                <InsightsShowcase />
              </div>
            )}
          </Container>
        </Section>
      ))}

      {/* Security cross-link */}
      <Section className="py-12">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-subtle bg-surface p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Assessing this for a bank?
              </h2>
              <p className="mt-1 text-sm text-muted">
                Role-based access, MFA/SSO, tenant isolation, data residency and an
                immutable audit log — laid out for procurement.
              </p>
            </div>
            <ButtonLink href="/products/susmatic/security" variant="secondary" className="shrink-0">
              Security &amp; trust
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <CTASection
        title="See it against your own data."
        lead="Request a trial and a Susmatic ESG specialist configures your entities and indicators, then emails you a link. Prefer a walkthrough first? Book a demo."
      />
    </>
  );
}
