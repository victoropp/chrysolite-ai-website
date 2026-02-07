import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  BookOpen,
  ArrowRight,
  FileText,
  Code,
  Lightbulb,
  Video,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation - Learn Chrysolite AI | Chrysolite AI',
  description: 'Complete documentation, guides, and tutorials for Chrysolite AI ERP. Learn how to use every feature effectively.',
}

export default function DocsPage() {
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
              <BookOpen size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              Documentation
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-8 leading-relaxed">
              Everything you need to master Chrysolite AI ERP.
              Comprehensive guides, tutorials, and reference materials.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-16 text-center shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
              Documentation Coming Soon
            </h2>

            <p className="text-lg text-surface-600 dark:text-surface-400 mb-12 leading-relaxed">
              We're building comprehensive documentation covering every aspect of the platform.
              Meanwhile, our support team is here to help you get started.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white dark:bg-surface-950/50 rounded-xl p-6 border border-surface-300 dark:border-surface-800">
                <FileText size={32} className="text-chrysolite-400 mx-auto mb-4" />
                <h3 className="text-surface-900 dark:text-white font-semibold mb-2">User Guides</h3>
                <p className="text-surface-600 dark:text-surface-400 text-sm">Step-by-step tutorials</p>
              </div>
              <div className="bg-white dark:bg-surface-950/50 rounded-xl p-6 border border-surface-300 dark:border-surface-800">
                <Code size={32} className="text-chrysolite-400 mx-auto mb-4" />
                <h3 className="text-surface-900 dark:text-white font-semibold mb-2">API Reference</h3>
                <p className="text-surface-600 dark:text-surface-400 text-sm">Complete API docs</p>
              </div>
              <div className="bg-white dark:bg-surface-950/50 rounded-xl p-6 border border-surface-300 dark:border-surface-800">
                <Video size={32} className="text-chrysolite-400 mx-auto mb-4" />
                <h3 className="text-surface-900 dark:text-white font-semibold mb-2">Video Tutorials</h3>
                <p className="text-surface-600 dark:text-surface-400 text-sm">Visual learning</p>
              </div>
              <div className="bg-white dark:bg-surface-950/50 rounded-xl p-6 border border-surface-300 dark:border-surface-800">
                <Lightbulb size={32} className="text-chrysolite-400 mx-auto mb-4" />
                <h3 className="text-surface-900 dark:text-white font-semibold mb-2">Best Practices</h3>
                <p className="text-surface-600 dark:text-surface-400 text-sm">Pro tips & tricks</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Contact Support
                <ArrowRight size={20} />
              </Link>
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-surface-100 dark:bg-surface-800 hover:bg-surface-700 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
