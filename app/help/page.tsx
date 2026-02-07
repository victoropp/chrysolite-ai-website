import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  BookOpen,
  Video,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center - Get Support | Chrysolite AI',
  description: 'Get help with Chrysolite AI ERP. Access guides, FAQs, contact support, and find answers to your questions.',
}

const supportChannels = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    action: 'Start Chat',
    available: 'Mon-Fri, 8am-6pm GMT',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email and we\'ll respond within 24 hours',
    action: 'support@chrysoliteai.com',
    available: 'Response within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak directly with our support team',
    action: '+233 XX XXX XXXX',
    available: 'Mon-Fri, 8am-6pm GMT',
  },
]

const helpResources = [
  {
    icon: BookOpen,
    title: 'Documentation',
    description: 'Comprehensive guides and tutorials',
    href: '/docs',
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Learn with step-by-step videos',
    href: '/docs',
  },
  {
    icon: HelpCircle,
    title: 'FAQs',
    description: 'Answers to common questions',
    href: '/docs',
  },
]

export default function HelpPage() {
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
              <HelpCircle size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              How Can We Help?
            </h1>

            <p className="text-xl text-surface-300 mb-8 leading-relaxed">
              Our support team is here to help you get the most out of Chrysolite AI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Contact Support
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Choose your preferred support channel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportChannels.map((channel) => (
              <div
                key={channel.title}
                className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all text-center"
              >
                <div className="w-16 h-16 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <channel.icon size={32} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                <p className="text-surface-400 mb-4">{channel.description}</p>
                <p className="text-chrysolite-400 font-medium mb-2">{channel.action}</p>
                <p className="text-surface-500 text-sm">{channel.available}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Self-Service Resources
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Find answers quickly with our help resources
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {helpResources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="group bg-surface-900/50 border border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <resource.icon size={32} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-chrysolite-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-surface-400 mb-4">{resource.description}</p>
                <div className="inline-flex items-center gap-2 text-chrysolite-400 font-medium group-hover:gap-3 transition-all">
                  Explore
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need Priority Support?
            </h2>
            <p className="text-lg text-surface-400 mb-8">
              Upgrade to our Enterprise plan for dedicated support, faster response times, and a dedicated account manager.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/pricing"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                View Enterprise Plans
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-800 hover:bg-surface-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
