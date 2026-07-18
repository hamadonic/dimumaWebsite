"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { primaryNav, basePath } from "@/lib/site";

/**
 * Desktop nav with an active-page state: aria-current for assistive tech and
 * a persistent gradient underline for sighted users. Client-only because it
 * reads the pathname; the rest of the header stays a server component.
 */
export function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {primaryNav.map((item) => {
        const active =
          item.href === basePath ? pathname === basePath : pathname.startsWith(item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group relative inline-flex items-center rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                active ? "text-foreground" : "text-muted hover:text-foreground",
              )}
            >
              {item.label}
              <span
                aria-hidden
                className={cn(
                  "absolute inset-x-3.5 -bottom-px h-px bg-brand-gradient transition-transform duration-200",
                  active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                )}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
