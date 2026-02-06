'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { fadeInVariants } from '@/lib/animations'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Fades in children when they enter the viewport
 * Uses Framer Motion's useInView hook for scroll-triggered animations
 */
export default function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
