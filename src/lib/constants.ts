import { Service, ProcessStep, PortfolioProject, Pillar } from '@/types'

export const COMPANY = {
  name: 'Velocity Labs',
  domain: 'velocitylabs.co',
  email: 'hello@velocitylabs.co',
  tagline: 'Custom Digital Solutions Built at Lightning Speed',
  description:
    'From AI-powered web apps to tailored e-commerce stores — we build exactly what your business needs, not what fits a template.',
} as const

export const PILLARS: Pillar[] = [
  {
    icon: 'zap',
    title: 'Lightning-Fast Delivery',
    description:
      'We move at velocity. While others take months, we deliver production-ready solutions in weeks — sometimes days.',
  },
  {
    icon: 'bot',
    title: 'AI-Integrated By Default',
    description:
      'Every solution we build leverages cutting-edge AI to make your business smarter, faster, and more efficient.',
  },
  {
    icon: 'target',
    title: 'Fully Customized',
    description:
      'No templates. No cookie-cutter solutions. We build from scratch to match your exact requirements.',
  },
]

export const SERVICES: Service[] = [
  {
    icon: 'globe',
    title: 'Custom Websites',
    description:
      'Landing pages to full business sites — designed to convert visitors into customers.',
  },
  {
    icon: 'shopping-cart',
    title: 'E-Commerce Platforms',
    description:
      'Online stores that sell, with smart inventory & AI-powered product recommendations.',
  },
  {
    icon: 'layout-dashboard',
    title: 'Web Applications',
    description:
      'SaaS tools, dashboards, member portals — whatever you envision, we build it.',
  },
  {
    icon: 'brain-circuit',
    title: 'AI Integration',
    description:
      'Chatbots, automation, predictive analytics, and intelligent workflows for your business.',
  },
  {
    icon: 'workflow',
    title: 'Business Automation',
    description:
      'Streamline operations, connect your tools, eliminate manual work.',
  },
  {
    icon: 'wrench',
    title: 'Custom Solutions',
    description:
      'Have something unique in mind? We build exactly what you need.',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Discovery Call',
    description: 'We understand your goals, challenges, and vision for the project.',
  },
  {
    number: 2,
    title: 'Custom Proposal',
    description: 'Get a tailored solution plan with timeline and clear scope.',
  },
  {
    number: 3,
    title: 'Rapid Build & Launch',
    description: 'We build, you review, we refine — then launch to production.',
  },
]

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: 'AI-Powered SaaS Dashboard',
    description:
      'Real-time analytics dashboard with predictive insights and automated reporting.',
    image: '/images/portfolio/project-1.jpg',
    tags: ['Next.js', 'TypeScript', 'AI/ML', 'PostgreSQL'],
    industry: 'FinTech',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Modern online store with AI product recommendations and smart inventory management.',
    image: '/images/portfolio/project-2.jpg',
    tags: ['React', 'Stripe', 'AI', 'Shopify API'],
    industry: 'Retail',
  },
  {
    title: 'Automation Hub',
    description:
      'Custom workflow automation connecting 10+ business tools and eliminating manual data entry.',
    image: '/images/portfolio/project-3.jpg',
    tags: ['TypeScript', 'Zapier', 'API Integration', 'Webhooks'],
    industry: 'Operations',
  },
]

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/ashhadfaridi',
  github: 'https://github.com/ashhadfaridi',
  linkedin: 'https://linkedin.com/in/ashhadfaridi',
} as const

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
] as const
