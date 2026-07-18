import { Fingerprint, History, Lock, ShieldCheck } from "@/components/ui/icons";
import { frameworks } from "@/lib/site";

/**
 * Factual trust strip — capability statements, not social proof.
 * (No customer logos or badges: see components/marketing/social-proof.tsx.)
 */

const items = [
  { icon: ShieldCheck, label: "Role-based access" },
  { icon: Lock, label: "MFA & SSO" },
  { icon: History, label: "Immutable audit log" },
  { icon: Fingerprint, label: "Traceable to source" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-subtle bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:flex lg:gap-8">
            {items.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2.5 text-sm font-medium text-foreground/85"
              >
                <item.icon className="h-5 w-5 shrink-0 text-accent" />
                {item.label}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted lg:text-end">
            Reports against{" "}
            <span className="font-medium text-foreground/90">
              {frameworks.map((f) => f.short).join(", ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
