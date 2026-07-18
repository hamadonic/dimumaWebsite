import { cn } from "@/lib/cn";

/**
 * Dimuma — the parent platform's mark: an infinity loop with a leaf on each
 * lobe (rotationally symmetric line art). Recreated as an inline SVG in
 * currentColor so it inherits text color in both themes.
 *
 * Susmatic ESG is one product within the Dimuma platform; this mark appears
 * where that relationship is stated (footer, About).
 */
export function DimumaMark({
  className,
  drawOnView = false,
}: {
  className?: string;
  drawOnView?: boolean;
}) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  const draw = drawOnView ? "draw-path" : undefined;

  return (
    <svg
      viewBox="0 0 220 130"
      role="img"
      aria-label="Dimuma"
      focusable="false"
      className={cn("h-6 w-auto", className)}
    >
      {/* Infinity loop */}
      <path
        d="M42 65 C 42 34, 80 34, 110 65 C 140 96, 178 96, 178 65 C 178 34, 140 34, 110 65 C 80 96, 42 96, 42 65 Z"
        strokeWidth={8.5}
        pathLength={1}
        className={draw}
        {...stroke}
      />
      {/* Leaves — one per lobe, rotationally symmetric, undersides hugging the
          loop's arc. Surface fill masks the line beneath, so each leaf reads as
          sitting on the loop like the original mark. */}
      <g>
        <path
          d="M56 50 C 58 30, 86 19, 111 29 C 105 44, 78 53, 58 50 Z"
          strokeWidth={5.5}
          fill="var(--color-surface)"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path
          d="M64 46 C 79 42, 93 36, 104 32"
          strokeWidth={4.5}
          pathLength={1}
          className={draw}
          {...stroke}
        />
      </g>
      <g transform="rotate(180 110 65)">
        <path
          d="M56 50 C 58 30, 86 19, 111 29 C 105 44, 78 53, 58 50 Z"
          strokeWidth={5.5}
          fill="var(--color-surface)"
          stroke="currentColor"
          strokeLinejoin="round"
        />
        <path
          d="M64 46 C 79 42, 93 36, 104 32"
          strokeWidth={4.5}
          pathLength={1}
          className={draw}
          {...stroke}
        />
      </g>
    </svg>
  );
}

/** Mark + wordmark lockup, for the About "part of Dimuma" card. */
export function DimumaBadge({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <DimumaMark className="h-8" drawOnView />
      <span className="font-display text-lg font-bold uppercase tracking-[0.32em]">
        Dimuma
      </span>
    </span>
  );
}
