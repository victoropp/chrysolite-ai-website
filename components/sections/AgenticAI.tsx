'use client'

import Link from 'next/link'
import {
  Brain,
  Package,
  Calculator,
  TrendingUp,
  ShoppingBag,
  Truck,
  Settings,
  Users,
  BarChart3,
  FileText,
  Sparkles,
  ArrowRight,
  Zap,
  Clock,
  Target
} from 'lucide-react'
import { cn } from '@/lib/utils'

const agents = [
  {
    icon: Calculator,
    name: 'Finance Agent',
    specialty: 'Financial Operations',
    description: 'AR/AP aging, GL management, cash flow analysis, overdue tracking',
    color: 'from-electric-cyan-500 to-electric-purple-500',
  },
  {
    icon: Package,
    name: 'Inventory Agent',
    specialty: 'Stock Management',
    description: 'Real-time tracking, demand forecasting, reorder automation, shrinkage detection',
    color: 'from-chrysolite-500 to-gold-400',
  },
  {
    icon: TrendingUp,
    name: 'Sales Agent',
    specialty: 'Revenue Growth',
    description: 'Pipeline management, customer analytics, pricing optimization, territory performance',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: ShoppingBag,
    name: 'Procurement Agent',
    specialty: 'Vendor Management',
    description: 'Supplier performance, PO tracking, contract management, lead time optimization',
    color: 'from-electric-purple-500 to-chrysolite-vivid',
  },
  {
    icon: Truck,
    name: 'Logistics Agent',
    specialty: 'Fleet Operations',
    description: 'GPS tracking, route optimization, fuel monitoring, driver assignment',
    color: 'from-surface-500 to-surface-700',
  },
  {
    icon: Settings,
    name: 'Operations Agent',
    specialty: 'Production Management',
    description: 'Filling operations, quality control, shift management, reconciliations',
    color: 'from-chrysolite-400 to-chrysolite-600',
  },
  {
    icon: Users,
    name: 'HR Agent',
    specialty: 'People Management',
    description: 'Employee data, attendance tracking, leave management, role assignments',
    color: 'from-gold-500 to-gold-600',
  },
  {
    icon: BarChart3,
    name: 'Analytics Agent',
    specialty: 'Business Intelligence',
    description: 'KPI tracking, trend analysis, forecasting, performance dashboards',
    color: 'from-electric-cyan-400 to-electric-cyan-600',
  },
  {
    icon: FileText,
    name: 'Accountant Agent',
    specialty: 'Compliance Expert',
    description: 'IFRS compliance, journal entries, financial statements, tax calculations',
    color: 'from-electric-purple-400 to-electric-purple-600',
  },
]

const capabilities = [
  {
    icon: Sparkles,
    title: 'Autonomous Decision-Making',
    description: 'Agents don\'t just recommend—they act. Approve routine transactions, flag anomalies, and handle decisions while you focus on strategy.',
  },
  {
    icon: Clock,
    title: '24/7 Operations',
    description: 'Your AI workforce never sleeps. Agents monitor operations continuously, processing data and responding to events around the clock.',
  },
  {
    icon: Brain,
    title: 'Collaborative Intelligence',
    description: 'Agents work together seamlessly. Finance Agent consults Inventory Agent for working capital optimization across modules.',
  },
  {
    icon: Target,
    title: 'Domain Expertise',
    description: 'Each agent is a specialist. Finance Agent knows IFRS, Logistics Agent understands route optimization, HR Agent predicts turnover.',
  },
]

export default function AgenticAI() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-surface-50 via-white to-surface-100 dark:from-surface-950 dark:via-surface-900 dark:to-surface-950">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-electric-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-chrysolite-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-cyan-500/10 to-electric-purple-500/10 border border-electric-cyan-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles size={20} className="text-electric-cyan-500 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 bg-clip-text text-transparent">
              The Era of Agentic AI
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
            Meet Your <span className="bg-gradient-to-r from-electric-cyan-400 to-electric-purple-400 bg-clip-text text-transparent">AI Workforce</span>
          </h2>

          <p className="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            9 specialized AI agents working together 24/7 across every business function.
            Not just automation—<strong className="text-surface-900 dark:text-white">intelligent agents that understand, decide, and act autonomously</strong>.
          </p>

          <p className="text-lg text-surface-500 dark:text-surface-400 max-w-2xl mx-auto">
            While you sleep, your AI agents handle routine decisions, flag anomalies, and coordinate across departments—alerting you only when human judgment is needed.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fade-in-up animation-delay-200">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={cn(
                'bg-white/80 dark:bg-surface-900/80 backdrop-blur-sm border border-surface-200 dark:border-surface-800 rounded-2xl p-6',
                'hover:border-electric-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric-cyan-500/10',
                'animate-fade-in-up'
              )}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan-500/20 to-electric-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <capability.icon size={24} className="text-electric-cyan-500" />
              </div>
              <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
                {capability.title}
              </h3>
              <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-surface-900 dark:text-white mb-4">
              Your Specialized AI Team
            </h3>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Each agent is a domain expert with deep knowledge, specialized tools, and the ability to collaborate with other agents to solve complex challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, index) => (
              <div
                key={agent.name}
                className={cn(
                  'group relative bg-white/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-200 dark:border-surface-800 rounded-2xl p-6',
                  'hover:bg-white/80 dark:hover:bg-surface-900/80 hover:border-electric-cyan-500/30 transition-all duration-300',
                  'hover:shadow-xl hover:shadow-electric-cyan-500/20 hover:-translate-y-1',
                  'animate-fade-in-up'
                )}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan-500/0 to-electric-purple-500/0 group-hover:from-electric-cyan-500/5 group-hover:to-electric-purple-500/5 rounded-2xl transition-all duration-300"></div>

                <div className="relative">
                  {/* Icon */}
                  <div className={cn(
                    'inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4',
                    'bg-gradient-to-br shadow-lg group-hover:scale-110 transition-transform duration-300',
                    agent.color
                  )}>
                    <agent.icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-semibold text-surface-900 dark:text-white mb-1 group-hover:text-electric-cyan-500 transition-colors">
                    {agent.name}
                  </h4>
                  <p className="text-sm font-medium text-electric-cyan-600 dark:text-electric-cyan-400 mb-3">
                    {agent.specialty}
                  </p>
                  <p className="text-sm text-surface-600 dark:text-surface-400 leading-relaxed">
                    {agent.description}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-electric-cyan-500 rounded-full"></div>
                  <div className="absolute top-2 right-6 w-1 h-1 bg-electric-purple-500 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How Agents Collaborate */}
        <div className="bg-gradient-to-br from-electric-cyan-500/10 to-electric-purple-500/10 border border-electric-cyan-500/20 rounded-3xl p-8 lg:p-12 mb-12 animate-fade-in-up animation-delay-1500">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-electric-cyan-500 to-electric-purple-500 rounded-xl flex items-center justify-center">
                  <Zap size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-surface-900 dark:text-white">
                  Multi-Agent Orchestration
                </h3>
              </div>

              <p className="text-lg text-surface-700 dark:text-surface-300 mb-6 leading-relaxed">
                Agents don't work in silos—they collaborate intelligently across your entire organization.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-electric-cyan-500/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-electric-cyan-600 dark:text-electric-cyan-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <p className="text-surface-900 dark:text-white font-semibold mb-1">
                      Autonomous Coordination
                    </p>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Finance Agent consults Inventory Agent for working capital optimization. Procurement Agent coordinates with Logistics Agent for delivery scheduling.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-electric-cyan-500/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-electric-cyan-600 dark:text-electric-cyan-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <p className="text-surface-900 dark:text-white font-semibold mb-1">
                      Shared Context & Memory
                    </p>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Agents remember previous interactions and share insights. Sales Agent learns from past conversations to provide better customer recommendations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-electric-cyan-500/20 rounded-lg flex items-center justify-center mt-1">
                    <span className="text-electric-cyan-600 dark:text-electric-cyan-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <p className="text-surface-900 dark:text-white font-semibold mb-1">
                      Intelligent Routing
                    </p>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Questions automatically routed to the right agent. Ask about "overdue invoices"—Finance Agent responds instantly with AR aging analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Agent Network Visualization */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Center Hub */}
                  <div className="w-24 h-24 bg-gradient-to-br from-electric-cyan-500 to-electric-purple-500 rounded-2xl shadow-2xl flex items-center justify-center animate-pulse">
                    <Brain size={40} className="text-white" />
                  </div>
                </div>

                {/* Orbiting Agents */}
                {[
                  { icon: Calculator, angle: 0, delay: '0s' },
                  { icon: Package, angle: 40, delay: '0.5s' },
                  { icon: TrendingUp, angle: 80, delay: '1s' },
                  { icon: ShoppingBag, angle: 120, delay: '1.5s' },
                  { icon: Truck, angle: 160, delay: '2s' },
                  { icon: Settings, angle: 200, delay: '2.5s' },
                  { icon: Users, angle: 240, delay: '3s' },
                  { icon: BarChart3, angle: 280, delay: '3.5s' },
                  { icon: FileText, angle: 320, delay: '4s' },
                ].map((agent, i) => (
                  <div
                    key={i}
                    className="absolute w-16 h-16 bg-white dark:bg-surface-900 border-2 border-electric-cyan-500/30 rounded-xl shadow-lg flex items-center justify-center"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `
                        translate(-50%, -50%)
                        rotate(${agent.angle}deg)
                        translateY(-140px)
                        rotate(-${agent.angle}deg)
                      `,
                      animation: `float 6s ease-in-out infinite`,
                      animationDelay: agent.delay,
                    }}
                  >
                    <agent.icon size={24} className="text-electric-cyan-500" />
                  </div>
                ))}

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" style={{ pointerEvents: 'none' }}>
                  <circle cx="50%" cy="50%" r="140" stroke="currentColor" className="text-electric-cyan-500" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-in-up animation-delay-1600">
          <div className="bg-gradient-to-r from-electric-cyan-500/10 to-electric-purple-500/10 border border-electric-cyan-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-4">
              Experience Agentic AI in Action
            </h3>
            <p className="text-surface-600 dark:text-surface-400 mb-6">
              See how our 9 specialized agents collaborate to transform your business operations. From predictive analytics to autonomous decision-making—the future of ERP is here.
            </p>
            <Link
              href="/features/ai"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-electric-cyan-500 to-electric-purple-500 hover:from-electric-cyan-400 hover:to-electric-purple-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-electric-cyan/40 hover:shadow-electric-purple/60 hover:scale-105"
            >
              <Brain size={20} />
              Explore All AI Capabilities
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
