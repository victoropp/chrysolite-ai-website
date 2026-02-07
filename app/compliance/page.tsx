import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Compliance & Certifications | Chrysolite AI',
  description: 'Chrysolite AI compliance certifications including SOC 2, GDPR, ISO 27001, and industry standards. Enterprise-grade security and compliance.',
}

const certifications = [
  {
    name: 'SOC 2 Type II',
    description: 'System and Organization Controls',
    details: 'Annual independent audit of security, availability, and confidentiality controls.',
    status: 'Certified',
    year: '2025',
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation',
    details: 'Full compliance with European data protection standards and privacy requirements.',
    status: 'Compliant',
    year: '2024',
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management',
    details: 'International standard for information security management systems.',
    status: 'Certified',
    year: '2025',
  },
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security',
    details: 'Compliance with payment card security standards for safe payment processing.',
    status: 'Compliant',
    year: '2025',
  },
]

const complianceAreas = [
  {
    title: 'Data Privacy',
    items: [
      'GDPR compliance for European customers',
      'Data Protection Act compliance',
      'Privacy by design and by default',
      'Data subject rights management',
      'Privacy impact assessments',
    ],
  },
  {
    title: 'Security Controls',
    items: [
      'Bank-level encryption standards',
      'Multi-factor authentication',
      'Role-based access controls',
      'Regular security audits',
      'Penetration testing',
    ],
  },
  {
    title: 'Financial Compliance',
    items: [
      'Ghana Revenue Authority (GRA) compliance',
      'IFRS accounting standards',
      'Audit trail requirements',
      'Tax reporting compliance',
      'Financial data retention',
    ],
  },
  {
    title: 'Operational Standards',
    items: [
      'Business continuity planning',
      'Disaster recovery procedures',
      'Incident response protocols',
      'Change management processes',
      'Vendor risk management',
    ],
  },
]

export default function CompliancePage() {
  return (
    <main className="bg-surface-950 min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <ShieldCheck size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Compliance & Certifications
            </h1>

            <p className="text-xl text-surface-300 mb-8 leading-relaxed">
              Independently audited and certified to meet the highest industry standards for
              security, privacy, and data protection.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Third-party audited certifications demonstrating our commitment to security and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{cert.name}</h3>
                    <p className="text-chrysolite-400 text-sm font-medium mb-3">{cert.description}</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full flex-shrink-0">
                    <CheckCircle2 size={16} className="text-green-400" />
                    <span className="text-green-400 text-xs font-medium">{cert.status}</span>
                  </div>
                </div>
                <p className="text-surface-400 text-sm leading-relaxed mb-4">{cert.details}</p>
                <p className="text-surface-500 text-xs">Certified: {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Compliance
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              We maintain compliance across multiple areas to protect your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {complianceAreas.map((area) => (
              <div
                key={area.title}
                className="bg-surface-900/50 border border-surface-800 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-white mb-6">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                      <span className="text-surface-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit & Reporting */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Audit & Transparency</h2>

            <div className="space-y-6 text-surface-300 leading-relaxed">
              <p>
                We undergo regular independent audits to verify our compliance with industry standards.
                Our security and compliance posture is continuously monitored and improved.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                  <h3 className="text-white font-semibold mb-3">Annual Audits</h3>
                  <p className="text-surface-400 text-sm">
                    Independent third-party audits of our security controls, processes, and compliance.
                  </p>
                </div>
                <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                  <h3 className="text-white font-semibold mb-3">Continuous Monitoring</h3>
                  <p className="text-surface-400 text-sm">
                    Automated compliance monitoring and security scanning across our infrastructure.
                  </p>
                </div>
                <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                  <h3 className="text-white font-semibold mb-3">Penetration Testing</h3>
                  <p className="text-surface-400 text-sm">
                    Quarterly penetration testing by certified security professionals.
                  </p>
                </div>
                <div className="bg-surface-950/50 rounded-xl p-6 border border-surface-800">
                  <h3 className="text-white font-semibold mb-3">Compliance Reports</h3>
                  <p className="text-surface-400 text-sm">
                    SOC 2 reports available to enterprise customers under NDA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Questions About Compliance?
          </h2>
          <p className="text-lg text-surface-400 mb-8">
            Our security and compliance team is here to answer your questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
              Contact Compliance Team
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/security"
              className="w-full sm:w-auto bg-surface-800 hover:bg-surface-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
            >
              View Security Details
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
