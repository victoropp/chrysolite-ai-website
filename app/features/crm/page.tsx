import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users2,
  Target,
  Mail,
  Phone,
  TrendingUp,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'CRM & Customer Management | Chrysolite AI ERP',
  description: 'Complete CRM solution with lead tracking, opportunity management, contact management, and sales pipeline automation.',
}

const features = [
  {
    icon: Users2,
    title: 'Contact Management',
    description: 'Centralized customer and prospect database with complete interaction history.',
  },
  {
    icon: Target,
    title: 'Lead Tracking',
    description: 'Capture, qualify, and nurture leads through automated workflows and scoring.',
  },
  {
    icon: TrendingUp,
    title: 'Opportunity Pipeline',
    description: 'Visual sales pipeline with stage tracking, forecasting, and win/loss analysis.',
  },
  {
    icon: Mail,
    title: 'Email Integration',
    description: 'Sync emails, track campaigns, and automate follow-ups with built-in templates.',
  },
  {
    icon: Phone,
    title: 'Activity Tracking',
    description: 'Log calls, meetings, and tasks with reminders and performance analytics.',
  },
  {
    icon: Calendar,
    title: 'Sales Automation',
    description: 'Automate repetitive tasks, quotes, and follow-ups to close deals faster.',
  },
]

const benefits = [
  'Complete customer 360° view with purchase history',
  'AI-powered lead scoring and next-best-action recommendations',
  'Sales forecasting with pipeline probability analysis',
  'Automated quote-to-order conversion workflow',
  'Customer segmentation for targeted marketing',
  'Integration with sales, accounting, and support modules',
]

export default function CRMFeaturePage() {
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
              <Users2 size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              CRM & Customer Management
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed">
              Build stronger customer relationships with intelligent CRM. Track leads, manage opportunities,
              and close more deals with AI-powered insights and automation.
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

      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Powerful CRM Features
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Everything you need to manage customer relationships and grow revenue.
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
                AI-Powered Sales Insights
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Leverage AI to identify high-value opportunities, predict customer churn, and
                get personalized recommendations for closing deals faster.
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
              <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-surface-900 dark:text-white font-semibold mb-6">Sales Pipeline</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div className="flex justify-between mb-2">
                      <span className="text-surface-900 dark:text-white font-medium">Acme Corp</span>
                      <span className="text-chrysolite-400 font-semibold">$125,000</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-surface-600 dark:text-surface-400">Stage: Negotiation</span>
                      <span className="text-green-400">80% probability</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div className="flex justify-between mb-2">
                      <span className="text-surface-900 dark:text-white font-medium">Tech Solutions Ltd</span>
                      <span className="text-chrysolite-400 font-semibold">$89,500</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-surface-600 dark:text-surface-400">Stage: Proposal</span>
                      <span className="text-yellow-400">60% probability</span>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div className="flex justify-between mb-2">
                      <span className="text-surface-900 dark:text-white font-medium">Global Enterprises</span>
                      <span className="text-chrysolite-400 font-semibold">$250,000</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-surface-600 dark:text-surface-400">Stage: Discovery</span>
                      <span className="text-blue-400">30% probability</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-surface-300 dark:border-surface-700 flex justify-between">
                  <span className="text-surface-600 dark:text-surface-400">Total Pipeline Value</span>
                  <span className="text-surface-900 dark:text-white text-xl font-bold">$464,500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Seamless Integration
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto mb-12">
            CRM connects with sales, marketing, support, and accounting modules for
            complete customer lifecycle management.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Sales', 'Marketing', 'Support', 'Accounting', 'Email', 'Analytics'].map((module) => (
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
            Grow Your Business with Intelligent CRM
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Join businesses closing more deals and building stronger customer relationships.
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
