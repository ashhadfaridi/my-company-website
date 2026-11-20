'use client'

import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { Linkedin, Github } from 'lucide-react'
import { buttonVariants } from '@/components/ui/Button'
import { CAL_LINK, SOCIAL_LINKS } from '@/lib/constants'

export default function Founder() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: 'discovery' })
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#14213d' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  const openCal = async () => {
    const cal = await getCalApi({ namespace: 'discovery' })
    cal('modal', { calLink: CAL_LINK, config: { layout: 'month_view', theme: 'light' } })
  }

  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <div
            className="flex h-40 w-40 items-center justify-center rounded-full bg-signal font-display text-5xl font-bold text-ink"
            aria-hidden="true"
          >
            AF
          </div>
          <p className="mt-6 font-display text-2xl font-bold text-ink">Ashhad Faridi</p>
          <p className="text-muted">Founder</p>
          <div className="mt-4 flex gap-4">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-ink">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-ink">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="max-w-[20ch] text-4xl font-bold text-ink md:text-5xl">
            Enterprise-grade engineering, small-business attention.
          </h2>
          <div className="mt-7 max-w-[62ch] space-y-5 text-lg text-ink-soft">
            <p>
              I have spent more than five years building production software, including AI systems
              for regulated financial services and platforms used by large operations teams.
            </p>
            <p>
              I also run a bookkeeping and tax practice, so I see every day how much time small
              businesses lose to paperwork, missed follow-ups and tools that do not talk to each
              other. Brightdoor Tech exists to fix that with technology that is simple to use and
              priced for real businesses.
            </p>
            <p>When you work with us, you talk directly to the person building your project.</p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={openCal} className={buttonVariants({ size: 'lg' })}>
              Book a 15-minute call
            </button>
            <a href="#contact" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              Send a message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
