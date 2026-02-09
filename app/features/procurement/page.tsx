import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShoppingCart,
  FileCheck,
  Users,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Procurement Management | Chrysolite AI ERP',
  description: 'Streamline purchasing with automated procurement workflows, supplier management, purchase orders, GRN, and AI-powered spend analysis.',
}

const features = [
  {
    icon: ShoppingCart,
    title: 'Purchase Orders',
    description: 'Create, track, and manage purchase orders with multi-level approval workflows.',
  },
  {
    icon: FileCheck,
    title: 'Goods Received Notes',
    description: 'Track deliveries, quality checks, and three-way matching with PO and invoices.',
  },
  {
    icon: Users,
    title: 'Supplier Management',
    description: 'Centralized vendor database with performance tracking and rating system.',
  },
  {
    icon: TrendingUp,
    title: 'Spend Analysis',
    description: 'AI-powered insights into spending patterns and cost-saving opportunities.',
  },
  {
    icon: Shield,
    title: 'Compliance & Approval',
    description: 'Configurable approval hierarchies ensuring policy compliance.',
  },
  {
    icon: Zap,
    title: 'Auto Replenishment',
    description: 'Automated purchase order generation based on inventory levels.',
  },
]

const benefits = [
  'Reduce procurement costs with AI-powered vendor selection',
  'Eliminate maverick spending with approval workflows',
  'Real-time visibility into purchase order status',
  'Automated three-way matching to prevent invoice fraud',
  'Supplier performance analytics and scorecards',
  'Direct integration with accounting and inventory modules',
]

export default function ProcurementFeaturePage() {
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
              <ShoppingCart size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Procurement Management
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed">
              Streamline your purchasing process with intelligent automation. Manage suppliers,
              purchase orders, and goods receipts with complete control and visibility.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Request Access
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
              Complete Procurement Solution
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              From requisition to payment, manage every step of the procurement cycle.
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
                Smart Procurement Workflows
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Automate your procurement process from requisition to payment. Enforce policies,
                track spending, and optimize vendor relationships with AI-powered insights.
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
                <div className="mb-6">
                  <h3 className="text-surface-900 dark:text-white font-semibold mb-4">Purchase Order Status</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                      <div>
                        <div className="text-surface-900 dark:text-white font-medium">PO-2024-001</div>
                        <div className="text-sm text-surface-600 dark:text-surface-400">Supplier: ABC Corp</div>
                      </div>
                      <div className="text-right">
                        <div className="text-chrysolite-400 font-semibold">Approved</div>
                        <div className="text-xs text-surface-500">$12,450</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                      <div>
                        <div className="text-surface-900 dark:text-white font-medium">PO-2024-002</div>
                        <div className="text-sm text-surface-600 dark:text-surface-400">Supplier: XYZ Ltd</div>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-semibold">Pending</div>
                        <div className="text-xs text-surface-500">$8,900</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                      <div>
                        <div className="text-surface-900 dark:text-white font-medium">PO-2024-003</div>
                        <div className="text-sm text-surface-600 dark:text-surface-400">Supplier: Tech Supplies</div>
                      </div>
                      <div className="text-right">
                        <div className="text-blue-400 font-semibold">Received</div>
                        <div className="text-xs text-surface-500">$15,200</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-surface-300 dark:border-surface-700 text-center text-sm text-surface-500">
                  Real-time PO tracking
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
            Procurement connects with inventory, accounting, and supplier modules for
            complete purchase-to-pay automation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Inventory', 'Accounting', 'Suppliers', 'Budgeting', 'Reporting', 'Analytics'].map((module) => (
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
            Transform Your Procurement Process
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Join businesses saving time and money with intelligent procurement automation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.chrysoliteai.com/register"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Request Access
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
