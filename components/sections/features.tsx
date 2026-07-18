import { Boxes, Layers, Users, ShieldCheck, LineChart, Rocket } from 'lucide-react'

const FEATURES = [
  {
    icon: Boxes,
    title: 'Focused products',
    body: 'Each product does one job exceptionally well — no bloated, do-everything suite. You adopt only what your team actually needs.',
  },
  {
    icon: Layers,
    title: 'One platform',
    body: 'Shared identity, security, and a common data foundation underpin every product, so your tools work together instead of in silos.',
  },
  {
    icon: Users,
    title: 'Built for real teams',
    body: 'Designed for how organizations actually work — sustainability, HSE, finance, and operations collaborating in one place.',
  },
  {
    icon: LineChart,
    title: 'Data you can trust',
    body: 'Structured workflows and clear ownership mean the numbers are consistent, current, and traceable back to their source.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure by design',
    body: 'Enterprise-grade security, role-based access, and privacy built in from the ground up across the whole platform.',
  },
  {
    icon: Rocket,
    title: 'Grows with you',
    body: 'Start with a single product and add more as your sustainability program matures — without re-platforming.',
  },
]

export function Features() {
  return (
    <section id="why" className="bg-canvas px-6 py-24">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.08em] text-emerald">
          Why teams build on Dimuma
        </p>
        <h2 className="mx-auto mt-3 max-w-[22ch] text-center text-[32px] font-extrabold tracking-[-0.025em] text-navy md:text-[42px]">
          A platform designed to last
        </h2>
        <p className="mx-auto mb-14 mt-3.5 max-w-[58ch] text-center text-[18px] text-muted">
          We build sustainability software the way modern teams want to use it — focused, connected,
          and built to grow.
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
