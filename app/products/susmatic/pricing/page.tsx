import type { Metadata } from "next";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/layout";
import { ButtonLink } from "@/components/ui/button";
import { HeroBackdrop } from "@/components/marketing/hero-backdrop";
import { Check } from "@/components/ui/icons";
import { cn } from "@/lib/cn";
import { ogImage, siteUrl } from "@/lib/site";
import { faqs, priceNote, pricingHero, tiers } from "./content";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Susmatic ESG is provisioned by an administrator and priced to your entities — no self-serve checkout, no card details. Request a trial to scope pricing.",
  alternates: { canonical: `${siteUrl}/pricing` },
  openGraph: {
    title: "Susmatic ESG — pricing",
    description: "Quote-based pricing scoped to your entities. No checkout.",
    url: `${siteUrl}/pricing`,
    images: [ogImage],
  },
};

/** FAQ rich-result structured data (mirrors the on-page Q&A). */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <Section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
        <HeroBackdrop />
        <Container>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <Eyebrow className="animate-in">{pricingHero.eyebrow}</Eyebrow>
            <h1 className="animate-in animate-in-1 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              {pricingHero.title}
            </h1>
            <p className="animate-in animate-in-2 text-lg leading-relaxed text-muted text-pretty">
              {pricingHero.lead}
            </p>
          </div>
        </Container>
      </Section>

      {/* Tiers */}
      <Section className="!pt-4">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.key}
                className={cn(
                  "flex flex-col rounded-2xl border bg-surface p-7",
                  tier.highlighted
                    ? "shadow-premium border-accent/50 ring-1 ring-accent/25"
                    : "lift border-subtle",
                )}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-brand-gradient-strong px-3 py-1 text-xs font-semibold text-white">
                    Most common
                  </span>
                )}
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  {tier.name}
                </h2>
                <p className="mt-1 text-sm text-muted">{tier.audience}</p>

                {/* Price — intentionally "Custom": no figures are invented. */}
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold tracking-tight">
                    Custom
                  </span>
                  {/* TODO: replace with real figure when finance confirms pricing. */}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {tier.summary}
                </p>

                <ButtonLink
                  href={tier.cta.href}
                  variant={tier.highlighted ? "primary" : "secondary"}
                  size="lg"
                  className="mt-6 w-full"
                >
                  {tier.cta.label}
                </ButtonLink>

                <ul className="mt-7 flex flex-col gap-3 border-t border-subtle pt-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      <span className="text-foreground/85">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted">
            {priceNote}
          </p>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="hairline-gradient bg-surface/40">
        <Container>
          <SectionHeading eyebrow="Questions" title="Straight answers." />
          <dl className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="flex flex-col gap-2">
                <dt className="font-display text-base font-semibold tracking-tight">
                  {faq.q}
                </dt>
                <dd className="text-sm leading-relaxed text-muted">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>
    </>
  );
}
