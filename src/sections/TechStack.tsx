import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiOpenai,
  SiStripe,
  SiSupabase,
  SiVercel,
  SiPython,
  SiFigma,
  SiGithub,
  SiShopify,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const TECH = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'OpenAI', icon: SiOpenai },
  { name: 'AWS', icon: FaAws },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'Stripe', icon: SiStripe },
  { name: 'Shopify', icon: SiShopify },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Figma', icon: SiFigma },
  { name: 'GitHub', icon: SiGithub },
]

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {TECH.map((t) => (
        <li key={t.name} className="flex items-center gap-2.5 px-7 text-muted">
          <t.icon className="h-6 w-6 shrink-0 text-ink" aria-hidden="true" />
          <span className="whitespace-nowrap font-medium">{t.name}</span>
        </li>
      ))}
    </ul>
  )
}

export default function TechStack() {
  return (
    <section aria-labelledby="tech-heading" className="border-y border-line bg-panel py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="tech-heading" className="text-lg font-semibold text-ink">
          Built on the same technology the biggest companies use
        </h2>
        <p className="mt-1 text-muted">Modern, secure and supported for years to come, so nothing you own goes out of date.</p>
      </div>
      <div className="marquee-mask mt-8 overflow-hidden">
        <div className="marquee-track flex w-max">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  )
}
