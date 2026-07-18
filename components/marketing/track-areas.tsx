import type { ComponentType, SVGProps } from "react";
import { Building, Leaf, ShieldCheck, Users } from "@/components/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * What the indicator catalogue covers, by area. Environmental and Social items
 * are drawn from the product's real indicators; Governance items map to shipped
 * features; Business is described generally rather than inventing metrics.
 */
const areas: {
  icon: Icon;
  name: string;
  blurb: string;
  items: string[];
}[] = [
  {
    icon: Leaf,
    name: "Environmental",
    blurb: "Consumption and emissions, by month or quarter.",
    items: ["Electricity", "Water", "Waste", "Company fleet fuel", "Power generation"],
  },
  {
    icon: Users,
    name: "Social",
    blurb: "Your workforce and its safety record.",
    items: ["Workforce data", "By age group", "Injuries — employee vs contractor"],
  },
  {
    icon: ShieldCheck,
    name: "Governance",
    blurb: "The controls behind every disclosure.",
    items: ["Policies", "Approvals", "Access control", "Audit log"],
  },
  {
    icon: Building,
    name: "Business",
    blurb: "The operational indicators specific to your sector.",
    items: ["Structured tables", "Narrative disclosures", "Attachments"],
  },
];

export function TrackAreas() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {areas.map((area) => (
        <div
          key={area.name}
          className="flex flex-col gap-4 rounded-2xl border border-subtle bg-surface p-6"
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-subtle bg-elevated text-accent">
            <area.icon className="h-[22px] w-[22px]" />
          </span>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight">
              {area.name}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">{area.blurb}</p>
          </div>
          <ul className="mt-auto flex flex-wrap gap-1.5">
            {area.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-subtle bg-background px-2 py-1 text-xs text-foreground/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
