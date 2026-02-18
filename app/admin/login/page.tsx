'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Eye, EyeOff, Lock, Loader2 } from 'lucide-react'

export default function AdminLoginPage() {
  const router       = useRouter()
  const searchParams = useSearchParams()
  const from         = searchParams.get('from') ?? '/admin/contacts'

  const [password, setPassword] = useState('')
  const [show,     setShow]     = useState(false)
  const [error,    setError]    = useState('')
  const [loading,  setLoading]  = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json() as { success?: boolean; error?: string }
      if (!res.ok || !data.success) {
        setError(data.error ?? 'Invalid password')
        setLoading(false)
        return
      }
      router.replace(from)
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-surface-50 dark:bg-surface-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <p className="text-xs font-bold tracking-widest text-chrysolite-600 dark:text-chrysolite-500 uppercase mb-2">
            Chrysolite AI · Admin
          </p>
          <h1 className="text-2xl font-bold text-surface-900 dark:text-white">Sign in</h1>
          <p className="text-sm text-surface-500 mt-1">Contact dashboard access</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 rounded-2xl p-8 shadow-sm space-y-5"
        >
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-surface-700 dark:text-surface-300 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock size={15} className="text-surface-400" />
              </div>
              <input
                id="password"
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoFocus
                className="w-full pl-10 pr-10 py-3 bg-surface-50 dark:bg-surface-950 border border-surface-200 dark:border-surface-700 rounded-xl text-surface-900 dark:text-white placeholder:text-surface-400 focus:outline-none focus:border-chrysolite-500/50 transition-colors text-sm"
                placeholder="Enter admin password"
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-surface-400 hover:text-surface-600 dark:hover:text-surface-200 transition-colors"
              >
                {show ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-chrysolite-500 to-chrysolite-600 hover:from-chrysolite-400 hover:to-chrysolite-500 text-white font-semibold text-sm transition-all shadow-lg shadow-chrysolite/30 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Lock size={16} />}
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="text-center text-xs text-surface-400 mt-6">
          Chrysolite AI · Admin Portal
        </p>
      </div>
    </main>
  )
}
