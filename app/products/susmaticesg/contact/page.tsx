import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { HeroBackdrop } from "@/components/marketing/hero-backdrop";
import { Mail } from "@/components/ui/icons";
import { ogImage, site, siteUrl } from "@/lib/site";
import { RequestForm } from "./request-form";
import { contactHero, reassurance, whatHappens } from "./content";

// generateMetadata (not a static export) so we can react to the ?intent= param:
// the canonical always points to the clean /contact URL, and any parameterized
// variant (e.g. ?intent=demo) is explicitly noindexed — belt-and-braces against
// duplicate-URL indexing, on top of the canonical.
export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const hasQuery = Object.keys(params).length > 0;
  return {
    title: "Request a trial",
    description:
      "Request a Susmatic ESG trial or book a demo. A specialist sets up your workspace and emails you a link — no self-serve signup, no card details.",
    alternates: { canonical: `${siteUrl}/contact` },
    ...(hasQuery ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: "Request a Susmatic ESG trial",
      description:
        "A specialist configures your workspace and emails you a link. No self-serve signup.",
      url: `${siteUrl}/contact`,
      images: [ogImage],
    },
  };
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const { intent } = await searchParams;
  const initialIntent = intent === "demo" ? "demo" : "trial";

  return (
    <Section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
      <HeroBackdrop />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Left: context */}
          <div className="flex flex-col gap-6">
            <Eyebrow className="animate-in">{contactHero.eyebrow}</Eyebrow>
            <h1 className="animate-in animate-in-1 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
              {contactHero.title}
            </h1>
            <p className="animate-in animate-in-2 text-lg leading-relaxed text-muted text-pretty">
              {contactHero.lead}
            </p>

            <ol className="mt-2 flex flex-col gap-5">
              {whatHappens.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-subtle bg-surface text-accent">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-semibold tracking-tight">
                      <span className="text-muted/70">{i + 1}. </span>
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-2 flex items-start gap-3 rounded-xl border border-subtle bg-surface p-4">
              <reassurance.icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
              <p className="text-sm leading-relaxed text-muted">
                {reassurance.text}
              </p>
            </div>

            <a
              href={`mailto:${site.email}`}
              className="lift group flex items-center gap-4 rounded-xl border border-subtle bg-surface p-4 transition-colors hover:border-accent/50"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-gradient-strong text-white">
                <Mail className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
                  Prefer email? Write to us
                </span>
                <span className="font-display text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                  {site.email}
                </span>
              </span>
            </a>
          </div>

          {/* Right: form */}
          <div className="lg:pt-2">
            <RequestForm initialIntent={initialIntent} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
