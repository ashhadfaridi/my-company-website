'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

interface RotatingWordsProps {
  words: string[]
  interval?: number
  className?: string
}

/**
 * Cycles through words in place. Screen readers get the full list once;
 * visitors who prefer reduced motion see the first word only.
 */
export default function RotatingWords({ words, interval = 2600, className = '' }: RotatingWordsProps) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval, reduceMotion])

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true" className="relative inline-block">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: '0.35em' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-0.35em' }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`inline-block ${className}`}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  )
}
