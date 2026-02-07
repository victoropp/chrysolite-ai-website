import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Plug,
  CreditCard,
  FileSpreadsheet,
  Mail,
  MessageSquare,
  Database,
  Cloud,
  Smartphone,
  ArrowRight,
  Check,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations - Connect Your Favorite Tools | Chrysolite AI',
  description: 'Seamlessly integrate Chrysolite AI ERP with your existing tools. Connect accounting software, payment gateways, banks, and more.',
}

const integrationCategories = [
  {
    category: 'Payment Processing',
    icon: CreditCard,
    color: 'from-blue-500 to-cyan-500',
    integrations: [
      'Stripe',
      'PayPal',
      'Square',
      'Flutterwave',
      'Paystack',
      'Bank Transfers',
    ],
  },
  {
    category: 'Banking & Finance',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    integrations: [
      'Plaid',
      'Yodlee',
      'Open Banking APIs',
      'Ghana Commercial Bank',
      'Ecobank',
      'Zenith Bank',
    ],
  },
  {
    category: 'Accounting Software',
    icon: FileSpreadsheet,
    color: 'from-purple-500 to-pink-500',
    integrations: [
      'QuickBooks',
      'Xero',
      'Sage',
      'Wave',
      'FreshBooks',
      'Zoho Books',
    ],
  },
  {
    category: 'Communication',
    icon: MessageSquare,
    color: 'from-orange-500 to-red-500',
    integrations: [
      'Slack',
      'Microsoft Teams',
      'WhatsApp Business',
      'Twilio',
      'SendGrid',
      'Mailchimp',
    ],
  },
  {
    category: 'Email & Calendar',
    icon: Mail,
    color: 'from-indigo-500 to-purple-500',
    integrations: [
      'Gmail',
      'Outlook',
      'Google Calendar',
      'Office 365',
      'Exchange Server',
      'Zoho Mail',
    ],
  },
  {
    category: 'Cloud Storage',
    icon: Cloud,
    color: 'from-teal-500 to-green-500',
    integrations: [
      'Google Drive',
      'Dropbox',
      'OneDrive',
      'Box',
      'AWS S3',
      'Azure Blob Storage',
    ],
  },
  {
    category: 'Mobile & SMS',
    icon: Smartphone,
    color: 'from-pink-500 to-rose-500',
    integrations: [
      'Mobile App (iOS/Android)',
      'SMS Notifications',
      'Push Notifications',
      'Mobile Money',
      'USSD Integration',
      'WhatsApp API',
    ],
  },
]

const benefits = [
  'Connect seamlessly with your existing tech stack',
  'Two-way data synchronization in real-time',
  'Pre-built connectors for popular tools',
  'Custom API for building your own integrations',
  'Secure OAuth authentication',
  'Automated data mapping and transformation',
  'Webhook support for instant updates',
  'No coding required for standard integrations',
]

export default function IntegrationsPage() {
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
              <Plug size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Connect Everything You Use
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              Chrysolite AI integrates seamlessly with the tools you already love.
              Connect payment gateways, banks, accounting software, and more—all in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Request Integration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations by Category */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Popular Integrations
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Connect with hundreds of tools across different categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationCategories.map((category) => (
              <div
                key={category.category}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                  <category.icon size={28} className="text-surface-900 dark:text-white" />
                </div>

                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-4">{category.category}</h3>

                <ul className="space-y-2">
                  {category.integrations.map((integration) => (
                    <li key={integration} className="flex items-center gap-2 text-surface-600 dark:text-surface-400 text-sm">
                      <Check size={16} className="text-chrysolite-400 flex-shrink-0" />
                      {integration}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Integration Made Simple
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Connect your favorite tools in minutes with our pre-built integrations.
                No coding required—just authenticate and start syncing data.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-chrysolite-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={16} className="text-chrysolite-400" />
                    </div>
                    <span className="text-surface-600 dark:text-surface-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-surface-900 dark:text-white font-semibold mb-6">Custom Integrations</h3>
                <p className="text-surface-600 dark:text-surface-400 mb-6">
                  Need a custom integration? Our powerful REST API and webhooks make it easy
                  to build exactly what you need.
                </p>

                <div className="space-y-4">
                  <div className="bg-white dark:bg-surface-950/50 rounded-xl p-4 border border-surface-300 dark:border-surface-800">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap size={20} className="text-chrysolite-400" />
                      <span className="text-surface-900 dark:text-white font-medium">REST API</span>
                    </div>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Full access to all ERP data and operations via RESTful endpoints.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-surface-950/50 rounded-xl p-4 border border-surface-300 dark:border-surface-800">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap size={20} className="text-chrysolite-400" />
                      <span className="text-surface-900 dark:text-white font-medium">Webhooks</span>
                    </div>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Real-time event notifications sent to your endpoints.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-surface-950/50 rounded-xl p-4 border border-surface-300 dark:border-surface-800">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap size={20} className="text-chrysolite-400" />
                      <span className="text-surface-900 dark:text-white font-medium">OAuth 2.0</span>
                    </div>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Secure authentication for third-party integrations.
                    </p>
                  </div>
                </div>

                <Link
                  href="/api"
                  className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium mt-6 transition-colors"
                >
                  Explore API Documentation
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
              Ready to Connect Your Tools?
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
              Start integrating with your favorite apps today. All integrations included
              in every plan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-100 dark:bg-surface-800 hover:bg-surface-700 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
