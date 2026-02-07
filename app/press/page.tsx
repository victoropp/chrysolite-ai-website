import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Newspaper,
  Download,
  Mail,
  FileText,
  Image as ImageIcon,
  Video,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Press Kit - Media Resources | Chrysolite AI',
  description: 'Media resources, press releases, and brand assets for Chrysolite AI. Download logos, product screenshots, and company information.',
}

const pressResources = [
  {
    icon: FileText,
    title: 'Company Fact Sheet',
    description: 'Key facts, statistics, and company overview.',
    action: 'Download PDF',
  },
  {
    icon: ImageIcon,
    title: 'Brand Assets',
    description: 'Logos, colors, and brand guidelines.',
    action: 'Download ZIP',
  },
  {
    icon: ImageIcon,
    title: 'Product Screenshots',
    description: 'High-resolution platform screenshots.',
    action: 'Download ZIP',
  },
  {
    icon: Video,
    title: 'Product Demo Video',
    description: 'Platform overview and feature demonstration.',
    action: 'View Video',
  },
]

export default function PressPage() {
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
              <Newspaper size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Press & Media Kit
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              Media resources, brand assets, and press information for journalists and partners.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-surface-900 dark:text-white mb-6">About Chrysolite AI</h2>

            <div className="space-y-4 text-surface-600 dark:text-surface-300 leading-relaxed">
              <p>
                Chrysolite AI is a modern, AI-powered ERP platform designed to help businesses across
                Africa automate operations, gain insights, and scale efficiently. Founded in 2023, we're
                on a mission to democratize enterprise-grade business software.
              </p>

              <p>
                Our platform combines comprehensive ERP modules—including accounting, inventory, sales,
                procurement, and payroll—with cutting-edge AI features that provide intelligent automation
                and predictive insights.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-surface-300 dark:border-surface-700">
                <div>
                  <div className="text-3xl font-bold text-chrysolite-400 mb-2">2023</div>
                  <p className="text-surface-600 dark:text-surface-400 text-sm">Year Founded</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-chrysolite-400 mb-2">100+</div>
                  <p className="text-surface-600 dark:text-surface-400 text-sm">Active Customers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-chrysolite-400 mb-2">10+</div>
                  <p className="text-surface-600 dark:text-surface-400 text-sm">Integrated Modules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Resources */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Media Resources
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Download brand assets, product information, and media materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pressResources.map((resource) => (
              <div
                key={resource.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mb-6">
                  <resource.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">{resource.title}</h3>
                <p className="text-surface-600 dark:text-surface-400 mb-6">{resource.description}</p>
                <button className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors group-hover:gap-3">
                  {resource.action}
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-12 text-center shadow-2xl">
            <Mail size={48} className="text-chrysolite-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
              Press Inquiries
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
              For media inquiries, interviews, or additional information, please contact our press team.
            </p>

            <div className="space-y-4 text-surface-600 dark:text-surface-300">
              <div>
                <p className="font-semibold text-surface-900 dark:text-white">Media Contact</p>
                <a href="mailto:press@chrysoliteai.com" className="text-chrysolite-400 hover:text-chrysolite-300 transition-colors">
                  press@chrysoliteai.com
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-surface-300 dark:border-surface-700">
              <p className="text-surface-600 dark:text-surface-400 text-sm">
                Follow us on social media for the latest updates and announcements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Want to Learn More?
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
            Explore our platform or get in touch with our team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/about"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              About Us
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
      </section>

      <Footer />
    </main>
  )
}
