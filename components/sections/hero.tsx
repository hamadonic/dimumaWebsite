const PILLARS = ['Financial-grade data integrity', 'Audit-ready traceability', 'Multi-framework reporting']

const LEDGER_ROWS = [
  { label: 'GRI', status: 'Validated' },
  { label: 'ISSB / IFRS S1 & S2', status: 'Validated' },
  { label: 'CBB', status: 'In review' },
]

const BARS = [38, 62, 51, 80, 70, 92]

export function Hero() {
  return (
    <section className="relative z-[5] px-6 pb-28 pt-24">
      <div className="mx-auto grid max-w-[1160px] gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Copy column */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-light/30 bg-emerald-light/10 px-4 py-2 text-[13px] font-semibold text-emerald-light">
            ◆ Sustainability fintech infrastructure
          </span>

          <h1 className="text-gradient mx-auto mt-6 max-w-[20ch] text-[38px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[54px] lg:mx-0">
            The fintech infrastructure for sustainability compliance
          </h1>

          <p className="mx-auto mb-9 mt-5 max-w-[56ch] text-[17px] text-slate-400 md:text-[19px] lg:mx-0">
            Dimuma applies financial-grade rigor to sustainability data — automated collection and
            validation, an audit trail for every figure back to its source, and reporting across
            GRI, ISSB / IFRS S1 &amp; S2, and CBB. Built to turn compliance risk into measurable
            financial performance.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
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

          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-4 lg:justify-start">
            {PILLARS.map((p) => (
              <span key={p} className="flex items-center gap-2.5 text-[14.5px] font-medium text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-light" />
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Data-driven visual column — illustrative dashboard mockup, built entirely
            from brand tokens (no stock photography, no fabricated figures). */}
        <div className="relative mx-auto w-full max-w-[440px] lg:mx-0">
          <div className="pointer-events-none absolute -inset-6 rounded-[28px] bg-gradient-to-br from-emerald/20 via-transparent to-indigo/20 blur-2xl" />
          <div className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-slate-400">
                Reporting ledger
              </span>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-light/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-light">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-light" />
                Live
              </span>
            </div>

            <div className="space-y-2.5">
              {LEDGER_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2.5"
                >
                  <span className="text-[13.5px] font-medium text-slate-200">{row.label}</span>
                  <span
                    className={`text-[12px] font-semibold ${
                      row.status === 'Validated' ? 'text-emerald-light' : 'text-slate-400'
                    }`}
                  >
                    {row.status === 'Validated' ? '✓ ' : '· '}
                    {row.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex h-20 items-end gap-1.5 border-t border-white/10 pt-5">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald to-indigo/70"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <p className="mt-3 text-[11px] text-slate-500">Illustrative — real-time in your workspace</p>
          </div>
        </div>
      </div>
    </section>
  )
}
