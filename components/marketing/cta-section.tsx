import { ButtonLink } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { cta } from "@/lib/site";

/**
 * Closing call-to-action band, reused at the foot of most pages.
 * The CTAs are honest: a trial is provisioned by a person (see /contact),
 * so nothing here promises instant access.
 */
export function CTASection({
  title = "Put your next disclosure on the record.",
  lead = "Request a trial and a Susmatic ESG specialist will set up your workspace. No self-serve signup, no credit card — a real person configures your entities and emails you a link.",
}: {
  title?: string;
  lead?: string;
}) {
  return (
    <Section>
      <Container>
        <div className="shadow-premium rounded-3xl bg-gradient-to-r from-brand-green/45 via-subtle to-brand-blue/45 p-px">
        <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-surface px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-[36rem] max-w-full rounded-full bg-brand-gradient opacity-15 blur-3xl"
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-muted text-pretty">{lead}</p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={cta.trial.href} size="lg">
                {cta.trial.label}
              </ButtonLink>
              <ButtonLink href={cta.demo.href} variant="secondary" size="lg">
                {cta.demo.label}
              </ButtonLink>
            </div>
          </div>
        </div>
        </div>
      </Container>
    </Section>
  );
}
