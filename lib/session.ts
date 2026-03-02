import { createHash } from 'crypto'

const SESSION_CONSTANT = ':chrysolite-admin-session-v1'

/**
 * Derives a session token from the admin password using SHA-256.
 * The raw password is never stored in the cookie — only this derived token.
 * Computed here (Node.js runtime) and in middleware.ts (Web Crypto / Edge runtime)
 * using the same algorithm so both sides agree.
 */
export function deriveSessionToken(password: string): string {
  return createHash('sha256')
    .update(password + SESSION_CONSTANT)
    .digest('hex')
}
