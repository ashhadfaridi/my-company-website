export const COMPANY = {
  name: 'Velocity Labs',
  email: 'hello@velocitylabs.co',
  description:
    'Websites, custom software, AI and lead generation for small and mid-sized businesses.',
} as const

export const CAL_LINK = 'savage-bfeykg/15min'

export const SOCIAL_LINKS = {
  github: 'https://github.com/ashhadfaridi',
  linkedin: 'https://linkedin.com/in/ashhadfaridi',
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Lead recovery', href: '#lead-recovery' },
  { label: 'How we work', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
] as const

/** Options for the contact form. Keys are sent to /api/contact. */
export const PROJECT_TYPES = [
  { value: 'website', label: 'A new or better website' },
  { value: 'booking', label: 'Online booking or scheduling' },
  { value: 'software', label: 'Inventory or custom software' },
  { value: 'ai', label: 'AI tools or automation' },
  { value: 'lead-generation', label: 'Lead generation' },
  { value: 'lead-recovery', label: 'Lead recovery (pay per conversion)' },
  { value: 'it-consulting', label: 'IT consulting' },
  { value: 'not-sure', label: "Not sure yet" },
] as const

export const TIMELINES = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '1-month', label: 'Within a month' },
  { value: '1-3-months', label: 'In 1 to 3 months' },
  { value: 'exploring', label: 'Just exploring' },
] as const
