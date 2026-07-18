import type { ComponentType, SVGProps } from "react";
import {
  Fingerprint,
  Globe,
  History,
  Key,
  Layers,
  Lock,
  Server,
  ShieldCheck,
} from "@/components/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const securityHero = {
  eyebrow: "Security & trust",
  title: "Security a bank can grade for itself.",
  lead: "A disclosure carries someone's signature, so the system behind it has to stand up to procurement. Here is how access, approval and evidence are controlled — laid out plainly for your own security team to assess, without badges we haven't earned.",
};

export const controls: { icon: Icon; title: string; description: string }[] = [
  {
    icon: ShieldCheck,
    title: "Role-based access control",
    description:
      "People see and do only what their role allows. Who can enter, who can approve and who can only read are separate permissions, set per workspace.",
  },
  {
    icon: Lock,
    title: "MFA & SSO",
    description:
      "Multi-factor authentication on sign-in, and single sign-on so access follows your existing identity provider and joiner-mover-leaver process.",
  },
  {
    icon: History,
    title: "Immutable audit log",
    description:
      "Every material action is recorded — who entered a figure, who approved it, what changed and when. The log is append-only, so the history can't be quietly rewritten.",
  },
  {
    icon: Fingerprint,
    title: "Traceable to source",
    description:
      "Each number ties back to the document it came from, the emission factor applied and the person who signed it off — the full chain, reviewable on demand.",
  },
  {
    icon: Layers,
    title: "Tenant isolation",
    description:
      "Each organisation's data is kept in its own isolated tenant. One customer's records are never visible to another.",
  },
  {
    icon: Server,
    title: "Data residency",
    description:
      "Where your data lives matters to a GCC regulator, so residency is scoped with you at onboarding rather than assumed — raise your jurisdiction's requirements and we'll walk through them.",
  },
];

export const chain = {
  eyebrow: "Why a number holds up",
  title: "Approval and evidence, enforced by the system — not by convention.",
  lead: "Defensibility isn't a policy document; it's built into how a record moves. Nothing reaches a report without passing through it.",
  steps: [
    {
      icon: Key,
      title: "Entered under a named identity",
      description:
        "Every record is created by a specific user, authenticated with MFA or SSO, and stamped with how it was entered — typed, imported, or read by AI.",
    },
    {
      icon: ShieldCheck,
      title: "Reviewed by a second person",
      description:
        "Maker/checker separation means the person who enters a figure isn't the person who approves it. On approval, the record locks.",
    },
    {
      icon: History,
      title: "Recorded for good",
      description:
        "The entry, the approval and any change land in the immutable audit log, so the story of a number can always be retold.",
    },
  ],
};

export const standardsNote = {
  icon: Globe,
  title: "Standards: support, not a certificate.",
  body: "Susmatic ESG helps your teams report against GRI, ISSB/IFRS S1 & S2 and CBB guidelines, and appends a framework index to reports. That is support for your reporting — it is not a certification, not a compliance guarantee, and not a substitute for your own auditor's opinion.",
};
