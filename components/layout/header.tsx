import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { Logo as DimumaLogo } from "@/components/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { NavLinks } from "@/components/layout/nav-links";
import { ButtonLink } from "@/components/ui/button";
import { cta } from "@/lib/site";

/**
 * Marketing header. Server component: the only interactive piece is the mobile
 * menu, isolated as its own client island. The Dimuma mark on the far right
 * links back to the parent company site.
 */
export function Header() {
  return (
    <header className="header-elevate sticky top-0 z-40 border-b border-subtle bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-3">
          {/* Parent company — links back to the main Dimuma site. */}
          <Link
            href="/"
            aria-label="Dimuma — company home"
            title="Back to Dimuma"
            className="flex items-center opacity-90 transition-opacity hover:opacity-100"
          >
            <DimumaLogo size={18} wordmarkColor="#000000" />
          </Link>
          <span aria-hidden className="h-6 w-px bg-subtle" />
          <Link
            href="/products/susmatic"
            className="flex items-center rounded-lg py-1"
            aria-label="Susmatic ESG — home"
          >
            <Logo compact />
          </Link>
        </div>

        <nav aria-label="Primary" className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={cta.demo.href}
            variant="secondary"
            className="hidden lg:inline-flex"
          >
            {cta.demo.label}
          </ButtonLink>
          <ButtonLink href={cta.trial.href} className="hidden sm:inline-flex">
            {cta.trial.label}
          </ButtonLink>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
