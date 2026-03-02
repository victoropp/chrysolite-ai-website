# Cryptography Policy

**Document ID:** ISMS-POL-04
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To define the standards for the use of cryptographic controls to protect the confidentiality, integrity, and authenticity of Chrysolite AI information. Aligned with ISO/IEC 27001:2022 Annex A control A.8.24.

---

## 2. Scope

All cryptographic mechanisms used in Chrysolite AI systems, applications, data storage, and communications, including those implemented by third-party providers.

---

## 3. Approved Algorithms and Minimum Standards

### 3.1 Symmetric Encryption

| Use Case | Approved Algorithm | Minimum Key Length |
|----------|-------------------|-------------------|
| Data at rest | AES | 256-bit (AES-256) |
| Data in transit (bulk) | AES-GCM | 256-bit |

**Prohibited:** DES, 3DES, RC4, Blowfish (56-bit or less)

### 3.2 Asymmetric Encryption / Key Exchange

| Use Case | Approved Algorithm | Minimum Key Length |
|----------|-------------------|-------------------|
| TLS key exchange | ECDHE (P-256, P-384) or DHE | 2048-bit RSA or 256-bit ECC |
| Code signing | RSA or ECDSA | RSA-4096 or P-384 |
| PGP/GPG (email) | RSA or Ed25519 | RSA-4096 or Ed25519 |

**Prohibited:** RSA-1024, DSA, export-grade ciphers

### 3.3 Hashing

| Use Case | Approved Algorithm |
|----------|--------------------|
| Password hashing | Argon2id (preferred), bcrypt (cost ≥ 12), scrypt |
| Data integrity / checksums | SHA-256, SHA-384, SHA-512 |
| Session tokens / HMAC | HMAC-SHA256, HMAC-SHA512 |
| Digital signatures | SHA-256 or stronger |

**Prohibited for security purposes:** MD5, SHA-1 (acceptable only for non-security checksums such as file deduplication)

### 3.4 Transport Layer Security (TLS)

| Parameter | Requirement |
|-----------|-------------|
| Minimum TLS version | TLS 1.2 |
| Preferred TLS version | TLS 1.3 |
| Prohibited | SSL 2.0, SSL 3.0, TLS 1.0, TLS 1.1 |
| Certificate authority | Public CA (Let's Encrypt, DigiCert, or equivalent) |
| Certificate minimum key | RSA-2048 or ECDSA P-256 |
| HSTS | Enabled with `max-age ≥ 31536000; includeSubDomains; preload` |
| Certificate expiry monitoring | Automated alerts at 30 days before expiry |

---

## 4. Key Management

### 4.1 Key Generation

- Keys must be generated using a cryptographically secure pseudo-random number generator (CSPRNG)
- Key generation must occur in a trusted environment; keys must never be generated in untrusted or shared environments

### 4.2 Key Storage

- Cryptographic keys must never be stored in source code, version control, or unencrypted configuration files
- Keys must be stored in approved secrets management systems (cloud provider secret stores, hardware security modules (HSMs), or equivalent)
- Private keys for TLS certificates must be stored with access restricted to the systems that need them

### 4.3 Key Distribution

- Keys must be transmitted only over encrypted channels
- Keys must never be transmitted by email, chat, or any unencrypted channel

### 4.4 Key Rotation

| Key Type | Maximum Lifetime |
|----------|-----------------|
| TLS certificates | 1 year (auto-renew at 30 days before expiry) |
| API keys and service tokens | 1 year, or immediately upon compromise or personnel change |
| Session tokens | 8 hours (enforced at application level) |
| Encryption keys (data at rest) | 2 years |
| Signing keys (code, releases) | 2 years |

### 4.5 Key Revocation and Destruction

- Compromised keys must be revoked immediately upon discovery
- Revoked or expired keys must be securely destroyed using NIST SP 800-88 or equivalent guidelines
- Key destruction must be documented and retained for audit purposes

---

## 5. Specific Implementation Requirements

### 5.1 Web Application (chrysoliteai.com)

- All pages served over HTTPS with TLS 1.2+ enforced
- HSTS header: `max-age=31536000; includeSubDomains; preload`
- Admin session cookies: `httpOnly`, `secure`, `sameSite=strict`
- Session tokens derived via SHA-256 HMAC with a server-side secret; raw credentials never stored in cookies

### 5.2 Database (Neon PostgreSQL)

- Connections via TLS-encrypted connection strings
- Connection strings stored exclusively in environment variables (never in code)
- Neon's built-in encryption at rest is enabled and verified

### 5.3 Email (Resend)

- Email in transit encrypted via TLS; STARTTLS enforced
- API keys stored in Vercel environment variables; rotated annually

---

## 6. Exceptions

Any exception to this policy requires:

- Written justification
- CISO approval
- A documented remediation timeline
- Entry in the Risk Register as an accepted risk

---

## 7. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
