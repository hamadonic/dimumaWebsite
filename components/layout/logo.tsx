import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Susmatic brand lockup — 2026 refresh: the official mark (an abstract "S"
 * outline, public/susmatic-mark.svg, extracted from the brand PDF) plus the
 * wordmark. "SUSMATIC" sits in the foreground ink (navy in light, near-white
 * in dark), "ESG" in the brand accent blue. Tagline is "Simplify Sustainability".
 *
 * `compact` shrinks the mark + wordmark to sit evenly alongside the smaller
 * Dimuma parent-company mark in the header (default size is for the footer,
 * where the logo stands alone).
 */
export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const iconSize = compact ? 18 : 28;
  const iconWidth = Math.round((iconSize * 94.531) / 132.559);

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Image
        src="/susmatic-mark.svg"
        alt=""
        width={iconWidth}
        height={iconSize}
        priority
        className="shrink-0"
        style={{ height: iconSize, width: "auto" }}
      />
      <span
        className={cn(
          "inline-flex items-baseline gap-1.5 font-display font-bold uppercase leading-none tracking-[0.02em]",
          compact ? "text-[17px]" : "text-[1.28rem]",
        )}
      >
        <span className="text-foreground">Susmatic</span>
        <span className="text-accent">ESG</span>
      </span>
    </span>
  );
}
