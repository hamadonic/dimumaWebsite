import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { HeroBackdrop } from "@/components/marketing/hero-backdrop";
import { Card } from "@/components/marketing/cards";
import { Photo } from "@/components/marketing/photo";
import { ArrowRight } from "@/components/ui/icons";
import { ogImage, siteUrl } from "@/lib/site";
import { articles, resourcesHero } from "./content";

export const metadata: Metadata = {
  title: "Resources — ESG reporting guides",
  description:
    "Practical, jargon-free guides on collecting ESG data, proving it against its source, and getting a disclosure ready for assurance.",
  alternates: { canonical: `${siteUrl}/resources` },
  openGraph: {
    title: "Susmatic ESG — Resources",
    description:
      "Guides on collecting ESG data, proving it, and getting a disclosure ready for assurance.",
    url: `${siteUrl}/resources`,
    images: [ogImage],
  },
};

export default function ResourcesPage() {
  return (
    <Section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20">
      <HeroBackdrop />
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <Eyebrow className="animate-in">{resourcesHero.eyebrow}</Eyebrow>
          <h1 className="animate-in animate-in-1 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl">
            {resourcesHero.title}
          </h1>
          <p className="animate-in animate-in-2 text-lg leading-relaxed text-muted text-pretty">
            {resourcesHero.lead}
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug}>
              <Card className="lift group relative flex h-full flex-col gap-3 overflow-hidden">
                <div className="-mx-6 -mt-6 mb-2 aspect-[16/9] sm:-mx-7 sm:-mt-7">
                  <Photo
                    src={`${article.image.src}?auto=format&fit=crop&w=800&q=65`}
                    alt=""
                    duotone={false}
                    sizes="(max-width: 768px) 100vw, 380px"
                    rounded="rounded-none"
                    className="h-full w-full"
                  />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {article.category}
                </span>
                <h2 className="font-display text-lg font-semibold tracking-tight text-balance">
                  <Link
                    href={`/products/susmatic/resources/${article.slug}`}
                    className="after:absolute after:inset-0 group-hover:text-accent"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm leading-relaxed text-muted">{article.excerpt}</p>
                <p className="mt-auto flex items-center gap-2 pt-2 text-sm font-medium text-accent">
                  Read guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  <span className="ms-auto text-xs font-normal text-muted">
                    {article.readingMinutes} min read
                  </span>
                </p>
              </Card>
            </li>
          ))}
        </ul>

        {articles.length < 3 && (
          <p className="mt-8 text-sm text-muted">
            More guides are in progress — on GRI, ISSB/IFRS S1 &amp; S2 and CBB
            reporting, emissions calculation, and audit readiness.
          </p>
        )}
      </Container>
    </Section>
  );
}
