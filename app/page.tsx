import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { ProductsPreview } from '@/components/sections/products-preview'
import { Features } from '@/components/sections/features'
import { About } from '@/components/sections/about'
import { Cta } from '@/components/sections/cta'

export default function HomePage() {
  return (
    <main>
      {/* Dark hero region with ambient glows */}
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
        <Hero />
      </div>

      <ProductsPreview />
      <Features />
      <About />
      <Cta />
      <Footer />
    </main>
  )
}
