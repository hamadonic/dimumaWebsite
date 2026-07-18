import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "btn-sheen bg-brand-gradient-strong text-white shadow-sm shadow-brand-blue/20 hover:shadow-md hover:shadow-brand-blue/30 hover:brightness-[1.08] active:brightness-95",
  secondary:
    "border border-strong bg-surface text-foreground hover:border-accent/60 hover:bg-elevated",
  ghost: "text-foreground hover:bg-elevated",
};

function classes(variant: Variant, size: Size, className?: string) {
  return cn(base, sizes[size], variants[variant], className);
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <Link className={classes(variant, size, className)} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}) {
  return (
    <button className={classes(variant, size, className)} {...props}>
      {children}
    </button>
  );
}
