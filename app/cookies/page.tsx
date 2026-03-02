import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import { Cookie, ArrowRight } from 'lucide-react'
import ManageCookiesButton from './ManageCookiesButton'

export const metadata: Metadata = {
  title: 'Cookie Policy | Chrysolite AI',
  description: 'Learn about how Chrysolite AI uses cookies and similar technologies on our website.',
}

export default function CookiePolicyPage() {
  return (
    <main className="bg-white dark:bg-surface-950 min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-chrysolite-500/20 rounded-2xl mb-6">
              <Cookie size={32} className="text-chrysolite-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-surface-900 dark:text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-surface-600 dark:text-surface-400 mb-6">Last Updated: March 2026</p>
            <ManageCookiesButton />
          </div>

          <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 md:p-12 space-y-10">

            <section>
              <h2 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">What Are Cookies?</h2>
              <p className="text-surface-600 dark:text-surface-300 leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. Similar technologies
                include localStorage — a browser feature that stores data locally without sending it to any server.
                We use both, and this policy covers all such storage. We only set non-essential storage after you
                have given your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface-900 dark:text-white mb-6">Cookies We Use</h2>

              <div className="space-y-8">

                {/* Essential */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Essential</h3>
                    <span className="text-xs font-bold uppercase tracking-wide text-chrysolite-600 bg-chrysolite-500/10 border border-chrysolite-500/20 rounded-full px-2 py-0.5">
                      Always active
                    </span>
                  </div>
                  <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-4">
                    Strictly necessary for the website to function. They do not store any personally
                    identifiable information beyond what is required for the operation of the feature
                    they support, and cannot be disabled.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-surface-200 dark:border-surface-800">
                    <table className="w-full text-sm">
                      <thead className="bg-surface-100 dark:bg-surface-800/60">
                        <tr>
                          {['Name', 'Purpose', 'Type', 'Duration'].map((h) => (
                            <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-surface-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-100 dark:divide-surface-800">
                        <tr className="bg-white dark:bg-surface-900/40">
                          <td className="px-4 py-3 font-mono text-xs text-chrysolite-600 dark:text-chrysolite-400 whitespace-nowrap">chrysolite_erp_admin</td>
                          <td className="px-4 py-3 text-surface-600 dark:text-surface-300">Admin session token. Set only when an administrator logs in. Marked httpOnly and Secure — never readable by JavaScript.</td>
                          <td className="px-4 py-3 text-surface-500 whitespace-nowrap">HTTP Cookie</td>
                          <td className="px-4 py-3 text-surface-500 whitespace-nowrap">8 hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Functionality */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Functionality</h3>
                    <span className="text-xs font-medium text-surface-500 bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-full px-2 py-0.5">
                      Consent required
                    </span>
                  </div>
                  <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-4">
                    Remember your preferences to give you a consistent experience. Stored locally on your
                    device only — never transmitted to our servers or any third party.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-surface-200 dark:border-surface-800">
                    <table className="w-full text-sm">
                      <thead className="bg-surface-100 dark:bg-surface-800/60">
                        <tr>
                          {['Name', 'Purpose', 'Type', 'Duration'].map((h) => (
                            <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-surface-500 uppercase tracking-wider whitespace-nowrap">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-100 dark:divide-surface-800">
                        <tr className="bg-white dark:bg-surface-900/40">
                          <td className="px-4 py-3 font-mono text-xs text-chrysolite-600 dark:text-chrysolite-400 whitespace-nowrap">chrysolite-theme</td>
                          <td className="px-4 py-3 text-surface-600 dark:text-surface-300">Stores your dark or light mode preference so the correct theme loads on your next visit.</td>
                          <td className="px-4 py-3 text-surface-500 whitespace-nowrap">localStorage</td>
                          <td className="px-4 py-3 text-surface-500 whitespace-nowrap">Persistent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Analytics */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Analytics</h3>
                    <span className="text-xs font-medium text-surface-500 bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-full px-2 py-0.5">
                      Consent required
                    </span>
                  </div>
                  <p className="text-surface-600 dark:text-surface-300 leading-relaxed">
                    We do not currently use any analytics cookies or tracking scripts. If we introduce
                    privacy-first analytics in the future, this policy will be updated and your consent
                    will be requested before any data is collected.
                  </p>
                </div>

                {/* Marketing */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Marketing</h3>
                    <span className="text-xs font-medium text-surface-500 bg-surface-100 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-full px-2 py-0.5">
                      Consent required
                    </span>
                  </div>
                  <p className="text-surface-600 dark:text-surface-300 leading-relaxed">
                    We do not currently use any marketing or advertising cookies. This section is reserved
                    for future use and will only become active after your explicit consent.
                  </p>
                </div>

              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">Your Choices</h2>
              <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-4">
                When you first visit this site a consent banner appears at the bottom of the screen.
                You may accept all cookies, accept essential cookies only, or customise your preferences
                by category. Your choices are saved to your browser and respected on all subsequent visits.
              </p>
              <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-6">
                You may change your preferences at any time using the button below, the
                &ldquo;Cookie Preferences&rdquo; link in the site footer, or by clearing your browser
                storage (which resets your choices to &ldquo;not yet decided&rdquo;).
              </p>
              <ManageCookiesButton />
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">Browser Controls</h2>
              <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-4">
                You can also manage storage directly through your browser settings:
              </p>
              <ul className="list-disc list-inside space-y-2 text-surface-600 dark:text-surface-300">
                <li>View and delete individual cookies</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites or globally</li>
                <li>Clear localStorage and session storage</li>
                <li>Delete all site data when you close the browser</li>
              </ul>
              <p className="text-surface-600 dark:text-surface-300 leading-relaxed mt-4">
                Blocking essential cookies may prevent some parts of the site from working correctly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">Updates to This Policy</h2>
              <p className="text-surface-600 dark:text-surface-300 leading-relaxed">
                We may update this policy when we introduce new features or cookies. When we make
                material changes — such as adding a new cookie category — we will increment the policy
                version and prompt you to review and re-confirm your preferences.
              </p>
            </section>

            <section className="pt-6 border-t border-surface-300 dark:border-surface-800">
              <h2 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-surface-600 dark:text-surface-300 leading-relaxed mb-4">
                Questions about our use of cookies? Contact our privacy team:
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
