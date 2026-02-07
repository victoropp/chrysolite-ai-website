import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Target,
  Eye,
  Heart,
  Users,
  Sparkles,
  Shield,
  Zap,
  Globe,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Transforming Business with AI | Chrysolite AI',
  description: 'Learn about Chrysolite AI, our mission to empower businesses with intelligent ERP solutions, and the team building the future of enterprise software.',
}

const values = [
  {
    icon: Sparkles,
    title: 'Innovation First',
    description: 'We push boundaries with cutting-edge AI and technology to solve real business problems.',
  },
  {
    icon: Users,
    title: 'Customer Obsessed',
    description: 'Your success is our success. We build features and solutions our customers actually need.',
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We protect your data with enterprise-grade security and never compromise on privacy.',
  },
  {
    icon: Zap,
    title: 'Speed & Simplicity',
    description: "Complex doesn't mean complicated. We make powerful ERP simple and fast to use.",
  },
]

const milestones = [
  {
    year: '2023',
    title: 'Company Founded',
    description: 'Chrysolite AI was founded with a vision to democratize enterprise software for businesses of all sizes.',
  },
  {
    year: '2024',
    title: 'Product Launch',
    description: 'Launched our AI-powered ERP platform with accounting, inventory, and sales modules.',
  },
  {
    year: '2024',
    title: 'First 100 Customers',
    description: 'Reached 100+ active customers across Ghana and West Africa.',
  },
  {
    year: '2025',
    title: 'AI Accountant Release',
    description: 'Launched our groundbreaking AI Accountant feature, automating complex financial tasks.',
  },
  {
    year: '2026',
    title: 'Expansion & Growth',
    description: 'Expanding across Africa with new modules, partnerships, and enterprise features.',
  },
]

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Co-Founder',
    bio: 'Serial entrepreneur with 15+ years in enterprise software and AI.',
    image: '👨‍💼',
  },
  {
    name: 'Jane Smith',
    role: 'CTO & Co-Founder',
    bio: 'Former Google engineer specializing in machine learning and distributed systems.',
    image: '👩‍💻',
  },
  {
    name: 'Michael Johnson',
    role: 'Head of Product',
    bio: 'Product leader with expertise in ERP systems and user experience design.',
    image: '👨‍🎨',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of Customer Success',
    bio: 'Passionate about helping businesses succeed with the right technology.',
    image: '👩‍💼',
  },
]

export default function AboutPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Building the Future of Business Software
            </h1>
            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              We're on a mission to empower businesses across Africa with AI-powered ERP solutions
              that are simple, powerful, and built for modern operations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-surface-600 dark:text-surface-300 leading-relaxed">
                <p>
                  Chrysolite AI was born from a simple observation: businesses across Africa were being held back
                  by outdated, expensive, and overly complex ERP systems that weren't built for their needs.
                </p>
                <p>
                  We saw finance teams drowning in spreadsheets, inventory managers struggling with manual
                  stock counts, and business owners lacking real-time insights into their operations.
                  Meanwhile, modern AI technology was transforming industries worldwide—but not reaching
                  the businesses that needed it most.
                </p>
                <p>
                  So we set out to build something different. An ERP platform that's as intelligent as it is
                  intuitive. One that automates the tedious work, provides actionable insights, and scales
                  with your business—without requiring a PhD to operate.
                </p>
                <p>
                  Today, Chrysolite AI powers hundreds of businesses across Africa, from small startups to
                  large enterprises. We're just getting started.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-chrysolite-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target size={24} className="text-chrysolite-400" />
                    </div>
                    <div>
                      <h3 className="text-surface-900 dark:text-white font-semibold mb-2">Our Mission</h3>
                      <p className="text-surface-600 dark:text-surface-400 text-sm">
                        Democratize enterprise-grade business software by making it accessible,
                        affordable, and AI-powered for businesses of all sizes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-chrysolite-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Eye size={24} className="text-chrysolite-400" />
                    </div>
                    <div>
                      <h3 className="text-surface-900 dark:text-white font-semibold mb-2">Our Vision</h3>
                      <p className="text-surface-600 dark:text-surface-400 text-sm">
                        Become the leading AI-powered ERP platform across Africa, empowering
                        businesses to compete globally with world-class technology.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-chrysolite-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Heart size={24} className="text-chrysolite-400" />
                    </div>
                    <div>
                      <h3 className="text-surface-900 dark:text-white font-semibold mb-2">Our Commitment</h3>
                      <p className="text-surface-600 dark:text-surface-400 text-sm">
                        Relentless focus on customer success, continuous innovation, and building
                        technology that creates real value for businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              The principles that guide everything we build and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 text-center hover:border-chrysolite-500/30 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <value.icon size={32} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400">
              Key milestones in our mission to transform business software.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative flex items-start gap-8 group"
              >
                {/* Timeline Line */}
                {index !== milestones.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-surface-100 dark:bg-surface-800 group-hover:bg-chrysolite-500/30 transition-colors" />
                )}

                {/* Year Badge */}
                <div className="w-12 h-12 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-chrysolite/30 relative z-10">
                  <span className="text-surface-900 dark:text-white font-bold text-sm">{milestone.year.slice(2)}</span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-6 group-hover:border-chrysolite-500/30 transition-all">
                  <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-2">{milestone.title}</h3>
                  <p className="text-surface-600 dark:text-surface-400 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              The talented people building the future of enterprise software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-6 text-center hover:border-chrysolite-500/30 transition-all group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-surface-800 to-surface-700 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-1">{member.name}</h3>
                <div className="text-chrysolite-400 text-sm font-medium mb-3">{member.role}</div>
                <p className="text-surface-600 dark:text-surface-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-surface-600 dark:text-surface-400 mb-4">Want to join our team?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors"
            >
              We're hiring! Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-12 shadow-2xl">
            <Globe size={48} className="text-chrysolite-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
              Be part of the future of business software. Start your free trial today.
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
                href="/contact"
                className="w-full sm:w-auto bg-surface-100 dark:bg-surface-800 hover:bg-surface-700 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
