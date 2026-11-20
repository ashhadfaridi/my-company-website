import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/sections/Hero'
import Industries from '@/sections/Industries'
import Services from '@/sections/Services'
import LeadRecovery from '@/sections/LeadRecovery'
import HowItWorks from '@/sections/HowItWorks'
import Work from '@/sections/Work'
import Founder from '@/sections/Founder'
import FAQ from '@/sections/FAQ'
import ContactCTA from '@/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Industries />
        <Services />
        <LeadRecovery />
        <HowItWorks />
        <Work />
        <Founder />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
