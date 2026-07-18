import type { ComponentType, ReactNode, SVGProps } from "react";
import { cn } from "@/lib/cn";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* ------------------------------------------------------------------ *
 * Shared chrome
 * ------------------------------------------------------------------ */

export function ChartCard({
  title,
  unit,
  valuesOn = false,
  children,
  className,
}: {
  title: string;
  unit: string;
  valuesOn?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "flex flex-col rounded-2xl border border-subtle bg-surface p-5",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <figcaption>
          <h3 className="font-display text-base font-semibold tracking-tight">
            {title}
          </h3>
          <p className="mt-0.5 text-xs text-muted">{unit}</p>
        </figcaption>
        {/* Decorative toolbar echoing the product UI (non-interactive). */}
        <div aria-hidden className="hidden shrink-0 items-center gap-1.5 sm:flex">
          <span
            className={cn(
              "rounded-md border px-2 py-1 text-[0.7rem] font-medium",
              valuesOn
                ? "border-brand-green/40 bg-brand-green/10 text-brand-green"
                : "border-subtle text-muted",
            )}
          >
            Values
          </span>
          <span className="rounded-md border border-subtle px-2 py-1 text-[0.7rem] font-medium text-muted">
            CSV
          </span>
          <span className="rounded-md border border-subtle px-2 py-1 text-[0.7rem] font-medium text-muted">
            Image
          </span>
        </div>
      </div>
      <div className="mt-4 flex-1">{children}</div>
    </figure>
  );
}

export function Legend({
  items,
  className,
}: {
  items: { label: string; color: string }[];
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      {items.map((it) => (
        <li key={it.label} className="flex items-center gap-1.5 text-xs text-muted">
          <span
            className="inline-block h-2.5 w-2.5 rounded-[3px]"
            style={{ backgroundColor: it.color }}
          />
          {it.label}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ *
 * Stacked bar chart (series[0] is the bottom of the stack)
 * ------------------------------------------------------------------ */

type Series = { label: string; color: string; values: number[] };

export function StackedBarChart({
  categories,
  series,
  yMax,
  yStep,
  showValues = false,
  ariaLabel,
}: {
  categories: string[];
  series: Series[];
  yMax: number;
  yStep: number;
  showValues?: boolean;
  ariaLabel: string;
}) {
  const W = 760;
  const H = 300;
  const pad = { top: 14, right: 12, bottom: 30, left: 40 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;
  const baseline = pad.top + plotH;

  const y = (v: number) => pad.top + plotH * (1 - v / yMax);
  const band = plotW / categories.length;
  const barW = Math.min(band * 0.6, 40);

  const ticks: number[] = [];
  for (let t = 0; t <= yMax; t += yStep) ticks.push(t);

  const GAP = 2; // surface gap between stacked segments

  return (
    // On narrow screens the chart would shrink until its labels are unreadable;
    // instead it keeps a legible minimum width and scrolls horizontally inside
    // its card (the card, not the page, owns the scroll).
    <div className="-mx-1 overflow-x-auto px-1 pb-1">
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full min-w-[500px]"
      role="img"
      aria-label={ariaLabel}
    >
      {/* Gridlines + y ticks */}
      {ticks.map((t) => (
        <g key={t}>
          <line
            x1={pad.left}
            x2={W - pad.right}
            y1={y(t)}
            y2={y(t)}
            stroke="var(--chart-grid)"
            strokeWidth={1}
          />
          <text
            x={pad.left - 8}
            y={y(t) + 4}
            textAnchor="end"
            className="fill-muted"
            style={{ fontSize: 11 }}
          >
            {t}
          </text>
        </g>
      ))}

      {categories.map((cat, i) => {
        const cx = pad.left + band * i + band / 2;
        const x = cx - barW / 2;
        // cumulative from bottom
        let acc = 0;
        const segs = series.map((s) => {
          const v = s.values[i] ?? 0;
          const y0 = y(acc); // bottom of segment (higher pixel)
          const y1 = y(acc + v); // top of segment
          acc += v;
          return { s, v, y0, y1 };
        });
        const topY = y(acc);
        return (
          <g key={cat}>
            {/* rounded-top clip for the whole stack */}
            <clipPath id={`bar-clip-${ariaLabel.replace(/\W/g, "")}-${i}`}>
              <path
                d={`M${x},${baseline} L${x},${topY + 4} Q${x},${topY} ${x + 4},${topY} L${x + barW - 4},${topY} Q${x + barW},${topY} ${x + barW},${topY + 4} L${x + barW},${baseline} Z`}
              />
            </clipPath>
            <g clipPath={`url(#bar-clip-${ariaLabel.replace(/\W/g, "")}-${i})`}>
              {segs.map((seg, si) => (
                <rect
                  key={si}
                  x={x}
                  y={seg.y1}
                  width={barW}
                  height={Math.max(0, seg.y0 - seg.y1)}
                  fill={seg.s.color}
                />
              ))}
              {/* surface gaps between segments */}
              {segs.slice(1).map((seg, si) => (
                <rect
                  key={`gap-${si}`}
                  x={x}
                  y={seg.y0 - GAP}
                  width={barW}
                  height={GAP}
                  fill="var(--color-surface)"
                />
              ))}
            </g>

            {/* values */}
            {showValues &&
              segs.map((seg, si) => {
                const h = seg.y0 - seg.y1;
                if (seg.v === 0) return null;
                if (h >= 18) {
                  return (
                    <text
                      key={`v-${si}`}
                      x={cx}
                      y={(seg.y0 + seg.y1) / 2 + 4}
                      textAnchor="middle"
                      className="fill-white"
                      style={{ fontSize: 12, fontWeight: 600 }}
                    >
                      {seg.v}
                    </text>
                  );
                }
                // thin segment → small pill at the top of the stack
                const label = String(seg.v);
                const pw = 12 + label.length * 7;
                return (
                  <g key={`v-${si}`}>
                    <rect
                      x={cx - pw / 2}
                      y={seg.y1 - 9}
                      width={pw}
                      height={17}
                      rx={4}
                      fill={seg.s.color}
                    />
                    <text
                      x={cx}
                      y={seg.y1 + 3}
                      textAnchor="middle"
                      className="fill-white"
                      style={{ fontSize: 11, fontWeight: 600 }}
                    >
                      {label}
                    </text>
                  </g>
                );
              })}

            {/* x label */}
            <text
              x={cx}
              y={baseline + 18}
              textAnchor="middle"
              className="fill-muted"
              style={{ fontSize: 11 }}
            >
              {cat}
            </text>
          </g>
        );
      })}
    </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Donut chart
 * ------------------------------------------------------------------ */

type Slice = { label: string; value: number; color: string };

function polar(cx: number, cy: number, r: number, a: number) {
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

export function DonutChart({
  slices,
  ariaLabel,
  centerLabel,
  centerSub,
  labelThreshold = 0.06,
}: {
  slices: Slice[];
  ariaLabel: string;
  centerLabel?: string;
  centerSub?: string;
  labelThreshold?: number;
}) {
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const R = 96;
  const r = 60;
  const total = slices.reduce((sum, s) => sum + s.value, 0);
  const gap = 0.03; // radians of surface gap between slices

  let angle = -Math.PI / 2; // start at top
  const arcs = slices.map((s) => {
    const frac = s.value / total;
    const a0 = angle + gap / 2;
    const a1 = angle + frac * Math.PI * 2 - gap / 2;
    angle += frac * Math.PI * 2;
    const large = a1 - a0 > Math.PI ? 1 : 0;
    const [x0, y0] = polar(cx, cy, R, a0);
    const [x1, y1] = polar(cx, cy, R, a1);
    const [x2, y2] = polar(cx, cy, r, a1);
    const [x3, y3] = polar(cx, cy, r, a0);
    const d = `M${x0},${y0} A${R},${R} 0 ${large} 1 ${x1},${y1} L${x2},${y2} A${r},${r} 0 ${large} 0 ${x3},${y3} Z`;
    const mid = (a0 + a1) / 2;
    const [lx, ly] = polar(cx, cy, (R + r) / 2, mid);
    return { d, frac, lx, ly, s };
  });

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto h-auto w-full max-w-[240px]"
      role="img"
      aria-label={ariaLabel}
    >
      {arcs.map((a) => (
        <path key={a.s.label} d={a.d} fill={a.s.color} />
      ))}
      {arcs.map((a) =>
        a.frac >= labelThreshold ? (
          <text
            key={`l-${a.s.label}`}
            x={a.lx}
            y={a.ly + 4}
            textAnchor="middle"
            className="fill-white"
            style={{ fontSize: 13, fontWeight: 700 }}
          >
            {Math.round(a.frac * 100)}%
          </text>
        ) : null,
      )}
      {centerLabel && (
        <text
          x={cx}
          y={centerSub ? cy - 2 : cy + 5}
          textAnchor="middle"
          className="fill-foreground"
          style={{ fontSize: 22, fontWeight: 700 }}
        >
          {centerLabel}
        </text>
      )}
      {centerSub && (
        <text
          x={cx}
          y={cy + 16}
          textAnchor="middle"
          className="fill-muted"
          style={{ fontSize: 11 }}
        >
          {centerSub}
        </text>
      )}
    </svg>
  );
}
