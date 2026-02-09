import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/sections/Footer'
import {
  Brain,
  Sparkles,
  MessageSquare,
  TrendingUp,
  Zap,
  Target,
  Eye,
  Mic,
  Database,
  BarChart3,
  Shield,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileText,
  GitBranch,
  Workflow,
  Bell,
  Newspaper,
  BookOpen,
  Layers,
  Gauge,
  TrendingDown,
  Calculator,
  Activity,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI-Powered Features | Chrysolite AI ERP',
  description: 'Transform your business with AI. Specialized agents, predictive analytics, natural language queries, voice assistance, knowledge graphs, and market intelligence—working 24/7 for your business.',
}

const aiCapabilities = [
  {
    icon: Brain,
    title: 'Specialized AI Agents',
    description: 'Domain-expert AI agents for Finance, Inventory, Sales, Procurement, HR, Logistics, Operations, and Analytics. Each agent understands its specialty deeply and collaborates to solve complex cross-functional challenges.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Multi-Agent Orchestration',
    description: 'Specialized AI agents collaborate across all business functions—from finance and operations to sales and logistics. They coordinate autonomously to handle complex, cross-functional challenges that span your entire enterprise.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Lightning-Fast Context Caching',
    description: 'Advanced context caching delivers near-instant AI responses for follow-up questions—up to 90% faster than traditional systems. Continue conversations seamlessly without repeating context.',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'AI-powered forecasting for cash flow, revenue trends, customer churn, inventory demand, and supplier performance. Analyzes historical patterns and market signals to predict business outcomes with accuracy.',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: Database,
    title: 'Intelligent Knowledge Search',
    description: 'AI retrieves and synthesizes information from your company knowledge base, policies, contracts, and procedures. Get instant, cited answers with source references from your entire business library.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Interface',
    description: 'Ask complex business questions in plain English: "Which customers are overdue and what\'s our collection rate?" AI understands context, intent, and remembers your conversation.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Eye,
    title: 'Computer Vision & OCR',
    description: 'Automatically extract data from invoices, receipts, delivery notes, waybills, and contracts. AI reads, validates, and posts transactions—reducing manual entry by up to 90%.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Mic,
    title: 'Voice Assistant',
    description: 'Hands-free business intelligence through voice commands. Ask questions while driving, get spoken dashboards, dictate approvals—your ERP responds naturally with real-time data.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: BarChart3,
    title: 'Autonomous Reporting',
    description: 'AI generates executive summaries, variance analyses, financial statements, and trend reports automatically. Dashboards that highlight anomalies, opportunities, and risks without manual configuration.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Intelligent Monitoring',
    description: 'AI continuously monitors transactions for fraud patterns, compliance violations, data anomalies, and operational inefficiencies. Real-time alerts with recommended actions and severity classification.',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: GitBranch,
    title: 'Knowledge Graph Intelligence',
    description: 'AI builds interconnected knowledge structures from your business data, documents, and transactions. Discover hidden relationships, patterns, and insights that traditional systems miss.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Workflow,
    title: 'Intelligent Workflow Automation',
    description: 'AI-driven approval routing and document workflows that adapt to your business rules. Smart delegation, escalation, and bottleneck detection ensure nothing gets stuck.',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: Newspaper,
    title: 'News Intelligence & Market Alerts',
    description: 'AI monitors news sources for market trends, competitor moves, supply chain risks, and regulatory changes. Get sentiment analysis, impact assessments, and personalized alerts tailored to your business.',
    color: 'from-amber-500 to-orange-500',
  },
]

const automationFeatures = [
  {
    icon: Zap,
    title: 'End-to-End Automation',
    description: 'From purchase order to payment posting—AI automates the entire accounting cycle. Journal entries, bank reconciliations, period-end close, depreciation runs, and tax calculations run autonomously.',
  },
  {
    icon: FileText,
    title: 'AI-Powered Accounting',
    description: 'Virtual CFO validates compliance, suggests GL accounts, calculates tax implications, handles prepayments and accruals, and identifies posting errors before they hit your books. IFRS and GAAP expertise built-in.',
  },
  {
    icon: Target,
    title: 'Intelligent Recommendations',
    description: 'AI recommends optimal pricing strategies, reorder quantities, cash allocation, credit limits, discount structures, and supplier selection based on historical performance and market conditions.',
  },
  {
    icon: Lightbulb,
    title: 'Market & Supply Chain Intelligence',
    description: 'AI monitors supplier performance, tracks commodity prices, analyzes competitor moves, identifies supply chain risks, and provides procurement insights—giving you strategic foresight and cost savings.',
  },
  {
    icon: Clock,
    title: 'Adaptive Learning',
    description: 'AI learns your business rules, approval patterns, data preferences, reporting needs, and accounting practices. The system becomes more personalized and accurate the longer you use it.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications & Alerts',
    description: 'AI-driven notification system learns your priorities and delivers timely alerts for critical events, overdue tasks, anomalies, and opportunities. Customizable delivery across email, SMS, and in-app channels.',
  },
  {
    icon: Calculator,
    title: 'Financial Ratio Analysis',
    description: 'AI computes and tracks key financial ratios, identifies trends, benchmarks against industry standards, and highlights areas requiring attention. Get instant insights into liquidity, profitability, and efficiency.',
  },
  {
    icon: Activity,
    title: 'Anomaly Detection',
    description: 'AI detects unusual patterns in transactions, inventory movements, sales trends, and financial data. Catch errors, fraud, and inefficiencies before they become costly problems.',
  },
  {
    icon: Gauge,
    title: 'Performance Forecasting',
    description: 'Predict future performance across sales, inventory, cash flow, and operations. AI considers seasonality, market conditions, and historical patterns to deliver accurate forecasts.',
  },
]

const benefits = [
  'Reduce manual data entry and reconciliation by up to 90%',
  'Get instant, accurate answers to complex business questions',
  'Predict cash flow, revenue, demand, and customer churn with AI-powered accuracy',
  'Detect fraud, anomalies, and compliance violations in real-time',
  'Automate journal entries, approvals, reconciliations, depreciation, and close processes',
  'Natural language and voice access to your entire business intelligence',
  'Extract and validate data from documents, invoices, waybills, and contracts automatically',
  'Continuous learning adapts to your unique business patterns and preferences',
  'Monitor news and market signals for strategic insights and competitive intelligence',
  'Discover hidden patterns and relationships across your business data',
  'Automate complex workflows with intelligent routing and escalation',
  'Generate financial statements, variance reports, and executive summaries autonomously',
]

export default function AIFeaturePage() {
  return (
    <main className="bg-white dark:bg-surface-950 min-h-screen">
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
              <Brain size={40} className="text-surface-900 dark:text-white" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-900 dark:text-white mb-6">
              AI That Transforms Your Business
            </h1>

            <p className="text-xl text-surface-600 dark:text-surface-300 mb-12 leading-relaxed">
              Experience the future of ERP with built-in artificial intelligence. Automate workflows, predict outcomes, and get expert insights—all powered by advanced AI that works 24/7.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://app.chrysoliteai.com/register"
                className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
              >
                Book AI Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Intelligent Features That Work For You
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Built-in AI that automates, predicts, and optimizes every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability) => (
              <div
                key={capability.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-chrysolite/10 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${capability.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <capability.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Features */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Powerful Automation & Insights
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              AI capabilities that save time, reduce errors, and deliver actionable business intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {automationFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-surface-50/50 dark:bg-surface-900/50 backdrop-blur-sm border border-surface-300 dark:border-surface-800 rounded-2xl p-8 hover:border-chrysolite-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-chrysolite-500/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon size={28} className="text-chrysolite-400" />
                </div>
                <h3 className="text-xl font-semibold text-surface-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-surface-600 dark:text-surface-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits List */}
          <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-surface-900 dark:text-white mb-8 text-center">
              Real Business Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-chrysolite-400 flex-shrink-0 mt-0.5" />
                  <span className="text-surface-600 dark:text-surface-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Demo */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
                Your AI Assistant, Always Available
              </h2>
              <p className="text-lg text-surface-600 dark:text-surface-400 mb-8">
                Ask questions in plain English and get instant, accurate answers. Talk to your ERP through voice or chat, and let AI handle the complex queries while you focus on growing your business.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chrysolite-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={24} className="text-chrysolite-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface-900 dark:text-white mb-2">Natural Conversations</h4>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Ask questions like you would to your CFO. AI understands context and provides detailed, actionable answers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chrysolite-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mic size={24} className="text-chrysolite-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface-900 dark:text-white mb-2">Voice Enabled</h4>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      Speak your questions and get spoken answers. Hands-free access to your entire business intelligence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-chrysolite-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain size={24} className="text-chrysolite-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-surface-900 dark:text-white mb-2">Contextual Intelligence</h4>
                    <p className="text-surface-600 dark:text-surface-400 text-sm">
                      AI remembers your preferences, learns from your decisions, and adapts to your business over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-900 dark:to-surface-800 border border-surface-300 dark:border-surface-700 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-chrysolite-500 to-gold-400 flex items-center justify-center">
                    <Brain size={20} className="text-white" />
                  </div>
                  <h3 className="text-surface-900 dark:text-white font-semibold">AI Assistant</h3>
                  <span className="ml-auto px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Online</span>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-700 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">👤</span>
                    </div>
                    <div className="bg-white dark:bg-surface-950/50 rounded-2xl rounded-tl-none p-4 flex-1">
                      <p className="text-surface-600 dark:text-surface-300 text-sm">What's my current cash position and will I have enough for next month's payroll?</p>
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="bg-chrysolite-500/20 border border-chrysolite-500/30 rounded-2xl rounded-tr-none p-4 flex-1">
                      <p className="text-surface-900 dark:text-white text-sm mb-3">Your current cash position is strong at <span className="font-semibold text-chrysolite-400">GH₵ 448,017</span> across all accounts.</p>
                      <p className="text-surface-600 dark:text-surface-300 text-xs mb-3">Based on expected collections and upcoming payroll, you'll have sufficient cash. However, I've identified a potential shortfall mid-month if certain payments delay.</p>
                      <p className="text-surface-900 dark:text-white text-sm">Recommendation: Accelerate collection from your top overdue accounts to maintain healthy cash reserves.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-chrysolite-500 to-gold-400 flex items-center justify-center flex-shrink-0">
                      <Brain size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domain-Specific AI Agents */}
      <section className="py-24 bg-surface-100/30 dark:bg-surface-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Specialized AI Agents, Working Together
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-3xl mx-auto">
              Each AI agent is a domain expert with specialized tools and knowledge. They collaborate seamlessly to handle complex cross-functional business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Calculator size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Finance Agent</h3>
              </div>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Expert in GL operations, AR/AP aging, financial statements, ratios, and compliance. Handles journal entries and reconciliations autonomously.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Database size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Inventory Agent</h3>
              </div>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Monitors stock levels, predicts reorder points, tracks batch movements, analyzes aging, and optimizes inventory across multiple locations.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Sales Agent</h3>
              </div>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Analyzes sales performance, pipeline health, customer analytics, quota tracking, and revenue forecasting with actionable insights.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <FileText size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Procurement Agent</h3>
              </div>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Evaluates supplier performance, tracks purchase orders, identifies cost savings, and provides procurement analytics and recommendations.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Logistics Agent</h3>
              </div>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Manages fleet tracking, manifest optimization, delivery route planning, and transportation analytics for efficient distribution.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg flex items-center justify-center">
                  <Activity size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Operations Agent</h3>
              </div>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Monitors production operations, equipment status, maintenance schedules, quality control, and operational efficiency metrics.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                  <Target size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">HR Agent</h3>
              </div>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Handles payroll processing, attendance tracking, leave management, overtime calculations, and workforce analytics.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <BarChart3 size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Analytics Agent</h3>
              </div>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Performs data analysis, trend identification, forecasting, and generates custom insights across all business functions.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-xl p-6 hover:border-chrysolite-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Brain size={20} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 dark:text-white">Accountant Agent</h3>
              </div>
              <p className="text-sm text-surface-600 dark:text-surface-400">
                Your virtual CFO for accounting queries, GL automation, accruals, prepayments, tax calculations, and financial close processes.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-chrysolite-500/10 border border-chrysolite-500/30 rounded-xl">
              <Layers size={20} className="text-chrysolite-400" />
              <span className="text-surface-900 dark:text-white font-medium">
                Specialized agents across all business domains share knowledge and coordinate seamlessly
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Highlights */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-4">
              Enterprise-Grade AI Technology
            </h2>
            <p className="text-lg text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
              Cutting-edge AI capabilities that give you a competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-4">Enterprise-Grade AI Architecture</h3>
              <p className="text-surface-600 dark:text-surface-400">
                Built on cutting-edge language models with advanced reasoning capabilities. The system intelligently handles everything from fast classification to complex multi-step analysis—automatically optimizing performance for each task.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-4">Intelligent Memory</h3>
              <p className="text-surface-600 dark:text-surface-400">
                AI maintains conversation context, user preferences, business rules, and historical decisions. Remembers what you told it weeks ago and applies it intelligently to future interactions.
              </p>
            </div>

            <div className="bg-surface-50/50 dark:bg-surface-900/50 border border-surface-300 dark:border-surface-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-surface-900 dark:text-white mb-4">Knowledge-Grounded Responses</h3>
              <p className="text-surface-600 dark:text-surface-400">
                AI grounds every response in your actual business data and documents. Every answer is accurate, up-to-date, and cites specific sources from your knowledge base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 dark:text-white mb-6">
            Experience AI That Works For You
          </h2>
          <p className="text-lg text-surface-600 dark:text-surface-400 mb-12">
            Join forward-thinking companies using AI to work smarter, faster, and more profitably.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://app.chrysoliteai.com/register"
              className="w-full sm:w-auto bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-chrysolite/40 hover:shadow-chrysolite/60 hover:scale-105 flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto bg-surface-50 dark:bg-surface-900 hover:bg-surface-100 dark:hover:bg-surface-800 text-surface-900 dark:text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-surface-300 dark:border-surface-700 hover:border-chrysolite-500/50"
            >
              Schedule AI Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
