'use client'

import { UserPlus, Settings, Rocket, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const steps = [
  {
    icon: UserPlus,
    number: 1,
    title: 'Sign Up & Setup',
    description: 'Create your account in seconds. Our intelligent onboarding wizard guides you through configuration tailored to your industry and business size.',
    features: ['No credit card required', '5-minute setup', 'Pre-configured templates'],
  },
  {
    icon: Settings,
    number: 2,
    title: 'Customize & Configure',
    description: 'Adapt Chrysolite AI to your unique workflows. Import existing data, set up integrations, and configure permissions with ease.',
    features: ['Data import tools', 'API integrations', 'Role-based access'],
  },
  {
    icon: Rocket,
    number: 3,
    title: 'Launch & Scale',
    description: 'Start managing your business operations immediately. Our AI learns from your patterns and continuously optimizes for your success.',
    features: ['Real-time insights', 'AI automation', 'Unlimited growth'],
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-surface-50 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,rgba(255,255,255,0.05),transparent)] opacity-30"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-chrysolite-vivid rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-gold-400/10 border border-gold-400/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-gold-400">Simple Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white mb-4">
            Get Started in <span className="gradient-text-gold">3 Easy Steps</span>
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto">
            From signup to full operation in minutes, not months
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-chrysolite-500/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-chrysolite-500/50 via-gold-400/50 to-chrysolite-500/50 blur-xl"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={cn(
                  'relative animate-fade-in-up',
                  index === 0 && 'animation-delay-100',
                  index === 1 && 'animation-delay-300',
                  index === 2 && 'animation-delay-500'
                )}
              >
                {/* Card */}
                <div className="relative bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-200 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 group">
                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-chrysolite-500/0 to-gold-400/0 group-hover:from-chrysolite-500/5 group-hover:to-gold-400/5 rounded-2xl transition-all duration-300"></div>

                  {/* Number Badge */}
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-chrysolite-500 to-chrysolite-600 rounded-xl flex items-center justify-center shadow-lg shadow-chrysolite-500/30 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  <div className="relative pt-8">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400/20 to-chrysolite-500/20 rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                      <step.icon size={32} className="text-chrysolite-400" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-3 group-hover:text-chrysolite-400 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-surface-600 dark:text-surface-300 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-surface-600 dark:text-surface-400">
                          <div className="w-1.5 h-1.5 bg-chrysolite-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-chrysolite-500 rounded-full"></div>
                      <div className="w-1 h-1 bg-gold-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-8 text-chrysolite-500/30">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/40 hover:shadow-electric-purple/60 hover:scale-105 group"
          >
            <Sparkles size={20} />
            <span>Request Access</span>
            <Rocket size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
