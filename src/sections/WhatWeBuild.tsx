'use client'

import Button from '@/components/ui/Button'
import { SlideUp, FadeIn } from '@/components/animations'
import { Globe, ShoppingCart, LayoutDashboard, BrainCircuit, Workflow, Wrench, Star, ArrowRight, Layers, Clock, CheckCircle2 } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const SERVICES = [
  {
    icon: Globe,
    title: 'High-Converting Websites',
    description: 'Not just pretty — built to convert. Landing pages and business sites optimized for leads, sales, and growth.',
    featured: true,
    tag: 'Most Popular',
    color: 'from-primary-500 to-cyan-400',
    startingAt: 'Starting at $3,500',
    deliveryTime: '2-3 weeks',
    results: ['3x more leads', '50% faster load times'],
  },
  {
    icon: LayoutDashboard,
    title: 'Custom Web Applications',
    description: 'SaaS platforms, internal tools, client portals — full-stack apps built to scale with your business.',
    featured: true,
    tag: 'Full-Stack',
    color: 'from-accent-500 to-pink-400',
    startingAt: 'Starting at $8,000',
    deliveryTime: '4-6 weeks',
    results: ['Save 20+ hrs/week', 'Built to scale'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Stores',
    description: 'Online stores that sell, with AI product recommendations and seamless checkout.',
    featured: false,
    color: 'from-green-500 to-emerald-400',
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    description: 'Chatbots, automation, and intelligent workflows that save time.',
    featured: false,
    color: 'from-violet-500 to-purple-400',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description: 'Connect your tools and eliminate 40+ hours of manual work per week.',
    featured: false,
    color: 'from-amber-500 to-orange-400',
  },
  {
    icon: Wrench,
    title: 'Custom Solutions',
    description: 'Something unique in mind? Let\'s build exactly what you need.',
    featured: false,
    color: 'from-rose-500 to-red-400',
  },
]

/**
 * What We Build section
 * Asymmetric grid with 2 featured services + 4 regular services
 */
export default function WhatWeBuild() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const featuredServices = SERVICES.filter(s => s.featured)
  const regularServices = SERVICES.filter(s => !s.featured)

  return (
    <section id="services" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/50 to-neutral-950" />

      <div ref={ref} className="container mx-auto relative">
        <SlideUp>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full glass text-sm text-neutral-400">
              <Layers className="h-4 w-4 text-primary-400" />
              <span>Our services</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              What We <span className="text-gradient">Build Best</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              We specialize in two things: websites that convert and apps that scale. Everything else builds on that foundation.
            </p>
          </div>
        </SlideUp>

        {/* Featured Services - 2 large cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featuredServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="group relative h-full glass-strong rounded-2xl p-8 border border-white/10 overflow-hidden card-lift">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Tag badge */}
                {service.tag && (
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${service.color} text-xs font-medium text-white`}>
                      <Star className="h-3 w-3" />
                      {service.tag}
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${service.color} p-4 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-3 text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-lg leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Pricing and delivery info */}
                {'startingAt' in service && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-white">{service.startingAt}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-400">
                      <Clock className="h-4 w-4" />
                      <span>{service.deliveryTime}</span>
                    </div>
                  </div>
                )}

                {/* Results */}
                {'results' in service && service.results && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {service.results.map((result: string, i: number) => (
                      <div key={i} className="flex items-center gap-1.5 text-sm text-green-400">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Learn more link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors group/link"
                >
                  <span className="font-medium">Get a quote</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Services - 4 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regularServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
            >
              <div className="group h-full glass rounded-xl p-6 border border-white/5 hover:border-white/10 card-lift">
                {/* Icon with gradient */}
                <div className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${service.color} p-3 opacity-80 group-hover:opacity-100 transition-opacity`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <p className="mb-6 text-lg text-neutral-300">
              Not sure which service fits your needs? Let's figure it out together.
            </p>
            <a href="#contact">
              <Button size="lg" className="group">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
