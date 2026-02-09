import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Calculator,
  Package,
  ShoppingCart,
  FileText,
  Users,
  Building,
  UserCheck,
  CreditCard,
  Brain,
  BarChart3,
  ArrowRight,
  Check,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'All Features - Complete ERP Solution | Chrysolite AI',
  description: 'Explore all the powerful features of Chrysolite AI ERP. From accounting to AI automation, everything you need to run your business efficiently.',
}

const features = [
  {
    icon: Calculator,
    title: 'Accounting',
    description: 'Complete financial management with GL, AP, AR, and automated reconciliation.',
    href: '/features/accounting',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Package,
    title: 'Inventory Management',
    description: 'Real-time stock tracking, warehouse management, and automated reordering.',
    href: '/features/inventory',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: FileText,
    title: 'Procurement',
    description: 'Purchase orders, vendor management, and procurement workflow automation.',
    href: '/features/procurement',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: ShoppingCart,
    title: 'Sales & Invoicing',
    description: 'Quote-to-cash automation, invoicing, and payment tracking.',
    href: '/features/sales',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Payroll',
    description: 'Automated payroll processing, tax calculations, and compliance management.',
    href: '/features/payroll',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Building,
    title: 'Fixed Assets',
    description: 'Asset tracking, depreciation management, and lifecycle monitoring.',
    href: '/features/fixed-assets',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: UserCheck,
    title: 'CRM',
    description: 'Customer relationship management with sales pipeline and lead tracking.',
    href: '/features/crm',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: CreditCard,
    title: 'Banking',
    description: 'Multi-currency accounts, bank reconciliation, and payment processing.',
    href: '/features/banking',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Brain,
    title: 'AI Features',
    description: 'AI accountant, predictive analytics, and intelligent automation.',
    href: '/features/ai',
    color: 'from-chrysolite-500 to-gold-400',
  },
  {
    icon: BarChart3,
    title: 'Reporting & Analytics',
    description: 'Real-time dashboards, custom reports, and business intelligence.',
    href: '/features/reporting',
    color: 'from-cyan-500 to-blue-500',
  },
]

const benefits = [
  'All-in-one platform for complete business management',
  'Cloud-based with 99.9% uptime SLA',
  'Real-time data synchronization across modules',
  'Role-based access control and permissions',
  'Mobile-responsive interface for on-the-go access',
  'Automated workflows and approval processes',
  'Multi-currency and multi-location support',
  'Seamless integrations with third-party tools',
]

export default function FeaturesOverviewPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Everything You Need to Run Your Business
            </h1>
            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              A complete, integrated ERP solution with all the features modern businesses need.
              From accounting to AI automation, manage everything from one powerful platform.
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
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Comprehensive Feature Set
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Explore all the powerful modules that make up the Chrysolite AI ERP platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite/10"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3 group-hover:text-chrysolite-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-chrysolite-400 font-medium text-sm group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Built for Modern Businesses
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Chrysolite AI ERP is designed to scale with your business, offering enterprise-grade
                features with the simplicity and flexibility that growing companies need.
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
              <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-surface-900 dark:text-white font-semibold mb-6">Why Choose Chrysolite AI?</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-chrysolite-400 mb-2">10+</div>
                    <p className="text-surface-600 dark:text-surface-400">Integrated modules working seamlessly together</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-chrysolite-400 mb-2">99.9%</div>
                    <p className="text-surface-600 dark:text-surface-400">Uptime SLA with enterprise-grade reliability</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-chrysolite-400 mb-2">24/7</div>
                    <p className="text-surface-600 dark:text-surface-400">AI assistant available around the clock</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-chrysolite-400 mb-2">100%</div>
                    <p className="text-surface-600 dark:text-surface-400">Cloud-based with automatic updates</p>
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
              Ready to Transform with AI?
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
              Join businesses already running on Chrysolite AI ERP.
              Experience intelligent automation and real-time insights.
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
                className="w-full sm:w-auto bg-surface-100 dark:bg-surface-800 hover:bg-surface-700 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
