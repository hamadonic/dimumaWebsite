/**
 * Corporate hero backdrop: a fine blueprint grid fading from the top, plus a
 * soft green→blue aurora wash. Drop inside a `relative overflow-hidden`
 * section. Decorative only.
 */
export function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-lines opacity-70 [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-44 end-[-6rem] -z-10 h-[26rem] w-[26rem] max-w-full rounded-full bg-brand-gradient opacity-[0.10] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -start-24 top-24 -z-10 h-64 w-64 rounded-full bg-brand-green opacity-[0.07] blur-3xl"
      />
    </>
  );
}
