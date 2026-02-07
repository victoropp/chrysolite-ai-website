import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import { Award, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Level Agreement (SLA) | Chrysolite AI',
  description: 'Our Service Level Agreement guaranteeing 99.9% uptime, support response times, and service commitments for Chrysolite AI ERP.',
}

export default function SLAPage() {
  return (
    <main className="bg-surface-950 min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-chrysolite-500/20 rounded-2xl mb-6">
              <Award size={32} className="text-chrysolite-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Service Level Agreement
            </h1>
            <p className="text-surface-400">Last Updated: February 2026</p>
          </div>

          <div className="bg-surface-900/50 border border-surface-800 rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Uptime Commitment</h2>
              <p className="text-surface-300 leading-relaxed mb-6">
                Chrysolite AI is committed to providing a reliable, high-performance platform. We guarantee
                99.9% uptime for our services, measured monthly.
              </p>

              <div className="bg-surface-950/50 border border-surface-800 rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-chrysolite-400 mb-2">99.9%</div>
                    <p className="text-surface-400 text-sm">Uptime Guarantee</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-chrysolite-400 mb-2">43m</div>
                    <p className="text-surface-400 text-sm">Max Monthly Downtime</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-chrysolite-400 mb-2">24/7</div>
                    <p className="text-surface-400 text-sm">System Monitoring</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Availability</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                "Uptime" refers to the availability of the Chrysolite AI platform for access and use
                by authorized users. Downtime is calculated from the time we receive the first notification
                of an issue until the service is restored.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Scheduled Maintenance</p>
                    <p className="text-surface-300 text-sm">
                      Planned maintenance windows are excluded from uptime calculations and will be
                      communicated at least 48 hours in advance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-chrysolite-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Emergency Maintenance</p>
                    <p className="text-surface-300 text-sm">
                      Critical security patches may be applied without advance notice but will be
                      completed as quickly as possible.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Support Response Times</h2>
              <p className="text-surface-300 leading-relaxed mb-6">
                Our support team is committed to responding quickly to your inquiries. Response times
                vary by plan tier and issue severity.
              </p>

              <div className="space-y-4">
                <div className="bg-surface-950/50 border border-surface-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Critical Issues</h3>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs font-medium rounded-full">
                      Priority 1
                    </span>
                  </div>
                  <p className="text-surface-300 text-sm mb-4">
                    System down or major functionality unavailable affecting all users
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-surface-400 mb-1">Starter</p>
                      <p className="text-white font-medium">4 hours</p>
                    </div>
                    <div>
                      <p className="text-surface-400 mb-1">Professional</p>
                      <p className="text-white font-medium">2 hours</p>
                    </div>
                    <div>
                      <p className="text-surface-400 mb-1">Enterprise</p>
                      <p className="text-white font-medium">1 hour</p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-950/50 border border-surface-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">High Priority Issues</h3>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full">
                      Priority 2
                    </span>
                  </div>
                  <p className="text-surface-300 text-sm mb-4">
                    Major feature unavailable or significant performance degradation
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-surface-400 mb-1">Starter</p>
                      <p className="text-white font-medium">8 hours</p>
                    </div>
                    <div>
                      <p className="text-surface-400 mb-1">Professional</p>
                      <p className="text-white font-medium">4 hours</p>
                    </div>
                    <div>
                      <p className="text-surface-400 mb-1">Enterprise</p>
                      <p className="text-white font-medium">2 hours</p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-950/50 border border-surface-800 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Normal Priority Issues</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      Priority 3
                    </span>
                  </div>
                  <p className="text-surface-300 text-sm mb-4">
                    General questions, feature requests, or minor issues
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-surface-400 mb-1">Starter</p>
                      <p className="text-white font-medium">24 hours</p>
                    </div>
                    <div>
                      <p className="text-surface-400 mb-1">Professional</p>
                      <p className="text-white font-medium">12 hours</p>
                    </div>
                    <div>
                      <p className="text-surface-400 mb-1">Enterprise</p>
                      <p className="text-white font-medium">4 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Service Credits</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                If we fail to meet our uptime commitment, you may be eligible for service credits:
              </p>

              <div className="bg-surface-950/50 border border-surface-800 rounded-xl p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-surface-800">
                      <th className="text-left text-white font-semibold py-3">Monthly Uptime</th>
                      <th className="text-left text-white font-semibold py-3">Service Credit</th>
                    </tr>
                  </thead>
                  <tbody className="text-surface-300">
                    <tr className="border-b border-surface-800">
                      <td className="py-3">99.0% - 99.9%</td>
                      <td className="py-3 text-chrysolite-400">10% of monthly fees</td>
                    </tr>
                    <tr className="border-b border-surface-800">
                      <td className="py-3">95.0% - 98.9%</td>
                      <td className="py-3 text-chrysolite-400">25% of monthly fees</td>
                    </tr>
                    <tr>
                      <td className="py-3">Below 95.0%</td>
                      <td className="py-3 text-chrysolite-400">50% of monthly fees</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-surface-400 text-sm mt-4">
                Service credits must be requested within 30 days of the incident and are applied
                to future invoices only. Credits are the sole remedy for SLA violations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Exclusions</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                This SLA does not apply to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-surface-300">
                <li>Issues caused by factors outside our reasonable control</li>
                <li>Problems resulting from customer's equipment, software, or internet connection</li>
                <li>Scheduled maintenance performed with proper notice</li>
                <li>Downtime due to third-party service provider issues</li>
                <li>Issues caused by violation of the Terms of Service</li>
                <li>Beta features or services explicitly marked as non-production</li>
              </ul>
            </section>

            <section className="pt-6 border-t border-surface-800">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                Questions about our SLA or to request service credits:
              </p>
              <p className="text-chrysolite-400">support@chrysoliteai.com</p>
            </section>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            <Link
              href="/status"
              className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors"
            >
              View System Status
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors"
            >
              View Plans
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
