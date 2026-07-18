const PILLARS = ['Purpose-built SaaS', 'One platform', 'A growing product suite']

export function Hero() {
  return (
    <section className="relative z-[5] px-6 pb-32 pt-24 text-center">
      <div className="mx-auto max-w-[1160px]">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-light/30 bg-emerald-light/10 px-4 py-2 text-[13px] font-semibold text-emerald-light">
          ◆ A sustainability software company
        </span>

        <h1 className="text-gradient mx-auto mt-6 max-w-[18ch] text-[40px] font-extrabold leading-[1.05] tracking-[-0.035em] md:text-[62px]">
          Software that moves sustainability forward
        </h1>

        <p className="mx-auto mb-9 mt-5 max-w-[56ch] text-[18px] text-slate-400 md:text-[20px]">
          Dimuma builds a SaaS platform of focused products that help organizations measure,
          manage, and improve their sustainability performance — so every team can turn intent into
          measurable progress.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/products"
            className="rounded bg-emerald-light px-8 py-4 text-[16px] font-semibold text-[#062e22] transition hover:shadow-[0_8px_30px_-6px_rgba(52,211,153,0.7)]"
          >
            Explore our products →
          </a>
          <a
            href="#platform"
            className="rounded border border-white/25 px-8 py-4 text-[16px] font-semibold text-white transition hover:border-emerald-light hover:text-emerald-light"
          >
            How the platform works
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {PILLARS.map((p) => (
            <span key={p} className="flex items-center gap-2.5 text-[15px] font-medium text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-light" />
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
