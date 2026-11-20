'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import { buttonVariants } from '@/components/ui/Button'
import Logo from '@/components/layout/Logo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        isScrolled || isOpen ? 'border-b border-line bg-paper/95 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label="Brightdoor Tech home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-[0.95rem] font-medium text-muted hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className={buttonVariants({ size: 'sm' })}>
            Book a free call
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="-mr-2 p-2 text-ink lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-nav" className="border-t border-line bg-paper px-6 pb-8 pt-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block border-b border-line py-4 font-display text-xl font-semibold text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className={`${buttonVariants({ size: 'lg' })} mt-6 w-full`}
          >
            Book a free call
          </a>
        </nav>
      )}
    </header>
  )
}
