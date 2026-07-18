import type { ComponentType, ReactNode, SVGProps } from "react";
import { cn } from "@/lib/cn";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/** Base surface card. */
export function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "lift rounded-2xl border border-subtle bg-surface p-6 sm:p-7",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** Rounded, gradient-tinted icon badge used across features and pillars. */
export function IconBadge({
  icon: Icon,
  className,
}: {
  icon: Icon;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-subtle bg-elevated text-accent",
        className,
      )}
    >
      <Icon className="h-[22px] w-[22px]" />
    </span>
  );
}

/** One of the four home-page capability pillars. */
export function PillarCard({
  icon,
  step,
  title,
  description,
}: {
  icon: Icon;
  step: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="group flex h-full flex-col gap-4 transition-colors hover:border-strong">
      <div className="flex items-center justify-between">
        <IconBadge icon={icon} />
        <span className="font-display text-sm font-semibold text-muted/70">
          {step}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </Card>
  );
}

/** Product feature block, framed as evidence. */
export function FeatureCard({
  icon,
  title,
  description,
  proof,
}: {
  icon: Icon;
  title: string;
  description: string;
  proof?: string;
}) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <IconBadge icon={icon} />
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
      {proof && (
        <p className="mt-auto border-t border-subtle pt-4 text-xs leading-relaxed text-muted/90">
          <span className="font-semibold text-foreground/90">The evidence: </span>
          {proof}
        </p>
      )}
    </Card>
  );
}

/** Numbered "how it works" step. */
export function StepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="relative flex flex-col gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient-strong font-display text-sm font-bold text-white">
        {number}
      </span>
      <h3 className="font-display text-lg font-semibold tracking-tight">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

/** Audience card for "who it's for". */
export function AudienceCard({
  icon,
  audience,
  title,
  description,
}: {
  icon: Icon;
  audience: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-center gap-3">
        <IconBadge icon={icon} />
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {audience}
        </span>
      </div>
      <h3 className="font-display text-lg font-semibold tracking-tight text-balance">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </Card>
  );
}
