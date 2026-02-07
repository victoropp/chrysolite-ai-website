import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import { Shield, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Chrysolite AI',
  description: 'Our commitment to protecting your privacy and data. Learn how we collect, use, and safeguard your information.',
}

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us when you create an account, use our services, or communicate with us. This includes:

• Personal Information: Name, email address, phone number, company name, billing information
• Usage Data: Log data, device information, IP addresses, browser type, pages visited
• Business Data: Financial data, transactions, inventory records, and other data you input into our system
• Communications: Messages, support tickets, and feedback you send to us

We use cookies and similar tracking technologies to collect information about your browsing activities.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send administrative messages, technical notices, and security alerts
• Respond to your comments and questions
• Provide customer support and technical assistance
• Analyze usage patterns and optimize our platform
• Develop new features and services
• Protect against fraudulent or illegal activity
• Comply with legal obligations

We do not sell your personal information to third parties.`,
  },
  {
    title: '3. Data Security',
    content: `We implement industry-standard security measures to protect your data:

• Encryption: All data is encrypted in transit (TLS 1.3) and at rest (AES-256)
• Access Controls: Role-based access control with multi-factor authentication
• Regular Audits: Security audits, penetration testing, and vulnerability assessments
• Compliance: SOC 2 Type II, ISO 27001, and GDPR compliance
• Monitoring: 24/7 security monitoring and incident response
• Backups: Automated daily backups with point-in-time recovery

While we strive to protect your data, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: '4. Data Retention',
    content: `We retain your information for as long as your account is active or as needed to provide services. Specific retention policies:

• Account Data: Retained while your account is active
• Transaction Records: Retained for 7 years for tax and audit purposes
• Deleted Accounts: Data is permanently deleted within 30 days of account closure
• Backups: Backup data is retained for 90 days

You can request deletion of your data at any time by contacting us.`,
  },
  {
    title: '5. Data Sharing',
    content: `We may share your information with:

• Service Providers: Cloud hosting, payment processors, analytics services (under strict confidentiality agreements)
• Legal Requirements: When required by law, subpoena, or court order
• Business Transfers: In connection with a merger, acquisition, or sale of assets (you will be notified)
• With Your Consent: When you explicitly authorize us to share information

We never sell or rent your personal information to third parties for marketing purposes.`,
  },
  {
    title: '6. Your Rights (GDPR)',
    content: `Under GDPR, you have the right to:

• Access: Request a copy of your personal data
• Rectification: Correct inaccurate or incomplete data
• Erasure: Request deletion of your data ("right to be forgotten")
• Portability: Receive your data in a machine-readable format
• Restriction: Limit how we process your data
• Objection: Object to processing based on legitimate interests
• Withdraw Consent: Withdraw consent at any time

To exercise these rights, contact privacy@chrysoliteai.com`,
  },
  {
    title: '7. Cookies and Tracking',
    content: `We use cookies and similar technologies for:

• Essential Cookies: Required for platform functionality
• Analytics Cookies: Track usage patterns and performance
• Preference Cookies: Remember your settings and preferences
• Marketing Cookies: Deliver relevant advertising (with consent)

You can control cookies through your browser settings. Blocking essential cookies may affect platform functionality.`,
  },
  {
    title: '8. Third-Party Services',
    content: `Our platform integrates with third-party services:

• Payment Gateways: Stripe, PayPal (their privacy policies apply)
• Cloud Providers: AWS, Google Cloud (data processing agreements in place)
• Analytics: Google Analytics (anonymized IP addresses)
• Support Tools: Intercom, Zendesk

We carefully vet all third-party providers for security and privacy compliance.`,
  },
  {
    title: '9. International Data Transfers',
    content: `Your data may be transferred to and processed in countries outside your residence. We ensure adequate protection through:

• EU-US Data Privacy Framework compliance
• Standard Contractual Clauses (SCCs)
• Data processing agreements with all vendors
• Encryption during transit and at rest

We comply with applicable data transfer regulations including GDPR.`,
  },
  {
    title: "10. Children's Privacy",
    content: `Our services are not directed to individuals under 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this privacy policy from time to time. We will notify you of material changes by:

• Email notification to your registered email
• Prominent notice on our platform
• Updating the "Last Updated" date below

Continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '12. Contact Us',
    content: `For questions or concerns about this privacy policy, contact us:

• Email: privacy@chrysoliteai.com
• Address: Chrysolite AI, Accra, Ghana
• Data Protection Officer: dpo@chrysoliteai.com`,
  },
]

export default function PrivacyPolicyPage() {
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
            <span>Privacy Policy</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-2xl flex items-center justify-center">
              <Shield size={32} className="text-chrysolite-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-surface-900 dark:text-white mb-2">
                Privacy Policy
              </h1>
              <p className="text-surface-600 dark:text-surface-400">
                Last Updated: February 7, 2026
              </p>
            </div>
          </div>

          <p className="text-lg text-surface-600 dark:text-surface-300 leading-relaxed mb-8">
            At Chrysolite AI, we take your privacy seriously. This policy explains how we collect,
            use, protect, and share your information when you use our ERP platform.
          </p>

          <div className="bg-chrysolite-500/10 border border-chrysolite-500/30 rounded-xl p-6 mb-12">
            <p className="text-surface-600 dark:text-surface-300 text-sm leading-relaxed">
              <strong className="text-surface-900 dark:text-white">Note:</strong> This is a template privacy policy.
              For production use, this document should be reviewed and customized by legal counsel
              to ensure compliance with applicable laws and regulations.
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
                className="bg-surface-900/30 border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all"
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
              Have questions about our privacy practices?
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
