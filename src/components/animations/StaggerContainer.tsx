'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'
import { staggerContainerVariants } from '@/lib/animations'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  childrenDelay?: number
}

/**
 * Animates children with a stagger effect
 * Each child should use motion components with staggerItemVariants
 */
export default function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  childrenDelay = 0.2,
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const customVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: childrenDelay,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={customVariants}
    >
      {children}
    </motion.div>
  )
}
