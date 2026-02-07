import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Users,
  MessageCircle,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community - Connect with Users | Chrysolite AI',
  description: 'Join the Chrysolite AI community. Connect with other users, share best practices, and get help from the community.',
}

export default function CommunityPage() {
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
              <Users size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Join the Community
            </h1>

            <p className="text-xl text-surface-300 mb-8 leading-relaxed">
              Connect with other Chrysolite AI users, share experiences, and learn from each other.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-16 text-center shadow-2xl">
            <MessageCircle size={48} className="text-chrysolite-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Community Platform Coming Soon
            </h2>

            <p className="text-lg text-surface-400 mb-12 leading-relaxed">
              We're building a dedicated community platform where users can connect, share tips,
              ask questions, and help each other succeed with Chrysolite AI.
            </p>

            <div className="text-white font-semibold mb-6">Meanwhile, connect with us on social media:</div>

            <div className="flex items-center justify-center gap-4 mb-12">
              <a
                href="https://twitter.com/chrysoliteai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-surface-900 border border-surface-800 rounded-lg text-surface-400 hover:text-chrysolite-400 hover:border-chrysolite-500/30 transition-all duration-200"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com/company/chrysoliteai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-surface-900 border border-surface-800 rounded-lg text-surface-400 hover:text-chrysolite-400 hover:border-chrysolite-500/30 transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/chrysoliteai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-surface-900 border border-surface-800 rounded-lg text-surface-400 hover:text-chrysolite-400 hover:border-chrysolite-500/30 transition-all duration-200"
              >
                <Github size={20} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Get in Touch
                <ArrowRight size={20} />
              </Link>
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-surface-800 hover:bg-surface-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
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
