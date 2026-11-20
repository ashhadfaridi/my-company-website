import { Resend } from 'resend'

// Only initialize Resend if API key is available
export const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

/**
 * Sender address. Defaults to Resend's shared test sender, which can only
 * deliver to the email address the Resend account was created with.
 * Once brightdoortech.com is verified in Resend, set
 * EMAIL_FROM="Brightdoor Tech <hello@brightdoortech.com>".
 */
export const EMAIL_FROM = process.env.EMAIL_FROM || 'Brightdoor Tech <onboarding@resend.dev>'

/** Where new inquiries are sent. */
export const EMAIL_TO = process.env.CONTACT_EMAIL || 'hello@brightdoortech.com'

/** Confirmation emails to visitors need a verified sending domain. */
export const CAN_EMAIL_VISITORS = Boolean(process.env.EMAIL_FROM)
