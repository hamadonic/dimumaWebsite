const NAV_ITEMS = ['Dashboard', 'Data Entry', 'Report Center', 'Insights', 'Policies', 'Administration']
const KPIS = [
  { label: 'Emissions ↓', value: '−18.4%', delta: '▲ ahead of target' },
  { label: 'Data Coverage', value: '94%', delta: '▲ +6% QoQ' },
  { label: 'ESG Score', value: 'A−', delta: '▲ improving' },
]
const BARS = [42, 58, 50, 72, 65, 85, 80, 96]

/** Floating product-screenshot mock that overlaps the dark hero. */
export function DashboardShot() {
  return (
    <div className="relative z-[8] -mt-24 px-6">
      <div className="mx-auto max-w-[1000px] overflow-hidden rounded-2xl border border-subtle bg-white shadow-[0_40px_90px_-30px_rgba(0,0,0,0.5)]">
        {/* window chrome */}
        <div className="flex h-10 items-center gap-[7px] border-b border-subtle bg-slate-50 px-4">
          <span className="h-[11px] w-[11px] rounded-full bg-[#f87171]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#fbbf24]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#34d399]" />
        </div>

        <div className="grid min-h-[360px] grid-cols-1 md:grid-cols-[210px_1fr]">
          {/* sidebar */}
          <div className="hidden bg-deep p-4 md:block">
            {NAV_ITEMS.map((item, i) => (
              <div
                key={item}
                className={`mb-[3px] flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] font-medium ${
                  i === 0
                    ? 'bg-emerald/20 font-semibold text-emerald-light'
                    : 'text-slate-400'
                }`}
              >
                <span
                  className={`h-[15px] w-[15px] rounded ${
                    i === 0 ? 'bg-emerald-light' : 'bg-slate-700'
                  }`}
                />
                {item}
              </div>
            ))}
          </div>

          {/* main */}
          <div className="bg-slate-50 p-6">
            <h4 className="mb-4 text-[15px] font-semibold text-navy">
              ESG Program Overview — FY2026
            </h4>
            <div className="mb-4 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
              {KPIS.map((k) => (
                <div key={k.label} className="rounded-lg border border-subtle bg-white p-4">
                  <div className="text-[11px] font-semibold uppercase text-slate-400">{k.label}</div>
                  <div className="mt-1.5 text-[27px] font-extrabold text-navy">{k.value}</div>
                  <div className="mt-1 text-[12px] font-semibold text-emerald">{k.delta}</div>
                </div>
              ))}
            </div>
            <div className="flex h-[150px] items-end gap-2.5 rounded-lg border border-subtle bg-white p-4">
              {BARS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-b from-emerald-light to-emerald"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
