import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Section } from "@/components/ui/layout";
import { HeroBackdrop } from "@/components/marketing/hero-backdrop";
import { CTASection } from "@/components/marketing/cta-section";
import { Photo } from "@/components/marketing/photo";
import { ArrowRight } from "@/components/ui/icons";
import { site, siteUrl } from "@/lib/site";
import { articles, getArticle } from "../content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Guide not found", robots: { index: false } };
  const url = `${siteUrl}/resources/${article.slug}`;
  const social = `${article.image.src}?auto=format&fit=crop&w=1200&h=630&q=70`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      images: [social],
      publishedTime: article.published,
      modifiedTime: article.updated,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const url = `${siteUrl}/resources/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        datePublished: article.published,
        dateModified: article.updated,
        mainEntityOfPage: url,
        image: `${article.image.src}?auto=format&fit=crop&w=1200&h=630&q=70`,
        author: { "@type": "Organization", name: site.name },
        publisher: { "@type": "Organization", name: site.parentPlatform },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Resources", item: `${siteUrl}/resources` },
          { "@type": "ListItem", position: 2, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Section className="relative overflow-hidden pt-14 sm:pt-16 lg:pt-20 !pb-10">
        <HeroBackdrop />
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/products/susmaticesg/resources" className="hover:text-accent">
                  Resources
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-foreground/80">{article.category}</li>
            </ol>
          </nav>

          <article className="mt-6">
            <header className="flex max-w-3xl flex-col gap-4">
              <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-5xl">
                {article.title}
              </h1>
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
                <span>{article.category}</span>
                <span aria-hidden>·</span>
                <span>{article.readingMinutes} min read</span>
                <span aria-hidden>·</span>
                <time dateTime={article.updated}>Updated {formatDate(article.updated)}</time>
              </p>
            </header>

            <div className="mt-8 aspect-[16/9] max-w-3xl">
              <Photo
                src={`${article.image.src}?auto=format&fit=crop&w=1600&q=70`}
                alt={article.image.alt}
                duotone={false}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                rounded="rounded-2xl"
                className="h-full w-full"
              />
            </div>

            <div className="mt-8 flex max-w-2xl flex-col gap-5">
              {article.body.map((block, i) => {
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="mt-4 font-display text-xl font-semibold tracking-tight sm:text-2xl"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="flex flex-col gap-2.5">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-[1.05rem] leading-relaxed text-muted">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={i} className="text-[1.05rem] leading-relaxed text-muted text-pretty">
                    {block.text}
                  </p>
                );
              })}
            </div>

            <div className="mt-10 max-w-2xl">
              <Link
                href="/products/susmaticesg/product"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                See how Susmatic ESG does this
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
