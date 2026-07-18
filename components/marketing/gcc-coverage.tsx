import { gccCountries } from "@/lib/site";
import { Droplet } from "@/components/ui/icons";

/**
 * GCC fuel-price coverage — a hub-and-spoke graphic showing the maintained
 * Fuel Prices library feeding all six GCC markets. Country list is factual
 * (the six GCC states); no specific prices are shown (those are maintained
 * data, not something to invent).
 */

const nodes = [
  { name: "Kuwait", angle: -90 },
  { name: "Bahrain", angle: -30 },
  { name: "Qatar", angle: 30 },
  { name: "UAE", angle: 90 },
  { name: "Oman", angle: 150 },
  { name: "Saudi Arabia", angle: 210 },
];

const CX = 210;
const CY = 150;
const R = 104;

function pos(angleDeg: number, radius: number) {
  const a = (angleDeg * Math.PI) / 180;
  return [CX + radius * Math.cos(a), CY + radius * Math.sin(a)] as const;
}

export function GccCoverage() {
  return (
    <div className="grid items-center gap-8 rounded-3xl border border-subtle bg-surface p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
      {/* Graphic */}
      <svg
        viewBox="0 0 420 300"
        className="h-auto w-full"
        role="img"
        aria-label="A central Fuel Prices library maintained across the six GCC countries: Bahrain, Saudi Arabia, the UAE, Qatar, Kuwait and Oman."
      >
        <defs>
          <radialGradient id="gcc-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--color-brand-blue)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--color-brand-blue)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={CX} cy={CY} r={140} fill="url(#gcc-glow)" />

        {/* spokes */}
        {nodes.map((n) => {
          const [x, y] = pos(n.angle, R);
          return (
            <line
              key={`s-${n.name}`}
              x1={CX}
              y1={CY}
              x2={x}
              y2={y}
              stroke="var(--color-subtle)"
              strokeWidth={1.5}
              strokeDasharray="3 4"
            />
          );
        })}

        {/* country pins */}
        {nodes.map((n, i) => {
          const [x, y] = pos(n.angle, R);
          const c = Math.cos((n.angle * Math.PI) / 180);
          const anchor = c > 0.3 ? "start" : c < -0.3 ? "end" : "middle";
          const [lx, ly] = pos(n.angle, R + 16);
          return (
            <g key={n.name}>
              <circle cx={x} cy={y} r={10} fill="var(--color-surface)" stroke="var(--color-subtle)" />
              <circle
                cx={x}
                cy={y}
                r={4.5}
                fill="var(--color-brand-green)"
                className="pulse-dot"
                style={{ animationDelay: `${i * 0.45}s` }}
              />
              <text
                x={lx}
                y={ly + 4}
                textAnchor={anchor}
                className="fill-foreground"
                style={{ fontSize: 12, fontWeight: 600 }}
              >
                {n.name}
              </text>
            </g>
          );
        })}

        {/* central hub */}
        <g>
          <rect
            x={CX - 66}
            y={CY - 26}
            width={132}
            height={52}
            rx={14}
            fill="var(--color-brand-navy)"
          />
          <circle cx={CX - 42} cy={CY} r={13} fill="rgba(255,255,255,0.14)" />
          <g transform={`translate(${CX - 51}, ${CY - 9})`}>
            <path
              d="M9 1s5 5.3 5 8.7A5 5 0 0 1 4 9.7C4 6.3 9 1 9 1Z"
              fill="none"
              stroke="#ffffff"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <text
            x={CX + 6}
            y={CY - 2}
            textAnchor="middle"
            className="fill-white"
            style={{ fontSize: 11, fontWeight: 700 }}
          >
            Fuel Prices
          </text>
          <text
            x={CX + 6}
            y={CY + 12}
            textAnchor="middle"
            fill="rgba(255,255,255,0.7)"
            style={{ fontSize: 8.5, letterSpacing: 0.4 }}
          >
            MAINTAINED MONTHLY
          </text>
        </g>
      </svg>

      {/* Copy + country chips */}
      <div className="flex flex-col gap-4">
        <h3 className="font-display text-xl font-semibold tracking-tight">
          One maintained library. Six markets.
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          Pump prices are kept current per country and grade, so a fuel receipt
          becomes litres using the price in force that month — not a guess, and not
          a figure each team maintains on its own.
        </p>
        <ul className="flex flex-wrap gap-2">
          {gccCountries.map((c) => (
            <li
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full border border-subtle bg-background px-3 py-1 text-sm text-foreground/85"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
              {c}
            </li>
          ))}
        </ul>
        <p className="text-xs text-muted">Petrol and diesel grades, updated monthly.</p>
      </div>
    </div>
  );
}
