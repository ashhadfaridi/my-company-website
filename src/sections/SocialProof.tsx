'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiOpenai,
  SiStripe,
  SiSupabase,
  SiVercel,
  SiPrisma,
  SiGithub,
  SiPython,
  SiFigma,
} from 'react-icons/si'

const TECH_STACK = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Vercel', icon: SiVercel },
  { name: 'OpenAI', icon: SiOpenai },
  { name: 'Stripe', icon: SiStripe },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'Python', icon: SiPython },
  { name: 'Figma', icon: SiFigma },
  { name: 'GitHub', icon: SiGithub },
]

/**
 * Tech Stack section showcasing technologies we work with
 * Continuous train-like marquee animation using Framer Motion
 */
export default function SocialProof() {
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden">
      <FadeIn>
        <div>
          <p className="text-center text-sm text-neutral-500 uppercase tracking-widest mb-8">
            Built with modern technologies
          </p>

          {/* Infinite scroll marquee - train style */}
          <div className="relative">
            {/* Gradient masks for smooth fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

            {/* Marquee track with Framer Motion */}
            <motion.div
              className="flex w-max"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                },
              }}
            >
              {/* First set */}
              {TECH_STACK.map((tech, i) => (
                <div
                  key={`a-${i}`}
                  className="flex items-center justify-center px-8"
                >
                  <div className="flex items-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors cursor-default">
                    <tech.icon className="w-7 h-7 flex-shrink-0" />
                    <span className="text-base font-medium whitespace-nowrap">{tech.name}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {TECH_STACK.map((tech, i) => (
                <div
                  key={`b-${i}`}
                  className="flex items-center justify-center px-8"
                >
                  <div className="flex items-center gap-3 text-neutral-400 hover:text-primary-400 transition-colors cursor-default">
                    <tech.icon className="w-7 h-7 flex-shrink-0" />
                    <span className="text-base font-medium whitespace-nowrap">{tech.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
