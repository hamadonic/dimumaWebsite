import { cn } from "@/lib/cn";

/**
 * Susmatic ESG brand lockup — WORDMARK ONLY by request.
 *
 * "SUSMATIC" in the foreground ink (navy in light, near-white in dark),
 * "ESG" in the brand accent blue. Company tagline is "Simplify Sustainability".
 *
 * TODO: when the official mark asset is supplied (e.g. public/susmatic-mark.png
 * — the green-to-blue mobius with gear and leaf), reintroduce it here via
 * next/image with explicit dimensions:
 *   <Image src="/susmatic-mark.png" alt="" width={40} height={40} priority />
 * Do not redraw it.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1.5 font-display text-[1.28rem] font-bold uppercase leading-none tracking-[0.02em]",
        className,
      )}
    >
      <span className="text-foreground">Susmatic</span>
      <span className="text-accent">ESG</span>
    </span>
  );
}
