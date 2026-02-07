import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Users,
  DollarSign,
  FileText,
  Shield,
  Calculator,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payroll Management | Chrysolite AI ERP',
  description: 'Complete payroll solution with employee management, PAYE, SSNIT, tier 3 pensions, automated payslips, and statutory compliance.',
}

const features = [
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Centralized employee database with contracts, documents, and performance tracking.',
  },
  {
    icon: DollarSign,
    title: 'Salary Processing',
    description: 'Automated salary calculations with earnings, deductions, and net pay computation.',
  },
  {
    icon: Calculator,
    title: 'Tax Calculation',
    description: 'Automatic PAYE, SSNIT, and tier 3 pension calculations based on statutory rates.',
  },
  {
    icon: FileText,
    title: 'Payslip Generation',
    description: 'Professional payslips with detailed breakdowns and employee self-service portal.',
  },
  {
    icon: Shield,
    title: 'Compliance',
    description: 'Stay compliant with labor laws, tax regulations, and statutory reporting.',
  },
  {
    icon: Calendar,
    title: 'Leave Management',
    description: 'Track annual leave, sick leave, and attendance with approval workflows.',
  },
]

const benefits = [
  'Automated PAYE and SSNIT calculations per Ghana tax laws',
  'Multi-entity payroll with consolidated reporting',
  'Direct bank payment integration and batch transfers',
  'Employee self-service for payslips and leave requests',
  'Statutory reporting (SSNIT, GRA, tier 3 contributions)',
  'Integration with accounting for automated journal postings',
]

export default function PayrollFeaturePage() {
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
              <Users size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Payroll Management
            </h1>

            <p className="text-xl text-surface-300 mb-12 leading-relaxed">
              Comprehensive payroll solution with automated tax calculations, statutory compliance,
              and employee self-service. Pay your team accurately and on time, every time.
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

      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Complete Payroll Features
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Everything you need to manage employee compensation, taxes, and compliance.
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

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Automated Statutory Compliance
              </h2>
              <p className="text-lg text-surface-400 mb-8">
                Stay compliant with Ghana's tax and labor regulations. Automatic PAYE, SSNIT,
                and tier 3 pension calculations based on current statutory rates.
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
                <h3 className="text-white font-semibold mb-6">Sample Payslip</h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-3 bg-surface-950/50 rounded-lg">
                    <span className="text-surface-400">Basic Salary</span>
                    <span className="text-white font-semibold">GH₵ 5,000.00</span>
                  </div>
                  <div className="flex justify-between p-3 bg-surface-950/50 rounded-lg">
                    <span className="text-surface-400">Allowances</span>
                    <span className="text-white font-semibold">GH₵ 1,500.00</span>
                  </div>
                  <div className="flex justify-between p-3 bg-surface-950/50 rounded-lg border-t border-surface-700 pt-3">
                    <span className="text-surface-400">Gross Pay</span>
                    <span className="text-white font-semibold">GH₵ 6,500.00</span>
                  </div>
                  <div className="flex justify-between p-3 bg-surface-950/50 rounded-lg">
                    <span className="text-surface-400">PAYE</span>
                    <span className="text-red-400 font-semibold">- GH₵ 890.00</span>
                  </div>
                  <div className="flex justify-between p-3 bg-surface-950/50 rounded-lg">
                    <span className="text-surface-400">SSNIT (5.5%)</span>
                    <span className="text-red-400 font-semibold">- GH₵ 357.50</span>
                  </div>
                  <div className="flex justify-between p-3 bg-surface-950/50 rounded-lg">
                    <span className="text-surface-400">Tier 3 (5%)</span>
                    <span className="text-red-400 font-semibold">- GH₵ 325.00</span>
                  </div>
                  <div className="flex justify-between p-4 bg-chrysolite-500/10 rounded-lg border border-chrysolite-500/30 mt-4">
                    <span className="text-white font-semibold">Net Pay</span>
                    <span className="text-chrysolite-400 text-xl font-bold">GH₵ 4,927.50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Seamless Integration
          </h2>
          <p className="text-lg text-surface-400 max-w-2xl mx-auto mb-12">
            Payroll integrates with accounting, banking, and HR modules for complete
            employee lifecycle management and automated financial postings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8">
            {['Accounting', 'Banking', 'HR', 'Time & Attendance', 'Reporting', 'Analytics'].map((module) => (
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

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Simplify Payroll Today
          </h2>
          <p className="text-lg text-surface-400 mb-12">
            Join businesses managing payroll with confidence and compliance.
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
