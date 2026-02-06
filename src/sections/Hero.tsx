'use client'

import Button from '@/components/ui/Button'
import GradientText from '@/components/ui/GradientText'
import { SlideUp, FadeIn } from '@/components/animations'
import { COMPANY } from '@/lib/constants'
import { Sparkles } from 'lucide-react'

/**
 * Hero section with headline, subheadline, and CTAs
 * Includes animated gradient background
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg-hero">
      {/* Background particles/decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20 text-center">
        <FadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-neutral-300">
            <Sparkles className="h-4 w-4 text-primary-400" />
            <span>AI-Powered Digital Solutions</span>
          </div>
        </FadeIn>

        <SlideUp delay={0.2}>
          <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-bold leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <GradientText animated>
              {COMPANY.tagline}
            </GradientText>
          </h1>
        </SlideUp>

        <SlideUp delay={0.4}>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-neutral-300 sm:text-xl md:text-2xl">
            {COMPANY.description}
          </p>
        </SlideUp>

        <SlideUp delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact">
              <Button size="lg">Start Your Project</Button>
            </a>
            <a href="#portfolio">
              <Button variant="secondary" size="lg">See Our Work</Button>
            </a>
          </div>
        </SlideUp>

        {/* Scroll indicator */}
        <FadeIn delay={1}>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2 text-neutral-400">
              <span className="text-sm">Scroll to explore</span>
              <div className="h-8 w-5 rounded-full border-2 border-neutral-400 flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-neutral-400 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
