/**
 * Wordmark: a yellow chevron mark (forward motion) beside the name.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <rect width="30" height="30" rx="6" fill={light ? '#ffffff' : '#14213d'} />
        <path d="M8 9l6 6-6 6M15 9l6 6-6 6" fill="none" stroke="#ffc83d" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className={`font-display text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        Velocity Works
      </span>
    </span>
  )
}
