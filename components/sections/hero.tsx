const PILLARS = [
  'ESG reporting & disclosures',
  'Intuitive data collection',
  'Visualization & insights',
]

export function Hero() {
  return (
    <section className="relative z-[5] px-6 pb-32 pt-24 text-center">
      <div className="mx-auto max-w-[1160px]">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-light/30 bg-emerald-light/10 px-4 py-2 text-[13px] font-semibold text-emerald-light">
          ◆ Empowering Sustainable Excellence
        </span>

        <h1 className="text-gradient mx-auto mt-6 max-w-[18ch] text-[40px] font-extrabold leading-[1.05] tracking-[-0.035em] md:text-[62px]">
          Collect, report, and analyze your ESG data
        </h1>

        <p className="mx-auto mb-9 mt-5 max-w-[56ch] text-[18px] text-slate-400 md:text-[20px]">
          Dimuma unifies ESG data collection, reporting, and analytics in one intuitive platform —
          so your organization can be more responsible, resilient, and efficient in line with its
          sustainability goals.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@dimuma.com?subject=Request%20Demo&body=Please%20fill%20in%20your%20information"
            className="rounded bg-emerald-light px-8 py-4 text-[16px] font-semibold text-[#062e22] transition hover:shadow-[0_8px_30px_-6px_rgba(52,211,153,0.7)]"
          >
            Request a trial today →
          </a>
          <a
            href="#platform"
            className="rounded border border-white/25 px-8 py-4 text-[16px] font-semibold text-white transition hover:border-emerald-light hover:text-emerald-light"
          >
            Explore the platform
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
