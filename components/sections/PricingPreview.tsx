'use client'

import Link from 'next/link'
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'

const benefits = [
  'Custom module selection',
  'Flexible user licensing',
  'Dedicated support team',
  'Implementation assistance',
  'Training & onboarding',
  'Regular updates included',
]

export default function PricingPreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gold-400/10 border border-gold-400/30 rounded-full px-4 py-2 mb-4">
              <span className="text-sm font-medium text-gold-400">Flexible Pricing</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white mb-4">
              Pricing <span className="gradient-text-gold">Tailored to Your Business</span>
            </h2>
            <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto">
              No one-size-fits-all plans. We customize our pricing based on your specific needs,
              company size, and the modules you require.
            </p>
          </div>

          {/* Main Pricing Card */}
          <div className="relative bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-3xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-chrysolite-500/5 via-transparent to-gold-400/5"></div>

            {/* Gold Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-chrysolite-500 via-gold-400 to-chrysolite-500"></div>

            <div className="relative grid lg:grid-cols-2 gap-12 p-12">
              {/* Left: Description */}
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-2xl shadow-lg shadow-gold-400/30">
                  <Sparkles size={32} className="text-surface-900 dark:text-white" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-surface-900 dark:text-white mb-4">
                    Built for Your Unique Needs
                  </h3>
                  <p className="text-lg text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
                    Every business is different. Whether you're a small startup or an enterprise with
                    complex requirements, we'll create a package that fits your budget and goals.
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-chrysolite-400 mt-0.5 flex-shrink-0" />
                      <span className="text-surface-600 dark:text-surface-200">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="pt-6">
                  <div className="inline-flex items-center gap-2 bg-surface-100/50 dark:bg-surface-800/50 border border-surface-300 dark:border-surface-700 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-surface-600 dark:text-surface-300">No hidden fees • Cancel anytime</span>
                  </div>
                </div>
              </div>

              {/* Right: CTA Section */}
              <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-8">
                <div>
                  <div className="text-6xl font-bold gradient-text-gold mb-2">Custom</div>
                  <p className="text-surface-600 dark:text-surface-400 text-lg">Pricing based on your requirements</p>
                </div>

                <div className="w-full max-w-md">
                  <p className="text-surface-600 dark:text-surface-300 mb-6">
                    Get a personalized quote in minutes. Our team will work with you to understand
                    your needs and provide transparent pricing with no surprises.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      className="group bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-gold-400/40 hover:shadow-gold-400/60 hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <span>Contact Sales</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="https://app.chrysoliteai.com/register"
                      className="group bg-surface-100/50 dark:bg-surface-800/50 backdrop-blur-xl hover:bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50 flex items-center justify-center gap-2"
                    >
                      <span>Start Free Trial</span>
                      <Sparkles size={20} className="group-hover:text-chrysolite-400 transition-colors" />
                    </Link>
                  </div>

                  <p className="text-sm text-surface-500 mt-4">
                    14-day free trial • No credit card required
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-white/50 dark:bg-surface-900/30 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-surface-600 dark:text-surface-400">Modules & Features</div>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-surface-900/30 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl">
              <div className="text-3xl font-bold gradient-text-gold mb-2">24/7</div>
              <div className="text-sm text-surface-600 dark:text-surface-400">Customer Support</div>
            </div>
            <div className="text-center p-6 bg-white/50 dark:bg-surface-900/30 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-xl">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-sm text-surface-600 dark:text-surface-400">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
