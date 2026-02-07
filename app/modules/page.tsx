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
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'ERP Modules - Complete Business Suite | Chrysolite AI',
  description: 'Discover all Chrysolite AI ERP modules. Financial, operational, and AI-powered tools that work together seamlessly to run your entire business.',
}

const modules = [
  {
    category: 'Financial Management',
    icon: Calculator,
    color: 'from-blue-500 to-cyan-500',
    items: [
      {
        title: 'General Ledger',
        description: 'Complete chart of accounts, journal entries, and financial statements.',
        href: '/features/accounting',
      },
      {
        title: 'Accounts Payable',
        description: 'Vendor management, bill tracking, and payment automation.',
        href: '/features/accounting',
      },
      {
        title: 'Accounts Receivable',
        description: 'Customer invoicing, payment tracking, and aging reports.',
        href: '/features/sales',
      },
      {
        title: 'Banking',
        description: 'Multi-currency accounts and automated reconciliation.',
        href: '/features/banking',
      },
    ],
  },
  {
    category: 'Operations Management',
    icon: Package,
    color: 'from-green-500 to-emerald-500',
    items: [
      {
        title: 'Inventory Control',
        description: 'Real-time stock tracking, warehouse management, and cycle counts.',
        href: '/features/inventory',
      },
      {
        title: 'Procurement',
        description: 'Purchase requisitions, POs, and vendor management.',
        href: '/features/procurement',
      },
      {
        title: 'Sales & Distribution',
        description: 'Quote-to-cash process automation and order fulfillment.',
        href: '/features/sales',
      },
      {
        title: 'Fixed Assets',
        description: 'Asset lifecycle tracking and depreciation management.',
        href: '/features/fixed-assets',
      },
    ],
  },
  {
    category: 'Human Resources',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    items: [
      {
        title: 'Payroll Processing',
        description: 'Automated payroll runs, tax calculations, and compliance.',
        href: '/features/payroll',
      },
      {
        title: 'Employee Management',
        description: 'HR records, leave management, and employee self-service.',
        href: '/features/payroll',
      },
      {
        title: 'Time & Attendance',
        description: 'Time tracking, attendance monitoring, and shift scheduling.',
        href: '/features/payroll',
      },
    ],
  },
  {
    category: 'Customer Management',
    icon: UserCheck,
    color: 'from-orange-500 to-red-500',
    items: [
      {
        title: 'CRM',
        description: 'Customer database, interaction history, and relationship tracking.',
        href: '/features/crm',
      },
      {
        title: 'Sales Pipeline',
        description: 'Lead tracking, opportunity management, and sales forecasting.',
        href: '/features/crm',
      },
      {
        title: 'Customer Portal',
        description: 'Self-service portal for customers to view orders and invoices.',
        href: '/features/crm',
      },
    ],
  },
  {
    category: 'Intelligence & Analytics',
    icon: Brain,
    color: 'from-chrysolite-500 to-gold-400',
    items: [
      {
        title: 'AI Accountant',
        description: 'Natural language queries and automated insights.',
        href: '/features/ai',
      },
      {
        title: 'Predictive Analytics',
        description: 'Cash flow forecasting and demand prediction.',
        href: '/features/ai',
      },
      {
        title: 'Real-Time Dashboards',
        description: 'Executive dashboards with KPIs and visual analytics.',
        href: '/features/reporting',
      },
      {
        title: 'Custom Reporting',
        description: 'Build custom reports with drag-and-drop builder.',
        href: '/features/reporting',
      },
    ],
  },
]

export default function ModulesPage() {
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
              <Zap size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Complete ERP Module Suite
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              A comprehensive set of integrated modules covering every aspect of your business.
              From finance to operations, everything works together seamlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Modules by Category */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {modules.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon size={28} className="text-surface-900 dark:text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-surface-900 dark:text-white">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-6 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite/10"
                    >
                      <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2 group-hover:text-chrysolite-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 text-chrysolite-400 text-sm font-medium group-hover:gap-3 transition-all">
                        Explore
                        <ArrowRight size={14} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Seamlessly Integrated
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              All modules share the same database and user interface, ensuring data consistency
              and a unified experience across your entire organization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-chrysolite-400" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">Real-Time Sync</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Data flows instantly between modules. No delays, no duplicate entries, no errors.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Brain size={32} className="text-chrysolite-400" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">AI Everywhere</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Our AI assistant understands data across all modules for intelligent insights.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BarChart3 size={32} className="text-chrysolite-400" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">Unified Reporting</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Create reports that span multiple modules with a single, consistent interface.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
              Start with What You Need, Scale as You Grow
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
              Enable only the modules you need today. Add more as your business evolves.
              All modules are included in every plan.
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
                href="/pricing"
                className="w-full sm:w-auto bg-surface-100 dark:bg-surface-800 hover:bg-surface-700 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
