'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { slideUpVariants } from '@/lib/animations'

interface SlideUpProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Slides up and fades in children when they enter the viewport
 * Uses Framer Motion's useInView hook for scroll-triggered animations
 */
export default function SlideUp({ children, className, delay = 0 }: SlideUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={slideUpVariants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
