'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useTransition, useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'

const subjects = [
  { value: '', label: 'All subjects' },
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
}

export default function SearchBar({ q, subject }: Props) {
  const router     = useRouter()
  const pathname   = usePathname()
  const params     = useSearchParams()
  const [, startT] = useTransition()
  const [val, setVal] = useState(q)

  useEffect(() => { setVal(q) }, [q])

  function update(key: string, value: string) {
    const sp = new URLSearchParams(params.toString())
    if (value) sp.set(key, value)
    else sp.delete(key)
    startT(() => router.replace(`${pathname}?${sp.toString()}`))
  }

  function clear() {
    setVal('')
    startT(() => router.replace(pathname))
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Search input */}
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

      {/* Clear filters */}
      {(q || subject) && (
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
