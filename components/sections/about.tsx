const VALUES = [
  { title: 'Excellence', body: 'We deliver high-quality software and services that exceed expectations.' },
  { title: 'Trust', body: 'We build trust through transparent communication, integrity, and delivering on our commitments.' },
  { title: 'Ethics', body: 'We uphold high ethical standards — fairness, honesty, and respect in every interaction.' },
  { title: 'Shared responsibility', body: 'We recognize that by working together, we can create a greater impact.' },
  { title: 'Innovation', body: 'We think outside the box, challenge the status quo, and explore new approaches.' },
]

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.08em] text-emerald">About Dimuma</p>
            <h2 className="mb-5 mt-3 text-[32px] font-extrabold tracking-[-0.02em] text-navy md:text-[40px]">
              A sustainability software company
            </h2>
            <div className="space-y-4 text-[17px] text-muted">
              <p>
                Dimuma is a sustainability software company based in Bahrain. We build a SaaS
                platform of focused products designed to empower organizations to be more
                responsible, resilient, and efficient in line with their sustainability goals.
              </p>
              <p>
                Our mission is to make sustainability practical. We help organizations integrate it
                into their core operations, drive positive environmental and social impact, and
                contribute to the long-term well-being of their communities — with software that
                teams actually want to use.
              </p>
              <p>
                We are committed to supporting businesses in adopting sustainable strategies and
                contributing to national and regional sustainability goals, one product at a time.
              </p>
            </div>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-subtle bg-white p-5">
                <div className="text-[16px] font-bold text-navy">{v.title}</div>
                <p className="mt-1 text-[14px] text-muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
