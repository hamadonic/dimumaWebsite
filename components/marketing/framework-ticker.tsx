import { Check } from "@/components/ui/icons";
import { frameworks } from "@/lib/site";

/**
 * "Built for enterprises. Reports against GRI, ISSB/IFRS S1 & S2 and CBB."
 * — the enterprise/framework claim from the hero, made more prominent and
 * put in motion. The label stays static and instantly readable; the
 * framework badges scroll in an infinite marquee (pure CSS, see the
 * `.ticker-*` rules in globals.css). Fully accessible: with reduced motion
 * the marquee simply doesn't animate and shows one static, complete row.
 */
function FrameworkBadge({ short }: { short: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-green/25 bg-brand-green/10 px-4 py-2 text-sm font-semibold text-foreground">
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
      {short}
    </span>
  );
}

export function FrameworkTicker() {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-subtle bg-surface px-5 py-4 shadow-premium sm:flex-nowrap">
      <span className="inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-foreground">
        <Check className="h-5 w-5 shrink-0 text-brand-green" />
        Built for enterprises — reports against
      </span>

      <div className="ticker-viewport min-w-0 flex-1">
        <div className="ticker-track">
          <div className="ticker-group flex items-center gap-3 pr-3">
            {frameworks.map((f) => (
              <FrameworkBadge key={f.short} short={f.short} />
            ))}
          </div>
          <div className="ticker-group flex items-center gap-3 pr-3" aria-hidden="true">
            {frameworks.map((f) => (
              <FrameworkBadge key={`${f.short}-dup`} short={f.short} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
