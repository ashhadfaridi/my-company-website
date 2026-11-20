import { buttonVariants } from '@/components/ui/Button'
import RotatingWords from '@/components/ui/RotatingWords'
import { CalendarCheck, PackageCheck, PhoneCall } from 'lucide-react'
import type { CSSProperties } from 'react'

const BUILD_WORDS = [
  'websites',
  'booking systems',
  'inventory tools',
  'AI assistants',
  'client portals',
  'online stores',
  'lead pipelines',
]

type Ticket = {
  icon: typeof CalendarCheck
  source: string
  title: string
  before: string
  after: string
  tilt: string
  delay: string
  flip: string
}

/** A morning at a business running on systems we build. */
const TICKETS: Ticket[] = [
  {
    icon: CalendarCheck,
    source: 'From your website',
    title: 'Haircut and beard trim, Saturday 9:30',
    before: 'New booking',
    after: 'Confirmed, reminder scheduled',
    tilt: '-1.5deg',
    delay: '0.15s',
    flip: '1.4s',
  },
  {
    icon: PackageCheck,
    source: 'Inventory',
    title: 'Cedar candle, 4 left on the shelf',
    before: 'Running low',
    after: 'Reorder sent to supplier',
    tilt: '1deg',
    delay: '0.35s',
    flip: '2.1s',
  },
  {
    icon: PhoneCall,
    source: 'Lead recovery',
    title: 'Roof inspection request from last spring',
    before: 'No reply in 7 months',
    after: 'Inspection booked for Thursday',
    tilt: '-0.5deg',
    delay: '0.55s',
    flip: '2.8s',
  },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="text-5xl font-extrabold text-ink sm:text-6xl lg:text-[3.6rem] xl:text-[4rem]">
            <span className="block">We build</span>
            <span className="block min-h-[2.2em] sm:min-h-0">
              <RotatingWords
                words={BUILD_WORDS}
                className="rounded-md bg-signal px-3 pb-1 [box-decoration-break:clone] sm:whitespace-nowrap"
              />
            </span>
          </h1>
          <p className="mt-5 max-w-[22ch] font-display text-2xl font-semibold leading-snug text-ink-soft sm:text-3xl">
            that bring in customers and give you back your time.
          </p>
          <p className="mt-7 max-w-[54ch] text-lg text-muted">
            Brightdoor Tech builds websites, booking and inventory systems, AI tools and lead
            generation for small and mid-sized businesses. One partner for all of it, with a fixed
            price before any work starts.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={buttonVariants({ size: 'lg' })}>
              Book a free consultation
            </a>
            <a href="#services" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              See what we build
            </a>
          </div>
        </div>

        <div aria-label="Examples of work our systems handle" role="img" className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 -z-10 rounded-[28px] bg-signal/25" aria-hidden="true" />
          <p className="mb-4 font-display text-lg font-semibold text-ink" aria-hidden="true">
            Today, handled for you
          </p>
          <ul className="space-y-4" aria-hidden="true">
            {TICKETS.map((t) => (
              <li
                key={t.title}
                className="ticket rounded-lg border border-line bg-panel p-5 shadow-[0_1px_0_#d9dee6,0_12px_24px_-16px_rgba(20,33,61,0.35)]"
                style={{ '--tilt': t.tilt, '--delay': t.delay } as CSSProperties}
              >
                <div className="flex items-center gap-2 text-sm text-muted">
                  <t.icon className="h-4 w-4 text-ink" />
                  {t.source}
                </div>
                <p className="mt-2 font-semibold text-ink">{t.title}</p>
                <div
                  className="relative mt-3 h-7 text-sm font-medium"
                  style={{ '--flip': t.flip } as CSSProperties}
                >
                  <span className="status-before absolute inset-0 inline-flex w-fit items-center rounded bg-paper px-2 text-muted">
                    {t.before}
                  </span>
                  <span className="status-after absolute inset-0 inline-flex w-fit items-center rounded bg-go-soft px-2 text-go">
                    {t.after}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
