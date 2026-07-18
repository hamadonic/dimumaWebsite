import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { HeroBackdrop } from "@/components/marketing/hero-backdrop";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you're looking for doesn't exist or has moved.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="relative flex flex-1 items-center overflow-hidden py-24">
        <HeroBackdrop />
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="font-display text-7xl font-bold tracking-tight text-brand-gradient sm:text-8xl">
            404
          </p>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            This page isn&apos;t on the record.
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved. Your
            data, of course, is exactly where you left it.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/products/susmatic" size="lg">
              Back to home
            </ButtonLink>
            <ButtonLink href="/products/susmatic/product" variant="secondary" size="lg">
              Explore the product
            </ButtonLink>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
