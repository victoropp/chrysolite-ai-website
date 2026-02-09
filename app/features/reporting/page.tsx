import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BarChart3,
  PieChart,
  LineChart,
  Table,
  Download,
  Share2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Reporting & Analytics | Chrysolite AI ERP',
  description: 'Powerful reporting and business intelligence with real-time dashboards, custom reports, data visualization, and automated insights.',
}

const features = [
  {
    icon: BarChart3,
    title: 'Real-Time Dashboards',
    description: 'Interactive dashboards with live data from all modules for instant business insights.',
  },
  {
    icon: PieChart,
    title: 'Business Intelligence',
    description: 'Advanced BI tools with drill-down capabilities and multi-dimensional analysis.',
  },
  {
    icon: LineChart,
    title: 'Trend Analysis',
    description: 'Visualize trends, compare periods, and forecast future performance.',
  },
  {
    icon: Table,
    title: 'Custom Reports',
    description: 'Build custom reports with drag-and-drop report designer and saved templates.',
  },
  {
    icon: Download,
    title: 'Export Options',
    description: 'Export reports to PDF, Excel, CSV with scheduled delivery via email.',
  },
  {
    icon: Share2,
    title: 'Report Sharing',
    description: 'Share reports securely with stakeholders and embed in presentations.',
  },
]

const benefits = [
  'Real-time financial and operational dashboards',
  'Pre-built reports for all modules (P&L, Balance Sheet, AR/AP aging)',
  'Drag-and-drop custom report builder with no coding',
  'Scheduled report generation and email delivery',
  'Role-based access control for sensitive reports',
  'Mobile-responsive charts and visualizations',
]

export default function ReportingFeaturePage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <BarChart3 size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Reporting & Analytics
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed">
              Transform data into insights with powerful reporting and business intelligence.
              Real-time dashboards, custom reports, and AI-powered analytics at your fingertips.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Request Access
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Powerful Reporting Features
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Everything you need to analyze, visualize, and share your business data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite/10 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Insights That Drive Decisions
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Make data-driven decisions with real-time dashboards and comprehensive reports.
                Our intuitive BI tools make complex analysis accessible to everyone.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                    <span className="text-surface-600 dark:text-surface-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-surface-900 dark:text-white font-semibold mb-6">Executive Dashboard</h3>

                {/* Revenue Chart */}
                <div className="mb-6 p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-surface-600 dark:text-surface-400 text-sm">Revenue Trend</span>
                    <span className="text-chrysolite-400 text-xs">+12.5%</span>
                  </div>
                  <div className="h-24 flex items-end gap-2">
                    {[45, 52, 48, 61, 55, 70, 65, 78, 72, 85, 90, 95].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-chrysolite-500 to-chrysolite-400 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-surface-500">
                    <span>Jan</span>
                    <span>Dec</span>
                  </div>
                </div>

                {/* KPIs Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div className="text-surface-600 dark:text-surface-400 text-xs mb-1">Net Profit</div>
                    <div className="text-surface-900 dark:text-white text-lg font-bold">$125K</div>
                    <div className="text-green-400 text-xs">+8.2%</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div className="text-surface-600 dark:text-surface-400 text-xs mb-1">Outstanding AR</div>
                    <div className="text-surface-900 dark:text-white text-lg font-bold">$65K</div>
                    <div className="text-red-400 text-xs">-5.1%</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div className="text-surface-600 dark:text-surface-400 text-xs mb-1">Inventory Value</div>
                    <div className="text-surface-900 dark:text-white text-lg font-bold">$234K</div>
                    <div className="text-green-400 text-xs">+3.4%</div>
                  </div>
                  <div className="p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <div className="text-surface-600 dark:text-surface-400 text-xs mb-1">Cash Position</div>
                    <div className="text-surface-900 dark:text-white text-lg font-bold">$448K</div>
                    <div className="text-green-400 text-xs">+12.7%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Reports for Every Module
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto mb-12">
            Pre-built reports and dashboards for accounting, sales, inventory, procurement,
            payroll, and more. All customizable to your needs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Financial', 'Sales', 'Inventory', 'Procurement', 'Payroll', 'CRM'].map((module) => (
              <div
                key={module}
                className="px-6 py-3 bg-surface-50 dark:bg-surface-900 border border-surface-300 dark:border-surface-700 rounded-xl text-surface-600 dark:text-surface-300 hover:border-chrysolite-500/30 hover:text-surface-900 dark:text-white transition-all"
              >
                {module}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Turn Data Into Action
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Join businesses making better decisions with powerful reporting and analytics.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.chrysoliteai.com/register"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Request Access
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
