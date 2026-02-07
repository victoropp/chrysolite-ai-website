import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Activity,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'System Status - Uptime & Performance | Chrysolite AI',
  description: 'Real-time status and uptime monitoring for Chrysolite AI ERP platform. Check system health and service availability.',
}

const services = [
  { name: 'API Services', status: 'operational' },
  { name: 'Web Application', status: 'operational' },
  { name: 'Database', status: 'operational' },
  { name: 'Authentication', status: 'operational' },
  { name: 'Payment Processing', status: 'operational' },
  { name: 'Email Notifications', status: 'operational' },
]

export default function StatusPage() {
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
              <Activity size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              System Status
            </h1>

            <p className="text-xl text-surface-300 mb-8 leading-relaxed">
              Real-time platform status and uptime information.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-xl">
              <CheckCircle2 size={24} className="text-green-400" />
              <span className="text-green-400 font-semibold">All Systems Operational</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Service Status</h2>

            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between p-4 bg-surface-950/50 rounded-xl border border-surface-800"
                >
                  <span className="text-white font-medium">{service.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-surface-700">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-chrysolite-400 mb-2">99.9%</div>
                  <p className="text-surface-400 text-sm">Uptime (30 days)</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-chrysolite-400 mb-2">&lt;100ms</div>
                  <p className="text-surface-400 text-sm">Avg Response Time</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-chrysolite-400 mb-2">0</div>
                  <p className="text-surface-400 text-sm">Incidents (30 days)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Subscribe to Status Updates
          </h2>
          <p className="text-lg text-surface-400 mb-8">
            Get notified about service interruptions and maintenance windows.
          </p>

          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-surface-900 border border-surface-800 rounded-xl text-white placeholder:text-surface-500 focus:outline-none focus:border-chrysolite-500/50 transition-colors"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/30 hover:shadow-chrysolite/50">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-lg text-surface-400 mb-8">
            If you're experiencing issues, our support team is here to help.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/help"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Contact Support
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/docs"
              className="w-full sm:w-auto bg-surface-900 hover:bg-surface-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
