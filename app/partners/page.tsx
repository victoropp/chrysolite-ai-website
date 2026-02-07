import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Handshake,
  TrendingUp,
  Users,
  Award,
  Rocket,
  Target,
  ArrowRight,
  Check,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partner Program - Grow Together | Chrysolite AI',
  description: 'Join the Chrysolite AI partner program. Become a reseller, integrator, or technology partner and grow your business with us.',
}

const partnerTypes = [
  {
    icon: Handshake,
    title: 'Reseller Partners',
    description: 'Sell Chrysolite AI to your clients and earn attractive commissions on every sale.',
    benefits: [
      'Up to 30% commission on sales',
      'Dedicated partner support',
      'Sales and marketing resources',
      'Co-branded materials',
    ],
  },
  {
    icon: Users,
    title: 'Implementation Partners',
    description: 'Help businesses implement and customize Chrysolite AI for their specific needs.',
    benefits: [
      'Technical training and certification',
      'Implementation project leads',
      'Priority technical support',
      'Partner portal access',
    ],
  },
  {
    icon: Rocket,
    title: 'Technology Partners',
    description: 'Integrate your product with Chrysolite AI and reach our customer base.',
    benefits: [
      'API access and documentation',
      'Co-marketing opportunities',
      'Featured in marketplace',
      'Technical collaboration',
    ],
  },
]

const partnerBenefits = [
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description: 'Attractive margins and recurring revenue from subscriptions.',
  },
  {
    icon: Award,
    title: 'Training & Certification',
    description: 'Comprehensive training program to build expertise.',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Access to qualified leads and co-marketing support.',
  },
]

export default function PartnersPage() {
  return (
    <main className="bg-white dark:bg-surface-950 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <Handshake size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Grow Your Business with Chrysolite AI
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              Join our partner program and help businesses across Africa transform their operations
              while building a profitable revenue stream.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Choose the partnership model that fits your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type) => (
              <div
                key={type.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mb-6">
                  <type.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">{type.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 mb-6 leading-relaxed">{type.description}</p>

                <ul className="space-y-3">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-surface-600 dark:text-surface-300 text-sm">
                      <Check size={16} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Partner Benefits
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Everything you need to succeed as a Chrysolite AI partner.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {partnerBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center hover:border-chrysolite-500/30 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={32} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-surface-600 dark:text-surface-400">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-6 text-center">What You Get</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-surface-900 dark:text-white font-medium">Partner Portal</p>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">Manage deals, track commissions, and access resources</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-surface-900 dark:text-white font-medium">Marketing Materials</p>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">Co-branded collateral, presentations, and case studies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-surface-900 dark:text-white font-medium">Demo Environment</p>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">Full-featured demo instance for client presentations</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-surface-900 dark:text-white font-medium">Technical Support</p>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">Priority support for partner-related issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-surface-900 dark:text-white font-medium">Deal Registration</p>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">Protect your deals and ensure commission</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-surface-900 dark:text-white font-medium">Quarterly Reviews</p>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">Regular business reviews and planning sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
              Join our growing partner network and help transform businesses across Africa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Apply to Partner Program
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-100 dark:bg-surface-800 hover:bg-surface-700 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
