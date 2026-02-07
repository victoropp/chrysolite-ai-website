import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Shield,
  Lock,
  Eye,
  Server,
  FileCheck,
  UserCheck,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security & Compliance - Enterprise-Grade Protection | Chrysolite AI',
  description: 'Bank-level security and compliance. SOC 2, GDPR, ISO 27001 certified. Your business data is protected with enterprise-grade encryption and controls.',
}

const securityFeatures = [
  {
    icon: Lock,
    title: 'Bank-Level Encryption',
    description: 'All data encrypted at rest and in transit with enterprise-grade encryption standards.',
  },
  {
    icon: Shield,
    title: 'Advanced Threat Protection',
    description: 'Real-time monitoring and automatic threat detection to keep your data safe.',
  },
  {
    icon: UserCheck,
    title: 'Role-Based Access Control',
    description: 'Granular permissions and multi-factor authentication for all user accounts.',
  },
  {
    icon: Eye,
    title: 'Audit Trails',
    description: 'Complete activity logs and audit trails for compliance and forensics.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA.',
  },
  {
    icon: FileCheck,
    title: 'Data Backup & Recovery',
    description: 'Automated daily backups with point-in-time recovery and disaster recovery plans.',
  },
]

const certifications = [
  {
    name: 'SOC 2 Type II',
    description: 'Security controls and processes',
    status: 'Compliant',
  },
  {
    name: 'GDPR',
    description: 'European data protection standards',
    status: 'Compliant',
  },
  {
    name: 'ISO 27001',
    description: 'Information security management',
    status: 'Compliant',
  },
  {
    name: 'PCI DSS',
    description: 'Payment card industry standards',
    status: 'Compliant',
  },
]

const securityPractices = [
  'Regular third-party security audits and penetration testing',
  'Secure software development lifecycle (SDLC)',
  'Vulnerability management and patch management',
  'Incident response and disaster recovery procedures',
  'Employee security training and background checks',
  'Data residency options for regional compliance',
  'Network segmentation and firewall protection',
  'Intrusion detection and prevention systems',
]

export default function SecurityPage() {
  return (
    <main className="bg-surface-950 min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-chrysolite-500 to-gold-400 rounded-2xl mb-8 shadow-lg shadow-chrysolite/30">
              <Shield size={40} className="text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Enterprise-Grade Security You Can Trust
            </h1>

            <p className="text-xl text-surface-300 mb-8 leading-relaxed">
              Your business data is protected with bank-level security, compliance certifications,
              and industry-leading practices. Security is not an afterthought—it's built into everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Security Features
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Multi-layered security protecting your data at every level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-900/50 backdrop-blur-sm border border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-surface-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Compliance Certifications
            </h2>
            <p className="text-lg text-surface-400 max-w-2xl mx-auto">
              Independently audited and certified to meet the highest industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-surface-900/50 border border-surface-800 rounded-2xl p-6 text-center hover:border-chrysolite-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={24} className="text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-surface-400 text-sm mb-3">{cert.description}</p>
                <span className="inline-flex items-center gap-1 text-blue-400 text-xs font-medium">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  {cert.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Practices */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Our Security Commitment
              </h2>
              <p className="text-lg text-surface-400 mb-8">
                Security is a continuous process, not a one-time effort. We maintain strict security
                practices and constantly monitor for emerging threats.
              </p>

              <div className="space-y-4">
                {securityPractices.map((practice) => (
                  <div key={practice} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-chrysolite-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={16} className="text-chrysolite-400" />
                    </div>
                    <span className="text-surface-300">{practice}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-white font-semibold mb-6">Security Stats</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-surface-400">Uptime SLA</span>
                      <span className="text-chrysolite-400 font-bold">99.9%</span>
                    </div>
                    <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-chrysolite-500 to-gold-400 w-[99.9%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-surface-400">Data Encryption</span>
                      <span className="text-chrysolite-400 font-bold">100%</span>
                    </div>
                    <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-chrysolite-500 to-gold-400 w-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-surface-400">Security Incidents (Last Year)</span>
                      <span className="text-green-400 font-bold">0</span>
                    </div>
                    <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 w-0"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-chrysolite-500/10 border border-chrysolite-500/30 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium mb-1">Vulnerability Disclosure</p>
                      <p className="text-surface-400 text-sm">
                        Found a security issue? We have a responsible disclosure program.
                        Contact: security@chrysoliteai.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-surface-900 to-surface-800 border border-surface-700 rounded-2xl p-12 shadow-2xl">
            <Shield size={48} className="text-chrysolite-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Your Data is Safe With Us
            </h2>
            <p className="text-lg text-surface-400 mb-8">
              Start your free trial with confidence. Enterprise-grade security included in every plan.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/compliance"
                className="w-full sm:w-auto bg-surface-800 hover:bg-surface-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-700 hover:border-chrysolite-500/50"
              >
                View Compliance Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
