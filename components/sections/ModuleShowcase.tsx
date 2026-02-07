'use client'

import { useState } from 'react'
import {
  Calculator,
  Package,
  ShoppingBag,
  TrendingUp,
  Users,
  Wallet,
  CheckCircle2
} from 'lucide-react'
import { cn } from '@/lib/utils'

const modules = [
  {
    id: 'accounting',
    icon: Calculator,
    name: 'Accounting',
    tagline: 'Complete financial control',
    description: 'Comprehensive accounting suite with general ledger, accounts payable/receivable, multi-currency support, and automated financial reporting.',
    features: [
      'General Ledger & Chart of Accounts',
      'Accounts Payable & Receivable',
      'Bank Reconciliation',
      'Financial Statements & Reports',
      'Multi-Currency Support',
      'Audit Trail & Compliance',
    ],
    gradient: 'from-chrysolite-500 to-chrysolite-600',
  },
  {
    id: 'inventory',
    icon: Package,
    name: 'Inventory',
    tagline: 'Smart stock management',
    description: 'Real-time inventory tracking with AI-powered demand forecasting, automated reordering, and multi-warehouse support.',
    features: [
      'Real-Time Stock Tracking',
      'Multi-Warehouse Management',
      'AI Demand Forecasting',
      'Automated Reordering',
      'Barcode & QR Scanning',
      'Batch & Serial Tracking',
    ],
    gradient: 'from-gold-400 to-gold-500',
  },
  {
    id: 'procurement',
    icon: ShoppingBag,
    name: 'Procurement',
    tagline: 'Streamlined purchasing',
    description: 'End-to-end procurement process from requisition to payment, with vendor management and intelligent purchase recommendations.',
    features: [
      'Purchase Orders & Requisitions',
      'Vendor Management',
      'RFQ & Bid Management',
      'Automated Approvals',
      'Price Comparison',
      'Delivery Tracking',
    ],
    gradient: 'from-chrysolite-vivid to-chrysolite-500',
  },
  {
    id: 'sales',
    icon: TrendingUp,
    name: 'Sales',
    tagline: 'Accelerate revenue growth',
    description: 'Complete sales lifecycle management with quotations, orders, invoicing, and AI-powered sales insights.',
    features: [
      'Quotations & Order Management',
      'Automated Invoicing',
      'Sales Pipeline Tracking',
      'Customer Portal',
      'Payment Processing',
      'Sales Analytics & Forecasting',
    ],
    gradient: 'from-surface-400 to-surface-600',
  },
  {
    id: 'payroll',
    icon: Wallet,
    name: 'Payroll & HR',
    tagline: 'Effortless people management',
    description: 'Automated payroll processing, leave management, benefits tracking, and compliance reporting in one integrated system.',
    features: [
      'Automated Payroll Processing',
      'Leave & Attendance Tracking',
      'Benefits Administration',
      'Tax Compliance',
      'Employee Self-Service',
      'Performance Management',
    ],
    gradient: 'from-gold-500 to-gold-600',
  },
  {
    id: 'crm',
    icon: Users,
    name: 'CRM',
    tagline: 'Build lasting relationships',
    description: 'Unified customer view with sales pipeline management, marketing automation, and AI-powered insights to grow your business.',
    features: [
      'Contact & Lead Management',
      'Sales Pipeline & Opportunities',
      'Email Campaign Automation',
      'Customer Support Ticketing',
      'AI Customer Insights',
      'Performance Dashboards',
    ],
    gradient: 'from-chrysolite-400 to-chrysolite-vivid',
  },
]

export default function ModuleShowcase() {
  const [activeModule, setActiveModule] = useState(modules[0])

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-surface-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-chrysolite-500/10 border border-chrysolite-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-chrysolite-400">Powerful Modules</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Complete <span className="gradient-text">Business Suite</span>
          </h2>
          <p className="text-xl text-surface-300 max-w-3xl mx-auto">
            Six integrated modules that work together seamlessly to run your entire business
          </p>
        </div>

        {/* Module Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module)}
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300',
                activeModule.id === module.id
                  ? 'bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 text-white shadow-lg shadow-chrysolite-500/30'
                  : 'bg-surface-900/50 text-surface-300 hover:bg-surface-900 hover:text-white border border-surface-800 hover:border-chrysolite-500/30'
              )}
            >
              <module.icon size={20} />
              <span>{module.name}</span>
            </button>
          ))}
        </div>

        {/* Module Content */}
        <div className="bg-surface-900/50 backdrop-blur-xl border border-surface-800 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left: Description & Features */}
            <div className="space-y-6 animate-fade-in">
              {/* Icon & Title */}
              <div className="flex items-start gap-4">
                <div className={cn(
                  'flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br shadow-lg',
                  activeModule.gradient
                )}>
                  <activeModule.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">{activeModule.name}</h3>
                  <p className="text-chrysolite-400 font-medium">{activeModule.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-surface-300 leading-relaxed">
                {activeModule.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-4">
                {activeModule.features.map((feature, index) => (
                  <div
                    key={feature}
                    className={cn(
                      'flex items-start gap-3 animate-slide-in-left',
                      `animation-delay-${(index + 1) * 100}`
                    )}
                  >
                    <CheckCircle2 size={20} className="text-chrysolite-400 mt-0.5 flex-shrink-0" />
                    <span className="text-surface-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href={`/modules/${activeModule.id}`}
                  className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium group"
                >
                  <span>Explore {activeModule.name} Module</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Screenshot Placeholder */}
            <div className="relative animate-scale-in animation-delay-200">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-surface-800 to-surface-900 rounded-2xl overflow-hidden border border-surface-700 shadow-2xl">
                {/* Mock Browser Chrome */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-surface-800/80 backdrop-blur-sm border-b border-surface-700 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-600"></div>
                  </div>
                  <div className="flex-1 h-4 bg-surface-700 rounded ml-4 mr-4"></div>
                </div>

                {/* Content Area */}
                <div className="absolute inset-0 top-8 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className={cn(
                      'inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br mb-4',
                      activeModule.gradient,
                      'shadow-xl animate-float'
                    )}>
                      <activeModule.icon size={40} className="text-white" />
                    </div>
                    <p className="text-surface-400 text-sm">
                      {activeModule.name} Dashboard Preview
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-chrysolite-500/5 to-gold-400/5"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 rounded-full px-6 py-3 shadow-lg shadow-chrysolite-500/30">
                <p className="text-white font-semibold text-sm">Fully Integrated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-surface-400">
            All modules work together seamlessly.{' '}
            <a href="/features" className="text-chrysolite-400 hover:text-chrysolite-300 font-medium underline underline-offset-4">
              See how they integrate →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
