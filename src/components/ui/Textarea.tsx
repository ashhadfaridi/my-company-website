import { TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <textarea
          className={cn(
            'flex min-h-[120px] w-full rounded-md border border-line bg-panel px-4 py-3 text-base text-ink placeholder:text-ink0 focus:outline-none focus:border-ink focus:ring-2 focus:ring-signal transition-colors resize-none',
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
Textarea.displayName = 'Textarea'

export default Textarea
