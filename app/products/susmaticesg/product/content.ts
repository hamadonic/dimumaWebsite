import type { ComponentType, SVGProps } from "react";
import {
  BarChart,
  BookText,
  Droplet,
  FileText,
  Index,
  Layers,
  ListChecks,
  Presentation,
  Scale,
  ShieldCheck,
  Sparkles,
  Table,
  UploadDoc,
} from "@/components/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export type Feature = {
  icon: Icon;
  title: string;
  description: string;
  proof: string;
};

export type FeatureGroup = {
  key: string;
  label: string;
  title: string;
  lead: string;
  features: Feature[];
};

export const productHero = {
  eyebrow: "The product",
  title: "One record of account for every ESG number.",
  lead: "Susmatic ESG is what sustainability, HSE and finance teams use to collect ESG data, prove it against its source, report it, and act on it. Every feature exists to turn a figure into evidence — not another form to fill in.",
};

export const groups: FeatureGroup[] = [
  {
    key: "collect",
    label: "01 · Collect",
    title: "Capture the data where it actually lives.",
    lead: "A structured catalogue of ESG indicators across Environmental, Social, Governance and Business — entered by hand, imported in bulk, or read straight off a document.",
    features: [
      {
        icon: Table,
        title: "Data Entry",
        description:
          "A catalogue of indicators covering electricity, water, waste, company fleet fuel, power generation and workforce data — captured by month or quarter as structured tables or narrative disclosures, each with attachments.",
        proof:
          "Every record can carry the document behind it, so the number and its source stay together from the moment it's entered.",
      },
      {
        icon: Sparkles,
        title: "Smart Data Entry (AI)",
        description:
          "Upload a utility bill or fuel receipt as a PDF and it is read into records automatically, with a deterministic rules-engine fallback for bills that carry a clean text layer.",
        proof:
          "Nothing is auto-saved — every extracted row is reviewed before it lands, and each record keeps how it was entered: typed, bulk-imported, or read by AI, and by whom.",
      },
    ],
  },
  {
    key: "prove",
    label: "02 · Prove",
    title: "The part that survives an audit.",
    lead: "Consistent factors, regional prices and maker/checker sign-off mean a reported figure is defensible — not just stored.",
    features: [
      {
        icon: Layers,
        title: "Emission Library",
        description:
          "A centrally maintained set of emission factors that every team calculates against, so the numbers are consistent across the organisation instead of each team keeping its own spreadsheet.",
        proof:
          "When two people report the same activity, they apply the same factor — and the report can show which one was used.",
      },
      {
        icon: Droplet,
        title: "GCC Fuel Prices",
        description:
          "A maintained library of pump prices across Bahrain, Saudi Arabia, the UAE, Qatar, Kuwait and Oman. A fuel receipt states what was paid; Susmatic ESG turns that into litres using the price in force that month for that country and grade.",
        proof:
          "Generic tools can't do this. The litres behind an emissions figure trace back to a real regional price and the receipt that quoted it.",
      },
      {
        icon: Scale,
        title: "Approvals",
        description:
          "Maker/checker. A record is entered, submitted, reviewed and signed off; once approved, it locks. Nothing reaches a report unreviewed.",
        proof:
          "A locked record names its approver. The figure on the disclosure is the figure a second person signed off.",
      },
      {
        icon: BookText,
        title: "Policy library",
        description:
          "Store and view your sustainability-related policy documents in one place — the governance backbone behind your disclosures, not a shared drive nobody trusts.",
        proof:
          "Changes go through the same approval workflow, so every policy is reviewed and version-controlled — you can always show which version was in force when.",
      },
      {
        icon: ShieldCheck,
        title: "Access, audit & traceability",
        description:
          "Role-based access, MFA and SSO, and an immutable audit log underpin every record — with each number traceable to its source document and its approver.",
        proof:
          "The chain from receipt to reported figure is intact and reviewable. See the Security & trust page for how procurement teams assess it.",
      },
    ],
  },
  {
    key: "report",
    label: "03 · Report",
    title: "A full sustainability report, from one button.",
    lead: "Executive and detailed packs generated from live data, with the GRI and CBB framework index appended — the year-end report as a click, not a quarter-long scramble.",
    features: [
      {
        icon: ListChecks,
        title: "Disclosure status",
        description:
          "The status and completion of every metric across Environmental, Social and Governance — what's entered, what's approved, and what's still outstanding, at a glance.",
        proof:
          "It's the basis for reporting and external assurance: an assuror sees exactly which disclosures are complete and which are pending before anyone signs off.",
      },
      {
        icon: FileText,
        title: "Reports",
        description:
          "A report centre producing executive and detailed packs directly from the data that's been entered and approved — no re-keying into a separate deck.",
        proof:
          "Because the packs read from approved records, the number in the report is the number that was signed off, with its evidence one click away.",
      },
      {
        icon: Index,
        title: "Framework index",
        description:
          "A framework index — for example GRI and CBB — is appended to the pack, mapping disclosures to the standards sustainability teams report against.",
        proof:
          "Reviewers can see which disclosure answers which requirement, framed as support for reporting, not a compliance or certification claim.",
      },
    ],
  },
  {
    key: "act",
    label: "04 · Act",
    title: "From reconciling numbers to acting on them.",
    lead: "Once the data is trustworthy, dashboards and generated board packs move the conversation forward.",
    features: [
      {
        icon: BarChart,
        title: "Insights",
        description:
          "Dashboards over the data you've entered — trends, breakdowns and progress across indicators, built on approved figures rather than a parallel spreadsheet.",
        proof:
          "Every chart is drawn from the same approved records, so a dashboard and a report can't quietly disagree.",
      },
      {
        icon: Presentation,
        title: "AI Studio",
        description:
          "Generates a presentation-ready board pack — a sustainability report drawn from live data — so preparing for a board meeting starts from the current numbers instead of a blank slide.",
        proof:
          "The pack is built from live, approved data — what the board sees traces back to the records behind it.",
      },
    ],
  },
];
