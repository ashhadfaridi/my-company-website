import { Github, Linkedin, Twitter } from 'lucide-react'
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants'

/**
 * Footer component with company links, email, and social icons
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold text-gradient">
              {COMPANY.name}
            </h3>
            <p className="text-sm text-neutral-400">
              Custom digital solutions built at lightning speed
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#services"
                  className="text-neutral-400 transition-colors hover:text-primary-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-neutral-400 transition-colors hover:text-primary-400"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-neutral-400 transition-colors hover:text-primary-400"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-400 transition-colors hover:text-primary-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              Get In Touch
            </h4>
            <p className="mb-4 text-sm text-neutral-400">
              <a
                href={`mailto:${COMPANY.email}`}
                className="transition-colors hover:text-primary-400"
              >
                {COMPANY.email}
              </a>
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-primary-400"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-primary-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 transition-colors hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
