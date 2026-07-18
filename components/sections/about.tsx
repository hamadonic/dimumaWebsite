const VALUES = [
  { title: 'Excellence', body: 'We deliver high-quality solutions and services that exceed expectations.' },
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
              Empowering businesses for sustainable excellence
            </h2>
            <div className="space-y-4 text-[17px] text-muted">
              <p>
                Dimuma is a sustainability ESG solution provider based in Bahrain. Our platform is
                designed to empower organizations to be more responsible, resilient, and efficient in
                line with their sustainability goals.
              </p>
              <p>
                We enable organizations to integrate sustainability into their core operations, drive
                positive environmental and social impacts, and contribute to the long-term well-being
                of their communities. Our application helps customers make informed decisions, set
                ambitious sustainability goals, and measure their progress.
              </p>
              <p>
                We are committed to supporting businesses in adopting sustainable strategies, meeting
                international reporting standards, and contributing to national sustainability goals.
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
