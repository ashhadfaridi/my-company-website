'use client'

import { SlideUp, StaggerContainer } from '@/components/animations'
import { PROCESS_STEPS } from '@/lib/constants'
import { motion } from 'framer-motion'
import { staggerItemVariants } from '@/lib/animations'

/**
 * How It Works section
 * 3-step process with timeline connector
 */
export default function HowItWorks() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="container mx-auto">
        <SlideUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              From Idea to <span className="text-gradient">Launch</span> in 3 Steps
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              Our streamlined process gets you from concept to production fast.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block" />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                variants={staggerItemVariants}
                className="relative flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-2xl font-bold text-white shadow-glow-primary">
                    {step.number}
                  </div>
                </div>

                {/* Step content */}
                <div className="glass rounded-xl p-6 flex-1 glow-on-hover">
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
