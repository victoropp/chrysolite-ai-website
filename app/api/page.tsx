import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Code,
  ArrowRight,
  Zap,
  Lock,
  FileCode,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'API Reference - Developer Documentation | Chrysolite AI',
  description: 'Complete API documentation for Chrysolite AI ERP. Build custom integrations and extend platform functionality with our REST API.',
}

export default function APIPage() {
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
              <Code size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              API Reference
            </h1>

            <p className="text-xl text-surface-300 mb-8 leading-relaxed">
              Build powerful integrations with our comprehensive REST API.
              Access all platform data and functionality programmatically.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-16 text-center shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              API Documentation Coming Soon
            </h2>

            <p className="text-lg text-surface-400 mb-12 leading-relaxed">
              We're preparing comprehensive API documentation with code examples,
              authentication guides, and interactive endpoints explorer.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                <Zap size={32} className="text-chrysolite-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">RESTful API</h3>
                <p className="text-surface-400 text-sm">Clean, predictable endpoints</p>
              </div>
              <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                <Lock size={32} className="text-chrysolite-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">OAuth 2.0</h3>
                <p className="text-surface-400 text-sm">Secure authentication</p>
              </div>
              <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                <FileCode size={32} className="text-chrysolite-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Webhooks</h3>
                <p className="text-surface-400 text-sm">Real-time events</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Request API Access
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/integrations"
                className="w-full sm:w-auto bg-surface-800 hover:bg-surface-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
              >
                View Integrations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
