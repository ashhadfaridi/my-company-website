import { Resend } from 'resend'

// Only initialize Resend if API key is available
export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

// Email configuration
export const EMAIL_FROM = 'Velocity Labs <noreply@velocitylabs.co>'
export const EMAIL_TO = process.env.CONTACT_EMAIL || 'hello@velocitylabs.co'
