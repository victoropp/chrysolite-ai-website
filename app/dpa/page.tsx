import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import { FileCheck, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Processing Agreement (DPA) | Chrysolite AI',
  description: 'Our Data Processing Agreement outlining how Chrysolite AI processes and protects your data in compliance with GDPR and other regulations.',
}

export default function DPAPage() {
  return (
    <main className="bg-surface-950 min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-chrysolite-500/20 rounded-2xl mb-6">
              <FileCheck size={32} className="text-chrysolite-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Data Processing Agreement
            </h1>
            <p className="text-surface-400">Last Updated: February 2026</p>
          </div>

          <div className="bg-surface-900/50 border border-surface-800 rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-surface-300 leading-relaxed">
                This Data Processing Agreement ("DPA") forms part of the Terms of Service between you
                ("Customer") and Chrysolite AI, Inc. ("Chrysolite AI", "we", "us", or "our") and
                governs the processing of personal data by Chrysolite AI on behalf of the Customer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Definitions</h2>
              <div className="space-y-4 text-surface-300 leading-relaxed">
                <p>
                  <strong className="text-white">"Personal Data"</strong> means any information relating
                  to an identified or identifiable natural person that is processed by Chrysolite AI as
                  part of providing the Services.
                </p>
                <p>
                  <strong className="text-white">"Processing"</strong> means any operation performed on
                  Personal Data, including collection, storage, use, disclosure, or deletion.
                </p>
                <p>
                  <strong className="text-white">"Data Controller"</strong> refers to the Customer, who
                  determines the purposes and means of processing Personal Data.
                </p>
                <p>
                  <strong className="text-white">"Data Processor"</strong> refers to Chrysolite AI, who
                  processes Personal Data on behalf of the Customer.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Processing</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">1. Scope and Purpose</h3>
                  <p className="text-surface-300 leading-relaxed">
                    Chrysolite AI will process Personal Data only for the purpose of providing the ERP
                    services as outlined in the Terms of Service and as instructed by the Customer.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">2. Duration</h3>
                  <p className="text-surface-300 leading-relaxed">
                    Processing will continue for the duration of the service agreement and for a retention
                    period as required by law or as specified in the Terms of Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3. Categories of Data</h3>
                  <p className="text-surface-300 leading-relaxed mb-2">
                    Personal Data processed may include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-surface-300">
                    <li>Employee information (names, contact details, payroll data)</li>
                    <li>Customer information (names, addresses, transaction history)</li>
                    <li>Vendor information (business details, payment information)</li>
                    <li>User authentication and access data</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                Chrysolite AI implements appropriate technical and organizational measures to protect
                Personal Data, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-surface-300">
                <li>Bank-level encryption for data at rest and in transit</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Sub-Processors</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                Chrysolite AI may engage third-party sub-processors to assist in providing the Services.
                We maintain a list of authorized sub-processors and will notify customers of any changes.
              </p>
              <p className="text-surface-300 leading-relaxed">
                All sub-processors are bound by data protection obligations equivalent to those in this DPA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Subject Rights</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                Chrysolite AI will assist the Customer in responding to data subject requests, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-surface-300">
                <li>Access to Personal Data</li>
                <li>Rectification of inaccurate data</li>
                <li>Erasure of data ("right to be forgotten")</li>
                <li>Data portability</li>
                <li>Restriction of processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Breach Notification</h2>
              <p className="text-surface-300 leading-relaxed">
                In the event of a security breach affecting Personal Data, Chrysolite AI will notify
                the Customer without undue delay and within 72 hours of becoming aware of the breach.
                We will provide reasonable assistance in investigating and mitigating the breach.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention and Deletion</h2>
              <p className="text-surface-300 leading-relaxed">
                Upon termination of services, Chrysolite AI will delete or return all Personal Data
                to the Customer, unless retention is required by law. Customers can request data deletion
                at any time through their account settings or by contacting support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
              <p className="text-surface-300 leading-relaxed">
                Personal Data may be transferred to and processed in countries outside your jurisdiction.
                We ensure appropriate safeguards are in place, including Standard Contractual Clauses
                approved by regulatory authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Audit Rights</h2>
              <p className="text-surface-300 leading-relaxed">
                Upon reasonable notice, the Customer may audit Chrysolite AI's compliance with this DPA,
                subject to confidentiality obligations. We provide annual SOC 2 reports as evidence of
                our security controls.
              </p>
            </section>

            <section className="pt-6 border-t border-surface-800">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-surface-300 leading-relaxed mb-4">
                For questions about this DPA or data processing practices:
              </p>
              <p className="text-chrysolite-400">privacy@chrysoliteai.com</p>
            </section>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8">
            <Link
              href="/privacy"
              className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors"
            >
              View Privacy Policy
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/security"
              className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium transition-colors"
            >
              View Security Details
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
