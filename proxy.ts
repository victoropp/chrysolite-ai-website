import { NextRequest, NextResponse } from 'next/server'

// ─── Rate limiter (per-instance, best-effort in serverless) ──────────────────
const loginAttempts = new Map<string, { count: number; resetAt: number }>()
const RATE_WINDOW_MS = 15 * 60 * 1000 // 15 minutes
const MAX_LOGIN_ATTEMPTS = 10

function getClientIP(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
}

function isLoginRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = loginAttempts.get(ip)
  if (!record || now > record.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  if (record.count >= MAX_LOGIN_ATTEMPTS) return true
  record.count++
  return false
}

// ─── Session token (Web Crypto — Edge Runtime compatible) ────────────────────
// Must produce the same result as lib/session.ts (Node.js version).
// Algorithm: SHA-256(password + ":chrysolite-admin-session-v1") → 64-char hex
async function deriveSessionToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(password + ':chrysolite-admin-session-v1')
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

// Constant-time string comparison to prevent timing oracle attacks.
function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  const aBytes = new TextEncoder().encode(a)
  const bBytes = new TextEncoder().encode(b)
  let result = 0
  for (let i = 0; i < aBytes.length; i++) {
    result |= aBytes[i] ^ bBytes[i]
  }
  return result === 0
}

// ─── Proxy (Next.js 16 middleware convention) ─────────────────────────────────
export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Rate-limit the login API before any other processing
  if (pathname === '/api/admin/login') {
    const ip = getClientIP(req)
    if (isLoginRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many login attempts. Try again in 15 minutes.' },
        { status: 429 }
      )
    }
    return NextResponse.next()
  }

  // Allow the login page and all other admin API routes (logout, etc.) through
  if (pathname === '/admin/login' || pathname.startsWith('/api/admin/')) {
    return NextResponse.next()
  }

  // All remaining /admin/* routes require an authenticated session
  const password = (process.env.ADMIN_PASSWORD ?? '').trim()
  if (!password) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }

  const session = req.cookies.get('chrysolite_erp_admin')?.value ?? ''
  const expectedToken = await deriveSessionToken(password)

  if (session && constantTimeEqual(session, expectedToken)) {
    return NextResponse.next()
  }

  const loginUrl = new URL('/admin/login', req.url)
  loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/login'],
}
