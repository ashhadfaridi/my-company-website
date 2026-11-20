import { NextRequest, NextResponse } from 'next/server'
import { resend, EMAIL_FROM, EMAIL_TO } from '@/lib/resend'
import { supabase, ContactSubmission } from '@/lib/supabase'

import { PROJECT_TYPES, TIMELINES } from '@/lib/constants'

const PROJECT_TYPE_LABELS: Record<string, string> = Object.fromEntries(
  PROJECT_TYPES.map((p) => [p.value, p.label])
)
const TIMELINE_LABELS: Record<string, string> = Object.fromEntries(
  TIMELINES.map((t) => [t.value, t.label])
)

/** Escape user input before placing it in email HTML. */
function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, projectType, timeline, message } = body
    const safe = { name: esc(name), email: esc(email), company: esc(company), message: esc(message) }

    // Validate required fields
    if (!name || !email || !projectType || !timeline || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Without an email service or database, the inquiry would be lost.
    // Fail loudly so the visitor is told to email us directly instead.
    if (!resend && !supabase) {
      console.error('Contact form: no RESEND_API_KEY or Supabase configured; inquiry not delivered')
      return NextResponse.json(
        { error: 'The contact form is not set up yet. Please email us directly.' },
        { status: 503 }
      )
    }

    // Store in Supabase (if configured)
    let submissionId: string | null = null
    if (supabase) {
      const submission: ContactSubmission = {
        name,
        email,
        company: company || null,
        project_type: projectType,
        timeline,
        message,
      }

      const { data, error: dbError } = await supabase
        .from('contact_submissions')
        .insert([submission])
        .select('id')
        .single()

      if (dbError) {
        console.error('Supabase error:', dbError)
        // Continue even if DB fails - we still want to send email
      } else {
        submissionId = data?.id
      }
    }

    // Send notification email to you
    if (resend) {
      await resend.emails.send({
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: `New inquiry from ${name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #14213d; border-bottom: 2px solid #14213d; padding-bottom: 10px;">
              New Project Inquiry
            </h1>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #333;">Contact Details</h2>
              <p><strong>Name:</strong> ${safe.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
              ${company ? `<p><strong>Company:</strong> ${safe.company}</p>` : ''}
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #333;">Project Details</h2>
              <p><strong>Project Type:</strong> ${esc(PROJECT_TYPE_LABELS[projectType] || projectType)}</p>
              <p><strong>Timeline:</strong> ${esc(TIMELINE_LABELS[timeline] || timeline)}</p>
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #333;">Message</h2>
              <p style="white-space: pre-wrap;">${safe.message}</p>
            </div>

            ${submissionId ? `<p style="color: #666; font-size: 12px;">Submission ID: ${submissionId}</p>` : ''}
          </div>
        `,
      })

      // Send confirmation email to the user
      await resend.emails.send({
        from: EMAIL_FROM,
        to: email,
        subject: "We've received your inquiry - Brightdoor Tech",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #14213d;">Thanks for reaching out, ${safe.name}!</h1>

            <p>We've received your project inquiry and are excited to learn more about what you're building.</p>

            <p>Our team will review your request and get back to you within <strong>24 hours</strong>.</p>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #333;">Your Inquiry Summary</h2>
              <p><strong>Project Type:</strong> ${esc(PROJECT_TYPE_LABELS[projectType] || projectType)}</p>
              <p><strong>Timeline:</strong> ${esc(TIMELINE_LABELS[timeline] || timeline)}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; color: #666;">${safe.message}</p>
            </div>

            <p>In the meantime, feel free to book a call directly:</p>
            <p>
              <a href="https://cal.com/savage-bfeykg/15min"
                 style="display: inline-block; background: #14213d; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Book a Discovery Call
              </a>
            </p>

            <p style="color: #666; margin-top: 30px;">
              Best regards,<br>
              <strong>Ashhad Faridi</strong><br>
              Founder, Brightdoor Tech
            </p>
          </div>
        `,
      })
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We\'ll be in touch within 24 hours.',
      submissionId,
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
