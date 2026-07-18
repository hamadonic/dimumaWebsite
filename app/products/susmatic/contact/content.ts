import type { ComponentType, SVGProps } from "react";
import { Mail, Route, ShieldCheck, Users } from "@/components/ui/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export const contactHero = {
  eyebrow: "Request a trial",
  title: "Let's get your workspace set up.",
  lead: "There's no self-serve signup — a Susmatic ESG specialist configures your entities and indicators, then emails you a link. Depending on your setup, that may include a short meeting to understand your requirements and collect the information we need. Tell us a little about your organisation and we'll take it from there.",
};

export const whatHappens: { icon: Icon; title: string; description: string }[] = [
  {
    icon: Users,
    title: "You tell us the basics",
    description:
      "Name, work email, company, country and role — enough to understand the entities you report for.",
  },
  {
    icon: Route,
    title: "We set up your workspace",
    description:
      "A specialist configures your indicators and access, and prepares your Emission Library and GCC fuel prices.",
  },
  {
    icon: Mail,
    title: "You get a link by email",
    description:
      "We email you a sign-in link when the workspace is ready. You review the fit against your own data — no commitment.",
  },
];

export const reassurance = {
  icon: ShieldCheck,
  text: "This site never asks for a password or payment. Your details are used only to respond to your request.",
};
