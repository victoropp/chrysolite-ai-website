import { NextRequest, NextResponse } from 'next/server'
import { sendNewsletterNotification } from '@/lib/email'

// ─── Rate limiter (per-instance, best-effort in serverless) ──────────────────
const newsletterSignups = new Map<string, { count: number; resetAt: number }>()
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const MAX_SIGNUPS = 3

function getClientIP(req: NextRequest): string {
  // x-real-ip is injected by Vercel's edge and cannot be spoofed by clients.
  // Fall back to the rightmost entry of x-forwarded-for (most trusted in a
  // reverse-proxy chain where Vercel is the outermost layer).
  return (
    req.headers.get('x-real-ip') ??
    req.headers.get('x-forwarded-for')?.split(',').at(-1)?.trim() ??
    'unknown'
  )
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = newsletterSignups.get(ip)
  if (!record || now > record.resetAt) {
    newsletterSignups.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  if (record.count >= MAX_SIGNUPS) return true
  record.count++
  return false
}

// ─── Handler ─────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit check
  const ip = getClientIP(req)
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const { email } = body as Record<string, string>

  if (!email?.trim()) {
    return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 })
  }
  if (email.trim().length > 254) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email address is required' }, { status: 400 })
  }

  try {
    await sendNewsletterNotification(email.trim())
  } catch (err) {
    console.error('Newsletter notification failed:', err)
    // Non-blocking — still return success so the user experience isn't broken
  }

  return NextResponse.json({ success: true })
}
