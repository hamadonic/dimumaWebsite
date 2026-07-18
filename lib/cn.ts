/**
 * Minimal class-name joiner. No runtime dependency — filters falsy values
 * and joins the rest with a space. Order-sensitive (last wins is not handled;
 * keep conditional overrides explicit).
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
