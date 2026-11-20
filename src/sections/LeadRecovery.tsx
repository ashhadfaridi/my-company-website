import { buttonVariants } from '@/components/ui/Button'

const STEPS = [
  {
    title: 'Share your old leads',
    body: 'Export the inquiries that went cold from your CRM or spreadsheet. Months or years old is fine.',
  },
  {
    title: 'We reach back out',
    body: 'Personal, well-timed follow-up across email, text and phone, written in your voice. Opt-outs are always honored.',
  },
  {
    title: 'You close, then we get paid',
    body: 'Ready-to-buy prospects go straight to your sales team. We invoice only for the ones that become paying customers.',
  },
]

const TERMS = [
  { label: 'Upfront cost', value: '$0' },
  { label: 'Monthly retainer', value: '$0' },
  { label: 'If no one converts', value: '$0' },
]

export default function LeadRecovery() {
  return (
    <section id="lead-recovery" className="scroll-mt-20 bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="font-medium text-signal">Lead recovery, for established teams</p>
            <h2 className="mt-4 max-w-[18ch] text-4xl font-bold md:text-6xl">
              Leads you already paid for, turned into customers.
            </h2>
            <p className="mt-6 max-w-[58ch] text-lg text-white/75">
              Every marketing pipeline has them: people who asked for a quote, got a call or two,
              then went quiet. After a few weeks nobody follows up and they sit in the CRM. We work
              through those abandoned leads and bring the ready ones back to your team.
            </p>
            <p className="mt-4 max-w-[58ch] text-white/75">
              For a roofing company, that is the homeowner who asked about a replacement last spring
              and never heard back. The same goes for solar, HVAC, remodeling, insurance and other
              high-ticket services.
            </p>
          </div>

          <div className="rounded-lg bg-signal p-8 text-ink">
            <p className="font-display text-2xl font-bold">You only pay when we deliver.</p>
            <dl className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
              {TERMS.map((t) => (
                <div key={t.label} className="flex items-baseline justify-between py-3">
                  <dt>{t.label}</dt>
                  <dd className="font-display text-2xl font-bold">{t.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5">
              When a recovered lead becomes a customer, we earn an agreed percentage of that sale.
              Nothing else.
            </p>
          </div>
        </div>

        <ol className="mt-20 grid gap-10 border-t border-white/20 pt-12 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <span className="font-display text-5xl font-bold text-signal" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-3 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-white/70">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a href="#contact" className={buttonVariants({ variant: 'signal', size: 'lg' })}>
            Check if your leads qualify
          </a>
          <p className="text-white/60">Best fit for teams with an active marketing pipeline.</p>
        </div>
      </div>
    </section>
  )
}
