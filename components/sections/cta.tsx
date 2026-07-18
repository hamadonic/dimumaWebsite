import { MapPin, Mail, Clock, FileText } from 'lucide-react'

const DETAILS = [
  { icon: MapPin, label: 'Flat/Shop 916, Building 33, Road 1802, Block 318, Al Hoora, Manama, Bahrain' },
  { icon: Mail, label: 'info@dimuma.com', href: 'mailto:info@dimuma.com' },
  { icon: Clock, label: 'Open today: 09:00 – 16:00' },
  { icon: FileText, label: 'Dimuma W.L.L · CR 174450-1' },
]

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden bg-deep px-6 py-24 text-white">
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full opacity-30 blur-[120px]"
        style={{ background: '#059669' }}
      />
      <div className="relative z-[2] mx-auto grid max-w-[1160px] items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-emerald-light">
            Start your sustainability journey
          </p>
          <h2 className="mt-3 text-[34px] font-extrabold tracking-[-0.025em] md:text-[44px]">
            Looking to begin your ESG journey?
          </h2>
          <p className="mb-8 mt-4 max-w-[46ch] text-[19px] text-slate-400">
            We value our customer interactions and promise a timely response. Reach out and we’ll
            help you collect, report, and analyze your ESG data.
          </p>
          <a
            href="mailto:info@dimuma.com?subject=Request%20Demo&body=Please%20fill%20in%20your%20information"
            className="inline-block rounded bg-emerald-light px-8 py-4 text-[16px] font-semibold text-[#062e22] transition hover:shadow-[0_8px_30px_-6px_rgba(52,211,153,0.7)]"
          >
            Request a trial today →
          </a>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <div className="mb-5 text-[15px] font-bold">Contact us</div>
          <ul className="space-y-4">
            {DETAILS.map((d) => (
              <li key={d.label} className="flex items-start gap-3 text-[15px] text-slate-300">
                <d.icon className="mt-0.5 h-5 w-5 flex-none text-emerald-light" strokeWidth={2} />
                {d.href ? (
                  <a href={d.href} className="transition hover:text-emerald-light">
                    {d.label}
                  </a>
                ) : (
                  <span>{d.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
