'use client'

import Card from '@/components/ui/Card'
import { SlideUp, StaggerContainer } from '@/components/animations'
import { PILLARS } from '@/lib/constants'
import { Zap, Bot, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerItemVariants } from '@/lib/animations'

/**
 * Icon mapping for pillars
 */
const iconMap = {
  zap: Zap,
  bot: Bot,
  target: Target,
}

/**
 * What Makes Us Different section
 * Showcases 3 key pillars: Speed, AI, Customization
 */
export default function WhatMakesUsDifferent() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <SlideUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Why <span className="text-gradient">Velocity Labs</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              We're not just another dev shop. Here's what sets us apart.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {PILLARS.map((pillar, index) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap]
            return (
              <motion.div key={index} variants={staggerItemVariants}>
                <Card glow className="h-full">
                  <div className="mb-4 inline-flex rounded-lg bg-primary-500/10 p-3">
                    <Icon className="h-8 w-8 text-primary-400" />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-400">{pillar.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
