import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json() as { password?: string }
  const expected = (process.env.ADMIN_PASSWORD ?? '').trim()

  if (!expected) {
    return NextResponse.json({ error: 'Admin password not configured' }, { status: 500 })
  }

  if (!password || password !== expected) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const res = NextResponse.json({ success: true })
  res.cookies.set('chrysolite_erp_admin', password, {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  return res
}
