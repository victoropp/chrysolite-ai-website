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
    title: 'Financial Management + AI',
    description: 'Complete accounting with AI anomaly detection catching unusual transactions, predictive cash flow forecasting, and intelligent reconciliation suggestions.',
    gradient: 'from-electric-cyan-500 to-electric-purple-500',
    aiFeature: true,
  },
  {
    icon: Package,
    title: 'Inventory Control + AI',
    description: 'Smart stock management with AI-powered demand forecasting, automatic reorder predictions, and shrinkage pattern detection across all locations.',
    gradient: 'from-electric-cyan-400 to-electric-purple-400',
    aiFeature: true,
  },
  {
    icon: ShoppingCart,
    title: 'Sales & Procurement + AI',
    description: 'Intelligent order management with AI vendor recommendations, price optimization suggestions, and automated purchase timing based on historical patterns.',
    gradient: 'from-electric-cyan-500 to-electric-purple-500',
    aiFeature: true,
  },
  {
    icon: Users,
    title: 'CRM + Customer Intelligence',
    description: 'AI-powered customer insights, predictive lead scoring, churn risk detection, and personalized engagement recommendations for every interaction.',
    gradient: 'from-electric-cyan-400 to-electric-purple-400',
    aiFeature: true,
  },
  {
    icon: Wallet,
    title: 'Payroll & HR + AI',
    description: 'Automated payroll with AI-powered overtime predictions, leave pattern analysis, turnover risk detection, and compliance monitoring across regulations.',
    gradient: 'from-electric-cyan-500 to-electric-purple-500',
    aiFeature: true,
  },
  {
    icon: Brain,
    title: 'Natural Language Queries',
    description: 'Ask questions in plain English like "Which customers are at risk?" or "Show unusual expenses this month" and get instant, accurate AI-powered answers.',
    gradient: 'from-electric-cyan-400 to-electric-purple-400',
    aiFeature: true,
  },
  {
    icon: Lock,
    title: 'AI-Powered Security',
    description: 'Intelligent threat detection, anomaly-based access monitoring, automated compliance checks, and predictive security risk assessments.',
    gradient: 'from-electric-cyan-500 to-electric-purple-500',
    aiFeature: true,
  },
  {
    icon: Zap,
    title: 'Predictive Performance',
    description: 'AI optimizes system performance, predicts bottlenecks before they occur, and intelligently pre-loads data based on your usage patterns.',
    gradient: 'from-electric-cyan-400 to-electric-purple-400',
    aiFeature: true,
  },
]

export default function Features() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-surface-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-electric-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-cyan-500/10 to-electric-purple-500/10 border border-electric-cyan-500/30 rounded-full px-4 py-2 mb-4">
            <Brain size={16} className="text-electric-cyan-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 bg-clip-text text-transparent">
              AI-Powered Business Platform
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white mb-4">
            Intelligence Built Into <span className="bg-gradient-to-r from-electric-cyan-400 to-electric-purple-400 bg-clip-text text-transparent">Every Feature</span>
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto mb-4">
            Not just automation—<strong className="text-surface-900 dark:text-white">artificial intelligence that learns your business</strong>, predicts outcomes, and makes intelligent recommendations across all operations.
          </p>
          <p className="text-lg text-surface-500 dark:text-surface-400 max-w-2xl mx-auto">
            From anomaly detection to predictive analytics, AI works behind the scenes in every module to help you make smarter decisions faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'group relative bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-200 dark:border-surface-800 rounded-2xl p-6',
                'hover:bg-surface-100/80 dark:hover:bg-surface-900/80 hover:border-electric-cyan-500/30 transition-all duration-300',
                'hover:shadow-lg hover:shadow-electric-cyan-500/20 hover:-translate-y-1',
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
              <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan-500/0 to-electric-purple-500/0 group-hover:from-electric-cyan-500/5 group-hover:to-electric-purple-500/5 rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                {/* AI Badge */}
                {feature.aiFeature && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Brain size={12} />
                    <span>AI</span>
                  </div>
                )}

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
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2 group-hover:text-electric-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-2 h-2 bg-electric-cyan-500 rounded-full"></div>
                <div className="absolute top-2 right-6 w-1 h-1 bg-electric-purple-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-500">
          <div className="bg-gradient-to-r from-electric-cyan-500/10 to-electric-purple-500/10 border border-electric-cyan-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-surface-900 dark:text-white font-semibold mb-2">
              Every feature enhanced by AI intelligence
            </p>
            <p className="text-surface-600 dark:text-surface-400 text-sm mb-4">
              From predictive analytics to natural language queries—AI works across all modules to help you work smarter, not harder.
            </p>
            <a
              href="/features/ai"
              className="inline-flex items-center gap-2 text-electric-cyan-500 hover:text-electric-cyan-400 font-medium transition-colors"
            >
              <Brain size={18} />
              Discover all AI capabilities →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
