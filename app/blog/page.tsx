import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  BookOpen,
  Mail,
  ArrowRight,
  Bell,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - Insights & Updates | Chrysolite AI',
  description: 'Stay updated with the latest insights, product updates, and industry trends from Chrysolite AI. Learn about ERP, AI, and business automation.',
}

export default function BlogPage() {
  return (
    <main className="bg-white dark:bg-surface-950 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <BookOpen size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Insights & Updates
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              Stay informed with the latest product updates, industry insights,
              and best practices for modern business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-16 text-center shadow-2xl">
            <div className="w-24 h-24 bg-chrysolite-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Bell size={48} className="text-chrysolite-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
              Our Blog is Coming Soon
            </h2>

            <p className="text-lg text-surface-600 dark:text-surface-400 mb-12 leading-relaxed">
              We're working on bringing you valuable content about ERP, AI, business automation,
              and success stories from our customers. Subscribe to get notified when we launch.
            </p>

            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <h3 className="text-surface-900 dark:text-white font-semibold mb-4">Get Notified When We Launch</h3>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-surface-50 dark:bg-surface-900 border border-surface-300 dark:border-surface-800 rounded-xl text-surface-900 dark:text-white placeholder:text-surface-500 focus:outline-none focus:border-chrysolite-500/50 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/30 hover:shadow-chrysolite/50 flex items-center gap-2">
                  Subscribe
                  <Mail size={18} />
                </button>
              </div>
              <p className="text-surface-500 text-sm mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Here's what we'll be covering when our blog launches.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">Product Updates</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Stay informed about new features, improvements, and platform updates.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">Industry Insights</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Learn about ERP trends, business automation, and AI applications.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">Customer Stories</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Read how businesses are transforming operations with Chrysolite AI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Meanwhile, Experience Chrysolite AI
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
            While you wait for our blog, why not try our platform?
            Start your free trial today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.chrysoliteai.com/register"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
