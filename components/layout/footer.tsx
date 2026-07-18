import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { DimumaMark } from "@/components/layout/dimuma-logo";
import { ButtonLink } from "@/components/ui/button";
import { Mail } from "@/components/ui/icons";
import { cta, footerNav, frameworks, site } from "@/lib/site";

export function Footer() {
  const year = 2026; // Static: avoids a client boundary just for the current year.

  return (
    <footer className="hairline-gradient bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        {/* Statement row */}
        <div className="flex flex-col gap-6 pb-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              From a receipt in an inbox to a number the board signs.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              A specialist sets up your workspace and emails you a link — no
              self-serve signup, no card details.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={cta.trial.href} size="lg">
              {cta.trial.label}
            </ButtonLink>
            <ButtonLink href={cta.demo.href} variant="secondary" size="lg">
              {cta.demo.label}
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-10 border-t border-subtle pt-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              The ESG record of account for enterprises — collect the data,
              prove it against its source, and report it.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-fit items-center gap-2 text-sm text-foreground/85 transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              {site.email}
            </a>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted/80">
              {site.tagline}
            </p>
          </div>

          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                {col.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {col.items.map((item) => (
                  <li key={item.label + item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-subtle pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2.5">
            <DimumaMark className="h-5 shrink-0 text-foreground/80" />
            <span>
              © {year} {site.name}. Part of the {site.parentPlatform} platform.
            </span>
          </p>
          <p className="text-xs leading-relaxed text-muted/80">
            Helps teams report against{" "}
            {frameworks.map((f, i) => (
              <span key={f.short}>
                {f.short}
                {i < frameworks.length - 1 ? ", " : ""}
              </span>
            ))}
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
