/**
 * Wordmark: an open door letting yellow light out, beside the name.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <rect width="30" height="30" rx="6" fill={light ? '#ffffff' : '#14213d'} />
        {/* light spilling from the doorway */}
        <path d="M10 7h10v16H10z" fill="#ffc83d" />
        {/* door swung open */}
        <path d="M10 7l-4 2.5v14L10 23z" fill={light ? '#14213d' : '#ffffff'} />
        <circle cx="8.6" cy="15.5" r="0.9" fill="#ffc83d" />
      </svg>
      <span className={`font-display text-xl font-bold tracking-tight ${light ? 'text-white' : 'text-ink'}`}>
        Brightdoor Tech
      </span>
    </span>
  )
}
