import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import { Cookie, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | Chrysolite AI',
  description: 'Learn about how Chrysolite AI uses cookies and similar technologies on our website and platform.',
}

export default function CookiePolicyPage() {
  return (
    <main className="bg-surface-950 min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-chrysolite-500/20 rounded-2xl mb-6">
              <Cookie size={32} className="text-chrysolite-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-surface-400">Last Updated: February 2026</p>
          </div>

          <div className="bg-surface-900/50 border border-surface-800 rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What Are Cookies?</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device when you visit our website.
                They help us provide you with a better experience by remembering your preferences and
                understanding how you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Types of Cookies We Use</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="text-surface-300 leading-relaxed">
                    Required for the platform to function properly. These cookies enable core functionality
                    such as security, authentication, and session management. They cannot be disabled.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p className="text-surface-300 leading-relaxed">
                    Help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. We use this data to improve our platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Functionality Cookies</h3>
                  <p className="text-surface-300 leading-relaxed">
                    Remember your preferences and settings, such as language preferences, timezone,
                    and customization options to provide a personalized experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p className="text-surface-300 leading-relaxed">
                    Track your browsing activity to show you relevant advertisements and measure
                    campaign effectiveness. These cookies may be set by third-party advertising partners.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Managing Cookies</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                You can control and manage cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-surface-300">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="text-surface-300 leading-relaxed mt-4">
                Please note that blocking or deleting cookies may impact your experience and some
                features may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Cookies</h2>
              <p className="text-surface-300 leading-relaxed">
                We use third-party services that may set cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-surface-300 mt-4">
                <li>Google Analytics for website analytics</li>
                <li>Payment processors for secure transactions</li>
                <li>Customer support tools for help desk functionality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Consent</h2>
              <p className="text-surface-300 leading-relaxed">
                By continuing to use our website, you consent to our use of cookies as described in this policy.
                You can withdraw your consent at any time by managing your cookie preferences in your browser
                or contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
              <p className="text-surface-300 leading-relaxed">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page
                with an updated revision date.
              </p>
            </section>

            <section className="pt-6 border-t border-surface-800">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <p className="text-chrysolite-400">privacy@chrysoliteai.com</p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors"
            >
              View Privacy Policy
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
