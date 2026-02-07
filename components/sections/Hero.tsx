'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Shield, Zap, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-surface-50 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-chrysolite-vivid rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-surface-900/80 backdrop-blur-xl border border-chrysolite-500/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles size={16} className="text-chrysolite-vivid" />
          <span className="text-sm text-surface-700 dark:text-surface-200">AI-Powered Enterprise Resource Planning</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-surface-900 dark:text-white mb-6 animate-fade-in-up animation-delay-100 leading-tight">
          The AI-Powered ERP That{' '}
          <span className="gradient-text">Runs Your Business</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
          Automate accounting, inventory, payroll, CRM, and more with intelligent insights.
          One platform. Infinite possibilities.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-surface-600 dark:text-surface-400 text-sm animate-fade-in-up animation-delay-300">
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-chrysolite-400" />
            <span>Bank-Level Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-gold-400" />
            <span>Real-Time Insights</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-chrysolite-vivid" />
            <span>Scalable Growth</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Link
            href="https://app.chrysoliteai.com/register"
            className="group bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center gap-2 relative overflow-hidden"
          >
            <span className="relative z-10">Start Free Trial</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Link>

          <Link
            href="/contact"
            className="group bg-surface-100/50 dark:bg-surface-800/50 backdrop-blur-xl hover:bg-surface-200 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50 flex items-center gap-2"
          >
            <span>Book a Demo</span>
            <Sparkles size={20} className="group-hover:text-chrysolite-vivid transition-colors" />
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-16 animate-fade-in-up animation-delay-500">
          <p className="text-sm text-surface-500 mb-4">Trusted by businesses worldwide</p>
          <div className="flex items-center justify-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            {/* Placeholder for company logos */}
            <div className="text-surface-600 dark:text-surface-600 text-sm">Logo 1</div>
            <div className="text-surface-600 dark:text-surface-600 text-sm">Logo 2</div>
            <div className="text-surface-600 dark:text-surface-600 text-sm">Logo 3</div>
            <div className="text-surface-600 dark:text-surface-600 text-sm">Logo 4</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-surface-400 dark:border-surface-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-chrysolite-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
