import Hero from '@/sections/Hero'
import WhatMakesUsDifferent from '@/sections/WhatMakesUsDifferent'
import WhatWeBuild from '@/sections/WhatWeBuild'
import HowItWorks from '@/sections/HowItWorks'
import Portfolio from '@/sections/Portfolio'
import ContactCTA from '@/sections/ContactCTA'
import Footer from '@/components/layout/Footer'

/**
 * Velocity Labs Homepage
 * Modern, AI-focused company website with smooth scrolling and animations
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatMakesUsDifferent />
      <WhatWeBuild />
      <HowItWorks />
      <Portfolio />
      <ContactCTA />
      <Footer />
    </main>
  )
}
