'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Shield, Zap, TrendingUp } from 'lucide-react'
import CompanyLogo from '@/components/ui/CompanyLogo'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background - AI-First with Electric Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-surface-50 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-950">
        <div className="absolute inset-0 opacity-40">
          {/* Electric Cyan - Primary AI color */}
          <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-electric-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          {/* Electric Purple - Advanced AI */}
          <div className="absolute top-0 -right-4 w-[600px] h-[600px] bg-electric-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          {/* Chrysolite - Brand accent (smaller) */}
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
          {/* Gold - Premium accent (smallest) */}
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge - AI-focused with electric gradient */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-cyan-500/10 to-electric-purple-500/10 backdrop-blur-xl border border-electric-cyan-500/30 rounded-full px-4 py-2 mb-8 animate-fade-in shadow-lg shadow-electric-cyan/20">
          <Sparkles size={16} className="text-electric-cyan-400 animate-pulse" />
          <span className="text-sm font-medium bg-gradient-to-r from-electric-cyan-400 to-electric-purple-400 bg-clip-text text-transparent">AI-Powered Enterprise Resource Planning</span>
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

        {/* Trust Indicators - AI-first colors */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12 text-surface-600 dark:text-surface-400 text-sm animate-fade-in-up animation-delay-300">
          <div className="flex items-center gap-2">
            <Shield size={20} className="text-chrysolite-400" />
            <span>Bank-Level Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={20} className="text-electric-cyan-400" />
            <span>Real-Time AI Insights</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-electric-purple-400" />
            <span>Intelligent Automation</span>
          </div>
        </div>

        {/* CTA Buttons - AI-first with electric gradient primary */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Link
            href="/contact"
            className="group bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/40 hover:shadow-electric-purple/60 hover:scale-105 flex items-center gap-2 relative overflow-hidden"
          >
            <Sparkles size={20} className="relative z-10" />
            <span className="relative z-10">Experience AI ERP</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </Link>

          <Link
            href="/contact"
            className="group bg-surface-100/50 dark:bg-surface-800/50 backdrop-blur-xl hover:bg-surface-200 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-electric-cyan-500/50 flex items-center gap-2"
          >
            <span>Book a Demo</span>
            <Sparkles size={20} className="group-hover:text-electric-cyan-400 transition-colors" />
          </Link>
        </div>

        {/* Social Proof */}
        <div className="mt-16 animate-fade-in-up animation-delay-500">
          <p className="text-sm text-surface-500 mb-6">Trusted by businesses worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            <CompanyLogo company="TechFlow Solutions" size="md" grayscale />
            <CompanyLogo company="GlobalTrade Enterprises" size="md" grayscale />
            <CompanyLogo company="Horizon Manufacturing" size="md" grayscale />
            <CompanyLogo company="Apex Construction Group" size="md" grayscale />
            <CompanyLogo company="Evergreen Hospitality" size="md" grayscale />
            <CompanyLogo company="MedCore Healthcare" size="md" grayscale />
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Electric accent */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-surface-400 dark:border-surface-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gradient-to-b from-electric-cyan-400 to-electric-purple-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
