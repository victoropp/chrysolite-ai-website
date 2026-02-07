import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import { FileText, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service | Chrysolite AI',
  description: 'Terms and conditions for using Chrysolite AI ERP platform. Please read carefully before using our services.',
}

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: `By accessing or using Chrysolite AI's ERP platform ("the Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Service.

These Terms apply to all users, including free trial users, paid subscribers, and administrators. By creating an account, you represent that you are at least 18 years old and have the authority to enter into this agreement on behalf of your organization.`,
  },
  {
    title: '2. Service Description',
    content: `Chrysolite AI provides a cloud-based ERP platform that includes:

• Financial accounting and reporting
• Inventory and warehouse management
• Sales and customer relationship management
• Procurement and supplier management
• Payroll and HR management
• Fixed asset tracking
• AI-powered analytics and insights

Features and functionality may vary by subscription tier. We reserve the right to modify, suspend, or discontinue any feature at any time with reasonable notice.`,
  },
  {
    title: '3. Account Registration',
    content: `To use the Service, you must:

• Provide accurate, current, and complete information
• Maintain and promptly update your account information
• Keep your password secure and confidential
• Notify us immediately of any unauthorized access
• Not share your account credentials with others
• Be responsible for all activities under your account

You may not create multiple accounts or use automated means to create accounts.`,
  },
  {
    title: '4. Subscription and Payment',
    content: `Subscription Terms:
• Subscriptions are billed monthly or annually in advance
• Prices are subject to change with 30 days notice
• Payment is due upon invoice issuance
• Late payments may result in service suspension
• No refunds for partial months or unused services
• You may cancel at any time (cancellation effective at period end)

Accepted Payment Methods:
• Bank transfer, mobile money, credit/debit cards
• All payments are processed securely through third-party payment processors`,
  },
  {
    title: '5. Free Trial',
    content: `Free trial terms:
• 14-day trial period with full feature access
• No credit card required to start trial
• Trial converts to paid subscription unless cancelled
• One trial per organization
• We may suspend or terminate trial accounts showing abuse

You may cancel your trial at any time without charge.`,
  },
  {
    title: '6. Data Ownership and Use',
    content: `Your Data:
• You retain all ownership rights to data you input into the Service
• You grant us a license to process your data to provide the Service
• You are responsible for the accuracy and legality of your data
• You must have necessary rights and permissions for data you upload
• You must not upload illegal, infringing, or harmful content

Our Use of Data:
• We use your data solely to provide and improve the Service
• We may use aggregated, anonymized data for analytics
• We do not sell your data to third parties
• See our Privacy Policy for detailed information`,
  },
  {
    title: '7. Acceptable Use',
    content: `You agree NOT to:
• Violate any laws or regulations
• Infringe intellectual property rights
• Upload malicious code, viruses, or harmful software
• Attempt to gain unauthorized access to systems
• Reverse engineer or decompile the Service
• Use the Service to send spam or unsolicited messages
• Scrape or harvest data from the platform
• Resell or sublicense the Service without permission
• Use the Service to harm others or the platform

We may suspend or terminate accounts that violate these policies.`,
  },
  {
    title: '8. Intellectual Property',
    content: `Our IP:
• Chrysolite AI owns all rights to the platform, software, and content
• Our trademarks, logos, and branding are protected
• You may not use our IP without written permission
• The Service is licensed, not sold, to you

Your IP:
• You retain all rights to your data and content
• You grant us a license to display your company name/logo as a customer (opt-out available)`,
  },
  {
    title: '9. Service Level Agreement (SLA)',
    content: `Uptime Commitment:
• 99.9% uptime for paid subscriptions
• Planned maintenance windows (notified 72 hours in advance)
• Real-time status updates at status.chrysoliteai.com

Exclusions:
• Force majeure events
• Issues caused by your actions or third-party services
• Free trial and starter tier accounts (best effort)

Remedies for downtime exceeding SLA are specified in your subscription agreement.`,
  },
  {
    title: '10. Data Backup and Security',
    content: `Our Commitments:
• Automated daily backups with 90-day retention
• Point-in-time recovery capabilities
• Encryption in transit (TLS 1.3) and at rest (AES-256)
• Regular security audits and penetration testing
• 24/7 security monitoring
• Incident response procedures

Your Responsibilities:
• You are responsible for maintaining local backups of critical data
• We recommend exporting data regularly
• We are not liable for data loss due to your actions`,
  },
  {
    title: '11. Termination',
    content: `Termination by You:
• You may cancel your subscription at any time
• Cancellation is effective at the end of the current billing period
• No refunds for unused time
• You may export your data before termination

Termination by Us:
• We may suspend or terminate accounts for Terms violations
• We may terminate with 30 days notice for convenience
• Immediate termination for illegal activity or security threats

Upon termination:
• Your access to the Service will be disabled
• Your data will be retained for 30 days for retrieval
• Data is permanently deleted after 30 days`,
  },
  {
    title: '12. Limitation of Liability',
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW:

• The Service is provided "AS IS" without warranties
• We are not liable for indirect, incidental, or consequential damages
• Our total liability is limited to amounts paid by you in the past 12 months
• We are not liable for third-party services or integrations
• We are not liable for business losses, lost profits, or lost data

Some jurisdictions do not allow these limitations, so they may not apply to you.`,
  },
  {
    title: '13. Indemnification',
    content: `You agree to indemnify and hold harmless Chrysolite AI from claims, damages, and expenses arising from:

• Your violation of these Terms
• Your violation of any laws or third-party rights
• Your use of the Service
• Content or data you submit
• Disputes with other users

This obligation survives termination of your account.`,
  },
  {
    title: '14. Changes to Terms',
    content: `We may modify these Terms at any time. We will notify you of material changes by:

• Email to your registered address
• Notice on the platform
• Updating the "Last Updated" date

Continued use after changes constitutes acceptance. If you do not agree, you must stop using the Service.`,
  },
  {
    title: '15. Governing Law and Disputes',
    content: `These Terms are governed by the laws of Ghana.

Dispute Resolution:
• Informal resolution: Contact us at legal@chrysoliteai.com
• Mediation: Good faith mediation before litigation
• Jurisdiction: Courts of Accra, Ghana

For international customers, local consumer protection laws may apply.`,
  },
  {
    title: '16. Contact Information',
    content: `For questions about these Terms:

• Email: legal@chrysoliteai.com
• Address: Chrysolite AI, Accra, Ghana
• Support: support@chrysoliteai.com`,
  },
]

export default function TermsOfServicePage() {
  return (
    <main className="bg-white dark:bg-surface-950 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-surface-600 dark:text-surface-400 mb-6">
            <Link href="/" className="hover:text-chrysolite-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <span>Terms of Service</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-2xl flex items-center justify-center">
              <FileText size={32} className="text-chrysolite-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-surface-900 dark:text-white mb-2">
                Terms of Service
              </h1>
              <p className="text-surface-600 dark:text-surface-400">
                Last Updated: February 7, 2026
              </p>
            </div>
          </div>

          <p className="text-lg text-surface-600 dark:text-surface-300 leading-relaxed mb-8">
            Please read these terms carefully before using Chrysolite AI's ERP platform.
            By using our service, you agree to be bound by these terms.
          </p>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 mb-12">
            <p className="text-surface-600 dark:text-surface-300 text-sm leading-relaxed">
              <strong className="text-surface-900 dark:text-white">Legal Notice:</strong> This is a template terms of service document.
              For production use, this document must be reviewed, customized, and approved by qualified legal counsel
              to ensure compliance with applicable laws and regulations in your jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                id={`section-${index + 1}`}
                className="bg-surface-100/30 dark:bg-surface-900/30 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all"
              >
                <h2 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">
                  {section.title}
                </h2>
                <div className="text-surface-600 dark:text-surface-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Notice */}
          <div className="mt-16 p-8 bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl text-center">
            <p className="text-surface-600 dark:text-surface-400 mb-4">
              Questions about these terms?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40"
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
