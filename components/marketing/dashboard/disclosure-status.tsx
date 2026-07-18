import { cn } from "@/lib/cn";
import { Leaf, ListChecks, ShieldCheck, Users } from "@/components/ui/icons";

/**
 * Disclosure status tracker — completion of every metric across the three ESG
 * areas, framed as the basis for reporting and external assurance.
 * Illustrative "Sample workspace" figures (see the dashboard note).
 */

const areas = [
  { label: "Environmental", icon: Leaf, done: 46, total: 50, color: "var(--chart-green)" },
  { label: "Social", icon: Users, done: 21, total: 27, color: "var(--chart-blue)" },
  { label: "Governance", icon: ShieldCheck, done: 17, total: 20, color: "var(--chart-amber)" },
];

export function DisclosureStatus({ className }: { className?: string }) {
  const done = areas.reduce((s, a) => s + a.done, 0);
  const total = areas.reduce((s, a) => s + a.total, 0);
  const pending = total - done;
  const overall = Math.round((done / total) * 100);

  return (
    <figure
      className={cn(
        "flex flex-col gap-5 rounded-2xl border border-subtle bg-surface p-6 sm:p-7",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <figcaption className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-subtle bg-elevated text-accent">
            <ListChecks className="h-[22px] w-[22px]" />
          </span>
          <span>
            <h3 className="font-display text-base font-semibold tracking-tight">
              Disclosure status
            </h3>
            <p className="text-xs text-muted">Completion by area · 2025</p>
          </span>
        </figcaption>
        <span className="rounded-full border border-subtle px-2.5 py-0.5 text-[0.7rem] font-medium text-muted">
          Sample workspace
        </span>
      </div>

      <ul className="flex flex-col gap-4">
        {areas.map((area) => {
          const pct = Math.round((area.done / area.total) * 100);
          return (
            <li key={area.label} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-medium text-foreground">
                  <area.icon className="h-4 w-4 text-muted" />
                  {area.label}
                </span>
                <span className="tabular-nums text-muted">
                  <span className="font-semibold text-foreground">{area.done}</span>
                  /{area.total} metrics · {pct}%
                </span>
              </div>
              <div
                className="h-2 w-full overflow-hidden rounded-full bg-elevated"
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${area.label} disclosure completion`}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${pct}%`, backgroundColor: area.color }}
                />
              </div>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-subtle pt-4">
        <p className="text-sm text-muted">
          <span className="font-semibold text-foreground">{overall}% complete</span>{" "}
          · {pending} metrics outstanding before assurance
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
          <ListChecks className="h-3.5 w-3.5" />
          Export for assurance
        </span>
      </div>
    </figure>
  );
}
