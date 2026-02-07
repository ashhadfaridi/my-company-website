import Header from '@/components/layout/Header'
import Hero from '@/sections/Hero'
import SocialProof from '@/sections/SocialProof'
import WhatMakesUsDifferent from '@/sections/WhatMakesUsDifferent'
import WhatWeBuild from '@/sections/WhatWeBuild'
import Portfolio from '@/sections/Portfolio'
import HowItWorks from '@/sections/HowItWorks'
import Founder from '@/sections/Founder'
import ContactCTA from '@/sections/ContactCTA'
import Footer from '@/components/layout/Footer'

/**
 * Velocity Labs Homepage
 * Modern, AI-focused company website with smooth scrolling and animations
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <SocialProof />
        <WhatMakesUsDifferent />
        <WhatWeBuild />
        <Portfolio />
        <HowItWorks />
        <Founder />
        <ContactCTA />
        <Footer />
      </main>
    </>
  )
}
