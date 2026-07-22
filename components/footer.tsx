import Link from 'next/link'
import { Logo } from './logo'

const COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/#about' },
      { label: 'Contact us', href: '/#contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'All products', href: '/products' },
      { label: 'Susmatic ESG', href: '/products/susmaticesg' },
      { label: 'Project Masar (soon)', href: '/products' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-deep py-16 text-[14px] text-slate-400">
      <div className="mx-auto max-w-[1160px] px-6">
        <div className="mb-10 grid gap-8 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-4">
              <Logo onDark />
            </div>
            <p className="max-w-[38ch]">
              Dimuma W.L.L — a Bahrain-based sustainability software company. Building focused SaaS
              products for sustainability teams.
            </p>
            <p className="mt-4 text-[13px] leading-relaxed">
              Flat/Shop 916, Building 33, Road 1802, Block 318, Al Hoora, Manama, Bahrain
              <br />
              <a href="mailto:info@dimuma.com" className="transition hover:text-emerald-light">
                info@dimuma.com
              </a>
              {' · '}CR 174450-1
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5 className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-white">
                {col.title}
              </h5>
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="mb-2.5 block transition hover:text-emerald-light"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[13px] sm:flex-row">
          <span>© {new Date().getFullYear()} Dimuma.com. All rights reserved.</span>
          <span>Empowering Sustainable Excellence</span>
        </div>
      </div>
    </footer>
  )
}
