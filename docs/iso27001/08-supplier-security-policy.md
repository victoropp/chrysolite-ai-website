# Supplier & Third-Party Security Policy

**Document ID:** ISMS-POL-08
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO / Legal
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To manage information security risks arising from Chrysolite AI's use of third-party suppliers, service providers, and sub-processors, ensuring they protect Chrysolite AI and customer information to an equivalent standard. Aligned with ISO/IEC 27001:2022 Annex A controls A.5.19–A.5.22.

---

## 2. Scope

All third parties that process, store, transmit, or have access to Chrysolite AI information or customer data, including:

- Cloud service providers (infrastructure, SaaS)
- Software vendors and open-source dependencies
- Contractors and freelancers
- Professional service firms (legal, accounting, consulting)
- Outsourced operational services

---

## 3. Supplier Classification

| Tier | Definition | Examples | Due Diligence Level |
|------|-----------|---------|---------------------|
| **Critical** | Processes or stores customer personal data; or system failure would prevent service delivery | Neon (database), Vercel (hosting), Resend (email) | Full assessment (see §4) |
| **High** | Has access to Chrysolite AI internal systems or confidential information, but not customer personal data | GitHub, CI/CD providers, monitoring tools | Abbreviated assessment |
| **Standard** | No access to Chrysolite AI systems or customer data | Office suppliers, HR platform (general) | Standard contractual terms only |

---

## 4. Supplier Due Diligence

### 4.1 Pre-Engagement Assessment (Critical Suppliers)

Before engaging a Critical supplier, the CISO must complete or obtain:

- Review of the supplier's security certifications (ISO 27001, SOC 2 Type II, CSA STAR, or equivalent)
- Review of the supplier's data processing agreement (DPA) and privacy policy
- Assessment of the supplier's sub-processor list and geographic data processing locations
- Evaluation of the supplier's incident notification commitments (must be ≤ 72 hours to align with GDPR)
- Confirmation that the supplier meets Chrysolite AI's minimum encryption standards (see ISMS-POL-04)

### 4.2 Pre-Engagement Assessment (High Suppliers)

- Review of supplier's security policies or certifications (at minimum, self-assessment questionnaire)
- Confirmation of contractual security obligations
- Access provisioned on least-privilege basis

### 4.3 Disqualifying Factors

Suppliers will not be engaged if they:

- Cannot demonstrate adequate security controls relative to the data they will process
- Refuse to sign a DPA where they are processing personal data
- Have a recent history of serious, unaddressed security breaches
- Cannot provide evidence of basic security practices (encryption, access controls, incident response)

---

## 5. Contractual Requirements

All Critical and High-tier supplier contracts must include:

| Requirement | Minimum Standard |
|-------------|-----------------|
| Data Processing Agreement | Signed DPA compliant with GDPR Article 28 |
| Security obligations | Supplier must maintain appropriate technical and organisational measures |
| Incident notification | Supplier must notify Chrysolite AI within 24 hours of becoming aware of a breach |
| Audit rights | Chrysolite AI (or its designee) may audit supplier security annually |
| Sub-processor restrictions | Supplier may not add sub-processors without prior written consent |
| Data return / deletion | On contract termination, supplier must return or destroy all Chrysolite AI data within 30 days and certify destruction |
| Liability | Contract must allocate liability for security breaches caused by supplier |

---

## 6. Ongoing Supplier Monitoring

| Activity | Frequency | Responsible |
|----------|-----------|-------------|
| Review security certifications (SOC 2, ISO 27001) | Annual | CISO |
| Review sub-processor lists | On change notification from supplier | CISO |
| Review supplier incident notifications | As received | CISO |
| Formal supplier security review | Annual (Critical); every 2 years (High) | CISO |
| Contract renewal security review | At each renewal | CISO + Legal |

---

## 7. Supplier Offboarding

When a supplier relationship ends:

- All Chrysolite AI data held by the supplier must be returned or securely destroyed within 30 days
- The supplier must provide written confirmation of data destruction
- All access credentials and API keys granted to the supplier must be revoked on or before the contract end date
- Supplier access logs must be retained for 12 months after offboarding

---

## 8. Current Critical Suppliers

| Supplier | Service | Certification |
|----------|---------|--------------|
| Vercel Inc. | Web hosting and serverless compute | SOC 2 Type II |
| Neon Inc. | PostgreSQL database | SOC 2 Type II |
| Resend | Transactional email | Review annually |
| GitHub (Microsoft) | Source code repository and CI/CD | ISO 27001, SOC 2 Type II |

This list is maintained in the Asset Register and updated as suppliers change.

---

## 9. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
