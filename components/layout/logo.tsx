import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Susmatic brand lockup — official mark (an abstract "S" outline,
 * public/susmatic-mark.svg) plus the wordmark, matching the brand's actual
 * logo lockup: "SusmaticESG" set as one word in a single ink color (mixed
 * case, not all-caps) with a small trademark mark in the brand green.
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
          "inline-flex items-baseline gap-1 font-display font-bold leading-none tracking-[0.01em] text-foreground",
          compact ? "text-[17px]" : "text-[1.28rem]",
        )}
      >
        SusmaticESG
        <sup className="text-[0.42em] font-semibold text-brand-green">TM</sup>
      </span>
    </span>
  );
}
