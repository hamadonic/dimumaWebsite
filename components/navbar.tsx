import Link from 'next/link'
import { Logo } from './logo'

const LINKS = [
  { label: 'Platform', href: '#platform' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="relative z-10 border-b border-white/10">
      <nav className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between px-6">
        <Link href="/" aria-label="Dimuma home">
          <Logo onDark />
        </Link>

        <div className="hidden items-center gap-8 text-[14.5px] font-medium text-slate-300 lg:flex">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="transition hover:text-emerald-light">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden text-[14.5px] font-semibold text-white transition hover:text-emerald-light sm:inline"
          >
            Contact us
          </a>
          <a
            href="mailto:info@dimuma.com?subject=Request%20Demo&body=Please%20fill%20in%20your%20information"
            className="rounded bg-emerald-light px-5 py-2.5 text-[14.5px] font-semibold text-[#062e22] transition hover:shadow-[0_8px_30px_-6px_rgba(52,211,153,0.7)]"
          >
            Request a trial
          </a>
        </div>
      </nav>
    </header>
  )
}
