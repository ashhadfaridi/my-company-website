'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { ContactFormData } from '@/types'
import { COMPANY, PROJECT_TYPES, TIMELINES } from '@/lib/constants'
import { CheckCircle2 } from 'lucide-react'

const selectClass =
  'flex h-12 w-full rounded-md border border-line bg-panel px-4 text-base text-ink focus:border-ink focus:outline-none focus:ring-2 focus:ring-signal'

export default function ContactCTA() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error((await res.json()).error || 'Request failed')
      setStatus('sent')
      reset()
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-signal py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="max-w-[14ch] text-4xl font-bold text-ink md:text-5xl">
            Tell us what you need.
          </h2>
          <p className="mt-5 max-w-[42ch] text-lg text-ink-soft">
            Describe your business and what you want to change. You will hear back within one
            business day with next steps or a time to talk.
          </p>
          <p className="mt-8 text-ink-soft">
            Prefer email?{' '}
            <a href={`mailto:${COMPANY.email}`} className="font-semibold text-ink underline underline-offset-4">
              {COMPANY.email}
            </a>
          </p>
        </div>

        <div className="rounded-lg bg-panel p-7 md:p-10">
          {status === 'sent' ? (
            <div className="py-10 text-center" role="status">
              <CheckCircle2 className="mx-auto h-12 w-12 text-go" />
              <h3 className="mt-4 text-2xl font-bold text-ink">Message sent</h3>
              <p className="mt-2 text-muted">We will reply within one business day.</p>
              <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">Your name</label>
                  <Input
                    id="name"
                    autoComplete="name"
                    {...register('name', { required: 'Enter your name' })}
                    error={errors.name?.message}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">Email</label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register('email', {
                      required: 'Enter your email',
                      pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email, like name@business.com' },
                    })}
                    error={errors.email?.message}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink">
                  Business name <span className="font-normal text-muted">(optional)</span>
                </label>
                <Input id="company" autoComplete="organization" {...register('company')} />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="projectType" className="mb-2 block text-sm font-medium text-ink">What can we help with?</label>
                  <select id="projectType" className={selectClass} {...register('projectType', { required: 'Choose an option' })}>
                    <option value="">Choose one</option>
                    {PROJECT_TYPES.map((p) => (
                      <option key={p.value} value={p.value}>{p.label}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="mt-1.5 text-sm text-error">{errors.projectType.message}</p>}
                </div>
                <div>
                  <label htmlFor="timeline" className="mb-2 block text-sm font-medium text-ink">When do you want to start?</label>
                  <select id="timeline" className={selectClass} {...register('timeline', { required: 'Choose a timeline' })}>
                    <option value="">Choose one</option>
                    {TIMELINES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  {errors.timeline && <p className="mt-1.5 text-sm text-error">{errors.timeline.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">Tell us about your business</label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="What you do, what is taking too much time, or what you want more of."
                  {...register('message', {
                    required: 'Add a short description',
                    minLength: { value: 10, message: 'Add a few more words so we can help' },
                  })}
                  error={errors.message?.message}
                />
              </div>

              <Button type="submit" size="lg" disabled={isSending} className="w-full">
                {isSending ? 'Sending…' : 'Send message'}
              </Button>

              {status === 'error' && (
                <p className="text-center text-sm text-error" role="alert">
                  Your message did not go through. Try again, or email {COMPANY.email}.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
