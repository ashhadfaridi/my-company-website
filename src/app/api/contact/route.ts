import { NextRequest, NextResponse } from 'next/server'
import { resend, EMAIL_FROM, EMAIL_TO } from '@/lib/resend'
import { supabase, ContactSubmission } from '@/lib/supabase'

// Project type labels for email
const PROJECT_TYPE_LABELS: Record<string, string> = {
  website: 'Custom Website',
  ecommerce: 'E-Commerce Platform',
  'web-app': 'Web Application',
  'ai-integration': 'AI Integration',
  automation: 'Business Automation',
  'not-sure': 'Not Sure Yet',
}

// Timeline labels for email
const TIMELINE_LABELS: Record<string, string> = {
  asap: 'ASAP',
  '1-2-weeks': '1-2 Weeks',
  '1-month': '1 Month',
  flexible: 'Flexible',
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, projectType, timeline, message } = body

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
        subject: `New Project Inquiry from ${name}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #00BCFF; border-bottom: 2px solid #00BCFF; padding-bottom: 10px;">
              New Project Inquiry
            </h1>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #333;">Contact Details</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #333;">Project Details</h2>
              <p><strong>Project Type:</strong> ${PROJECT_TYPE_LABELS[projectType] || projectType}</p>
              <p><strong>Timeline:</strong> ${TIMELINE_LABELS[timeline] || timeline}</p>
            </div>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #333;">Message</h2>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>

            ${submissionId ? `<p style="color: #666; font-size: 12px;">Submission ID: ${submissionId}</p>` : ''}
          </div>
        `,
      })

      // Send confirmation email to the user
      await resend.emails.send({
        from: EMAIL_FROM,
        to: email,
        subject: "We've received your inquiry - Velocity Labs",
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #00BCFF;">Thanks for reaching out, ${name}!</h1>

            <p>We've received your project inquiry and are excited to learn more about what you're building.</p>

            <p>Our team will review your request and get back to you within <strong>24 hours</strong>.</p>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="margin-top: 0; color: #333;">Your Inquiry Summary</h2>
              <p><strong>Project Type:</strong> ${PROJECT_TYPE_LABELS[projectType] || projectType}</p>
              <p><strong>Timeline:</strong> ${TIMELINE_LABELS[timeline] || timeline}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; color: #666;">${message}</p>
            </div>

            <p>In the meantime, feel free to book a call directly:</p>
            <p>
              <a href="https://cal.com/velocitylabs/discovery"
                 style="display: inline-block; background: #00BCFF; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Book a Discovery Call
              </a>
            </p>

            <p style="color: #666; margin-top: 30px;">
              Best regards,<br>
              <strong>Ashhad Faridi</strong><br>
              Founder, Velocity Labs
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
