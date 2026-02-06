'use client'

import Card from '@/components/ui/Card'
import { SlideUp, StaggerContainer } from '@/components/animations'
import { PORTFOLIO_PROJECTS } from '@/lib/constants'
import { motion } from 'framer-motion'
import { staggerItemVariants } from '@/lib/animations'
import { ExternalLink } from 'lucide-react'

/**
 * Portfolio section
 * Showcases recent projects with tech stack tags
 */
export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-neutral-900/30">
      <div className="container mx-auto">
        <SlideUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              A glimpse of what we've built for our clients.
            </p>
          </div>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.div key={index} variants={staggerItemVariants}>
              <Card glow className="h-full group cursor-pointer transition-transform hover:scale-105">
                {/* Project image placeholder */}
                <div className="mb-4 aspect-video rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center overflow-hidden">
                  <div className="text-neutral-600 text-4xl">
                    <ExternalLink className="h-12 w-12 text-neutral-500 group-hover:text-primary-400 transition-colors" />
                  </div>
                </div>

                {/* Industry badge */}
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-400">
                    {project.industry}
                  </span>
                </div>

                {/* Project info */}
                <h3 className="mb-2 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-neutral-400">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-md bg-neutral-800 px-2 py-1 text-xs text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
