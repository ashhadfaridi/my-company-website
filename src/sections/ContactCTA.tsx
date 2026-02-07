'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { SlideUp } from '@/components/animations'
import { ContactFormData } from '@/types'
import { CheckCircle2, Send } from 'lucide-react'

/**
 * Contact CTA section with form
 * React Hook Form integration with validation
 */
export default function ContactCTA() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong')
      }

      setSubmitStatus('success')
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SlideUp>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Ready to Build Something <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              Tell us what you need — we'll handle the rest. Affordable pricing, transparent process, exceptional results.
            </p>
          </div>
        </SlideUp>

        <SlideUp delay={0.2}>
          <div className="glass-strong rounded-2xl p-8 md:p-12">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-success mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-neutral-400 mb-6">
                  We'll get back to you within 24 hours.
                </p>
                <Button onClick={() => setSubmitStatus('idle')}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-300">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                    placeholder="John Doe"
                    error={errors.name?.message}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-300">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    placeholder="john@example.com"
                    error={errors.email?.message}
                  />
                </div>

                {/* Company (optional) */}
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-neutral-300">
                    Company (Optional)
                  </label>
                  <Input
                    id="company"
                    {...register('company')}
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Project Type & Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-neutral-300">
                      What do you need? *
                    </label>
                    <select
                      id="projectType"
                      {...register('projectType', { required: 'Please select a project type' })}
                      className="flex h-12 w-full rounded-lg glass px-4 py-2 text-base text-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                    >
                      <option value="">Select...</option>
                      <option value="website">Custom Website</option>
                      <option value="ecommerce">E-Commerce Platform</option>
                      <option value="web-app">Web Application</option>
                      <option value="ai-integration">AI Integration</option>
                      <option value="automation">Business Automation</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                    {errors.projectType && (
                      <p className="mt-1.5 text-sm text-error">{errors.projectType.message}</p>
                    )}
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-neutral-300">
                      Timeline *
                    </label>
                    <select
                      id="timeline"
                      {...register('timeline', { required: 'Please select a timeline' })}
                      className="flex h-12 w-full rounded-lg glass px-4 py-2 text-base text-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200"
                    >
                      <option value="">Select...</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-weeks">1-2 Weeks</option>
                      <option value="1-month">1 Month</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    {errors.timeline && (
                      <p className="mt-1.5 text-sm text-error">{errors.timeline.message}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-neutral-300">
                    Tell us about your project *
                  </label>
                  <Textarea
                    id="message"
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                    placeholder="Describe what you're looking to build..."
                    rows={5}
                    error={errors.message?.message}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Get Your Free Consultation
                    </>
                  )}
                </Button>

                {submitStatus === 'error' && (
                  <p className="text-center text-sm text-error">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </SlideUp>
      </div>
    </section>
  )
}
