'use client'

import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { SlideUp, StaggerContainer } from '@/components/animations'
import { SERVICES } from '@/lib/constants'
import { Globe, ShoppingCart, LayoutDashboard, BrainCircuit, Workflow, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { staggerItemVariants } from '@/lib/animations'

/**
 * Icon mapping for services
 */
const iconMap = {
  globe: Globe,
  'shopping-cart': ShoppingCart,
  'layout-dashboard': LayoutDashboard,
  'brain-circuit': BrainCircuit,
  workflow: Workflow,
  wrench: Wrench,
}

/**
 * What We Build section
 * Showcases 6 service offerings
 */
export default function WhatWeBuild() {
  return (
    <section id="services" className="py-24 px-6 bg-neutral-900/30">
      <div className="container mx-auto">
        <SlideUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Solutions <span className="text-gradient">Tailored to You</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              From concept to launch, we build exactly what your business needs.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <motion.div key={index} variants={staggerItemVariants}>
                <Card glow className="h-full transition-transform hover:scale-105">
                  <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 p-3">
                    <Icon className="h-7 w-7 text-primary-400" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </StaggerContainer>

        <SlideUp delay={0.6}>
          <div className="mt-12 text-center">
            <p className="mb-6 text-lg text-neutral-300">
              Not sure what you need? Let's talk.
            </p>
            <a href="#contact">
              <Button size="lg">Get a Free Consultation</Button>
            </a>
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
