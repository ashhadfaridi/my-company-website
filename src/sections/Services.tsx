type Service = { title: string; description: string; examples: string }
type Group = { heading: string; intro: string; services: Service[] }

const GROUPS: Group[] = [
  {
    heading: 'Get found and get booked',
    intro: 'Turn people searching for what you do into paying customers.',
    services: [
      {
        title: 'Websites',
        description:
          'A fast, mobile-friendly site that explains what you do, shows your prices and work, and makes it easy to contact or book you.',
        examples: 'Business sites, landing pages, online stores, redesigns',
      },
      {
        title: 'Online booking and scheduling',
        description:
          'Customers pick a time themselves. You get fewer phone calls, fewer no-shows and automatic reminders.',
        examples: 'Appointments, classes, estimates, staff calendars',
      },
      {
        title: 'Lead generation',
        description:
          'Campaigns, landing pages and follow-up that bring in new inquiries and route them straight to you.',
        examples: 'Quote request funnels, local search setup, email and text follow-up',
      },
    ],
  },
  {
    heading: 'Run the business smoother',
    intro: 'Replace paper, spreadsheets and copy-paste with tools built around how you work.',
    services: [
      {
        title: 'Inventory and operations software',
        description:
          'Know what you have, what sold and what to reorder, without counting by hand at the end of the month.',
        examples: 'Stock tracking, consignment and vendor payouts, purchase orders',
      },
      {
        title: 'Custom apps and client portals',
        description:
          'Software made for your process: job pipelines, customer records, quotes, invoices and team dashboards.',
        examples: 'CRMs, job trackers, member portals, internal dashboards',
      },
      {
        title: 'Automation and integrations',
        description:
          'Connect the tools you already pay for so information moves on its own instead of being typed twice.',
        examples: 'Forms to CRM, invoices to accounting, alerts to your phone',
      },
    ],
  },
  {
    heading: 'Work smarter with AI and expert help',
    intro: 'Practical AI and technical guidance, sized for a business without an IT department.',
    services: [
      {
        title: 'AI solutions',
        description:
          'AI that answers common questions, books appointments, sorts paperwork and drafts follow-ups, with a person in the loop where it matters.',
        examples: 'Website chat assistants, AI receptionists, document processing',
      },
      {
        title: 'IT consulting',
        description:
          'A straight answer on what technology to use, what to stop paying for, and how to keep your data safe.',
        examples: 'Tech planning, software selection, cloud setup, security reviews',
      },
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-ink md:text-5xl">What we build</h2>
          <p className="mt-5 text-lg text-muted">
            Start with one thing or have us handle all of it. Every project is built from scratch for
            your business, not adapted from a template.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {GROUPS.map((group) => (
            <div key={group.heading} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <h3 className="text-2xl font-bold text-ink md:text-3xl">{group.heading}</h3>
                <p className="mt-3 max-w-sm text-muted">{group.intro}</p>
              </div>
              <ul className="border-t-2 border-ink">
                {group.services.map((s) => (
                  <li key={s.title} className="border-b border-line py-7">
                    <h4 className="font-display text-xl font-semibold text-ink">{s.title}</h4>
                    <p className="mt-2 max-w-[62ch] text-ink-soft">{s.description}</p>
                    <p className="mt-3 text-sm text-muted">{s.examples}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
