import { FileText, Database, BarChart3, Lightbulb, Layers, TrendingUp } from 'lucide-react'

const FEATURES = [
  {
    icon: FileText,
    title: 'ESG reporting & disclosures',
    body: 'Achieve efficient ESG program management through an intuitive reporting platform, with actionable insights to establish objectives and monitor progress — enhancing organizational transparency.',
  },
  {
    icon: Database,
    title: 'Intuitive data collection',
    body: 'User-friendly interfaces and intuitive workflows simplify ESG data collection, making it easier to input and manage data while saving time and reducing errors and inconsistencies.',
  },
  {
    icon: BarChart3,
    title: 'Data visualization & insights',
    body: 'Transform data into meaningful visual representations and interactive dashboards to gain insights, identify trends, and communicate your sustainability performance to stakeholders.',
  },
  {
    icon: Lightbulb,
    title: 'Actionable insights',
    body: 'Advanced analytics uncover meaningful patterns, trends, and correlations in your ESG data, helping you identify areas for improvement and make informed decisions toward your goals.',
  },
  {
    icon: Layers,
    title: 'Sustainability management',
    body: 'Integrate and analyze data across environmental, social, and governance dimensions for a unified, comprehensive view of your organization’s sustainability performance.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous improvement',
    body: 'Set performance indicators, track progress toward targets, and receive alerts when deviations occur — a real-time feedback loop that drives continuous improvement.',
  },
]

export function Features() {
  return (
    <section id="platform" className="px-6 py-24">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.08em] text-emerald">
          What Dimuma does
        </p>
        <h2 className="mx-auto mt-3 max-w-[22ch] text-center text-[32px] font-extrabold tracking-[-0.025em] text-navy md:text-[42px]">
          One platform for your entire ESG program
        </h2>
        <p className="mx-auto mb-14 mt-3.5 max-w-[58ch] text-center text-[18px] text-muted">
          From data collection to reporting and analytics, Dimuma helps you streamline
          sustainability initiatives, strengthen social responsibility, and meet international
          reporting standards.
        </p>

        <div className="grid gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-subtle bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(43,42,102,0.35)]"
            >
              <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald to-indigo" />
              <div className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald/10 to-indigo/10">
                <f.icon className="h-[22px] w-[22px] text-emerald" strokeWidth={2} />
              </div>
              <h3 className="mb-2.5 text-[19px] font-bold text-navy">{f.title}</h3>
              <p className="text-[15px] text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
