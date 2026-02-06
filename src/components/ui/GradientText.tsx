import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  animated?: boolean
}

/**
 * Text component with gradient effect
 * Can be animated with sliding gradient
 */
export default function GradientText({
  children,
  animated = false,
  className,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        animated ? 'text-gradient-animated' : 'text-gradient',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
