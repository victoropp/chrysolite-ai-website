import { NextRequest, NextResponse } from 'next/server'
import { deriveSessionToken } from '@/lib/session'

export async function POST(req: NextRequest) {
  const { password } = await req.json() as { password?: string }
  const expected = (process.env.ADMIN_PASSWORD ?? '').trim()

  if (!expected) {
    return NextResponse.json({ error: 'Admin not configured' }, { status: 500 })
  }

  if (!password || password !== expected) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  // Store a derived token — NOT the raw password — in the cookie.
  const token = deriveSessionToken(expected)

  const res = NextResponse.json({ success: true })
  res.cookies.set('chrysolite_erp_admin', token, {
    httpOnly: true,   // Inaccessible to JavaScript
    secure: true,     // HTTPS only (always, not just in production)
    sameSite: 'strict',
    maxAge: 60 * 60 * 8, // 8 hours
    path: '/',
  })
  return res
}
