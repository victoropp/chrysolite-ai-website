import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Receipt,
  FileX,
  TrendingUp,
  Users2,
  CreditCard,
  BarChart,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sales & Invoicing | Chrysolite AI ERP',
  description: 'Complete sales management with invoicing, credit notes, quotations, AR aging, and customer portal for modern businesses.',
}

const features = [
  {
    icon: Receipt,
    title: 'Invoicing',
    description: 'Professional invoices with custom templates, recurring billing, and multi-currency support.',
  },
  {
    icon: FileX,
    title: 'Credit Notes',
    description: 'Manage returns and refunds with automated credit note generation and tracking.',
  },
  {
    icon: TrendingUp,
    title: 'Quotations',
    description: 'Create quotes, track conversion rates, and convert to sales orders instantly.',
  },
  {
    icon: Users2,
    title: 'Customer Management',
    description: 'Centralized customer database with purchase history and credit limits.',
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Accept payments online with integrated payment gateways and auto-reconciliation.',
  },
  {
    icon: BarChart,
    title: 'AR Aging Reports',
    description: 'Track receivables, aging analysis, and automated payment reminders.',
  },
]

const benefits = [
  'Automated invoice generation from sales orders',
  'Real-time accounts receivable tracking and aging',
  'Customer self-service portal for invoices and payments',
  'Automated payment reminders and dunning workflows',
  'Revenue recognition and deferred revenue management',
  'Sales analytics and forecasting with AI insights',
]

export default function SalesFeaturePage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <Receipt size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Sales & Invoicing
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed">
              Streamline your sales process from quotation to payment collection. Professional invoicing,
              automated billing, and powerful AR management in one platform.
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
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Complete Sales Features
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Everything you need to manage sales, invoicing, and customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite/10 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Accelerate Revenue Collection
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Get paid faster with automated invoicing, payment tracking, and intelligent
                reminders. Our AI helps predict payment delays before they happen.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                    <span className="text-surface-600 dark:text-surface-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-surface-900 dark:text-white font-semibold mb-6">AR Aging Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">Current (0-30 days)</span>
                    <span className="text-chrysolite-400 font-semibold">$45,230</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">31-60 days</span>
                    <span className="text-yellow-400 font-semibold">$12,450</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">61-90 days</span>
                    <span className="text-orange-400 font-semibold">$5,670</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">Over 90 days</span>
                    <span className="text-red-400 font-semibold">$2,340</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-surface-300 dark:border-surface-700 flex items-center justify-between">
                  <span className="text-surface-600 dark:text-surface-400">Total Outstanding</span>
                  <span className="text-surface-900 dark:text-white text-xl font-bold">$65,690</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Seamless Integration
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto mb-12">
            Sales integrates with accounting, inventory, CRM, and payment gateways for
            complete order-to-cash automation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Accounting', 'Inventory', 'CRM', 'Payments', 'Reporting', 'Analytics'].map((module) => (
              <div
                key={module}
                className="px-6 py-3 bg-surface-50 dark:bg-surface-900 border border-surface-300 dark:border-surface-700 rounded-xl text-surface-600 dark:text-surface-300 hover:border-chrysolite-500/30 hover:text-surface-900 dark:text-white transition-all"
              >
                {module}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Start Selling Smarter Today
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Join businesses improving cash flow and customer satisfaction with automated sales processes.
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
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
