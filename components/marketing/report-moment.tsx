import type { ComponentType, SVGProps } from "react";
import { Bolt, Check, FileText, Index, Route, Sparkles } from "@/components/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const chips: { icon: Icon; title: string; detail: string }[] = [
  { icon: Index, title: "Aligned", detail: "GRI & CBB index appended" },
  { icon: Route, title: "Automated", detail: "bills read, factors applied" },
  { icon: Bolt, title: "Immediate", detail: "built from live, approved data" },
];

/**
 * "One click" report moment — depicts the report centre turning approved records
 * into a full sustainability report (executive + detailed packs, GRI/CBB index).
 * A product-UI depiction: the "Generate" control is illustrative, not wired.
 */
export function ReportMoment() {
  return (
    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      {/* Value chips */}
      <ul className="order-2 flex flex-col gap-4 lg:order-1">
        {chips.map((chip) => (
          <li
            key={chip.title}
            className="lift flex items-start gap-4 rounded-2xl border border-subtle bg-surface p-5"
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-subtle bg-elevated text-accent">
              <chip.icon className="h-[22px] w-[22px]" />
            </span>
            <div>
              <p className="font-display text-base font-semibold tracking-tight">
                {chip.title}
              </p>
              <p className="text-sm text-muted">{chip.detail}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Report-centre depiction */}
      <div className="shadow-premium order-1 overflow-hidden rounded-2xl border border-subtle bg-elevated lg:order-2">
        <div className="flex items-center gap-2 border-b border-subtle bg-surface px-4 py-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-strong" />
          </span>
          <span className="ms-2 text-xs font-medium text-muted">
            Susmatic ESG · Report centre
          </span>
        </div>

        <div className="flex flex-col gap-4 bg-background p-5">
          {/* Generate control (illustrative) */}
          <div
            className="btn-sheen flex h-12 items-center justify-center gap-2 rounded-full bg-brand-gradient-strong text-[0.95rem] font-medium text-white shadow-sm"
            role="img"
            aria-label="Generate sustainability report"
          >
            <Sparkles className="h-4 w-4" />
            Generate sustainability report
          </div>

          <div className="flex justify-center text-muted" aria-hidden>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </div>

          {/* Generated report preview */}
          <div className="rounded-xl border border-subtle bg-surface p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-display text-sm font-semibold tracking-tight">
                Sustainability Report · 2025
              </p>
              <span className="rounded-md border border-brand-green/30 bg-brand-green/10 px-2 py-0.5 text-[0.7rem] font-medium text-brand-green">
                Ready
              </span>
            </div>

            <ul className="mt-3 flex flex-col gap-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <FileText className="h-4 w-4 shrink-0 text-accent" />
                <span className="flex-1 text-foreground/85">Executive pack</span>
                <Check className="h-4 w-4 text-brand-green" />
              </li>
              <li className="flex items-center gap-2.5">
                <FileText className="h-4 w-4 shrink-0 text-accent" />
                <span className="flex-1 text-foreground/85">Detailed pack</span>
                <Check className="h-4 w-4 text-brand-green" />
              </li>
              <li className="flex items-center gap-2.5">
                <Index className="h-4 w-4 shrink-0 text-accent" />
                <span className="text-foreground/85">Framework index</span>
                <span className="ms-auto flex gap-1.5">
                  <span className="rounded border border-subtle bg-background px-1.5 py-0.5 text-[0.7rem] font-medium text-muted">
                    GRI
                  </span>
                  <span className="rounded border border-subtle bg-background px-1.5 py-0.5 text-[0.7rem] font-medium text-muted">
                    CBB
                  </span>
                </span>
              </li>
            </ul>

            <p className="mt-3 border-t border-subtle pt-3 text-xs text-muted">
              Generated from your approved records — every figure traceable to its
              source.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
