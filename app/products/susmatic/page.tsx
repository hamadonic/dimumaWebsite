import { ButtonLink } from "@/components/ui/button";
import { Container, Eyebrow, Section, SectionHeading } from "@/components/ui/layout";
import {
  AudienceCard,
  Card,
  FeatureCard,
  IconBadge,
  PillarCard,
  StepCard,
} from "@/components/marketing/cards";
import { EvidenceTrail } from "@/components/marketing/evidence-trail";
import { GccCoverage } from "@/components/marketing/gcc-coverage";
import { ReportMoment } from "@/components/marketing/report-moment";
import { PhotoBand } from "@/components/marketing/photo-band";
import { InsightsShowcase } from "@/components/marketing/dashboard/insights-showcase";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { CTASection } from "@/components/marketing/cta-section";
import { ArrowRight, Check, Sparkles } from "@/components/ui/icons";
import { cta } from "@/lib/site";
import {
  audiences,
  gccFeatures,
  hero,
  pillars,
  problem,
  steps,
} from "./content";

export default function HomePage() {
  return (
    <>
      {/* ---- Hero ---- */}
      <Section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 end-0 -z-10 h-[30rem] w-[30rem] max-w-full rounded-full bg-brand-gradient opacity-[0.12] blur-3xl"
        />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <Eyebrow className="animate-in">{hero.eyebrow}</Eyebrow>
              <h1 className="animate-in animate-in-1 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
                {hero.title}
              </h1>
              <p className="animate-in animate-in-2 max-w-xl text-lg leading-relaxed text-muted text-pretty">
                {hero.lead}
              </p>
              <div className="animate-in animate-in-3 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={cta.trial.href} size="lg">
                  {cta.trial.label}
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={cta.demo.href} variant="secondary" size="lg">
                  {cta.demo.label}
                </ButtonLink>
              </div>
              <p className="animate-in animate-in-4 flex items-start gap-2 text-sm text-muted">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                {hero.note}
              </p>
            </div>

            <div className="animate-in animate-in-2 flex justify-center lg:justify-end">
              <EvidenceTrail />
            </div>
          </div>
        </Container>
      </Section>

      <TrustStrip />

      {/* ---- Problem ---- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow={problem.eyebrow}
            title={problem.title}
            lead={problem.lead}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problem.points.map((point) => (
              <Card key={point.title} className="flex flex-col gap-4">
                <IconBadge icon={point.icon} />
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Four pillars: Collect / Prove / Report / Act ---- */}
      <Section className="hairline-gradient bg-surface/40">
        <Container>
          <SectionHeading
            eyebrow="How Susmatic ESG works"
            title={
              <>
                Collect it. Prove it. Report it.{" "}
                <span className="text-brand-gradient">Act on it.</span>
              </>
            }
            lead="Four capabilities on one record of account — so every figure carries its evidence from entry to disclosure."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Insights showcase ---- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Insights"
            title="Once it's proven, it's a dashboard — not a spreadsheet."
            lead="Dashboards update the moment a record is approved — no month-end consolidation, no waiting on a spreadsheet to be reconciled. Every chart reads from the same approved records, so a dashboard and a report can't quietly disagree."
          />
          <div className="mt-12">
            <InsightsShowcase />
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-muted">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>
              <span className="font-semibold text-foreground/90">AI Studio</span>{" "}
              turns this live workspace into a presentation-ready board pack — a
              sustainability report built from the same approved records, not
              re-keyed into a separate deck.
            </span>
          </p>
        </Container>
      </Section>

      {/* ---- Reporting season, as one click ---- */}
      <Section className="hairline-gradient bg-surface/40">
        <Container>
          <SectionHeading
            eyebrow="From scramble to button"
            title="The year-end report, as one click."
            lead="Susmatic ESG simplifies the collecting and automates the drudgery — utility bills read in, litres derived, factors applied, approvals routed. So reporting season becomes a full sustainability report — executive pack, detailed pack, GRI and CBB index appended — from one button, not a quarter-long scramble."
          />
          <div className="mt-12">
            <ReportMoment />
          </div>
        </Container>
      </Section>

      {/* ---- How it works: three steps ---- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="From receipt to disclosure"
            title="Three steps, and the evidence travels with the number."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <StepCard
                key={step.title}
                number={i + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Built for the GCC (the wedge) ---- */}
      <Section className="hairline-gradient bg-surface/40">
        <Container>
          <SectionHeading
            eyebrow="Why the GCC specifics matter"
            title="A receipt says what was paid. Susmatic ESG says what it emitted."
            lead="Generic tools can't turn a regional fuel receipt into defensible litres. This is the difference between a number you typed and a number you can stand behind."
          />
          <div className="mt-12">
            <GccCoverage />
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {gccFeatures.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---- Who it's for ---- */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Who it's for"
            title="One record. Three people who need to trust it."
            lead="Susmatic ESG brings sustainability, HSE, finance and operations into one workflow — everyone contributes in their lane, the board engages with live numbers instead of stale decks, and nothing hinges on one person's inbox."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((audience) => (
              <AudienceCard key={audience.audience} {...audience} />
            ))}
          </div>
        </Container>
      </Section>

      <PhotoBand
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=70"
        alt="Abstract network of connected points, evoking a system of linked records."
        eyebrow="Where the year goes"
        title="Spend the year advancing sustainability — not reconstructing it."
      >
        When collection is automated and every figure carries its own evidence, the
        year-end report stops being a quarter-long scramble — and your team gets its
        year back for the work that actually moves the numbers.
      </PhotoBand>

      <CTASection />
    </>
  );
}
