import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          className={cn(
            'flex h-12 w-full rounded-md border border-line bg-panel px-4 py-2 text-base text-ink placeholder:text-ink0 focus:outline-none focus:border-ink focus:ring-2 focus:ring-signal transition-colors',
            error && 'ring-2 ring-error',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-error">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export default Input
