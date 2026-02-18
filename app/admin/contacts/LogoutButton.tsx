'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.replace('/admin/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-sm font-medium text-surface-600 dark:text-surface-200 hover:bg-red-50 dark:hover:bg-red-500/10 hover:text-red-600 dark:hover:text-red-400 hover:border-red-200 dark:hover:border-red-500/20 transition-colors shadow-sm"
    >
      <LogOut size={15} /> Sign out
    </button>
  )
}
