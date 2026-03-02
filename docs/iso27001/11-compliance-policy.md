# Compliance Policy

**Document ID:** ISMS-POL-11
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO / Legal
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To ensure Chrysolite AI identifies, understands, and complies with all applicable legal, regulatory, contractual, and internal security requirements. Aligned with ISO/IEC 27001:2022 Annex A controls A.5.31–A.5.36.

---

## 2. Scope

All Chrysolite AI business activities, systems, personnel, and customer relationships subject to external legal or regulatory obligations.

---

## 3. Legal and Regulatory Register

The CISO and Legal maintain a **Legal and Regulatory Register** listing all applicable obligations, reviewed at least annually and whenever a new market, product, or customer type is added. Key obligations include:

### 3.1 Data Protection

| Regulation | Scope | Key Obligations |
|-----------|-------|----------------|
| **UK GDPR / Data Protection Act 2018** | Processing personal data of UK data subjects | Lawful basis, consent, data subject rights, breach notification (72h to ICO), DPIAs, DPO (if required) |
| **EU GDPR (Regulation 2016/679)** | Processing personal data of EU data subjects | Standard Contractual Clauses for transfers outside EEA; lead DPA notification; Article 28 DPAs |
| **CCPA / CPRA** | Processing personal data of California residents | Right to know, delete, opt-out of sale; privacy notice requirements |

### 3.2 Sector-Specific Regulations (Customer Industries)

Chrysolite AI's ERP platform may serve customers in regulated industries. When processing data on behalf of such customers, Chrysolite AI may be subject to:

| Regulation | Industry | Chrysolite AI's Role |
|-----------|----------|---------------------|
| **HIPAA (US)** | Healthcare | Business Associate — must sign BAA; implement required technical safeguards |
| **PCI DSS** | Payment processing | If cardholder data is processed — scope assessment required; if excluded, documented out-of-scope |
| **SOX (Sarbanes-Oxley)** | Publicly listed companies (US) | Relevant to financial data integrity controls |
| **FCA / PRA rules** | UK financial services customers | Operational resilience requirements when serving financial institutions |

### 3.3 Employment Law

- UK Employment Rights Act, Equality Act 2010, GDPR in employment context
- TUPE obligations in M&A scenarios

---

## 4. Compliance Review Process

### 4.1 Annual Compliance Review

The CISO and Legal conduct an annual review to:

- Update the Legal and Regulatory Register
- Confirm existing controls remain sufficient
- Identify any new obligations arising from regulatory changes, new markets, or new product features
- Plan remediation for any gaps identified

### 4.2 New Product / Feature Review

Before launching any new product feature that involves new types of data collection, new processing purposes, or new third-party integrations, a **Privacy and Security Review** must be completed, including:

- Data Protection Impact Assessment (DPIA) where required
- Legal review of regulatory implications
- Security architecture review by CISO

### 4.3 Customer Contract Review

All customer contracts must be reviewed by Legal to ensure:

- Data processing terms are included where Chrysolite AI processes customer personal data
- Security obligations align with Chrysolite AI's ISMS policies
- Audit rights and incident notification obligations are consistent with this policy

---

## 5. Intellectual Property

- All software developed by Chrysolite AI employees or contractors belongs to Chrysolite AI unless otherwise agreed in writing
- Employees and contractors must not use unlicensed software
- Open-source licenses must be reviewed before incorporation; copyleft licenses (GPL, AGPL) require Legal approval before use in the product
- Customer data must not be used for training proprietary AI/ML models without explicit customer consent

---

## 6. Privacy by Design and Default

Chrysolite AI embeds privacy into product development from the earliest stages:

- Minimum necessary data collection (data minimisation)
- Pseudonymisation or anonymisation of personal data in non-production environments
- Default settings favour privacy (opt-in, not opt-out, for non-essential processing)
- DPIA conducted before high-risk processing (large-scale sensitive data, systematic monitoring)

---

## 7. Internal Audit of ISMS

An internal audit of the ISMS must be conducted at minimum annually, covering:

- Conformance with ISO 27001:2022 requirements
- Effectiveness of implemented controls
- Compliance with this and all subordinate policies
- Review of the Statement of Applicability

Audit results are reported to the CEO. Non-conformances must be tracked to resolution with defined owners and deadlines.

---

## 8. Management Review

The CEO and CISO must conduct a formal ISMS management review at minimum annually, covering:

- Results of internal and external audits
- Status of risk treatment actions
- Security incident trends
- Results of security measurements against objectives
- ISMS performance and suitability
- Resource needs
- Changes in context, risks, or regulatory environment

Management review outputs must be documented and actioned.

---

## 9. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
