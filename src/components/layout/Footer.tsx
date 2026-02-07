'use client'

import { Github, Linkedin, Twitter, Mail, MapPin, Clock, Zap, ArrowRight } from 'lucide-react'
import { COMPANY, SOCIAL_LINKS } from '@/lib/constants'
import Button from '@/components/ui/Button'

const FOOTER_LINKS = {
  services: [
    { label: 'Custom Websites', href: '#services' },
    { label: 'E-Commerce Platforms', href: '#services' },
    { label: 'Web Applications', href: '#services' },
    { label: 'AI Integration', href: '#services' },
    { label: 'Business Automation', href: '#services' },
  ],
  company: [
    { label: 'Our Process', href: '#process' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About the Founder', href: '#founder' },
    { label: 'Contact Us', href: '#contact' },
  ],
}

/**
 * Enhanced footer with urgency messaging, full sitemap, and contact info
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-neutral-950">
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 border-b border-white/5">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-neutral-300">
                <span className="font-semibold text-white">We take on 3 new projects per month</span>
                {' '}— spots fill fast
              </span>
            </div>
            <a href="#contact" className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors">
              Check availability
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Company Info - Takes more space */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:shadow-glow-primary transition-shadow">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Velocity<span className="text-primary-400">Labs</span>
              </span>
            </a>

            <p className="text-neutral-400 mb-6 leading-relaxed max-w-sm">
              We build custom digital solutions at lightning speed. From AI-powered web apps to e-commerce platforms — no templates, no fluff, just results that drive your business forward.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="text-sm">{COMPANY.email}</span>
              </a>
              <div className="flex items-center gap-3 text-neutral-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Remote — Working with clients worldwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-400/30 border border-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-400/30 border border-white/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-neutral-400 hover:text-primary-400 hover:border-primary-400/30 border border-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-3">
            <div className="glass rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-2">
                Ready to start?
              </h4>
              <p className="text-sm text-neutral-400 mb-4">
                Let's discuss your project and see how we can help.
              </p>
              <a href="#contact">
                <Button size="sm" className="w-full group">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-500">
              &copy; {currentYear} {COMPANY.name}. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500">
              Built with{' '}
              <span className="text-primary-400">Next.js</span>,{' '}
              <span className="text-primary-400">Tailwind CSS</span> &{' '}
              <span className="text-primary-400">Framer Motion</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
