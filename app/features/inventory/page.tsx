import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Package,
  Warehouse,
  BarChart2,
  TrendingDown,
  AlertTriangle,
  Scan,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Inventory Management | Chrysolite AI ERP',
  description: 'Complete inventory control with real-time tracking, warehouse management, multiple costing methods, and AI-powered stock optimization.',
}

const features = [
  {
    icon: Package,
    title: 'Stock Management',
    description: 'Real-time inventory tracking with batch, serial, and lot number support.',
  },
  {
    icon: Warehouse,
    title: 'Multi-Warehouse',
    description: 'Manage inventory across multiple locations with inter-warehouse transfers.',
  },
  {
    icon: BarChart2,
    title: 'Costing Methods',
    description: 'FIFO, LIFO, weighted average, and standard costing for accurate valuation.',
  },
  {
    icon: TrendingDown,
    title: 'Reorder Management',
    description: 'Automated reorder points with AI-powered demand forecasting.',
  },
  {
    icon: AlertTriangle,
    title: 'Low Stock Alerts',
    description: 'Real-time notifications for low stock, expiring items, and dead stock.',
  },
  {
    icon: Scan,
    title: 'Barcode Scanning',
    description: 'Mobile barcode scanning for stock takes, receipts, and dispatches.',
  },
]

const benefits = [
  'Real-time inventory visibility across all locations',
  'Automated stock valuation with configurable costing methods',
  'AI-powered demand forecasting and reorder optimization',
  'Batch and expiry tracking for perishable goods',
  'Cycle counting and perpetual inventory',
  'Integration with procurement and sales modules',
]

export default function InventoryFeaturePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <Package size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Inventory Management
            </h1>

            <p className="text-xl text-surface-300 mb-12 leading-relaxed">
              Complete inventory control with real-time tracking, warehouse management, and AI-powered
              optimization. Never run out of stock or overstock again.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-900 hover:bg-surface-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Inventory Features
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Everything you need to manage stock efficiently across multiple warehouses and locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite/10 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Smart Inventory Optimization
              </h2>
              <p className="text-lg text-surface-400 mb-8">
                Leverage AI-powered insights to optimize stock levels, reduce carrying costs, and
                prevent stockouts. Our intelligent system learns from your sales patterns.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                    <span className="text-surface-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-8 shadow-2xl">
                <div className="mb-6">
                  <h3 className="text-white font-semibold mb-4">Current Stock Levels</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-surface-950/50 rounded-xl">
                      <div>
                        <div className="text-white font-medium">Product A</div>
                        <div className="text-sm text-surface-400">Warehouse 1</div>
                      </div>
                      <div className="text-right">
                        <div className="text-chrysolite-400 font-semibold">1,234 units</div>
                        <div className="text-xs text-surface-500">In Stock</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface-950/50 rounded-xl">
                      <div>
                        <div className="text-white font-medium">Product B</div>
                        <div className="text-sm text-surface-400">Warehouse 2</div>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-semibold">45 units</div>
                        <div className="text-xs text-yellow-500">Low Stock</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface-950/50 rounded-xl">
                      <div>
                        <div className="text-white font-medium">Product C</div>
                        <div className="text-sm text-surface-400">Warehouse 1</div>
                      </div>
                      <div className="text-right">
                        <div className="text-red-400 font-semibold">8 units</div>
                        <div className="text-xs text-red-500">Reorder Now</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-surface-700 text-center text-sm text-surface-500">
                  Real-time inventory tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Seamless Integration
          </h2>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto mb-12">
            Inventory syncs automatically with procurement, sales, and accounting modules for
            complete operational visibility and automated stock valuation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Procurement', 'Sales', 'Accounting', 'Production', 'Warehouse', 'Reporting'].map((module) => (
              <div
                key={module}
                className="px-6 py-3 bg-surface-900 border border-surface-700 rounded-xl text-surface-300 hover:border-chrysolite-500/30 hover:text-white transition-all"
              >
                {module}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Optimize Your Inventory Today
          </h2>
          <p className="text-lg text-surface-400 mb-12">
            Join hundreds of businesses using Chrysolite AI to reduce inventory costs and improve stock accuracy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.chrysoliteai.com/register"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-surface-900 hover:bg-surface-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
