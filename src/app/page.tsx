import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Integrations from '@/components/Integrations'
import Chains from '@/components/Chains'
import EarlyAccess from '@/components/EarlyAccess'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Integrations />
      <Chains />
      <EarlyAccess />
      <CTA />
      <Footer />
    </main>
  )
}
