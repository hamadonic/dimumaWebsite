import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/cn";
import {
  Check,
  Droplet,
  Layers,
  Lock,
  Receipt,
  Sparkles,
} from "@/components/ui/icons";

/**
 * The signature "prove it" visual: one ESG record traced from the receipt it
 * came from, through the price and factor applied, to a signed-off, locked
 * number. Numbers here are an illustrative UI example, not a business claim.
 */

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

type Step = {
  icon: Icon;
  label: string;
  value: string;
  tag: string;
  tagIcon?: Icon;
};

const steps: Step[] = [
  {
    icon: Receipt,
    label: "Source document",
    value: "fuel-receipt-mar.pdf",
    tag: "Read by AI",
    tagIcon: Sparkles,
  },
  {
    icon: Droplet,
    label: "GCC price applied",
    value: "UAE · diesel · March 2026",
    tag: "Fuel Prices",
  },
  {
    icon: Layers,
    label: "Emission factor",
    value: "Diesel · centrally maintained",
    tag: "Emission Library",
  },
];

export function EvidenceTrail({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "shadow-premium float-slow relative w-full max-w-md rounded-2xl border border-subtle bg-surface p-5 sm:p-6",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">
            Company fleet · Environmental
          </p>
          <p className="mt-1 font-display text-lg font-semibold tracking-tight">
            Diesel — March 2026
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-2.5 py-1 text-xs font-medium text-brand-green">
          <Lock className="h-3.5 w-3.5" />
          Approved · Locked
        </span>
      </div>

      {/* Provenance chain */}
      <ol className="relative mt-6 flex flex-col gap-4">
        <span
          aria-hidden
          className="absolute bottom-3 start-[19px] top-3 w-px bg-subtle"
        />
        {steps.map((step) => (
          <li key={step.label} className="relative flex items-center gap-3.5">
            <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-subtle bg-elevated text-accent">
              <step.icon className="h-[18px] w-[18px]" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted">{step.label}</p>
              <p className="truncate text-sm font-medium text-foreground">
                {step.value}
              </p>
            </div>
            {step.tag && (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-md border border-subtle bg-background px-2 py-1 text-[0.7rem] font-medium text-muted">
                {step.tagIcon && <step.tagIcon className="h-3 w-3 text-accent" />}
                {step.tag}
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Result */}
      <div className="mt-5 flex items-center justify-between rounded-xl bg-brand-gradient p-4 text-white">
        <span className="text-sm font-medium opacity-90">Reported emissions</span>
        <span className="font-display text-2xl font-bold tabular-nums">
          11.2 tCO₂e
        </span>
      </div>

      {/* Approver / audit footer */}
      <div className="mt-4 flex items-center gap-3 border-t border-subtle pt-4">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy text-xs font-semibold text-white">
          AK
        </span>
        <div className="flex-1 text-xs leading-tight">
          <p className="font-medium text-foreground">Reviewed &amp; signed off</p>
          <p className="text-muted">Entered by AI · checked by A. Khalid</p>
        </div>
        <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-green">
          <Check className="h-4 w-4" />
          Traceable
        </span>
      </div>
    </div>
  );
}
