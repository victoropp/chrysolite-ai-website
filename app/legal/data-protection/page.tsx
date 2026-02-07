import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import { Shield, ChevronRight, Lock, Server, Eye, FileCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Data Protection & GDPR Compliance | Chrysolite AI',
  description: 'Our commitment to data protection, GDPR compliance, and information security. Learn how we safeguard your business data.',
}

const protectionMeasures = [
  {
    icon: Lock,
    title: 'Encryption',
    description: 'AES-256 encryption at rest, TLS 1.3 in transit. All data encrypted end-to-end.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Enterprise-grade cloud hosting with redundancy, firewalls, and intrusion detection.',
  },
  {
    icon: Eye,
    title: '24/7 Monitoring',
    description: 'Real-time security monitoring, anomaly detection, and incident response.',
  },
  {
    icon: FileCheck,
    title: 'Compliance',
    description: 'SOC 2 Type II, ISO 27001, GDPR, and industry-standard certifications.',
  },
]

const sections = [
  {
    title: 'GDPR Compliance',
    content: `Chrysolite AI is fully compliant with the General Data Protection Regulation (GDPR) and committed to protecting the privacy rights of EU/EEA residents.

Key GDPR Principles We Follow:
• Lawfulness, Fairness, and Transparency: We process data lawfully with clear privacy notices
• Purpose Limitation: Data is used only for specified, legitimate purposes
• Data Minimization: We collect only data necessary for our services
• Accuracy: You can update and correct your data at any time
• Storage Limitation: Data is retained only as long as necessary
• Integrity and Confidentiality: Appropriate security measures protect your data
• Accountability: We demonstrate compliance through documentation and audits

Legal Basis for Processing:
• Contract Performance: Processing necessary to provide our services
• Legitimate Interests: Improving our platform and preventing fraud
• Legal Obligations: Compliance with tax, accounting, and legal requirements
• Consent: For marketing communications (opt-in required)`,
  },
  {
    title: 'Your Rights Under GDPR',
    content: `As a data subject, you have the following rights:

1. Right to Access
   • Request a copy of your personal data
   • Understand how we process your data
   • Response time: Within 30 days

2. Right to Rectification
   • Correct inaccurate or incomplete data
   • Update your information directly in your account

3. Right to Erasure ("Right to be Forgotten")
   • Request deletion of your personal data
   • We will comply unless legal obligations require retention
   • Exceptions: Tax records, legal compliance, active disputes

4. Right to Restrict Processing
   • Limit how we use your data in certain circumstances
   • Data stored but not actively processed

5. Right to Data Portability
   • Receive your data in machine-readable format (CSV, JSON)
   • Transfer data to another provider

6. Right to Object
   • Object to processing based on legitimate interests
   • Opt-out of marketing communications

7. Right to Withdraw Consent
   • Withdraw consent at any time
   • Does not affect lawfulness of prior processing

8. Right to Lodge a Complaint
   • File complaint with supervisory authority in your country
   • Contact us first for resolution: dpo@chrysoliteai.com

How to Exercise Your Rights:
• Email: dpo@chrysoliteai.com
• In-Platform: Account settings > Privacy & Data
• Support: Via support ticket
• Response Time: Within 30 days (may extend to 60 days for complex requests)`,
  },
  {
    title: 'Data Processing and Security',
    content: `Data Processing Locations:
• Primary: EU data centers (Frankfurt, Ireland)
• Secondary: US data centers (AWS, Google Cloud)
• Data residency options available for enterprise customers

Security Measures:
• Encryption: AES-256 at rest, TLS 1.3 in transit
• Access Control: Role-based access, multi-factor authentication
• Network Security: Firewalls, IDS/IPS, DDoS protection
• Application Security: Regular penetration testing, vulnerability scanning
• Monitoring: 24/7 SOC, SIEM, automated threat detection
• Incident Response: Documented procedures, breach notification protocols
• Backups: Automated daily backups, 90-day retention, encrypted storage

Employee Security:
• Background checks for all employees with data access
• Security awareness training (annual)
• Confidentiality agreements (NDAs)
• Least-privilege access principles
• Regular access reviews and audits

Third-Party Processors:
• We use sub-processors only with GDPR-compliant contracts
• Data Processing Agreements (DPAs) with all vendors
• Regular vendor security assessments
• List of sub-processors available upon request`,
  },
  {
    title: 'International Data Transfers',
    content: `When transferring data outside the EU/EEA, we ensure adequate protection through:

1. EU-US Data Privacy Framework
   • Certified participant in the Data Privacy Framework
   • Annual recertification
   • Independent dispute resolution mechanism

2. Standard Contractual Clauses (SCCs)
   • EU-approved SCCs with all data processors
   • Supplementary measures for high-risk transfers
   • Regular reviews of transfer impact assessments

3. Adequacy Decisions
   • We prioritize countries with EU adequacy decisions
   • UK, Switzerland, and other approved jurisdictions

4. Additional Safeguards
   • Encryption during transfer
   • Access controls and authentication
   • Regular security audits of transfer mechanisms

Your Rights for Cross-Border Transfers:
• You may object to certain transfers
• You can request information about safeguards in place
• We will provide copies of transfer agreements upon request`,
  },
  {
    title: 'Data Retention Policies',
    content: `We retain data only as long as necessary for business and legal purposes:

Account Data:
• Active Accounts: Retained while account is active
• Deleted Accounts: 30-day grace period, then permanently deleted
• Account Metadata: Logs retained for security purposes (12 months)

Business Data:
• Financial Records: 7 years (tax and audit requirements)
• Transaction Logs: 7 years (accounting standards)
• Payroll Records: 7 years (labor law compliance)
• Inventory Records: 3 years

Communications:
• Support Tickets: 3 years
• Marketing Emails: Until consent withdrawn
• System Logs: 12 months

Backups:
• Backup Retention: 90 days
• Archived Data: Deleted per retention schedule
• Legal Hold: Data preserved during active disputes

Deletion Procedures:
• Automated deletion based on retention policies
• Secure data wiping (DoD 5220.22-M standard)
• Verification of complete deletion
• Backup purging after retention period`,
  },
  {
    title: 'Breach Notification',
    content: `In the event of a data breach affecting your personal data:

Notification Timeline:
• Supervisory Authority: Within 72 hours of discovery
• Affected Individuals: Without undue delay if high risk
• Documentation: Comprehensive breach report

Information Provided:
• Nature of the breach (what data was affected)
• Approximate number of individuals affected
• Potential consequences
• Measures taken to address the breach
• Recommendations for individuals to protect themselves
• Contact point for further information

Our Commitment:
• Rapid detection and containment
• Thorough investigation
• Transparent communication
• Remediation and prevention measures
• Regular breach response drills

Reporting a Security Issue:
• Email: security@chrysoliteai.com
• Bug Bounty Program: Available for responsible disclosure
• Response Time: Acknowledge within 24 hours`,
  },
  {
    title: 'Certifications and Compliance',
    content: `Chrysolite AI maintains the following certifications and compliance standards:

Security Certifications:
• SOC 2 Type II: Annual attestation
• ISO 27001: Information Security Management
• ISO 27017: Cloud Security
• ISO 27018: Cloud Privacy

Privacy and Data Protection:
• GDPR Compliant: Full compliance with EU regulations
• CCPA Compliant: California Consumer Privacy Act
• Data Privacy Framework: EU-US and Swiss-US certified

Industry Standards:
• PCI DSS: For payment card processing
• HIPAA: For healthcare data (if applicable)
• Industry-specific standards as required

Audit and Verification:
• Annual third-party security audits
• Penetration testing (bi-annual)
• Vulnerability assessments (quarterly)
• Compliance reviews (ongoing)

Certificates Available:
• SOC 2 reports available under NDA
• Certification letters upon request
• DPA templates for enterprise customers`,
  },
  {
    title: 'Privacy by Design',
    content: `We embed privacy into every aspect of our platform:

Development Practices:
• Privacy impact assessments for new features
• Data minimization in feature design
• Security reviews before deployment
• Privacy testing in QA processes

Default Settings:
• Most privacy-protective settings by default
• Clear opt-in for data sharing
• Granular privacy controls
• Easy-to-use privacy dashboard

Transparency:
• Clear privacy notices
• Plain language policies
• Real-time data access logs
• Transparency reports (annual)

Continuous Improvement:
• Regular privacy reviews
• User feedback integration
• Compliance monitoring
• Training and awareness programs`,
  },
  {
    title: 'Contact Our Data Protection Officer',
    content: `For any data protection questions or to exercise your rights:

Data Protection Officer (DPO):
• Email: dpo@chrysoliteai.com
• Response Time: Within 30 days

For General Privacy Questions:
• Email: privacy@chrysoliteai.com
• Support Portal: support.chrysoliteai.com

For Security Issues:
• Email: security@chrysoliteai.com
• Emergency: Available 24/7

Mailing Address:
Chrysolite AI
Data Protection Office
Accra, Ghana

EU Representative:
[To be appointed if processing EU data at scale]`,
  },
]

export default function DataProtectionPage() {
  return (
    <main className="bg-surface-950 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-surface-400 mb-6">
            <Link href="/" className="hover:text-chrysolite-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <span>Data Protection & GDPR</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-2xl flex items-center justify-center">
              <Shield size={32} className="text-chrysolite-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
                Data Protection & GDPR Compliance
              </h1>
              <p className="text-surface-400">
                Last Updated: February 7, 2026
              </p>
            </div>
          </div>

          <p className="text-lg text-surface-300 leading-relaxed mb-8">
            Your data security and privacy are our top priorities. We are fully compliant with GDPR
            and international data protection standards.
          </p>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-12">
            <p className="text-surface-300 text-sm leading-relaxed">
              <strong className="text-white">Compliance Note:</strong> This is a template data protection document.
              For production use, please have this reviewed by a qualified data protection officer and legal counsel
              to ensure full compliance with GDPR and applicable regulations.
            </p>
          </div>
        </div>
      </section>

      {/* Protection Measures */}
      <section className="py-12 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            How We Protect Your Data
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {protectionMeasures.map((measure) => (
              <div
                key={measure.title}
                className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-6 text-center hover:border-chrysolite-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-chrysolite-500/20 to-gold-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <measure.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{measure.title}</h3>
                <p className="text-sm text-surface-400">{measure.description}</p>
              </div>
            ))}
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
                className="bg-surface-900/30 border border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all"
              >
                <h2 className="text-2xl font-bold text-white mb-4">
                  {section.title}
                </h2>
                <div className="text-surface-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Notice */}
          <div className="mt-16 p-8 bg-surface-900/50 border border-surface-800 rounded-2xl text-center">
            <p className="text-surface-400 mb-4">
              Need to exercise your data protection rights or have questions?
            </p>
            <Link
              href="mailto:dpo@chrysoliteai.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40"
            >
              Contact Our DPO
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
