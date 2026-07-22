import type { Metadata } from "next";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/layout";
import { Card, IconBadge } from "@/components/marketing/cards";
import { CTASection } from "@/components/marketing/cta-section";
import { BrandArtwork } from "@/components/marketing/brand-artwork";
import { HeroBackdrop } from "@/components/marketing/hero-backdrop";
import { DimumaBadge } from "@/components/layout/dimuma-logo";
import { ogImage, site, siteUrl } from "@/lib/site";
import { aboutHero, beliefs, forWhom } from "./content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Susmatic ESG is the ESG product within the Dimuma platform, built to simplify sustainability and make every ESG number defensible. Simplify Sustainability.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About Susmatic ESG",
    description:
      "The ESG record of account for enterprises — collect it, prove it, report it.",
    url: `${siteUrl}/about`,
    images: [ogImage],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
        <HeroBackdrop />
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="flex flex-col gap-6">
              <Eyebrow className="animate-in">{aboutHero.eyebrow}</Eyebrow>
              <h1 className="animate-in animate-in-1 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
                {aboutHero.title}
              </h1>
              <p className="animate-in animate-in-2 text-lg leading-relaxed text-muted text-pretty">
                {aboutHero.lead}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span aria-hidden className="h-px w-10 bg-brand-gradient" />
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                  {aboutHero.tagline}
                </span>
              </div>
            </div>
            <BrandArtwork />
          </div>
        </Container>
      </Section>

      {/* Beliefs */}
      <Section className="hairline-gradient bg-surface/40 !pt-16">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Simple to run — hard to argue with."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {beliefs.map((belief) => (
              <Card key={belief.title} className="flex flex-col gap-4">
                <IconBadge icon={belief.icon} />
                <h3 className="font-display text-lg font-semibold tracking-tight text-balance">
                  {belief.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {belief.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Who we build for + platform note */}
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-4">
              <SectionHeading eyebrow="Who we build for" title={forWhom.title} />
              <p className="text-base leading-relaxed text-muted">{forWhom.lead}</p>
              <ul className="mt-1 flex flex-wrap gap-2">
                {forWhom.audiences.map((audience) => (
                  <li
                    key={audience}
                    className="inline-flex items-center gap-1.5 rounded-full border border-subtle bg-surface px-3 py-1 text-sm text-foreground/85"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                    {audience}
                  </li>
                ))}
              </ul>
            </div>
            <Card className="flex flex-col justify-center gap-4 bg-surface">
              <DimumaBadge className="text-foreground" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Part of {site.parentPlatform}
              </p>
              <p className="text-base leading-relaxed text-foreground/85">
                Susmatic ESG is one product in the wider {site.parentPlatform}{" "}
                platform. This site is about the ESG product specifically — the
                place teams collect ESG data, prove it, and report it.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
