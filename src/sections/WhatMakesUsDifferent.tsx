'use client'

import { SlideUp, StaggerContainer } from '@/components/animations'
import CountUp from '@/components/ui/CountUp'
import { Zap, Bot, Target, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerItemVariants } from '@/lib/animations'

const STATS = [
  {
    icon: Zap,
    stat: 14,
    suffix: ' days',
    label: 'Average delivery time',
    description: 'While others take months, we ship production-ready solutions in weeks.',
    color: 'from-amber-500 to-orange-500',
    iconColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
  },
  {
    icon: Bot,
    stat: 50,
    suffix: '+',
    label: 'AI features shipped',
    description: 'Every solution leverages cutting-edge AI to make your business smarter.',
    color: 'from-primary-500 to-cyan-400',
    iconColor: 'text-primary-400',
    bgColor: 'bg-primary-500/10',
  },
  {
    icon: Target,
    stat: 100,
    suffix: '%',
    label: 'Custom code',
    description: 'Zero templates. We build from scratch to match your exact requirements.',
    color: 'from-accent-500 to-pink-500',
    iconColor: 'text-accent-400',
    bgColor: 'bg-accent-500/10',
  },
]

/**
 * What Makes Us Different section
 * Showcases 3 key pillars with animated stats
 */
export default function WhatMakesUsDifferent() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />

      <div className="container mx-auto relative">
        <SlideUp>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full glass text-sm text-neutral-400">
              <TrendingUp className="h-4 w-4 text-primary-400" />
              <span>Why choose us</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Why <span className="text-gradient">Velocity Labs</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              We're not just another dev shop. Here's what sets us apart.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {STATS.map((item, index) => (
            <motion.div key={index} variants={staggerItemVariants}>
              <div className="group h-full glass rounded-2xl p-8 border border-white/5 card-lift hover-gradient-border cursor-default">
                {/* Icon with gradient background on hover */}
                <div className={`mb-6 inline-flex rounded-xl ${item.bgColor} p-4 transition-all duration-300 group-hover:scale-110`}>
                  <item.icon className={`h-8 w-8 ${item.iconColor} transition-transform duration-300 group-hover:rotate-12`} />
                </div>

                {/* Stat with count-up */}
                <div className="mb-2">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                    <CountUp end={item.stat} suffix={item.suffix} />
                  </span>
                </div>

                {/* Label */}
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.label}
                </h3>

                {/* Description */}
                <p className="text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
