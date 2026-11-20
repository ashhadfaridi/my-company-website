const FEATURES = [
  'A pipeline for every client job, from documents received to filed',
  'Client records, notes and deadlines in one place',
  'Hand-offs between team members without lost paperwork',
  'Designed so non-technical staff can learn it in an afternoon',
]

/** Pipeline stages shown in the mockup. */
const STAGES = [
  { name: 'Documents in', count: 6 },
  { name: 'In progress', count: 9 },
  { name: 'Review', count: 3 },
  { name: 'Filed', count: 21 },
]

export default function Work() {
  return (
    <section id="work" className="scroll-mt-20 border-y border-line bg-panel py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-4xl font-bold text-ink md:text-5xl">Recent work</h2>
          <h3 className="mt-8 text-2xl font-semibold text-ink">
            Practice management for an accounting firm
          </h3>
          <p className="mt-4 max-w-[58ch] text-ink-soft">
            An accounting and tax office was running on paper files, email and WhatsApp messages.
            We built a workspace that tracks every client job through each stage, so nothing slips
            during tax season and new staff can pick up where someone else left off.
          </p>
          <ul className="mt-6 space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex gap-3 text-ink-soft">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-deep" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-line bg-paper p-5" role="img" aria-label="Illustration of a job pipeline board with four stages">
          <div className="grid grid-cols-4 gap-3">
            {STAGES.map((stage) => (
              <div key={stage.name}>
                <p className="text-xs font-semibold text-ink">{stage.name}</p>
                <p className="text-xs text-muted">{stage.count} jobs</p>
                <div className="mt-3 space-y-2">
                  {Array.from({ length: Math.min(stage.count, 4) }).map((_, j) => (
                    <div key={j} className="rounded border border-line bg-panel p-2">
                      <div className="h-1.5 w-3/4 rounded bg-ink/70" />
                      <div className="mt-1.5 h-1.5 w-1/2 rounded bg-line" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
