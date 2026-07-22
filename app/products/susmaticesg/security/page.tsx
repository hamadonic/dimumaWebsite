import type { Metadata } from "next";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/layout";
import { Card, IconBadge } from "@/components/marketing/cards";
import { ApprovalFlow } from "@/components/marketing/approval-flow";
import { HeroBackdrop } from "@/components/marketing/hero-backdrop";
import { PhotoBand } from "@/components/marketing/photo-band";
import { CTASection } from "@/components/marketing/cta-section";
import { ogImage, siteUrl } from "@/lib/site";
import { controls, chain, securityHero, standardsNote } from "./content";

export const metadata: Metadata = {
  title: "Security & trust",
  description:
    "RBAC, MFA/SSO, an immutable audit log, tenant isolation, data residency and full traceability — how Susmatic ESG stands up to a bank's procurement review.",
  alternates: { canonical: `${siteUrl}/security` },
  openGraph: {
    title: "Susmatic ESG — security & trust",
    description:
      "RBAC, MFA/SSO, immutable audit log, tenant isolation and traceability, described plainly.",
    url: `${siteUrl}/security`,
    images: [ogImage],
  },
};

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <Section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
        <HeroBackdrop />
        <Container>
          <div className="flex max-w-3xl flex-col gap-6">
            <Eyebrow className="animate-in">{securityHero.eyebrow}</Eyebrow>
            <h1 className="animate-in animate-in-1 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              {securityHero.title}
            </h1>
            <p className="animate-in animate-in-2 text-lg leading-relaxed text-muted text-pretty">
              {securityHero.lead}
            </p>
          </div>
        </Container>
      </Section>

      {/* Core controls */}
      <Section className="hairline-gradient bg-surface/40 !pt-16">
        <Container>
          <SectionHeading
            eyebrow="Controls"
            title="The controls procurement will ask about."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((control) => (
              <Card key={control.title} className="flex flex-col gap-4">
                <IconBadge icon={control.icon} />
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {control.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {control.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Chain of defensibility */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow={chain.eyebrow}
            title={chain.title}
            lead={chain.lead}
          />
          <div className="mt-12">
            <ApprovalFlow />
          </div>
        </Container>
      </Section>

      {/* Standards honesty note */}
      <Section className="!pt-0">
        <Container>
          <div className="flex flex-col gap-5 rounded-2xl border border-subtle bg-surface p-7 sm:flex-row sm:gap-6 sm:p-9">
            <IconBadge icon={standardsNote.icon} className="shrink-0" />
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {standardsNote.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {standardsNote.body}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <PhotoBand
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=70"
        alt="A modern institutional building, evoking an enterprise under review."
        eyebrow="Assurance"
        title="The evidence an auditor asks for, already in place."
      >
        Access, approvals and an immutable audit trail aren't a policy you promise
        — they're how a record moves, so a review finds the chain intact.
      </PhotoBand>

      <CTASection
        title="Hand this to your security team."
        lead="Book a demo and we'll walk your security and procurement reviewers through access, approvals and the audit trail — with your questions in hand."
      />
    </>
  );
}
