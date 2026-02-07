import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Award,
  TrendingUp,
  ArrowRight,
  Building,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Customer Success Stories | Chrysolite AI',
  description: 'Read how businesses across Africa are transforming their operations with Chrysolite AI ERP. Real results from real customers.',
}

export default function CaseStudiesPage() {
  return (
    <main className="bg-surface-950 min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <Award size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Customer Success Stories
            </h1>

            <p className="text-xl text-surface-300 mb-8 leading-relaxed">
              See how businesses are transforming their operations and achieving real results with Chrysolite AI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-16 text-center shadow-2xl">
            <Building size={48} className="text-chrysolite-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Success Stories Coming Soon
            </h2>

            <p className="text-lg text-surface-400 mb-12 leading-relaxed">
              We're working with our customers to document their success stories and the
              transformative impact Chrysolite AI has had on their businesses.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                <div className="text-4xl font-bold text-chrysolite-400 mb-2">100+</div>
                <p className="text-surface-400 text-sm">Happy Customers</p>
              </div>
              <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                <div className="text-4xl font-bold text-chrysolite-400 mb-2">80%</div>
                <p className="text-surface-400 text-sm">Time Saved on Manual Tasks</p>
              </div>
              <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                <div className="text-4xl font-bold text-chrysolite-400 mb-2">95%</div>
                <p className="text-surface-400 text-sm">Customer Satisfaction Rate</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Your Success Story
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-800 hover:bg-surface-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Chrysolite AI powers businesses across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              'Manufacturing',
              'Distribution',
              'Retail',
              'Services',
              'Healthcare',
              'Education',
              'Hospitality',
              'Construction',
            ].map((industry) => (
              <div
                key={industry}
                className="bg-surface-900/50 border border-surface-800 rounded-xl p-4 text-center hover:border-chrysolite-500/30 transition-all"
              >
                <span className="text-surface-300">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
