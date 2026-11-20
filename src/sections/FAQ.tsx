import { Plus } from 'lucide-react'

const FAQS = [
  {
    q: 'How much does a website or app cost?',
    a: 'It depends on what you need, so every project starts with a free call and a written proposal with one fixed price. You know the full cost before any work begins, and there are no surprise invoices.',
  },
  {
    q: 'How does lead recovery pricing work?',
    a: 'There is no setup fee and no monthly retainer. We agree on a percentage up front, and we only invoice when a lead we re-engaged becomes a paying customer. If nobody converts, you owe nothing.',
  },
  {
    q: 'I am not technical. Is that a problem?',
    a: 'Not at all. Most of the businesses we work with are not. We explain things in plain language, handle the technical work, and show you how to use what we build.',
  },
  {
    q: 'Can I update my own website after launch?',
    a: 'Yes. We can set up your site so you can change text, photos, prices and hours yourself, or we can handle updates for you.',
  },
  {
    q: 'Do we need to meet in person?',
    a: 'No. Most projects run over video calls, phone and email, which keeps things quick and fits around your schedule.',
  },
  {
    q: 'What happens after launch?',
    a: 'We stay on for fixes, updates and improvements. Hosting, maintenance and support plans are available if you would rather not think about it.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.7fr_1.3fr]">
        <h2 className="text-4xl font-bold text-ink md:text-5xl">Common questions</h2>
        <div className="border-t-2 border-ink">
          {FAQS.map((item) => (
            <details key={item.q} className="group border-b border-line">
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-6 font-display text-xl font-semibold text-ink">
                {item.q}
                <Plus className="faq-plus h-5 w-5 shrink-0 transition-transform" aria-hidden="true" />
              </summary>
              <p className="max-w-[62ch] pb-6 text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
