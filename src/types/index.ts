/**
 * TypeScript type definitions for Velocity Labs website
 */

export interface Pillar {
  icon: string
  title: string
  description: string
}

export interface Service {
  icon: string
  title: string
  description: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
}

export interface PortfolioProject {
  title: string
  description: string
  image: string
  tags: string[]
  industry: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  projectType: 'website' | 'ecommerce' | 'web-app' | 'ai-integration' | 'automation' | 'not-sure'
  timeline: 'asap' | '1-2-weeks' | '1-month' | 'flexible'
  message: string
}
