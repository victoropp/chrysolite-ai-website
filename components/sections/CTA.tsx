'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Animated Gradient Background - Electric AI-first */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-surface-50 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-950">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-electric-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-blob"></div>
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000"></div>
        </div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-20"></div>

      {/* Glow Effects - Electric gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-electric-cyan-500/20 via-electric-purple-500/20 to-electric-cyan-500/20 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Electric AI */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-cyan-500/10 to-electric-purple-500/10 border border-electric-cyan-500/30 rounded-full px-4 py-2 mb-8 animate-fade-in shadow-lg shadow-electric-cyan/20">
            <Sparkles size={16} className="text-electric-cyan-400 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-electric-cyan-400 to-electric-purple-400 bg-clip-text text-transparent">Ready to Transform with AI?</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-surface-900 dark:text-white mb-6 leading-tight animate-fade-in-up animation-delay-100">
            Start Your Journey to
            <br />
            <span className="gradient-text">Smarter Operations</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed animate-fade-in-up animation-delay-200">
            Join hundreds of businesses using Chrysolite AI to automate workflows,
            gain insights, and scale with confidence.
          </p>

          {/* CTA Buttons - Electric AI primary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-300">
            <Link
              href="/contact"
              className="group relative bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/50 hover:shadow-electric-purple/70 hover:scale-105 flex items-center gap-3 text-lg overflow-hidden"
            >
              <Sparkles size={24} className="relative z-10" />
              <span className="relative z-10">Start AI Transformation</span>
              <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </Link>

            <Link
              href="/contact"
              className="group bg-surface-100/50 dark:bg-surface-800/50 backdrop-blur-xl hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-bold px-10 py-5 rounded-xl transition-all duration-200 border-2 border-surface-300 dark:border-surface-700 hover:border-electric-cyan-400/50 flex items-center gap-3 text-lg"
            >
              <Calendar size={24} className="group-hover:text-electric-cyan-400 transition-colors" />
              <span>Book a Demo</span>
            </Link>
          </div>

          {/* Trust Indicators - Electric highlights */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-surface-600 dark:text-surface-400 text-sm animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-cyan-400 rounded-full animate-pulse"></div>
              <span>AI-powered platform</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-electric-purple-400 rounded-full animate-pulse animation-delay-200"></div>
              <span>Intelligent automation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-chrysolite-400 rounded-full animate-pulse animation-delay-300"></div>
              <span>White-glove onboarding</span>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-up animation-delay-500">
            <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">5 min</div>
              <div className="text-sm text-surface-600 dark:text-surface-400">Setup time</div>
            </div>
            <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-gold-400/30 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text-gold mb-2">24/7</div>
              <div className="text-sm text-surface-600 dark:text-surface-400">Expert support</div>
            </div>
            <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-sm text-surface-600 dark:text-surface-400">Uptime guarantee</div>
            </div>
          </div>

          {/* Bottom Social Proof */}
          <div className="mt-16 animate-fade-in-up animation-delay-1000">
            <p className="text-sm text-surface-500 mb-4">
              Trusted by businesses in 50+ countries
            </p>
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-gold-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
              <span className="text-surface-600 dark:text-surface-400 text-sm ml-2">4.9/5 average rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
