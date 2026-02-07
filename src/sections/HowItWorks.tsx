'use client'

import { useRef } from 'react'
import { SlideUp } from '@/components/animations'
import { motion, useInView } from 'framer-motion'
import { Phone, FileText, Rocket, Clock, CheckCircle2 } from 'lucide-react'

const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Discovery Call',
    description: 'We understand your goals, challenges, and vision for the project. No fluff, just real conversation about what you need.',
    icon: Phone,
    timeframe: 'Day 1',
    duration: '30 min call',
    outcomes: ['Understand requirements', 'Define scope', 'Align expectations'],
  },
  {
    number: 2,
    title: 'Custom Proposal',
    description: 'Get a tailored solution plan with timeline, tech stack, and clear scope. You\'ll know exactly what you\'re getting.',
    icon: FileText,
    timeframe: 'Day 2-3',
    duration: '24-48 hours',
    outcomes: ['Detailed roadmap', 'Fixed pricing', 'Clear milestones'],
  },
  {
    number: 3,
    title: 'Rapid Build & Launch',
    description: 'We build, you review, we refine — then launch to production. Fast iteration with daily updates.',
    icon: Rocket,
    timeframe: 'Day 4-14',
    duration: '1-2 weeks',
    outcomes: ['Production deploy', 'Full handover', 'Ongoing support'],
  },
]

/**
 * How It Works section
 * Interactive timeline with timeframes and icons
 */
export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-500/5 to-transparent" />

      <div className="container mx-auto relative">
        <SlideUp>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full glass text-sm text-neutral-400">
              <Clock className="h-4 w-4 text-primary-400" />
              <span>Our process</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              From Idea to <span className="text-gradient">Launch</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              Our streamlined process gets you from concept to production in as little as 2 weeks.
            </p>
          </div>
        </SlideUp>

        <div ref={ref} className="relative max-w-5xl mx-auto">
          {/* Timeline connector - animated gradient line */}
          <div className="absolute left-[39px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-neutral-800 hidden sm:block">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="w-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"
            />
          </div>

          <div className="space-y-12 md:space-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                className={`relative flex flex-col sm:flex-row gap-6 md:gap-12 items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } md:mb-24`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 sm:left-auto sm:relative z-10 flex-shrink-0 md:mx-auto">
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-primary-500/30 rounded-full blur-xl animate-pulse" />

                    {/* Node circle */}
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border-2 border-primary-500 text-sm font-bold text-white">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex-1 ml-24 sm:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className={`glass rounded-2xl p-6 border border-white/5 hover:border-primary-500/30 transition-colors ${
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  } md:max-w-md`}>
                    {/* Timeframe badge */}
                    <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-sm ${
                      index % 2 === 0 ? 'md:ml-auto' : ''
                    }`}>
                      <Clock className="h-3 w-3" />
                      {step.timeframe} • {step.duration}
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400 mb-4 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Outcomes */}
                    <div className={`space-y-2 ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      {step.outcomes.map((outcome, i) => (
                        <div key={i} className={`flex items-center gap-2 text-sm text-neutral-500 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}>
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
