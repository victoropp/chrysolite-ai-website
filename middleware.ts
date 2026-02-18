import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (pathname === '/admin/login' || pathname.startsWith('/api/admin/')) {
    return NextResponse.next()
  }

  const session  = req.cookies.get('chrysolite_erp_admin')?.value
  const expected = (process.env.ADMIN_PASSWORD ?? '').trim()

  if (session && expected && session === expected) return NextResponse.next()

  const loginUrl = new URL('/admin/login', req.url)
  loginUrl.searchParams.set('from', pathname)
  return NextResponse.redirect(loginUrl)
}

export const config = { matcher: ['/admin/:path*'] }
