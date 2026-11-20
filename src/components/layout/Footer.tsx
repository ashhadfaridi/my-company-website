import { COMPANY, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants'
import Logo from '@/components/layout/Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-white/70">{COMPANY.description}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/70 hover:text-white">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-3">
          <li>
            <a href={`mailto:${COMPANY.email}`} className="text-white/70 hover:text-white">{COMPANY.email}</a>
          </li>
          <li>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">LinkedIn</a>
          </li>
          <li>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">GitHub</a>
          </li>
        </ul>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/50">
          &copy; {year} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
