import { Check } from 'lucide-react'

const POINTS = [
  {
    title: 'Sustainability management',
    body: 'Track and measure environmental impacts, social performance, and governance practices in a unified manner across all aspects of sustainability.',
  },
  {
    title: 'Continuous improvement',
    body: 'Ongoing monitoring and performance tracking with a real-time feedback loop, so you can take proactive measures and optimize your performance.',
  },
]

const DIMENSIONS = [
  { label: 'Environmental', color: '#059669' },
  { label: 'Social', color: '#5FB496' },
  { label: 'Governance', color: '#6366f1' },
]

export function Insights() {
  return (
    <section className="bg-canvas px-6 py-24">
      <div className="mx-auto grid max-w-[1160px] items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-emerald">
            Beyond collection and reporting
          </p>
          <h2 className="mb-5 mt-3 text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] text-navy md:text-[38px]">
            Unlock actionable insights and achieve unified reporting
          </h2>
          <p className="mb-6 text-[17px] text-muted">
            By leveraging advanced analytics, Dimuma helps you uncover meaningful patterns, trends,
            and correlations within your sustainability data — enabling informed decisions and
            positive change toward your goals.
          </p>
          <ul className="space-y-5">
            {POINTS.map((p) => (
              <li key={p.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald/10">
                  <Check className="h-3.5 w-3.5 text-emerald" strokeWidth={3} />
                </span>
                <span>
                  <span className="block text-[16px] font-bold text-navy">{p.title}</span>
                  <span className="mt-1 block text-[15px] text-muted">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[20px] bg-gradient-to-br from-navy to-navy-600 p-8 text-white shadow-[0_30px_60px_-25px_rgba(43,42,102,0.6)]">
          <div className="mb-6 font-bold">Unified ESG view</div>
          <div className="flex items-center gap-7">
            <div
              className="h-28 w-28 flex-none rounded-full"
              style={{
                background:
                  'conic-gradient(#059669 0 55%, #5FB496 55% 80%, #6366f1 80% 100%)',
              }}
            >
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-navy text-[13px] font-bold text-emerald-light">
                  ESG
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {DIMENSIONS.map((d) => (
                <div key={d.label} className="flex items-center gap-2.5 text-[14px] text-slate-300">
                  <span className="h-3 w-3 rounded" style={{ background: d.color }} />
                  {d.label}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7 space-y-3 border-t border-white/10 pt-6 text-[14px]">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Data collection</span>
              <span className="font-semibold text-emerald-light">Streamlined</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Reporting & disclosures</span>
              <span className="font-semibold text-emerald-light">Unified</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Analytics & insights</span>
              <span className="font-semibold text-emerald-light">Actionable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
