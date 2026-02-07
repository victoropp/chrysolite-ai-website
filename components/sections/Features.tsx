'use client'

import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  Wallet,
  Brain,
  Lock,
  Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

const features = [
  {
    icon: BarChart3,
    title: 'Financial Management',
    description: 'Complete accounting suite with general ledger, accounts payable/receivable, and automated reconciliation.',
    gradient: 'from-chrysolite-500 to-chrysolite-600',
  },
  {
    icon: Package,
    title: 'Inventory Control',
    description: 'Track stock levels, manage warehouses, automate reordering with AI-powered demand forecasting.',
    gradient: 'from-gold-400 to-gold-500',
  },
  {
    icon: ShoppingCart,
    title: 'Sales & Procurement',
    description: 'End-to-end order management, vendor relationships, and intelligent purchase recommendations.',
    gradient: 'from-chrysolite-vivid to-chrysolite-500',
  },
  {
    icon: Users,
    title: 'CRM & Customer Intelligence',
    description: 'Unified customer view with AI insights, sales pipeline management, and automated follow-ups.',
    gradient: 'from-surface-400 to-surface-600',
  },
  {
    icon: Wallet,
    title: 'Payroll & HR',
    description: 'Automated payroll processing, leave management, benefits tracking, and compliance reporting.',
    gradient: 'from-gold-500 to-gold-600',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Predictive analytics, automated reports, anomaly detection, and intelligent recommendations.',
    gradient: 'from-chrysolite-400 to-chrysolite-vivid',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, role-based access control, audit trails, and compliance certifications.',
    gradient: 'from-surface-500 to-surface-700',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance, real-time updates, offline support, and seamless integrations.',
    gradient: 'from-chrysolite-600 to-gold-500',
  },
]

export default function Features() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-surface-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-chrysolite-500/10 border border-chrysolite-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-chrysolite-400">Everything You Need</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white mb-4">
            All-in-One <span className="gradient-text">Business Platform</span>
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto">
            Powerful features designed to streamline your operations and accelerate growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'group relative bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-200 dark:border-surface-800 rounded-2xl p-6',
                'hover:bg-surface-100/80 dark:hover:bg-surface-900/80 hover:border-chrysolite-500/30 transition-all duration-300',
                'hover:shadow-lg hover:shadow-chrysolite-500/10 hover:-translate-y-1',
                'animate-fade-in-up',
                index === 0 && 'animation-delay-100',
                index === 1 && 'animation-delay-200',
                index === 2 && 'animation-delay-300',
                index === 3 && 'animation-delay-400',
                index === 4 && 'animation-delay-100',
                index === 5 && 'animation-delay-200',
                index === 6 && 'animation-delay-300',
                index === 7 && 'animation-delay-400'
              )}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-chrysolite-500/0 to-gold-400/0 group-hover:from-chrysolite-500/5 group-hover:to-gold-400/5 rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                {/* Icon */}
                <div className={cn(
                  'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4',
                  'bg-gradient-to-br',
                  feature.gradient,
                  'shadow-lg group-hover:scale-110 transition-transform duration-300'
                )}>
                  <feature.icon size={24} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2 group-hover:text-chrysolite-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-2 h-2 bg-chrysolite-500 rounded-full"></div>
                <div className="absolute top-2 right-6 w-1 h-1 bg-gold-400 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-500">
          <p className="text-surface-600 dark:text-surface-400 text-sm">
            And many more features to discover.{' '}
            <a href="/features" className="text-chrysolite-400 hover:text-chrysolite-300 font-medium underline underline-offset-4">
              Explore all features →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
