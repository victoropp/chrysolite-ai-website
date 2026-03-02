# Access Control Policy

**Document ID:** ISMS-POL-03
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To ensure that access to Chrysolite AI information, systems, and facilities is granted on a need-to-know, least-privilege basis and is controlled, monitored, and revoked promptly when no longer required. Aligned with ISO/IEC 27001:2022 Annex A controls A.5.15–A.5.18 and A.8.2–A.8.6.

---

## 2. Scope

All systems, applications, services, databases, code repositories, and physical facilities. Applies to all employees, contractors, third parties, and automated service accounts.

---

## 3. Principles

### 3.1 Least Privilege
Users and systems are granted only the minimum permissions necessary to perform their role. Elevated privileges are granted temporarily and only for specific, justified tasks.

### 3.2 Need-to-Know
Access to sensitive information (customer data, financial data, source code) is restricted to personnel who require it to fulfil their job responsibilities.

### 3.3 Segregation of Duties
No single individual shall have unchecked control over a critical process. Where possible, approval and execution of sensitive actions are performed by different individuals (e.g., code review and merge by different engineers).

### 3.4 Default Deny
All access is denied by default. Access must be explicitly granted, approved, and documented.

---

## 4. User Access Management

### 4.1 Access Provisioning

- All access requests must be submitted to IT/CISO in writing (ticket or email)
- Requests must be approved by the employee's line manager AND the system/data owner
- Access is provisioned within 2 business days of approval
- All granted access is recorded in the Access Register

### 4.2 Access Review

- **Quarterly:** The CISO conducts a review of all user access rights against current role requirements
- **On role change:** Access is reviewed and adjusted within 5 business days
- **On termination:** All access is revoked on or before the last day of employment (see §4.3)

### 4.3 Access Revocation (Offboarding)

HR must notify IT/CISO on the day of termination (or earlier if a security risk is identified). Upon notification, IT must:

| Action | Deadline |
|--------|----------|
| Disable SSO/IdP account | Within 1 hour of notification |
| Revoke all SaaS/application access | Within 4 hours |
| Revoke VPN/remote access | Within 4 hours |
| Revoke physical access credentials | Same day |
| Archive mailbox and transfer ownership | Within 1 business day |
| Recover company hardware | As per Asset Management Policy |

---

## 5. Privileged Access

### 5.1 Privileged Accounts

Privileged accounts (admin, root, superuser, service accounts with elevated rights) require:

- Documented business justification
- CISO approval
- Time-limited access where technically feasible
- Enhanced monitoring and logging

### 5.2 Admin Account Separation

No individual shall use a privileged account for routine tasks. A separate standard account must be used for day-to-day activities; privileged accounts are used only when elevated access is required.

### 5.3 Shared Accounts

Shared or generic accounts (e.g., `admin@`, `root`) are prohibited except where technically unavoidable. Where shared accounts exist, they must be:

- Approved by CISO
- Access-controlled so only authorised individuals can use them
- Password rotated after each use or when any individual who had access leaves the role

---

## 6. Authentication Requirements

| System Type | Minimum Authentication Requirement |
|-------------|-------------------------------------|
| Public-facing admin panels | Password + review for MFA feasibility |
| Internal development tools | SSO via approved Identity Provider |
| Cloud infrastructure (Vercel, Neon, etc.) | Password + MFA |
| CI/CD pipelines | SSH keys or short-lived tokens; no long-lived passwords |
| Developer workstations | Device encryption + screen lock after 5 minutes inactivity |

### 6.1 Password Requirements

All user-managed passwords must meet:

- Minimum 14 characters
- Mix of upper, lower, digits, and symbols
- Not reused within the last 12 passwords
- Not based on dictionary words, company name, or personal information
- Changed immediately upon any suspected compromise

A password manager approved by IT must be used to manage passwords. Passwords must never be stored in plaintext, code, or unencrypted files.

### 6.2 Multi-Factor Authentication (MFA)

MFA is mandatory for:

- All cloud platform accounts (Vercel, Neon, Resend, GitHub, etc.)
- Any account with access to customer data
- Remote access (VPN, remote desktop)
- Email accounts

MFA must use TOTP (authenticator app) or hardware security key. SMS-based MFA is discouraged due to SIM-swapping risk and may only be used as a fallback.

---

## 7. Remote Access

- Remote access to Chrysolite AI systems requires a company-managed device or approved BYOD with MDM enrolled
- All remote sessions must use encrypted channels (TLS 1.2+ or SSH)
- Remote access sessions must time out after 30 minutes of inactivity
- Split-tunnel VPN is prohibited; full-tunnel only

---

## 8. Service Accounts and API Keys

- All service accounts must have documented owners and be recorded in the Asset Register
- API keys and tokens must be stored exclusively in approved secrets management systems (e.g., Vercel Environment Variables, GitHub Secrets)
- API keys must never be hardcoded in source code or committed to version control
- API keys must be rotated at minimum annually, or immediately upon any suspected compromise or personnel change affecting access
- Unused service accounts and API keys must be deactivated within 30 days of becoming redundant

---

## 9. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
