import { PROJECT_TYPES, TIMELINES } from '@/lib/constants'

export type ProjectType = (typeof PROJECT_TYPES)[number]['value']
export type Timeline = (typeof TIMELINES)[number]['value']

export interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: ProjectType
  timeline: Timeline
  message: string
}
