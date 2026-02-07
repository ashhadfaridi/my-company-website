'use client'

import Button from '@/components/ui/Button'
import TypewriterText from '@/components/ui/TypewriterText'
import { SlideUp, FadeIn } from '@/components/animations'
import { Sparkles, ArrowRight, BarChart3, ShoppingBag, Bot, Code2, Star, CheckCircle2 } from 'lucide-react'

const ROTATING_WORDS = [
  'in 2 Weeks',
  'That Convert',
  'That Scale',
  'On Time',
]

// Social proof data
const QUICK_STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '< 2 weeks', label: 'Avg. Launch Time' },
  { value: '100%', label: 'Client Satisfaction' },
]

/**
 * Hero section with animated gradient mesh, typewriter effect, and floating mockup
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-neutral-950">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-accent-500/15 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 to-transparent rounded-full" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-neutral-300">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span>Rated 5/5 by founders who ship fast</span>
              </div>
            </FadeIn>

            <SlideUp delay={0.2}>
              <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-white">Launch Your Web App</span>
                <br />
                <span className="inline-block min-w-[200px] sm:min-w-[280px] text-left">
                  <TypewriterText words={ROTATING_WORDS} className="text-gradient" />
                </span>
              </h1>
            </SlideUp>

            <SlideUp delay={0.3}>
              <p className="mb-6 max-w-xl text-lg text-neutral-400 lg:text-xl mx-auto lg:mx-0">
                Skip the 6-month agency timeline. Get a custom web app, e-commerce store, or AI-powered solution built and deployed in weeks — not months.
              </p>
            </SlideUp>

            {/* Social proof stats */}
            <SlideUp delay={0.35}>
              <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
                {QUICK_STATS.map((stat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-neutral-300">
                      <span className="font-semibold text-white">{stat.value}</span> {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </SlideUp>

            <SlideUp delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a href="#contact">
                  <Button size="lg" className="group">
                    Book a Free Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <a
                  href="#portfolio"
                  className="text-neutral-400 hover:text-primary-400 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  See Results We've Delivered
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </SlideUp>
          </div>

          {/* Right side - Floating mockup card */}
          <FadeIn delay={0.6}>
            <div className="relative hidden lg:block">
              {/* Main dashboard mockup */}
              <div className="relative glass-strong rounded-2xl p-6 border border-white/10 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Mockup header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-3 text-xs text-neutral-500">dashboard.velocitylabs.co</span>
                </div>

                {/* Mockup content */}
                <div className="space-y-4">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="glass rounded-lg p-3">
                      <div className="text-xs text-neutral-500 mb-1">Revenue</div>
                      <div className="text-lg font-bold text-primary-400">$48.2K</div>
                      <div className="text-xs text-green-400">+12.5%</div>
                    </div>
                    <div className="glass rounded-lg p-3">
                      <div className="text-xs text-neutral-500 mb-1">Users</div>
                      <div className="text-lg font-bold text-white">2,847</div>
                      <div className="text-xs text-green-400">+8.1%</div>
                    </div>
                    <div className="glass rounded-lg p-3">
                      <div className="text-xs text-neutral-500 mb-1">Conv Rate</div>
                      <div className="text-lg font-bold text-accent-400">4.2%</div>
                      <div className="text-xs text-green-400">+2.3%</div>
                    </div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="glass rounded-lg p-4 h-32 flex items-end gap-1">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  {/* Activity list */}
                  <div className="space-y-2">
                    {[
                      { icon: ShoppingBag, text: 'New order #1234', time: '2m ago', color: 'text-green-400' },
                      { icon: Bot, text: 'AI processed 847 queries', time: '5m ago', color: 'text-primary-400' },
                      { icon: BarChart3, text: 'Weekly report generated', time: '1h ago', color: 'text-accent-400' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <item.icon className={`h-4 w-4 ${item.color}`} />
                        <span className="text-neutral-300 flex-1">{item.text}</span>
                        <span className="text-neutral-500 text-xs">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-4 glass rounded-xl p-4 border border-white/10 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Deploy Complete</div>
                    <div className="text-xs text-green-400">All systems go</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
