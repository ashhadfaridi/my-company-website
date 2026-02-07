'use client'

import { useRef } from 'react'
import { SlideUp } from '@/components/animations'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Briefcase, BarChart3, ShoppingBag, Workflow } from 'lucide-react'

const PORTFOLIO_PROJECTS = [
  {
    title: 'AI-Powered SaaS Dashboard',
    description: 'Real-time analytics dashboard with predictive insights and automated reporting. Built with custom ML models for business forecasting.',
    image: 'from-primary-600 via-cyan-600 to-primary-500',
    tags: ['Next.js', 'TypeScript', 'AI/ML', 'PostgreSQL'],
    industry: 'FinTech',
    icon: BarChart3,
    metrics: { label: 'Data Points Processed', value: '2.5M+' },
  },
  {
    title: 'E-Commerce Platform',
    description: 'Modern online store with AI product recommendations, smart inventory management, and seamless checkout experience.',
    image: 'from-green-600 via-emerald-600 to-teal-500',
    tags: ['React', 'Stripe', 'AI', 'Shopify API'],
    industry: 'Retail',
    icon: ShoppingBag,
    metrics: { label: 'Conversion Increase', value: '+340%' },
  },
  {
    title: 'Automation Hub',
    description: 'Custom workflow automation connecting 10+ business tools and eliminating manual data entry. Saved 40+ hours per week.',
    image: 'from-accent-600 via-purple-600 to-pink-500',
    tags: ['TypeScript', 'Zapier', 'API Integration', 'Webhooks'],
    industry: 'Operations',
    icon: Workflow,
    metrics: { label: 'Hours Saved Weekly', value: '40+' },
  },
]

/**
 * Portfolio section
 * Large cards with gradient backgrounds and hover overlays
 */
export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900/30 to-neutral-950" />

      <div className="container mx-auto relative">
        <SlideUp>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full glass text-sm text-neutral-400">
              <Briefcase className="h-4 w-4 text-primary-400" />
              <span>Our work</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              A glimpse of what we've built for our clients.
            </p>
          </div>
        </SlideUp>

        <div ref={ref} className="space-y-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <div className="group relative rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500">
                {/* Background gradient image */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.image} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

                <div className="relative p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content side */}
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      {/* Industry badge */}
                      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full glass text-sm">
                        <project.icon className="h-4 w-4 text-primary-400" />
                        <span className="text-neutral-300">{project.industry}</span>
                      </div>

                      <h3 className="mb-4 text-3xl md:text-4xl font-bold text-white">
                        {project.title}
                      </h3>

                      <p className="mb-6 text-lg text-neutral-400 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-neutral-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors group/link font-medium"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="h-5 w-5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                    </div>

                    {/* Visual side - Mockup */}
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="relative">
                        {/* Dashboard mockup card */}
                        <div className="glass-strong rounded-2xl p-6 transform group-hover:scale-[1.02] transition-transform duration-500">
                          {/* Metric highlight */}
                          <div className="text-center py-8">
                            <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${project.image} bg-clip-text text-transparent mb-2`}>
                              {project.metrics.value}
                            </div>
                            <div className="text-neutral-400 text-sm">
                              {project.metrics.label}
                            </div>
                          </div>

                          {/* Mini chart */}
                          <div className="flex items-end gap-1 h-20 mt-4">
                            {[35, 50, 40, 65, 45, 80, 55, 90, 70, 85, 75, 95].map((h, i) => (
                              <div
                                key={i}
                                className={`flex-1 bg-gradient-to-t ${project.image} rounded-t opacity-60`}
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Floating stats card */}
                        <div className="absolute -bottom-4 -right-4 glass rounded-xl p-4 border border-white/10 shadow-xl">
                          <div className="flex items-center gap-3">
                            <project.icon className="h-8 w-8 text-primary-400" />
                            <div>
                              <div className="text-sm font-medium text-white">Live & Running</div>
                              <div className="text-xs text-green-400">All systems operational</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
