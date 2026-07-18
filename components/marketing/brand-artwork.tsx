import { cn } from "@/lib/cn";

/**
 * Abstract branded artwork — a mobius ribbon with data marks flowing through it,
 * echoing the mark. Purely decorative; theme-aware and responsive.
 */
export function BrandArtwork({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-subtle bg-surface",
        className,
      )}
    >
      <svg
        viewBox="0 0 480 340"
        className="h-auto w-full"
        role="img"
        aria-label="Abstract artwork of a green-to-blue infinity ribbon with data marks flowing through it."
      >
        <defs>
          <linearGradient id="art-ribbon" x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0%" stopColor="var(--color-brand-green)" />
            <stop offset="55%" stopColor="#2f9a8f" />
            <stop offset="100%" stopColor="var(--color-brand-blue)" />
          </linearGradient>
          <radialGradient id="art-glow-a" cx="30%" cy="35%" r="45%">
            <stop offset="0%" stopColor="var(--color-brand-green)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--color-brand-green)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="art-glow-b" cx="72%" cy="65%" r="45%">
            <stop offset="0%" stopColor="var(--color-brand-blue)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--color-brand-blue)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="480" height="340" fill="url(#art-glow-a)" />
        <rect width="480" height="340" fill="url(#art-glow-b)" />

        {/* faint dotted field */}
        <g fill="var(--color-subtle)">
          {Array.from({ length: 7 }).map((_, r) =>
            Array.from({ length: 11 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={40 + c * 40} cy={40 + r * 40} r={1.4} />
            )),
          )}
        </g>

        {/* mobius ribbon — draws itself in as it scrolls into view */}
        <path
          d="M120 170 C 120 110, 200 110, 240 170 C 280 230, 360 230, 360 170 C 360 110, 280 110, 240 170 C 200 230, 120 230, 120 170 Z"
          fill="none"
          stroke="url(#art-ribbon)"
          strokeWidth={26}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.95}
          pathLength={1}
          className="draw-path"
        />

        {/* floating data marks */}
        <g>
          <g transform="translate(78 96)">
            <rect width="66" height="44" rx="9" fill="var(--color-elevated)" stroke="var(--color-subtle)" />
            <rect x="10" y="12" width="30" height="4" rx="2" fill="var(--color-brand-green)" />
            <rect x="10" y="22" width="46" height="3" rx="1.5" fill="var(--color-subtle)" />
            <rect x="10" y="30" width="38" height="3" rx="1.5" fill="var(--color-subtle)" />
          </g>
          <g transform="translate(338 196)">
            <rect width="70" height="48" rx="9" fill="var(--color-elevated)" stroke="var(--color-subtle)" />
            <rect x="10" y="30" width="8" height="8" rx="1.5" fill="var(--color-brand-green)" />
            <rect x="24" y="22" width="8" height="16" rx="1.5" fill="var(--color-brand-blue)" />
            <rect x="38" y="14" width="8" height="24" rx="1.5" fill="var(--color-brand-green)" />
            <rect x="52" y="24" width="8" height="14" rx="1.5" fill="var(--color-brand-blue)" />
          </g>
          <circle cx="240" cy="170" r="9" fill="var(--color-surface)" stroke="url(#art-ribbon)" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}
