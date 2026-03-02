import type { NextConfig } from 'next'

const securityHeaders = [
  // Prevents framing (clickjacking)
  { key: 'X-Frame-Options', value: 'DENY' },
  // Prevents MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Legacy XSS filter (belt-and-suspenders)
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  // Controls referrer information sent with requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disables browser features not used by this app
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=()',
  },
  // HSTS — force HTTPS for 1 year including subdomains (submit for preload once stable)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  // Content Security Policy
  // 'unsafe-inline' + 'unsafe-eval' required by Next.js hydration and Framer Motion.
  // Replace with nonces when the app adds a nonce-based CSP setup.
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['pdfkit'],

  async headers() {
    return [
      {
        // Apply security headers to every route
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
