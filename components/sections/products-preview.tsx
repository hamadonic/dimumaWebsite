import Link from 'next/link'
import { ArrowRight, Database, ShieldCheck, FileBarChart } from 'lucide-react'
import { ProductsGrid } from '@/components/products-grid'

const STEPS = [
  {
    icon: Database,
    step: '01',
    title: 'Collect',
    body: 'Structured intake pulls ESG and operational data straight from source systems — no spreadsheet hand-offs, no re-keying.',
  },
  {
    icon: ShieldCheck,
    step: '02',
    title: 'Validate',
    body: 'Every figure is checked, owned, and traceable back to its source — an audit trail that holds up under scrutiny.',
  },
  {
    icon: FileBarChart,
    step: '03',
    title: 'Report',
    body: 'One validated dataset outputs across GRI, ISSB / IFRS S1 & S2, and CBB — no re-work per framework.',
  },
]

export function ProductsPreview() {
  return (
    <section id="platform" className="px-6 py-24">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.08em] text-emerald">
          The solution
        </p>
        <h2 className="mx-auto mt-3 max-w-[24ch] text-center text-[32px] font-extrabold tracking-[-0.025em] text-navy md:text-[42px]">
          From raw data to audit-ready reporting, automatically
        </h2>
        <p className="mx-auto mb-14 mt-3.5 max-w-[58ch] text-center text-[18px] text-muted">
          Dimuma is a sustainability software company. We build focused SaaS products that
          automate the data pipeline behind sustainability reporting — starting with Susmatic.
        </p>

        {/* Data pipeline — collect / validate / report */}
        <div className="mb-16 grid gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-subtle bg-white p-7"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald/10 to-indigo/10">
                  <s.icon className="h-5 w-5 text-emerald" strokeWidth={2} />
                </div>
                <span className="text-[13px] font-bold text-subtle">{s.step}</span>
              </div>
              <h3 className="mb-2 text-[17px] font-bold text-navy">{s.title}</h3>
              <p className="text-[14.5px] text-muted">{s.body}</p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-gradient-to-r from-emerald to-indigo md:block"
                />
              )}
            </div>
          ))}
        </div>

        <ProductsGrid />

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded bg-navy px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-navy-600"
          >
            View all products
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
