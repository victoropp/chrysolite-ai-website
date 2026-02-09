'use client'

import {
  Brain,
  Sparkles,
  TrendingUp,
  Zap,
  Target,
  Shield
} from 'lucide-react'
import { cn } from '@/lib/utils'

const aiFeatures = [
  {
    icon: Brain,
    title: 'Intelligent Automation',
    description: 'Automate repetitive tasks with AI that learns from your workflows, saving hours of manual work every day.',
    gradient: 'from-electric-cyan-500 to-electric-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forecast sales, inventory needs, and cash flow with machine learning models trained on your business data.',
    gradient: 'from-chrysolite-500 to-chrysolite-600',
  },
  {
    icon: Sparkles,
    title: 'Smart Recommendations',
    description: 'Get actionable insights and suggestions powered by AI to optimize pricing, procurement, and customer engagement.',
    gradient: 'from-electric-purple-500 to-chrysolite-vivid',
  },
  {
    icon: Target,
    title: 'Anomaly Detection',
    description: 'Automatically identify unusual patterns in transactions, inventory, or sales that require attention.',
    gradient: 'from-gold-400 to-gold-500',
  },
  {
    icon: Zap,
    title: 'Real-Time Insights',
    description: 'AI-powered dashboards that surface the most important metrics and trends as they happen.',
    gradient: 'from-electric-cyan-400 to-electric-cyan-600',
  },
  {
    icon: Shield,
    title: 'Fraud Prevention',
    description: 'Advanced AI algorithms detect suspicious activities and protect your business from financial risks.',
    gradient: 'from-chrysolite-600 to-gold-500',
  },
]

export default function AIPowered() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-surface-50 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-950">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] bg-chrysolite-vivid rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-chrysolite-500/10 to-gold-400/10 border border-chrysolite-500/30 rounded-full px-4 py-2 mb-6">
            <Brain size={16} className="text-chrysolite-400" />
            <span className="text-sm font-medium text-chrysolite-400">Powered by AI</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
            Intelligence That
            <br />
            <span className="gradient-text">Works For You</span>
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence to automate workflows,
            predict trends, and make smarter decisions faster than ever before.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'relative group animate-fade-in-up',
                index === 0 && 'animation-delay-100',
                index === 1 && 'animation-delay-200',
                index === 2 && 'animation-delay-300',
                index === 3 && 'animation-delay-400',
                index === 4 && 'animation-delay-500',
                index === 5 && 'animation-delay-500'
              )}
            >
              {/* Card */}
              <div className="relative h-full bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-200 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite-500/10 hover:-translate-y-1">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-chrysolite-500/0 to-gold-400/0 group-hover:from-chrysolite-500/5 group-hover:to-gold-400/5 rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  {/* Icon */}
                  <div className={cn(
                    'inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300',
                    feature.gradient
                  )}>
                    <feature.icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-3 group-hover:text-chrysolite-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-chrysolite-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="relative bg-gradient-to-r from-chrysolite-500/10 to-gold-400/10 border border-chrysolite-500/30 rounded-3xl p-12 text-center backdrop-blur-xl animate-fade-in-up animation-delay-1000">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-chrysolite-500/5 to-gold-400/5 rounded-3xl blur-xl"></div>

          <div className="relative">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-6 animate-glow">
              <Sparkles size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold text-surface-900 dark:text-white mb-4">
              AI That <span className="gradient-text">Learns & Adapts</span>
            </h3>
            <p className="text-lg text-surface-600 dark:text-surface-300 max-w-2xl mx-auto mb-8">
              Our AI continuously learns from your business patterns and industry trends to provide
              increasingly accurate predictions and personalized recommendations over time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">Highly Accurate</div>
                <div className="text-sm text-surface-600 dark:text-surface-400">Predictive forecasting</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text-gold mb-2">Lightning Fast</div>
                <div className="text-sm text-surface-600 dark:text-surface-400">Context caching</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text mb-2">Always On</div>
                <div className="text-sm text-surface-600 dark:text-surface-400">AI agents working for you</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-2000">
          <p className="text-surface-600 dark:text-surface-400 mb-6">
            Experience the future of business management
          </p>
          <a
            href="https://app.chrysoliteai.com/register"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/40 hover:shadow-electric-purple/60 hover:scale-105 group"
          >
            <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Get Started Now</span>
          </a>
        </div>
      </div>
    </section>
  )
}
