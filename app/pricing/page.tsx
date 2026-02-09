import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Check,
  ArrowRight,
  HelpCircle,
  Building2,
  Users,
  Zap,
  Shield,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing - Customized for Your Business | Chrysolite AI ERP',
  description: 'Flexible, customized pricing for businesses of all sizes. Pay only for what you need. Contact us for a custom quote.',
}

const pricingFactors = [
  {
    icon: Users,
    title: 'Number of Users',
    description: 'Per-user pricing based on your team size with volume discounts.',
  },
  {
    icon: Building2,
    title: 'Modules Selected',
    description: 'Choose only the modules you need—accounting, inventory, sales, and more.',
  },
  {
    icon: Zap,
    title: 'Transaction Volume',
    description: 'Pricing scales with your business activity and monthly transaction count.',
  },
  {
    icon: Shield,
    title: 'Support Level',
    description: 'Standard, priority, or dedicated support based on your requirements.',
  },
]

const exampleTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started',
    startingPrice: 'Custom',
    features: [
      'Up to 5 users',
      '2-3 modules (Accounting + your choice)',
      'Up to 1,000 transactions/month',
      'Standard email support',
      'Basic reporting',
      'Mobile app access',
      'Cloud hosting included',
      'Monthly data backups',
    ],
    cta: 'Get Custom Quote',
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'For growing businesses with expanding needs',
    startingPrice: 'Custom',
    features: [
      'Up to 25 users',
      '5-7 modules included',
      'Up to 10,000 transactions/month',
      'Priority support (24-hour response)',
      'Advanced reporting & BI',
      'AI-powered insights',
      'Custom workflows',
      'Daily automated backups',
      'API access',
      'Dedicated onboarding',
    ],
    cta: 'Get Custom Quote',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex requirements',
    startingPrice: 'Custom',
    features: [
      'Unlimited users',
      'All modules included',
      'Unlimited transactions',
      'Dedicated account manager',
      'Custom development',
      'Advanced AI features',
      'Multi-company consolidation',
      'Real-time backups',
      'SLA guarantees (99.9% uptime)',
      'On-premise deployment option',
      'White-label customization',
      'Dedicated training sessions',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

const faqs = [
  {
    question: 'Why is pricing customized?',
    answer: 'Every business is unique. We tailor pricing based on your specific needs, ensuring you only pay for features and capacity you actually use. This approach gives you maximum value and flexibility.',
  },
  {
    question: 'What affects the final price?',
    answer: 'Key factors include number of users, modules selected, transaction volume, support level, and any custom requirements. We work with you to find the optimal configuration for your budget.',
  },
  {
    question: 'How does onboarding work?',
    answer: 'We provide white-glove onboarding with dedicated support. Our team works closely with you to configure the system, migrate your data, and train your staff for a smooth launch.',
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely. You can add modules, users, or upgrade support levels at any time as your business grows. We make scaling seamless.',
  },
  {
    question: 'What payment options are available?',
    answer: 'We accept monthly or annual payments via bank transfer, mobile money, or international payment gateways. Annual plans receive a discount.',
  },
  {
    question: 'Is implementation included?',
    answer: 'Professional and Enterprise plans include dedicated onboarding and implementation support. Starter plans have access to self-service guides and email support.',
  },
]

const trustBadges = [
  { label: 'SOC 2 Compliant', icon: Shield },
  { label: 'GDPR Ready', icon: Shield },
  { label: '99.9% Uptime SLA', icon: Zap },
  { label: 'ISO 27001', icon: Shield },
]

export default function PricingPage() {
  return (
    <main className="bg-white dark:bg-surface-950 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
            Flexible Pricing for Every Business
          </h1>
          <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 max-w-3xl mx-auto">
            Customized pricing tailored to your specific needs. Pay only for what you use,
            scale as you grow, and get enterprise-grade features at every level.
          </p>
        </div>
      </section>

      {/* What Affects Pricing */}
      <section className="py-16 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              What Affects Your Pricing?
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              We consider several factors to create the perfect package for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingFactors.map((factor) => (
              <div
                key={factor.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-6 text-center hover:border-chrysolite-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <factor.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">{factor.title}</h3>
                <p className="text-sm text-surface-600 dark:text-surface-400">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Example Pricing Tiers
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              These are example configurations. Your actual pricing will be customized to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {exampleTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'border-chrysolite-500 shadow-lg shadow-chrysolite/20 scale-105'
                    : 'border-surface-300 dark:border-surface-800'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 text-surface-900 dark:text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-2">{tier.name}</h3>
                  <p className="text-surface-600 dark:text-surface-400 text-sm mb-6">{tier.description}</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-surface-900 dark:text-white">{tier.startingPrice}</div>
                    <div className="text-surface-600 dark:text-surface-400 text-sm mt-1">Contact for pricing</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={20} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                      <span className="text-surface-600 dark:text-surface-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full text-center font-semibold px-6 py-3 rounded-xl transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white shadow-lg shadow-chrysolite/40'
                      : 'bg-surface-800 hover:bg-surface-700 text-white border border-surface-700'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-6 py-3 bg-surface-50 dark:bg-surface-900 border border-surface-300 dark:border-surface-700 rounded-xl text-surface-600 dark:text-surface-300"
              >
                <badge.icon size={20} className="text-chrysolite-400" />
                <span className="font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400">
              Everything you need to know about our pricing.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-6 hover:border-chrysolite-500/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle size={24} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-surface-600 dark:text-surface-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Ready to Experience AI-Powered ERP?
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Get a custom quote tailored to your business needs and start your AI transformation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/40 hover:shadow-electric-purple/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              Request Access
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-electric-cyan-500/50"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
