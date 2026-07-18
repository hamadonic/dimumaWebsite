"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Close, Menu } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { basePath, cta, primaryNav } from "@/lib/site";

/**
 * Mobile navigation. Client-only because it holds open/close state and locks
 * body scroll. Desktop nav is rendered separately in the server Header.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-surface text-foreground"
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="flex h-16 items-center justify-between border-b border-subtle px-5">
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-muted">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-surface text-foreground"
              aria-label="Close menu"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-5">
            {primaryNav.map((item) => {
              const active =
                item.href === basePath
                  ? pathname === basePath
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium",
                    active
                      ? "bg-elevated text-foreground"
                      : "text-foreground hover:bg-elevated",
                  )}
                >
                  {item.label}
                  {active && (
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 border-t border-subtle p-5">
            <ButtonLink
              href={cta.demo.href}
              variant="secondary"
              size="lg"
              onClick={() => setOpen(false)}
            >
              {cta.demo.label}
            </ButtonLink>
            <ButtonLink
              href={cta.trial.href}
              size="lg"
              onClick={() => setOpen(false)}
            >
              {cta.trial.label}
            </ButtonLink>
          </div>
        </div>
      )}
    </div>
  );
}
