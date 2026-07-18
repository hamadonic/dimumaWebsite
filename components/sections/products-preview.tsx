import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ProductsGrid } from '@/components/products-grid'

export function ProductsPreview() {
  return (
    <section id="platform" className="px-6 py-24">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-center text-[13px] font-bold uppercase tracking-[0.08em] text-emerald">
          Our products
        </p>
        <h2 className="mx-auto mt-3 max-w-[22ch] text-center text-[32px] font-extrabold tracking-[-0.025em] text-navy md:text-[42px]">
          One platform, a growing suite of products
        </h2>
        <p className="mx-auto mb-14 mt-3.5 max-w-[58ch] text-center text-[18px] text-muted">
          Dimuma is a sustainability software company. We build focused SaaS products that help
          organizations measure, manage, and improve their sustainability performance — starting
          with Susmatic.
        </p>

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
