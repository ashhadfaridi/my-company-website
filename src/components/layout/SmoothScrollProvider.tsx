'use client'

import { ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'

interface SmoothScrollProviderProps {
  children: ReactNode
}

/**
 * Provides smooth scrolling using Lenis
 * Wraps the entire app to enable momentum-based smooth scrolling
 */
export default function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with custom configuration
    lenisRef.current = new Lenis({
      duration: 1.2, // Scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      smoothWheel: true, // Enable smooth scrolling for mouse wheel
      wheelMultiplier: 1, // Scroll speed multiplier for mouse wheel
      touchMultiplier: 2, // Scroll speed multiplier for touch
    })

    // Request animation frame loop for Lenis
    function raf(time: number) {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup on unmount
    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return <>{children}</>
}
