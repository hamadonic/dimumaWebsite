import type { ComponentType, SVGProps } from "react";
import {
  BarChart,
  Building,
  Droplet,
  Fingerprint,
  Globe,
  Layers,
  Presentation,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  Table,
  UploadDoc,
  Users,
} from "@/components/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* ------------------------------------------------------------------ *
 * Home page copy. Plain data — edit strings here without touching JSX.
 * Rules honoured: no invented customers, numbers, or badges; standards
 * framed as support ("report against"), never as compliance.
 * ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "ESG data, evidence and reporting — simplified",
  title: "Free every team to advance sustainability.",
  lead: "Susmatic ESG brings sustainability, HSE, finance and operations into one workflow and automates the collecting — so the effort is integrated, every team contributes, and the year goes to advancing sustainability instead of chasing data.",
  note: "Built for enterprises. Reports against GRI, ISSB/IFRS S1 & S2 and CBB.",
};

export const problem = {
  eyebrow: "The reason audit season is a scramble",
  title: "Any tool can store a number. Almost none can prove it.",
  lead: "ESG data arrives as utility bills, fuel receipts and spreadsheets scattered across inboxes. The figure changes depending on who you ask, and when an auditor asks where it came from, the answer is a folder no one can find.",
  points: [
    {
      icon: UploadDoc,
      title: "Evidence lives in inboxes",
      description:
        "Bills and receipts sit in email threads and shared drives, disconnected from the numbers they justify.",
    },
    {
      icon: Scale,
      title: "The number depends on who you ask",
      description:
        "Each team keeps its own emission factors in its own spreadsheet, so two people report two different totals.",
    },
    {
      icon: Fingerprint,
      title: "Nobody can trace it back",
      description:
        "When assurance asks for the source of a figure, reconstructing it costs days you don't have.",
    },
  ],
};

export const pillars: {
  step: string;
  icon: Icon;
  title: string;
  description: string;
}[] = [
  {
    step: "01",
    icon: Table,
    title: "Collect",
    description:
      "A structured catalogue of ESG indicators — electricity, water, waste, fleet fuel, generation and workforce — captured by month or quarter, with attachments on every record.",
  },
  {
    step: "02",
    icon: Fingerprint,
    title: "Prove",
    description:
      "Every figure ties back to its source document, the emission factor applied and the person who approved it. Approved records lock; nothing reaches a report unreviewed.",
  },
  {
    step: "03",
    icon: BarChart,
    title: "Report",
    description:
      "Executive and detailed packs from live data, with a framework index appended, so the disclosure with a board member's name on it is ready to defend.",
  },
  {
    step: "04",
    icon: Route,
    title: "Act",
    description:
      "Dashboards over the data you entered, and AI Studio to turn it into a presentation-ready board pack — so the conversation moves from chasing numbers to acting on them.",
  },
];

export const steps = [
  {
    title: "Enter the data — or let AI read it",
    description:
      "Type a figure, bulk-import a table, or upload a utility bill or fuel receipt and let Smart Data Entry read it into records. Nothing auto-saves: every extracted row is reviewed first.",
  },
  {
    title: "Submit for maker/checker approval",
    description:
      "A record is entered, submitted, reviewed and signed off. The Emission Library and GCC Fuel Prices turn what was paid into consistent, comparable numbers.",
  },
  {
    title: "Report with the evidence attached",
    description:
      "Produce executive and detailed packs with a framework index appended — every number traceable to the document it came from and the person who approved it.",
  },
];

export const gccFeatures: { icon: Icon; title: string; description: string }[] = [
  {
    icon: Droplet,
    title: "Fuel prices per country and grade",
    description:
      "A maintained library of pump prices across Bahrain, Saudi Arabia, the UAE, Qatar, Kuwait and Oman. A receipt states what was paid; Susmatic ESG turns it into litres using the price in force that month.",
  },
  {
    icon: Sparkles,
    title: "AI that reads a regional bill",
    description:
      "Upload a GCC utility bill or fuel receipt as a PDF and it is read into records, with a deterministic rules-engine fallback for bills that carry a clean text layer.",
  },
  {
    icon: Globe,
    title: "Framework-aligned",
    description:
      "Aligned with the frameworks GCC regulators actually ask for — report against GRI, ISSB/IFRS S1 & S2 and CBB guidelines.",
  },
];

export const audiences: {
  icon: Icon;
  audience: string;
  title: string;
  description: string;
}[] = [
  {
    icon: Users,
    audience: "Sustainability & HSE",
    title: "Stop chasing the number. Start defending it.",
    description:
      "The bills, the factors and the approvals live in one place. When someone asks how a figure was reached, the answer is a click — not a week of digging through email.",
  },
  {
    icon: ShieldCheck,
    audience: "C-suite & board",
    title: "The disclosure with your name on it, under control.",
    description:
      "Role-based access, approvals and an immutable audit log mean a reported number is reviewed, locked and traceable before it carries your signature.",
  },
  {
    icon: Building,
    audience: "ESG consultants",
    title: "Run several clients on one defensible method.",
    description:
      "A shared Emission Library and consistent approvals give every engagement the same rigour, so your numbers hold up across every client you report for.",
  },
];
