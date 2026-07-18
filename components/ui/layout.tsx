import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centered content column with consistent gutters (symmetric, RTL-safe). */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

/** Vertical rhythm wrapper for page sections. */
export function Section({
  as: Tag = "section",
  id,
  className,
  children,
}: {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag id={id} className={cn("py-16 sm:py-20 lg:py-28", className)}>
      {children}
    </Tag>
  );
}

/** Small uppercase kicker above a heading. */
export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent",
        className,
      )}
    >
      <span aria-hidden className="h-px w-6 bg-brand-gradient" />
      {children}
    </span>
  );
}

/** Section heading + optional lead, consistently styled. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "start",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "reveal flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          {lead}
        </p>
      )}
    </div>
  );
}
