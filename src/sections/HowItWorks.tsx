const STEPS = [
  {
    title: 'Free consultation',
    body: 'A 15 to 30 minute call about your business, what is slowing you down and what you want more of. No technical knowledge needed.',
  },
  {
    title: 'Clear proposal',
    body: 'Within a few days you get a written plan with the scope, timeline and one fixed price. You decide with the full cost in front of you.',
  },
  {
    title: 'Build and launch',
    body: 'You see progress along the way and give feedback before anything goes live. Most websites launch in two to four weeks.',
  },
  {
    title: 'Support after launch',
    body: 'We show you how to use what we built and stay available for updates, fixes and the next improvement.',
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl text-4xl font-bold text-ink md:text-5xl">How we work together</h2>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li key={step.title} className="bg-panel p-7">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-signal font-display font-bold text-ink">
                {i + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
