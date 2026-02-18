'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useTransition, useState, useEffect } from 'react'
import { Search, X, CalendarDays } from 'lucide-react'

const subjects = [
  { value: '',            label: 'All subjects' },
  { value: 'sales',       label: 'Sales Inquiry' },
  { value: 'support',     label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other',       label: 'Other' },
]

const inputClass =
  'bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-white text-sm placeholder:text-surface-400 dark:placeholder:text-surface-500 rounded-xl focus:outline-none focus:border-chrysolite-500/50 transition-colors px-3 py-2.5'

interface Props {
  q: string
  subject: string
  from_date: string
  to_date: string
  sort: string
}

export default function SearchBar({ q, subject, from_date, to_date, sort }: Props) {
  const router     = useRouter()
  const pathname   = usePathname()
  const params     = useSearchParams()
  const [, startT] = useTransition()
  const [val, setVal] = useState(q)

  useEffect(() => { setVal(q) }, [q])

  function update(key: string, value: string) {
    const sp = new URLSearchParams(params.toString())
    // 'desc' is the default — no need to keep it in the URL
    if (value && !(key === 'sort' && value === 'desc')) sp.set(key, value)
    else sp.delete(key)
    startT(() => router.replace(`${pathname}?${sp.toString()}`))
  }

  function clear() {
    setVal('')
    startT(() => router.replace(pathname))
  }

  const hasFilters = !!(q || subject || from_date || to_date || sort === 'asc')

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400 pointer-events-none" />
        <input
          type="search"
          value={val}
          onChange={(e) => {
            setVal(e.target.value)
            update('q', e.target.value)
          }}
          placeholder="Search name, email, company…"
          className={`${inputClass} pl-8 w-64`}
        />
      </div>

      {/* Subject filter */}
      <select
        value={subject}
        onChange={(e) => update('subject', e.target.value)}
        className={inputClass}
      >
        {subjects.map((s) => (
          <option key={s.value} value={s.value}>{s.label}</option>
        ))}
      </select>

      {/* Date range */}
      <div className="flex items-center gap-1.5">
        <CalendarDays size={13} className="text-surface-400 shrink-0" />
        <input
          type="date"
          value={from_date}
          onChange={(e) => update('from_date', e.target.value)}
          className={`${inputClass} w-36`}
          title="From date"
        />
        <span className="text-surface-400 text-xs">–</span>
        <input
          type="date"
          value={to_date}
          onChange={(e) => update('to_date', e.target.value)}
          className={`${inputClass} w-36`}
          title="To date"
        />
      </div>

      {/* Sort */}
      <select
        value={sort || 'desc'}
        onChange={(e) => update('sort', e.target.value)}
        className={inputClass}
      >
        <option value="desc">Newest first</option>
        <option value="asc">Oldest first</option>
      </select>

      {/* Clear */}
      {hasFilters && (
        <button
          onClick={clear}
          className="flex items-center gap-1.5 text-xs text-surface-500 hover:text-surface-700 dark:hover:text-surface-200 transition-colors"
        >
          <X size={12} /> Clear
        </button>
      )}
    </div>
  )
}
