import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import ModuleShowcase from '@/components/sections/ModuleShowcase'
import AIPowered from '@/components/sections/AIPowered'
import AgenticAI from '@/components/sections/AgenticAI'
import PricingPreview from '@/components/sections/PricingPreview'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <main className="bg-white dark:bg-surface-950 min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <ModuleShowcase />
      <AIPowered />
      <AgenticAI />
      <PricingPreview />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
