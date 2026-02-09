import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Rocket,
  CheckCircle2,
  Clock,
  Lightbulb,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Roadmap - What\'s Next | Chrysolite AI',
  description: 'See what we\'re building next. Our product roadmap shows upcoming features, improvements, and innovations planned for Chrysolite AI ERP.',
}

const roadmapItems = [
  {
    quarter: 'Q1 2026',
    status: 'in-progress',
    icon: Clock,
    color: 'from-blue-500 to-cyan-500',
    features: [
      {
        title: 'Mobile App (iOS & Android)',
        description: 'Native mobile apps with offline capabilities and push notifications.',
      },
      {
        title: 'Multi-Entity Management',
        description: 'Manage multiple legal entities and consolidate financials across organizations.',
      },
      {
        title: 'Enhanced Banking Integration',
        description: 'Direct bank feeds and automated reconciliation for major African banks.',
      },
      {
        title: 'Project Management Module',
        description: 'Track projects, budgets, and resources with Gantt charts and time tracking.',
      },
    ],
  },
  {
    quarter: 'Q2 2026',
    status: 'planned',
    icon: Lightbulb,
    color: 'from-purple-500 to-pink-500',
    features: [
      {
        title: 'E-Commerce Integration',
        description: 'Connect your online store with inventory and order management.',
      },
      {
        title: 'Manufacturing Module',
        description: 'Production planning, bill of materials, and shop floor management.',
      },
      {
        title: 'Supply Chain Optimization',
        description: 'AI-powered demand forecasting and inventory optimization.',
      },
      {
        title: 'Advanced Compliance Tools',
        description: 'Automated compliance reporting for GRA, SEC, and other regulatory bodies.',
      },
    ],
  },
  {
    quarter: 'Q3 2026',
    status: 'planned',
    icon: Lightbulb,
    color: 'from-green-500 to-emerald-500',
    features: [
      {
        title: 'White-Label Solution',
        description: 'Rebrand and customize the platform for resellers and partners.',
      },
      {
        title: 'Blockchain Integration',
        description: 'Immutable audit trails and smart contracts for supply chain transparency.',
      },
      {
        title: 'Global Expansion Features',
        description: 'Support for 100+ currencies and country-specific tax regulations.',
      },
      {
        title: 'Advanced HR & Payroll',
        description: 'Employee self-service portal, performance management, and benefits administration.',
      },
    ],
  },
  {
    quarter: 'Q4 2026',
    status: 'planned',
    icon: Lightbulb,
    color: 'from-orange-500 to-red-500',
    features: [
      {
        title: 'IoT & Smart Warehouse',
        description: 'Connect IoT devices for real-time tracking and automated warehouse operations.',
      },
      {
        title: 'Advanced Security Suite',
        description: 'Enhanced encryption, biometric authentication, and security compliance tools.',
      },
      {
        title: 'Partner & Channel Management',
        description: 'Manage distributors, resellers, and channel partners with dedicated portals.',
      },
      {
        title: 'Sustainability Tracking',
        description: 'Carbon footprint tracking and ESG reporting for sustainability compliance.',
      },
    ],
  },
]

const completedFeatures = [
  'AI Accountant with natural language queries',
  'Complete accounting suite (GL, AP, AR)',
  'Inventory management with barcode scanning',
  'Sales and procurement automation',
  'Payroll processing with tax calculations',
  'Fixed assets and depreciation tracking',
  'CRM with sales pipeline management',
  'Banking and reconciliation',
  'Real-time reporting and dashboards',
  'Multi-currency support',
  'Role-based access control',
  'API and webhook integrations',
]

const recentlyShippedFeatures = [
  {
    title: 'Advanced AI Insights',
    description: 'Predictive cash flow forecasting, anomaly detection, and intelligent pattern recognition across all financial modules.',
    shippedDate: 'January 2026',
  },
  {
    title: 'Business Intelligence Suite',
    description: 'Advanced analytics engine with machine learning models, predictive reports, and automated financial insights.',
    shippedDate: 'January 2026',
  },
  {
    title: 'Voice Commands & AI Assistant',
    description: 'Control your ERP with voice commands and get instant answers through our conversational AI assistant.',
    shippedDate: 'January 2026',
  },
  {
    title: 'Visual Workflow Automation',
    description: 'Intelligent workflow engine with conditional logic, multi-step approvals, and automated business processes.',
    shippedDate: 'January 2026',
  },
  {
    title: 'Custom Dashboard Builder',
    description: 'Create personalized dashboards with custom widgets, KPIs, and real-time data visualizations.',
    shippedDate: 'January 2026',
  },
]

export default function RoadmapPage() {
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
              <Rocket size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Building the Future of ERP
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              See what we're working on next. Our roadmap is driven by customer feedback
              and our vision to create the most powerful yet simple ERP platform.
            </p>
          </div>
        </div>
      </section>

      {/* Recently Shipped Features */}
      <section className="py-24 bg-gradient-to-br from-electric-cyan-50/30 to-electric-purple-50/30 dark:from-surface-900/30 dark:to-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Sparkles size={32} className="text-electric-cyan-500" />
              <h2 className="text-3xl font-bold text-surface-900 dark:text-white">Recently Shipped</h2>
            </div>
            <p className="text-lg text-surface-600 dark:text-surface-400">
              Latest features we've delivered this quarter
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {recentlyShippedFeatures.map((feature) => (
              <div
                key={feature.title}
                className="relative bg-white/80 dark:bg-surface-900/80 backdrop-blur-sm border-2 border-electric-cyan-500/20 dark:border-electric-purple-500/20 rounded-2xl p-6 hover:border-electric-cyan-500/50 dark:hover:border-electric-purple-500/50 transition-all shadow-lg hover:shadow-electric-cyan-500/20"
              >
                <div className="absolute top-4 right-4 bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  NEW
                </div>
                <h3 className="text-lg font-bold text-surface-900 dark:text-white mb-2 pr-12">
                  {feature.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed mb-3">
                  {feature.description}
                </p>
                <p className="text-electric-cyan-600 dark:text-electric-cyan-400 text-xs font-semibold">
                  {feature.shippedDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Features */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <CheckCircle2 size={32} className="text-green-400" />
              <h2 className="text-3xl font-bold text-surface-900 dark:text-white">Core Platform</h2>
            </div>
            <p className="text-lg text-surface-600 dark:text-surface-400">
              Foundational features available in every deployment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {completedFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-4"
              >
                <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-surface-600 dark:text-surface-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              What's Coming Next
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Our quarterly roadmap showing planned features and improvements.
            </p>
          </div>

          <div className="space-y-12">
            {roadmapItems.map((quarter) => (
              <div key={quarter.quarter} className="relative">
                <div className="flex items-start gap-6">
                  {/* Quarter Badge */}
                  <div className="flex-shrink-0">
                    <div className={`w-24 h-24 bg-gradient-to-br ${quarter.color} rounded-2xl flex flex-col items-center justify-center shadow-lg`}>
                      <quarter.icon size={32} className="text-surface-900 dark:text-white mb-1" />
                      <span className="text-surface-900 dark:text-white font-bold text-sm">{quarter.quarter}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="grid md:grid-cols-2 gap-6">
                      {quarter.features.map((feature) => (
                        <div
                          key={feature.title}
                          className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-6 hover:border-chrysolite-500/30 transition-all"
                        >
                          <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-12 shadow-2xl">
            <Sparkles size={48} className="text-chrysolite-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
              Help Shape Our Roadmap
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
              Your feedback drives our product direction. Have a feature request or idea?
              We'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Submit Feature Request
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/community"
                className="w-full sm:w-auto bg-surface-100 dark:bg-surface-800 hover:bg-surface-700 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Join Community
              </Link>
            </div>

            <p className="mt-6 text-surface-500 text-sm">
              Roadmap dates are estimates and subject to change based on priorities and feedback.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
