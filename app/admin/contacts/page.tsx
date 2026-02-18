import { Suspense } from 'react'
import { getContacts, type ContactRow } from '@/lib/db'
import SearchBar from './SearchBar'
import LogoutButton from './LogoutButton'
import {
  Download, FileText, Users, TrendingUp,
  CalendarDays, BarChart2,
  ArrowUpRight, ArrowDownRight, Minus,
} from 'lucide-react'

// ─── Subject labels ──────────────────────────────────────────────────────────
const subjectLabel: Record<string, string> = {
  sales:       'Sales',
  support:     'Support',
  partnership: 'Partnership',
  other:       'Other',
}
const subjectBadge: Record<string, string> = {
  sales:       'bg-chrysolite-500/15 text-chrysolite-600 border border-chrysolite-500/20 dark:text-chrysolite-400',
  support:     'bg-electric-cyan-500/15 text-electric-cyan-600 border border-electric-cyan-500/20 dark:text-electric-cyan-400',
  partnership: 'bg-electric-purple-500/15 text-electric-purple-600 border border-electric-purple-500/20 dark:text-electric-purple-400',
  other:       'bg-surface-200/60 text-surface-600 border border-surface-300 dark:bg-surface-700/40 dark:text-surface-400 dark:border-surface-600',
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function fmt(iso: string) {
  return new Date(iso).toLocaleString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function computeStats(rows: ContactRow[]) {
  const now = new Date()
  const thisMonth = rows.filter((r) => {
    const d = new Date(r.created_at)
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
  }).length
  const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1)
  const lastMonthEnd   = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59)
  const lastMonth = rows.filter((r) => {
    const d = new Date(r.created_at)
    return d >= lastMonthStart && d <= lastMonthEnd
  }).length
  const monday = new Date(now)
  monday.setDate(now.getDate() - ((now.getDay() + 6) % 7))
  monday.setHours(0, 0, 0, 0)
  const thisWeek = rows.filter((r) => new Date(r.created_at) >= monday).length
  return { total: rows.length, thisMonth, lastMonth, thisWeek }
}

function subjectBreakdown(rows: ContactRow[]) {
  const counts: Record<string, number> = {}
  for (const r of rows) {
    const s = r.subject?.trim() || 'other'
    counts[s] = (counts[s] ?? 0) + 1
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1])
    .map(([subject, count]) => ({ subject, count }))
}

function companyBreakdown(rows: ContactRow[]) {
  const counts: Record<string, number> = {}
  for (const r of rows) {
    const c = r.company?.trim() || 'Unknown'
    counts[c] = (counts[c] ?? 0) + 1
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 7)
    .map(([company, count]) => ({ company, count }))
}

function Trend({ current, previous }: { current: number; previous: number }) {
  if (previous === 0 && current === 0) return <span className="text-surface-400 text-xs flex items-center gap-0.5"><Minus size={11} /> vs last month</span>
  if (previous === 0) return <span className="text-chrysolite-600 dark:text-chrysolite-400 text-xs flex items-center gap-0.5"><ArrowUpRight size={11} /> new this month</span>
  const pct = Math.round(((current - previous) / previous) * 100)
  if (pct > 0) return <span className="text-chrysolite-600 dark:text-chrysolite-400 text-xs flex items-center gap-0.5"><ArrowUpRight size={11} /> {pct}% vs last month</span>
  if (pct < 0) return <span className="text-red-500 dark:text-red-400 text-xs flex items-center gap-0.5"><ArrowDownRight size={11} /> {Math.abs(pct)}% vs last month</span>
  return <span className="text-surface-400 text-xs flex items-center gap-0.5"><Minus size={11} /> same as last month</span>
}

// ─── Page ─────────────────────────────────────────────────────────────────────
interface Props {
  searchParams: Promise<{ q?: string; subject?: string }>
}

export default async function ContactsAdminPage({ searchParams }: Props) {
  const { q = '', subject = '' } = await searchParams

  let allRows: ContactRow[] = []
  let dbError: string | null = null
  try {
    allRows = await getContacts()
  } catch (err) {
    dbError = err instanceof Error ? err.message : 'Unknown database error'
  }

  const stats    = computeStats(allRows)
  const subjects = subjectBreakdown(allRows)
  const companies = companyBreakdown(allRows)
  const maxSub   = subjects[0]?.count ?? 1
  const maxCo    = companies[0]?.count ?? 1

  // Filter rows for table
  let displayRows = allRows
  const ql = q.toLowerCase()
  if (ql) {
    displayRows = displayRows.filter(
      (r) =>
        r.name.toLowerCase().includes(ql) ||
        r.email.toLowerCase().includes(ql) ||
        r.company.toLowerCase().includes(ql)
    )
  }
  if (subject) displayRows = displayRows.filter((r) => r.subject === subject)
  const isFiltered = !!(q || subject)

  return (
    <div className="min-h-screen bg-surface-50 dark:bg-surface-950 text-surface-900 dark:text-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-10">

        {/* ── Header ── */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest text-chrysolite-600 dark:text-chrysolite-500 uppercase mb-1.5">
              Chrysolite AI · Admin
            </p>
            <h1 className="text-3xl font-bold text-surface-900 dark:text-white">Contact Submissions</h1>
            <p className="text-sm text-surface-500 mt-1">
              {allRows.length} total · last updated {new Date().toLocaleString('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/admin/contacts/export"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-sm font-medium text-surface-600 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-700 hover:text-surface-900 dark:hover:text-white transition-colors shadow-sm"
            >
              <Download size={15} /> CSV
            </a>
            <a
              href="/admin/contacts/export-pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-sm font-medium text-surface-600 dark:text-surface-200 hover:bg-surface-100 dark:hover:bg-surface-700 hover:text-surface-900 dark:hover:text-white transition-colors shadow-sm"
            >
              <FileText size={15} /> PDF
            </a>
            <LogoutButton />
          </div>
        </div>

        {/* ── DB error ── */}
        {dbError && (
          <div className="mb-8 rounded-xl border border-red-500/30 bg-red-50 dark:bg-red-500/10 p-5 text-sm text-red-600 dark:text-red-400">
            <strong className="font-semibold">Database error:</strong> {dbError}
            <p className="mt-1 text-xs text-red-500/70">
              Ensure DATABASE_URL is set in Vercel and the contacts table exists. See lib/db.ts for the CREATE TABLE statement.
            </p>
          </div>
        )}

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: Users,
              label: 'Total Contacts',
              value: stats.total,
              sub: <Trend current={stats.thisMonth} previous={stats.lastMonth} />,
              accent: 'from-chrysolite-500 to-electric-cyan-500',
            },
            {
              icon: CalendarDays,
              label: 'This Month',
              value: stats.thisMonth,
              sub: <span className="text-surface-400 text-xs">{stats.thisWeek} this week</span>,
              accent: 'from-electric-cyan-500 to-electric-purple-500',
            },
            {
              icon: TrendingUp,
              label: 'This Week',
              value: stats.thisWeek,
              sub: <span className="text-surface-400 text-xs">Mon – today</span>,
              accent: 'from-electric-purple-500 to-chrysolite-500',
            },
            {
              icon: BarChart2,
              label: 'Last Month',
              value: stats.lastMonth,
              sub: <span className="text-surface-400 text-xs">previous period</span>,
              accent: 'from-gold-400 to-chrysolite-500',
            },
          ].map(({ icon: Icon, label, value, sub, accent }) => (
            <div key={label} className="relative rounded-xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 p-5 overflow-hidden shadow-sm">
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent}`} />
              <div className="flex items-start justify-between mb-3">
                <p className="text-xs text-surface-500">{label}</p>
                <Icon size={15} className="text-surface-300 dark:text-surface-600" />
              </div>
              <p className="text-4xl font-bold text-surface-900 dark:text-white mb-1.5">{value}</p>
              {sub}
            </div>
          ))}
        </div>

        {/* ── Analytics row ── */}
        {allRows.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">

            {/* Subject breakdown */}
            <div className="rounded-xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-surface-600 dark:text-surface-300 mb-5">Enquiry Types</h2>
              <div className="space-y-3.5">
                {subjects.map(({ subject: s, count }) => {
                  const pct    = Math.round((count / allRows.length) * 100)
                  const barPct = Math.round((count / maxSub) * 100)
                  return (
                    <div key={s}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className={`shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded-md ${subjectBadge[s] ?? subjectBadge.other}`}>
                            {subjectLabel[s] ?? s}
                          </span>
                        </div>
                        <span className="text-xs text-surface-500">{count} · {pct}%</span>
                      </div>
                      <div className="h-1.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-chrysolite-500 to-electric-cyan-500 transition-all"
                          style={{ width: `${barPct}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Top companies */}
            <div className="rounded-xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-surface-600 dark:text-surface-300 mb-5">Top Companies</h2>
              <div className="space-y-3.5">
                {companies.map(({ company, count }) => {
                  const barPct = Math.round((count / maxCo) * 100)
                  return (
                    <div key={company}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-surface-700 dark:text-surface-200 truncate">{company}</span>
                        <span className="text-xs text-surface-500 ml-2 shrink-0">{count}</span>
                      </div>
                      <div className="h-1.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-electric-purple-500 to-chrysolite-500 transition-all"
                          style={{ width: `${barPct}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── Search & filter ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <Suspense>
            <SearchBar q={q} subject={subject} />
          </Suspense>
          <p className="text-xs text-surface-400 shrink-0">
            {isFiltered
              ? `${displayRows.length} of ${allRows.length} records`
              : `${allRows.length} record${allRows.length !== 1 ? 's' : ''}`}
          </p>
        </div>

        {/* ── Empty states ── */}
        {!dbError && allRows.length === 0 && (
          <div className="rounded-xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 p-16 text-center shadow-sm">
            <div className="w-12 h-12 rounded-full bg-surface-100 dark:bg-surface-800 flex items-center justify-center mx-auto mb-4">
              <Users size={20} className="text-surface-400" />
            </div>
            <p className="font-medium text-surface-700 dark:text-surface-300 mb-1">No contacts yet</p>
            <p className="text-sm text-surface-500">Submissions from /contact will appear here.</p>
          </div>
        )}

        {!dbError && allRows.length > 0 && displayRows.length === 0 && (
          <div className="rounded-xl border border-surface-200 dark:border-surface-800 bg-white dark:bg-surface-900 p-12 text-center shadow-sm">
            <p className="font-medium text-surface-700 dark:text-surface-300 mb-1">No results</p>
            <p className="text-sm text-surface-500">Try a different search term or clear the filters.</p>
          </div>
        )}

        {/* ── Table ── */}
        {displayRows.length > 0 && (
          <div className="rounded-xl border border-surface-200 dark:border-surface-800 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-200 dark:border-surface-800 bg-surface-50 dark:bg-surface-900/80">
                    {['Date', 'Name', 'Email', 'Company', 'Phone', 'Subject', 'Message'].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-semibold text-surface-500 uppercase tracking-wider whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-100 dark:divide-surface-800/60">
                  {displayRows.map((row) => (
                    <tr key={row.id} className="bg-white dark:bg-surface-950 hover:bg-surface-50 dark:hover:bg-surface-900 transition-colors">
                      <td className="px-4 py-3 text-surface-500 whitespace-nowrap text-xs">
                        {fmt(row.created_at)}
                      </td>
                      <td className="px-4 py-3 font-medium text-surface-900 dark:text-white whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <a
                          href={`mailto:${row.email}`}
                          className="text-chrysolite-600 dark:text-chrysolite-400 hover:text-chrysolite-700 dark:hover:text-chrysolite-300 hover:underline"
                        >
                          {row.email}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-surface-600 dark:text-surface-300 whitespace-nowrap">
                        {row.company}
                      </td>
                      <td className="px-4 py-3 text-surface-500 whitespace-nowrap">
                        {row.phone ?? <span className="text-surface-300 dark:text-surface-700">—</span>}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${subjectBadge[row.subject] ?? subjectBadge.other}`}>
                          {subjectLabel[row.subject] ?? row.subject}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-surface-500 text-xs max-w-[220px] truncate" title={row.message}>
                        {row.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p className="mt-5 text-xs text-surface-400 text-right">
          Chrysolite AI · Admin · Newest first
        </p>
      </div>
    </div>
  )
}
