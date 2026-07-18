import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductsGrid } from '@/components/products-grid'

export const metadata: Metadata = {
  title: 'Our Products — Dimuma',
  description:
    'The Dimuma platform: a growing suite of sustainability software products, starting with Susmatic ESG. Project Masar coming soon.',
}

export default function ProductsPage() {
  return (
    <main>
      {/* Dark hero region with ambient glows (matches the home hero) */}
      <div className="relative overflow-hidden bg-deep text-white">
        <div
          className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full opacity-50 blur-[120px]"
          style={{ background: '#059669' }}
        />
        <div
          className="pointer-events-none absolute -bottom-52 -left-32 h-[440px] w-[440px] rounded-full opacity-40 blur-[120px]"
          style={{ background: '#4f46e5' }}
        />
        <Navbar />
        <section className="relative z-[5] px-6 pb-24 pt-20 text-center">
          <div className="mx-auto max-w-[1160px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-light/30 bg-emerald-light/10 px-4 py-2 text-[13px] font-semibold text-emerald-light">
              ◆ The Dimuma platform
            </span>
            <h1 className="text-gradient mx-auto mt-6 max-w-[18ch] text-[40px] font-extrabold leading-[1.05] tracking-[-0.035em] md:text-[58px]">
              Our products
            </h1>
            <p className="mx-auto mt-5 max-w-[56ch] text-[18px] text-slate-400 md:text-[20px]">
              Focused SaaS products for sustainability teams, built on one platform. Explore what’s
              available today and what’s coming next.
            </p>
          </div>
        </section>
      </div>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1160px]">
          <ProductsGrid />
          <p className="mt-12 text-center text-[15px] text-muted">
            More products are on the way.{' '}
            <Link href="/#contact" className="font-semibold text-emerald hover:underline">
              Talk to us
            </Link>{' '}
            about what your team needs.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
