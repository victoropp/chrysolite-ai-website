'use client'

import { useState } from 'react'
import {
  Calculator,
  Package,
  ShoppingBag,
  TrendingUp,
  Users,
  Wallet,
  CheckCircle2,
  Truck,
  Building2,
  BarChart3,
  Shield,
  FileText,
  Zap,
  Brain,
  Droplet,
  Settings,
  Globe,
  Fuel
} from 'lucide-react'
import { cn } from '@/lib/utils'

const modules = [
  {
    id: 'accounting',
    icon: Calculator,
    name: 'Accounting',
    tagline: 'Complete financial control',
    description: 'Comprehensive accounting suite with general ledger, accounts payable/receivable, multi-currency support, and AI-powered financial reporting.',
    features: [
      'General Ledger & Chart of Accounts',
      'Accounts Payable & Receivable',
      'Bank Reconciliation & Cash Management',
      'Financial Statements & Reports',
      'Multi-Currency Support',
      'AI Anomaly Detection & Audit Trail',
    ],
    gradient: 'from-electric-cyan-500 to-electric-purple-500',
  },
  {
    id: 'inventory',
    icon: Package,
    name: 'Inventory',
    tagline: 'Smart stock management',
    description: 'Real-time inventory tracking with AI-powered demand forecasting, automated reordering, and multi-warehouse support across all locations.',
    features: [
      'Real-Time Stock Tracking',
      'Multi-Warehouse Management',
      'AI Demand Forecasting',
      'Automated Reordering',
      'Barcode & QR Scanning',
      'Batch, Serial & Cylinder Tracking',
    ],
    gradient: 'from-gold-400 to-gold-500',
  },
  {
    id: 'procurement',
    icon: ShoppingBag,
    name: 'Procurement',
    tagline: 'Streamlined purchasing',
    description: 'End-to-end procurement process from requisition to payment, with vendor management and AI purchase recommendations.',
    features: [
      'Purchase Orders & Requisitions',
      'Vendor Management & Evaluation',
      'RFQ & Bid Management',
      'Automated Approval Workflows',
      'AI Price Optimization',
      'Delivery Tracking & GRN',
    ],
    gradient: 'from-chrysolite-vivid to-chrysolite-500',
  },
  {
    id: 'sales',
    icon: TrendingUp,
    name: 'Sales',
    tagline: 'Accelerate revenue growth',
    description: 'Complete sales lifecycle management with quotations, orders, invoicing, and AI-powered sales insights and forecasting.',
    features: [
      'Quotations & Order Management',
      'Automated Invoicing',
      'Sales Pipeline & Forecasting',
      'Customer Portal Access',
      'Payment Processing',
      'AI Sales Analytics & Predictions',
    ],
    gradient: 'from-surface-400 to-surface-600',
  },
  {
    id: 'payroll',
    icon: Wallet,
    name: 'Payroll & HR',
    tagline: 'Effortless people management',
    description: 'Automated payroll processing, leave management, benefits tracking, and AI-powered compliance monitoring and turnover prediction.',
    features: [
      'Automated Payroll Processing',
      'Leave & Attendance Tracking',
      'Benefits Administration',
      'Tax Compliance & Statutory Reports',
      'Employee Self-Service Portal',
      'AI Performance & Turnover Analysis',
    ],
    gradient: 'from-gold-500 to-gold-600',
  },
  {
    id: 'crm',
    icon: Users,
    name: 'CRM',
    tagline: 'Build lasting relationships',
    description: 'Unified customer view with sales pipeline management, marketing automation, and AI-powered insights including churn prediction.',
    features: [
      'Contact & Lead Management',
      'Sales Pipeline & Opportunities',
      'Email Campaign Automation',
      'Customer Support Ticketing',
      'AI Churn Risk Detection',
      'Performance Dashboards',
    ],
    gradient: 'from-chrysolite-400 to-chrysolite-vivid',
  },
  {
    id: 'fixed-assets',
    icon: Building2,
    name: 'Fixed Assets',
    tagline: 'Track your capital investments',
    description: 'Complete asset lifecycle management with depreciation calculations, maintenance tracking, and compliance reporting.',
    features: [
      'Asset Register & Tracking',
      'Automated Depreciation',
      'Maintenance Scheduling',
      'Asset Valuation & Revaluation',
      'Disposal & Transfer Management',
      'Tax & Compliance Reporting',
    ],
    gradient: 'from-chrysolite-500 to-gold-400',
  },
  {
    id: 'banking',
    icon: Wallet,
    name: 'Banking',
    tagline: 'Seamless cash management',
    description: 'Multi-bank account management with automated reconciliation, payment processing, and AI-powered cash flow forecasting.',
    features: [
      'Multi-Bank Account Management',
      'Automated Bank Reconciliation',
      'Payment Processing & Approvals',
      'Cash Flow Forecasting',
      'Check Printing & Management',
      'Bank Statement Import',
    ],
    gradient: 'from-electric-cyan-400 to-electric-purple-400',
  },
  {
    id: 'fleet',
    icon: Truck,
    name: 'Fleet Management',
    tagline: 'Optimize your logistics',
    description: 'Complete fleet operations with vehicle tracking, maintenance scheduling, fuel management, and AI route optimization.',
    features: [
      'Vehicle Tracking & GPS',
      'Maintenance Scheduling',
      'Fuel Management & Monitoring',
      'Driver Management',
      'AI Route Optimization',
      'Cost Analysis & Reporting',
    ],
    gradient: 'from-surface-500 to-surface-700',
  },
  {
    id: 'petroleum',
    icon: Droplet,
    name: 'Petroleum Operations',
    tagline: 'Industry-specific excellence',
    description: 'Specialized for oil & gas midstream: LPG cylinder tracking, levy automation, UPPF claims, depot operations, and NPA compliance.',
    features: [
      'LPG Cylinder Tracking',
      'Automated Petroleum Levies (UPPF, BOST, EPRF)',
      'UPPF Transport Claims & Automation',
      'Depot Operations Management',
      'NPA Compliance Reporting',
      'LPG Bottling Operations',
    ],
    gradient: 'from-electric-cyan-500 to-electric-purple-500',
  },
  {
    id: 'filling-station',
    icon: Fuel,
    name: 'Filling Station Operations',
    tagline: 'Complete forecourt management',
    description: 'Eliminate manual reconciliation errors and fuel losses. Know exactly what every pump dispensed, every shift sold, and every attendant handled—all with automatic accounting.',
    features: [
      'Pump & Tank Real-Time Monitoring',
      'Shift-Based Daily Sales & Reconciliation',
      'Individual Attendant Accountability',
      'Temperature-Corrected Volume Tracking',
      'Automated Loss Detection & GL Posting',
      'Petty Cash & Station Expense Management',
    ],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    name: 'Analytics & BI',
    tagline: 'Data-driven decisions',
    description: 'Powerful business intelligence with customizable dashboards, predictive analytics, and AI-powered insights across all modules.',
    features: [
      'Custom Dashboards & Reports',
      'Real-Time Analytics',
      'Predictive Analytics',
      'KPI Tracking & Alerts',
      'Data Visualization',
      'AI-Powered Recommendations',
    ],
    gradient: 'from-chrysolite-400 to-gold-400',
  },
  {
    id: 'ai',
    icon: Brain,
    name: 'AI Engine',
    tagline: 'Intelligence everywhere',
    description: 'Cross-module AI capabilities including natural language queries, anomaly detection, predictive forecasting, and automated insights.',
    features: [
      'Natural Language Queries',
      'Anomaly Detection',
      'Predictive Forecasting',
      'Automated Recommendations',
      'Pattern Recognition',
      'Intelligent Alerts',
    ],
    gradient: 'from-electric-cyan-400 to-electric-purple-400',
  },
  {
    id: 'compliance',
    icon: Shield,
    name: 'Compliance & Audit',
    tagline: 'Stay audit-ready',
    description: 'Automated compliance monitoring, audit trails, regulatory reporting, and AI-powered risk assessment across all operations.',
    features: [
      'Audit Trail & Logging',
      'Regulatory Reporting',
      'Tax Compliance (VAT, NHIL, etc.)',
      'AI Risk Assessment',
      'Document Management',
      'Compliance Dashboards',
    ],
    gradient: 'from-surface-400 to-surface-600',
  },
  {
    id: 'workflows',
    icon: Zap,
    name: 'Workflows & Automation',
    tagline: 'Automate everything',
    description: 'Visual workflow builder with approval chains, automated notifications, and AI-powered process optimization across all modules.',
    features: [
      'Visual Workflow Builder',
      'Approval Chain Management',
      'Automated Notifications',
      'Process Templates',
      'AI Process Optimization',
      'Integration Triggers',
    ],
    gradient: 'from-gold-400 to-gold-600',
  },
  {
    id: 'document-management',
    icon: FileText,
    name: 'Document Management',
    tagline: 'Paperless operations',
    description: 'Centralized document storage with version control, OCR scanning, automated filing, and AI-powered document classification.',
    features: [
      'Document Storage & Versioning',
      'OCR & Document Scanning',
      'Automated Filing',
      'AI Document Classification',
      'Access Control & Permissions',
      'Full-Text Search',
    ],
    gradient: 'from-chrysolite-500 to-chrysolite-600',
  },
  {
    id: 'tenant-admin',
    icon: Settings,
    name: 'System Administration',
    tagline: 'Complete control',
    description: 'Centralized system control with user management, role-based permissions, security settings, and comprehensive configuration—manage everything from one place.',
    features: [
      'User & Role Management',
      'Granular Permission Controls',
      'Data Isolation & Security',
      'Security & Access Settings',
      'System-Wide Configuration',
      'Activity Audit & Monitoring',
    ],
    gradient: 'from-surface-500 to-surface-700',
  },
  {
    id: 'customer-portal',
    icon: Globe,
    name: 'Customer Portal',
    tagline: 'Self-service excellence',
    description: 'Branded customer portal with order tracking, invoice access, payment processing, and support ticket management.',
    features: [
      'Order Tracking & History',
      'Invoice & Statement Access',
      'Online Payment Processing',
      'Support Ticket System',
      'Document Downloads',
      'Account Management',
    ],
    gradient: 'from-electric-cyan-500 to-electric-purple-500',
  },
]

export default function ModuleShowcase() {
  const [activeModule, setActiveModule] = useState(modules[0])

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white dark:bg-surface-950">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-chrysolite-500/10 border border-chrysolite-500/30 rounded-full px-4 py-2 mb-4">
            <span className="text-sm font-medium text-chrysolite-400">Powerful Modules</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-surface-900 dark:text-white mb-4">
            Complete <span className="gradient-text">Business Suite</span>
          </h2>
          <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto">
            18+ integrated modules covering every aspect of your business—from finance to operations, all with AI built in
          </p>
        </div>

        {/* Module Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {modules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module)}
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300',
                activeModule.id === module.id
                  ? 'bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 text-white shadow-lg shadow-chrysolite-500/30'
                  : 'bg-surface-900/50 text-surface-300 hover:bg-surface-900 hover:text-white border border-surface-800 hover:border-chrysolite-500/30'
              )}
            >
              <module.icon size={20} />
              <span>{module.name}</span>
            </button>
          ))}
        </div>

        {/* Module Content */}
        <div className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-xl border border-surface-300 dark:border-surface-800 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left: Description & Features */}
            <div className="space-y-6 animate-fade-in">
              {/* Icon & Title */}
              <div className="flex items-start gap-4">
                <div className={cn(
                  'flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br shadow-lg',
                  activeModule.gradient
                )}>
                  <activeModule.icon size={32} className="text-surface-900 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-surface-900 dark:text-white mb-1">{activeModule.name}</h3>
                  <p className="text-chrysolite-400 font-medium">{activeModule.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-surface-600 dark:text-surface-300 leading-relaxed">
                {activeModule.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-4">
                {activeModule.features.map((feature, index) => (
                  <div
                    key={feature}
                    className={cn(
                      'flex items-start gap-3 animate-slide-in-left',
                      `animation-delay-${(index + 1) * 100}`
                    )}
                  >
                    <CheckCircle2 size={20} className="text-chrysolite-400 mt-0.5 flex-shrink-0" />
                    <span className="text-surface-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <a
                  href={`/features/${activeModule.id}`}
                  className="inline-flex items-center gap-2 text-chrysolite-400 hover:text-chrysolite-300 font-medium group"
                >
                  <span>Explore {activeModule.name} Module</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Screenshot Placeholder */}
            <div className="relative animate-scale-in animation-delay-200">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-800 dark:to-surface-900 rounded-2xl overflow-hidden border border-surface-300 dark:border-surface-700 shadow-2xl">
                {/* Mock Browser Chrome */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-surface-200/80 dark:bg-surface-800/80 backdrop-blur-sm border-b border-surface-300 dark:border-surface-700 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-400 dark:bg-surface-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-400 dark:bg-surface-600"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-surface-400 dark:bg-surface-600"></div>
                  </div>
                  <div className="flex-1 h-4 bg-surface-300 dark:bg-surface-700 rounded ml-4 mr-4"></div>
                </div>

                {/* Content Area */}
                <div className="absolute inset-0 top-8 p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className={cn(
                      'inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br mb-4',
                      activeModule.gradient,
                      'shadow-xl animate-float'
                    )}>
                      <activeModule.icon size={40} className="text-white" />
                    </div>
                    <p className="text-surface-700 dark:text-surface-400 text-sm">
                      {activeModule.name} Dashboard Preview
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-chrysolite-500/5 to-gold-400/5"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 rounded-full px-6 py-3 shadow-lg shadow-chrysolite-500/30">
                <p className="text-surface-900 dark:text-white font-semibold text-sm">Fully Integrated</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-surface-600 dark:text-surface-400">
            All modules work together seamlessly.{' '}
            <a href="/features" className="text-chrysolite-400 hover:text-chrysolite-300 font-medium underline underline-offset-4">
              See how they integrate →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
