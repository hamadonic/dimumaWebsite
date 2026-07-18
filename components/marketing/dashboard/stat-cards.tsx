import { stats } from "./data";

function Info() {
  return (
    <span
      aria-hidden
      className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border border-subtle text-[0.55rem] font-semibold text-muted"
    >
      i
    </span>
  );
}

export function StatCards() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {stats.map((stat) => (
        <li
          key={stat.label}
          className="flex flex-col gap-3 rounded-xl border border-subtle bg-surface p-4"
        >
          <div className="flex items-start justify-between gap-2">
            <span className="flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
              {stat.label}
              <Info />
            </span>
            <stat.icon className="h-[18px] w-[18px] shrink-0 text-brand-green" />
          </div>

          <div className="flex items-baseline gap-1">
            <span className="font-display text-2xl font-bold tracking-tight tabular-nums">
              {stat.value}
            </span>
            <span className="text-sm text-muted">{stat.unit}</span>
          </div>

          {stat.delta ? (
            <div className="flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-xs font-semibold tabular-nums"
                style={{
                  color:
                    stat.delta.dir === "up"
                      ? "var(--chart-up)"
                      : "var(--chart-down)",
                  backgroundColor:
                    stat.delta.dir === "up"
                      ? "color-mix(in oklab, var(--chart-up) 12%, transparent)"
                      : "color-mix(in oklab, var(--chart-down) 14%, transparent)",
                }}
              >
                <span aria-hidden>{stat.delta.dir === "up" ? "▲" : "▼"}</span>
                {stat.delta.pct}
              </span>
              <span className="text-xs text-muted">{stat.delta.note}</span>
            </div>
          ) : (
            <span className="text-xs text-muted">{stat.note}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
