import { Fragment } from "react";
import {
  ArrowRight,
  Key,
  Lock,
  Route,
  ShieldCheck,
} from "@/components/ui/icons";

/**
 * Maker/checker approval flow — a record's journey from entry to a locked,
 * signed-off number. Horizontal on desktop, stacked on mobile.
 */

const steps = [
  { icon: Key, title: "Entered", sub: "A maker creates the record under a named identity." },
  { icon: Route, title: "Submitted", sub: "Sent for review — the maker can't approve their own work." },
  { icon: ShieldCheck, title: "Reviewed", sub: "A checker verifies the figure and its source document." },
  { icon: Lock, title: "Approved & locked", sub: "The record locks, naming its approver. Nothing else changes it." },
];

export function ApprovalFlow() {
  return (
    <ol className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-0">
      {steps.map((step, i) => (
        <Fragment key={step.title}>
          <li className="flex-1 rounded-2xl border border-subtle bg-surface p-5">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-subtle bg-elevated text-accent">
                <step.icon className="h-[20px] w-[20px]" />
              </span>
              <span className="font-display text-xs font-semibold text-muted/70">
                Step {i + 1}
              </span>
            </div>
            <h3 className="mt-3 font-display text-base font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{step.sub}</p>
          </li>
          {i < steps.length - 1 && (
            <li
              aria-hidden
              className="flex items-center justify-center py-1 text-muted md:px-1"
            >
              <ArrowRight className="h-5 w-5 rotate-90 md:rotate-0" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
