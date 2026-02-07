import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  FileText,
  BarChart3,
  Calculator,
  TrendingUp,
  PieChart,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accounting & General Ledger | Chrysolite AI ERP',
  description: 'Complete accounting solution with AI-powered general ledger, journal entries, financial statements, and automated reconciliation.',
}

const features = [
  {
    icon: BookOpen,
    title: 'General Ledger',
    description: 'Comprehensive chart of accounts with multi-currency support and automated posting.',
  },
  {
    icon: FileText,
    title: 'Journal Entries',
    description: 'Manual and automated journal entries with approval workflows and audit trails.',
  },
  {
    icon: BarChart3,
    title: 'Financial Statements',
    description: 'Real-time P&L, balance sheet, cash flow, and custom financial reports.',
  },
  {
    icon: Calculator,
    title: 'Multi-Currency Accounting',
    description: 'Handle multiple currencies with automatic exchange rate management.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Analysis',
    description: 'AI-powered insights, variance analysis, and trend forecasting.',
  },
  {
    icon: PieChart,
    title: 'Cost Center Tracking',
    description: 'Department and project-based accounting with detailed cost allocation.',
  },
]

const benefits = [
  'Real-time financial visibility across your organization',
  'Automated journal entry posting from all modules',
  'IFRS and GAAP compliance with configurable chart of accounts',
  'Period-end close automation with validation checks',
  'Intercompany eliminations and consolidation',
  'Unlimited fiscal periods and comparative reporting',
]

export default function AccountingFeaturePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <BookOpen size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Accounting & General Ledger
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed">
              Complete, automated accounting with AI-powered insights. Manage your chart of accounts,
              journal entries, and financial statements with real-time accuracy and compliance.
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

      {/* Features Grid */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Complete Accounting Features
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Everything you need to manage your financial operations with precision and compliance.
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

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Why Choose Our Accounting Module?
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Built for modern businesses that demand accuracy, compliance, and real-time insights.
                Our AI-powered accounting module automates tedious tasks while giving you complete control.
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
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">Cash in Bank</span>
                    <span className="text-surface-900 dark:text-white font-semibold">$234,567.89</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">Accounts Receivable</span>
                    <span className="text-surface-900 dark:text-white font-semibold">$89,234.56</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">Revenue (MTD)</span>
                    <span className="text-chrysolite-400 font-semibold">$456,789.01</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">Net Profit</span>
                    <span className="text-chrysolite-400 font-semibold">$123,456.78</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-surface-300 dark:border-surface-700 text-center text-sm text-surface-500">
                  Real-time financial dashboard preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Seamless Integration
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto mb-12">
            Our accounting module integrates seamlessly with all other ERP modules including
            inventory, procurement, sales, payroll, and banking for complete automation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Inventory', 'Sales', 'Procurement', 'Payroll', 'Banking', 'Fixed Assets'].map((module) => (
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

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Ready to Transform Your Accounting?
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Start your free trial today and experience the power of AI-driven accounting.
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
