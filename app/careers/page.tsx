import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Briefcase,
  Heart,
  Zap,
  Users,
  TrendingUp,
  Globe,
  Coffee,
  Laptop,
  ArrowRight,
  Mail,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Chrysolite AI',
  description: 'Join Chrysolite AI and help build the future of business software. We\'re hiring talented people passionate about technology and innovation.',
}

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Everything we build starts with our customers\' needs.',
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'We ship quickly, iterate constantly, and learn from feedback.',
  },
  {
    icon: Users,
    title: 'Collaborate',
    description: 'Great ideas come from diverse perspectives working together.',
  },
  {
    icon: TrendingUp,
    title: 'Grow Together',
    description: 'We invest in your development and celebrate your wins.',
  },
]

const benefits = [
  {
    icon: Laptop,
    title: 'Remote-First',
    description: 'Work from anywhere in Africa with flexible hours.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Salary',
    description: 'Market-leading compensation with equity options.',
  },
  {
    icon: Coffee,
    title: 'Unlimited PTO',
    description: 'Take time off when you need it. We trust you.',
  },
  {
    icon: Globe,
    title: 'Global Team',
    description: 'Collaborate with talented people across Africa.',
  },
]

const openRoles = [
  {
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote (Africa)',
    type: 'Full-time',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote (Africa)',
    type: 'Full-time',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Accra, Ghana',
    type: 'Full-time',
  },
  {
    title: 'AI/ML Engineer',
    department: 'Engineering',
    location: 'Remote (Africa)',
    type: 'Full-time',
  },
]

export default function CareersPage() {
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
              <Briefcase size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Build the Future with Us
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              We're on a mission to transform how businesses across Africa operate.
              Join us and make an impact on thousands of companies.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              The principles that guide how we work and what we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center hover:border-chrysolite-500/30 transition-all"
              >
                <div className="w-16 h-16 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Perks & Benefits
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              We take care of our team so they can do their best work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center hover:border-chrysolite-500/30 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon size={32} className="text-chrysolite-400" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400">
              Join our growing team and help shape the future of ERP software.
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="group bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-6 hover:border-chrysolite-500/30 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-2 group-hover:text-chrysolite-400 transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-surface-600 dark:text-surface-400">
                      <span>{role.department}</span>
                      <span className="text-surface-700">•</span>
                      <span>{role.location}</span>
                      <span className="text-surface-700">•</span>
                      <span>{role.type}</span>
                    </div>
                  </div>
                  <Link
                    href={`mailto:careers@chrysoliteai.com?subject=Application: ${role.title}`}
                    className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors"
                  >
                    Apply Now
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              Don't see the perfect role? We're always looking for exceptional talent.
            </p>
            <Link
              href="mailto:careers@chrysoliteai.com"
              className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors"
            >
              Send us your resume
              <Mail size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
              Join our mission to transform business operations across Africa.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:careers@chrysoliteai.com"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                View Open Positions
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto bg-surface-100 dark:bg-surface-800 hover:bg-surface-700 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
