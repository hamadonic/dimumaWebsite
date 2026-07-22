import { ScrollText, KeyRound, Workflow, Building2, Lock, Layers } from 'lucide-react'
import { About } from './about'

const FRAMEWORKS = ['GRI', 'ISSB / IFRS S1 & S2', 'CBB']

const CAPABILITIES = [
  {
    icon: ScrollText,
    title: 'Audit trail & data provenance',
    body: 'Every figure carries a traceable path back to its source — structured evidence, not a spreadsheet you have to take on faith.',
  },
  {
    icon: KeyRound,
    title: 'Role-based access & approvals',
    body: 'Data ownership and sign-off are enforced by the platform, so accountability is built into the workflow, not bolted on after.',
  },
  {
    icon: Workflow,
    title: 'Multi-framework alignment',
    body: 'One validated dataset reports across GRI, ISSB / IFRS S1 & S2, and CBB guidelines — no separate spreadsheet per standard.',
  },
  {
    icon: Building2,
    title: 'Bahrain-based data governance',
    body: 'Built in and for the region, with data handling practices designed around regulated industries from day one.',
  },
  {
    icon: Lock,
    title: 'Enterprise-grade security',
    body: 'Access-controlled, encrypted infrastructure underpins every product on the platform.',
  },
  {
    icon: Layers,
    title: 'Built to scale with you',
    body: 'Start with one product and add more as your sustainability program matures — without re-platforming.',
  },
]

export function TrustCompliance() {
  return (
    <>
      <section id="trust" className="bg-canvas px-6 py-24">
        <div className="mx-auto max-w-[1160px]">
          <p className="text-center text-[13px] font-bold uppercase tracking-[0.08em] text-emerald">
            Trust &amp; compliance
          </p>
          <h2 className="mx-auto mt-3 max-w-[26ch] text-center text-[32px] font-extrabold tracking-[-0.025em] text-navy md:text-[42px]">
            Built for regulatory-grade accountability
          </h2>
          <p className="mx-auto mt-3.5 max-w-[58ch] text-center text-[18px] text-muted">
            Data governance, traceability, and framework alignment are not add-ons — they&apos;re
            how the platform is built.
          </p>

          <div className="mx-auto mt-8 flex max-w-[600px] flex-wrap items-center justify-center gap-3">
            {FRAMEWORKS.map((f) => (
              <span
                key={f}
                className="rounded-full border border-navy/15 bg-white px-4 py-2 text-[13px] font-semibold text-navy"
              >
                {f}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-[22px] md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl border border-subtle bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(43,42,102,0.35)]"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-emerald to-indigo" />
                <div className="mb-[18px] flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald/10 to-indigo/10">
                  <c.icon className="h-[22px] w-[22px] text-emerald" strokeWidth={2} />
                </div>
                <h3 className="mb-2.5 text-[19px] font-bold text-navy">{c.title}</h3>
                <p className="text-[15px] text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <About />
    </>
  )
}
