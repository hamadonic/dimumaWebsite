import type { ComponentType, SVGProps } from "react";
import {
  Fingerprint,
  Globe,
  Route,
  ShieldCheck,
} from "@/components/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const aboutHero = {
  eyebrow: "About",
  title: "We're here to simplify sustainability.",
  lead: "Susmatic ESG is the ESG product within the Dimuma platform. It takes the parts that make sustainability heavy — collecting the data, proving each number, assembling the report — and automates them, so sustainability teams spend the year advancing sustainability instead of chasing it.",
  tagline: "Simplify Sustainability",
};

export const beliefs: { icon: Icon; title: string; description: string }[] = [
  {
    icon: Route,
    title: "Simplify the work, not the rigour.",
    description:
      "Automate the drudgery — bills read in, litres derived, factors applied, packs assembled — while approvals and the audit trail stay firm. Simple to run, and still defensible.",
  },
  {
    icon: Fingerprint,
    title: "A number you can't trace isn't one you can report.",
    description:
      "Storing a figure is easy. Showing the bill it came from, the factor applied and the person who approved it is the part that matters — so evidence travels with every number, not in a separate folder.",
  },
  {
    icon: Globe,
    title: "The GCC has its own numbers.",
    description:
      "Fuel prices differ by country and grade, and bills come in regional formats. We build for those specifics instead of bending a generic tool to fit them.",
  },
  {
    icon: ShieldCheck,
    title: "Report against what's actually asked for.",
    description:
      "We help teams report against GRI, ISSB/IFRS S1 & S2 and CBB guidelines — as genuine support for their reporting, never dressed up as a certification.",
  },
];

export const forWhom = {
  title: "The people we simplify it for.",
  lead: "Sustainability and HSE managers who'd rather advance sustainability than chase spreadsheets, the boards who sign the disclosure, and the consultants who run reporting for several clients at once.",
  audiences: [
    "Sustainability & HSE managers",
    "C-suite & boards",
    "ESG consultants",
  ],
};
