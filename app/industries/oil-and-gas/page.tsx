import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Droplet,
  Shield,
  BarChart3,
  TrendingUp,
  Gauge,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Eye,
  ArrowRight,
  Package,
  FileCheck,
  DollarSign,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Oil & Gas ERP for Ghana | Transform Your Petroleum Operations | Chrysolite AI',
  description: 'Purpose-built ERP for Ghana\'s petroleum industry. Eliminate revenue leakage, automate compliance, and scale operations—from LPG distribution to filling station management. Trusted by leading petroleum companies.',
  keywords: 'oil and gas ERP Ghana, petroleum management software, LPG distribution software, filling station management system, petroleum compliance NPA, oil marketing company ERP, LPG cylinder tracking Ghana',
}

const capabilities = [
  {
    icon: Package,
    title: 'End Inventory Leakage',
    description: 'Know exactly where every cylinder is, at every moment. Track from depot to customer and back with pinpoint accuracy. Recover thousands monthly from improved asset accountability.',
  },
  {
    icon: Zap,
    title: 'Streamline Operations',
    description: 'Automate daily tasks that waste hours of your team\'s time. From pump readings to cash reconciliation—let intelligent automation handle the busywork while your team focuses on growth.',
  },
  {
    icon: Shield,
    title: 'Stay Compliant, Stress-Free',
    description: 'Never worry about NPA audits or tax penalties again. Automatic levy calculations, transport claims, and regulatory reporting keep you audit-ready 24/7 without the headaches.',
  },
  {
    icon: Eye,
    title: 'See Your Entire Business in Real-Time',
    description: 'One dashboard. Every location. Every metric that matters. Make confident decisions with instant visibility across all operations—no more flying blind or waiting for reports.',
  },
  {
    icon: TrendingUp,
    title: 'Maximize Production Efficiency',
    description: 'Identify bottlenecks and optimize every step of your operation. From bottling throughput to delivery routes—eliminate waste and increase margins with data-driven insights.',
  },
  {
    icon: BarChart3,
    title: 'Scale Without Chaos',
    description: 'Grow from 5 to 50 locations without adding complexity. Infrastructure that adapts as you expand—add sites, users, and products without slowing down or losing control.',
  },
]

const benefits = [
  'Reclaim lost revenue from inventory shrinkage and theft',
  'Sleep better with automatic compliance and audit readiness',
  'Operate with confidence using real-time visibility',
  'Free your team from hours of manual data entry',
  'Make smarter decisions with AI-powered insights',
  'Grow fearlessly with systems that scale with you',
  'Save time and money with one unified platform',
  'Stay ahead of Ghana\'s evolving petroleum regulations',
]

const industrySegments = [
  {
    icon: Droplet,
    title: 'LPG Marketing Companies',
    challenge: 'Losing cylinders? Revenue slipping through the cracks?',
    solution: 'Track every cylinder from depot to customer and back—with pinpoint accuracy. Know exactly which customer has which cylinder, when it needs refilling, and where your assets are at all times.',
    outcome: 'Companies like yours recover thousands monthly from improved cylinder accountability.',
    stats: '98% Asset Visibility',
  },
  {
    icon: Gauge,
    title: 'Filling Station Owners',
    challenge: 'Spending hours on daily reports and reconciliations?',
    solution: 'Automate pump readings, cash management, and variance tracking. Generate NPA-compliant reports in seconds, not hours. Catch discrepancies before they become losses.',
    outcome: 'Run your station in half the time with complete control.',
    stats: '60% Faster Reconciliation',
  },
  {
    icon: FileCheck,
    title: 'Oil Marketing Companies',
    challenge: 'Struggling with transport claims and levy calculations?',
    solution: 'Automate UPPF transport claims and NPA-compliant levy reporting. Track every liter from depot to retail, calculate levies automatically, and stay audit-ready without manual spreadsheets.',
    outcome: 'Get reimbursed faster and never miss a compliance deadline.',
    stats: '100% Audit Ready',
  },
]

export default function OilAndGasPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-electric-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-chrysolite-500/10 to-gold-400/10 border border-chrysolite-500/30 rounded-full mb-8 animate-fade-in">
              <Droplet size={20} className="text-chrysolite-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-chrysolite-500 to-gold-400 bg-clip-text text-transparent">
                Purpose-Built for Ghana's Petroleum Industry
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6 animate-fade-in-up">
              Transform Your Petroleum Operations
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              The only ERP purpose-built for Ghana's oil & gas industry. From LPG distribution to
              filling station management—run your entire operation on one intelligent platform.
            </p>

            <p className="text-lg text-surface-700 dark:text-surface-400 mb-12 font-medium animate-fade-in-up animation-delay-400">
              Stop losing revenue to inefficiencies. Start making data-driven decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/40 hover:shadow-electric-purple/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                See It In Action
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Agitation Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Running a Petroleum Business Shouldn't Be This Hard
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              You're not alone. Petroleum companies across Ghana face the same challenges every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8">
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                <DollarSign size={28} className="text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                Revenue Disappearing?
              </h3>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                Cylinder losses, shrinkage, and theft eating into your margins. You know there's leakage
                but can't pinpoint exactly where or how much it's costing you.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8">
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                <Clock size={28} className="text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                Drowning in Paperwork?
              </h3>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                Hours spent on manual reports, levy calculations, and compliance documentation. Your team
                is buried in spreadsheets instead of focusing on growing the business.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8">
              <div className="w-14 h-14 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle size={28} className="text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                Flying Blind?
              </h3>
              <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                No real-time visibility across locations. Making decisions based on outdated reports
                or gut feeling instead of real data. Surprises you don't want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Showcase - Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              One Platform. Complete Control.
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Everything you need to eliminate inefficiencies, recover lost revenue, and scale with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite/10 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-chrysolite-500/20 to-electric-cyan-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <capability.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Built for Your Exact Business
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Whether you distribute LPG, operate filling stations, or manage depot operations—
              we speak your language and solve your specific problems.
            </p>
          </div>

          <div className="space-y-8">
            {industrySegments.map((segment, index) => (
              <div
                key={segment.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 lg:p-12 hover:border-chrysolite-500/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="grid lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center">
                      <segment.icon size={32} className="text-chrysolite-400" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-surface-900 dark:text-white">
                      {segment.title}
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <p className="text-red-600 dark:text-red-400 font-semibold mb-1">
                          The Challenge:
                        </p>
                        <p className="text-surface-600 dark:text-surface-400">
                          {segment.challenge}
                        </p>
                      </div>

                      <div>
                        <p className="text-chrysolite-600 dark:text-chrysolite-400 font-semibold mb-1">
                          The Solution:
                        </p>
                        <p className="text-surface-600 dark:text-surface-400">
                          {segment.solution}
                        </p>
                      </div>

                      <div>
                        <p className="text-electric-cyan-600 dark:text-electric-cyan-400 font-semibold mb-1">
                          The Outcome:
                        </p>
                        <p className="text-surface-600 dark:text-surface-400">
                          {segment.outcome}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-chrysolite-500/10 to-gold-400/10 border border-chrysolite-500/30 rounded-xl px-6 py-4 text-center">
                      <p className="text-3xl font-bold text-chrysolite-500 mb-1">
                        {segment.stats}
                      </p>
                      <p className="text-sm text-surface-600 dark:text-surface-400">
                        Typical Result
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Trust Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Why Petroleum Companies Choose Chrysolite AI
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Built specifically for Ghana's petroleum industry—not a generic solution forced to fit.
                Experience the difference when your ERP truly understands your business.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle2 size={24} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                    <span className="text-surface-600 dark:text-surface-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-6 text-center">
                  Trusted by Leading Companies
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">Locations Managed</span>
                    <span className="text-2xl font-bold text-chrysolite-500">100+</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">Transactions Monthly</span>
                    <span className="text-2xl font-bold text-chrysolite-500">Millions</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-surface-950/50 rounded-xl">
                    <span className="text-surface-600 dark:text-surface-400">Uptime Guarantee</span>
                    <span className="text-2xl font-bold text-chrysolite-500">99.9%</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-surface-300 dark:border-surface-700">
                  <blockquote className="text-surface-600 dark:text-surface-300 italic text-center">
                    "Finally, software that understands the petroleum business in Ghana."
                  </blockquote>
                  <p className="text-surface-500 text-sm text-center mt-3">
                    — Operations Director, Leading LPGMC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ghana Compliance Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Built for Ghana, Built to Comply
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Stay audit-ready without the headaches. Compliance and regulatory reporting handled automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-chrysolite-400" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                NPA Compliance
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                Automatic levy calculations, transport claims, and regulatory reporting that keeps
                you audit-ready 24/7. Never miss a deadline or face penalties again.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <FileCheck size={32} className="text-chrysolite-400" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                GRA Reporting
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                Seamless tax reporting and compliance. Generate accurate VAT, NHIL, and other tax
                reports automatically—no manual calculations or spreadsheet errors.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-chrysolite-400" />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                Future-Proof
              </h3>
              <p className="text-surface-600 dark:text-surface-400">
                Regulations change—your system shouldn't break. Automatic updates ensure you're
                always compliant with the latest requirements without disruption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
            Join petroleum companies across Ghana who've already made the switch to intelligent,
            automated operations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/40 hover:shadow-electric-purple/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
            >
              Schedule a Demo
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-surface-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-chrysolite-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-chrysolite-400" />
              <span>White-glove onboarding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-chrysolite-400" />
              <span>Invitation-based access</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
