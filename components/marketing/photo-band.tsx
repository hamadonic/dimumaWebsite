import type { ReactNode } from "react";
import { Container } from "@/components/ui/layout";
import { Photo } from "@/components/marketing/photo";

/**
 * Full-bleed photographic statement band — a brand-duotoned photo behind a
 * short, factual statement. Used sparingly for rhythm between sections.
 */
export function PhotoBand({
  src,
  alt,
  eyebrow,
  title,
  children,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Photo
          src={src}
          alt={alt}
          sizes="100vw"
          rounded="rounded-none"
          className="h-full w-full"
        />
      </div>
      <Container className="relative py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
            <span aria-hidden className="h-px w-6 bg-white/60" />
            {eyebrow}
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            {title}
          </h2>
          {children && (
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/85 text-pretty">
              {children}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
