'use client'

import { useEffect } from 'react'
import { SlideUp, FadeIn } from '@/components/animations'
import Button from '@/components/ui/Button'
import { ArrowRight, Linkedin, Twitter, Calendar } from 'lucide-react'
import { getCalApi } from '@calcom/embed-react'

// Cal.com configuration
const CAL_LINK = 'savage-bfeykg/15min'

/**
 * Meet the Founder section
 * Personal touch with founder info and CTA
 */
export default function Founder() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi({ namespace: 'discovery' })
      cal('ui', {
        theme: 'dark',
        styles: {
          branding: { brandColor: '#00BCFF' },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  const openCalModal = async () => {
    const cal = await getCalApi({ namespace: 'discovery' })
    cal('modal', {
      calLink: CAL_LINK,
      config: {
        layout: 'month_view',
        theme: 'dark',
      },
    })
  }

  return (
    <section id="founder" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />

      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center">
              {/* Avatar */}
              <FadeIn>
                <div className="relative mx-auto md:mx-0">
                  {/* Glow ring */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-xl opacity-30" />

                  {/* Avatar placeholder */}
                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                    <div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center">
                      <span className="text-5xl font-bold text-gradient">AF</span>
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-2 glass rounded-full px-3 py-1 border border-white/10">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-neutral-300">Available</span>
                  </div>
                </div>
              </FadeIn>

              {/* Content */}
              <SlideUp delay={0.2}>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm">
                    <span>Meet the Founder</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Ashhad Faridi
                  </h2>
                  <p className="text-lg text-neutral-400 mb-4">
                    Founder & Lead Developer
                  </p>

                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    I've been building digital products for 8+ years. My mission is simple: help businesses move fast with technology that actually works. No fluff, no endless timelines — just results.
                  </p>

                  {/* Social links */}
                  <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
                    <a
                      href="https://linkedin.com/in/ashhadfaridi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="https://twitter.com/ashhadfaridi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <a href="#contact">
                      <Button size="lg" className="group">
                        Let's Build Something Great
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </a>
                    <button
                      onClick={openCalModal}
                      className="inline-flex items-center gap-2 text-neutral-400 hover:text-primary-400 transition-colors justify-center cursor-pointer"
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Book a Call</span>
                    </button>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
