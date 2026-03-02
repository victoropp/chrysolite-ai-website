# Human Resources Security Policy

**Document ID:** ISMS-POL-12
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO / HR
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To ensure that employees and contractors understand their information security responsibilities before, during, and after employment, reducing the risk of human error, theft, fraud, and misuse of Chrysolite AI assets. Aligned with ISO/IEC 27001:2022 Annex A controls A.6.1–A.6.8.

---

## 2. Scope

All employees, contractors, consultants, interns, and temporary workers engaged by Chrysolite AI.

---

## 3. Pre-Employment

### 3.1 Background Screening

All candidates for roles with access to customer data or sensitive systems must undergo background checks prior to commencement, including:

| Check | All Roles | Roles with Sensitive Data Access |
|-------|-----------|----------------------------------|
| Identity verification | Required | Required |
| Right to work | Required | Required |
| Employment history verification | Recommended | Required |
| Criminal record check (DBS in UK) | Discretionary | Required |
| Credit check | Only for finance roles | For finance + senior roles |
| Professional qualification verification | Where claimed on CV | Required |

Background checks must be conducted in compliance with applicable employment law. Candidates must provide written consent.

### 3.2 Employment Contracts and Agreements

Before commencing work, all individuals must sign:

- **Employment contract or contractor agreement** — including confidentiality obligations
- **Acceptable Use Policy acknowledgement** (ISMS-POL-13)
- **Non-Disclosure Agreement** (where not covered by employment contract)
- **GDPR awareness acknowledgement** (for roles processing personal data)

---

## 4. During Employment

### 4.1 Security Awareness Training

| Training | Audience | Frequency |
|----------|----------|-----------|
| Information security awareness (general) | All staff | Annual |
| GDPR and data protection | All staff | Annual |
| Phishing awareness and simulation | All staff | Quarterly phishing simulations; annual training |
| Secure coding training | Engineering | Annual |
| Role-specific security training | All (based on role) | At onboarding and when role changes |

Training completion must be tracked. Failure to complete mandatory training within the deadline triggers escalation to the employee's line manager and HR.

### 4.2 Security Responsibilities

All employees are responsible for:

- Following all ISMS policies and procedures
- Reporting actual or suspected security incidents immediately (see Incident Management Policy ISMS-POL-09)
- Protecting login credentials and not sharing them with anyone, including colleagues and IT support
- Reporting lost or stolen equipment immediately
- Challenging unknown individuals in secure areas (see Physical Security Policy ISMS-POL-05)
- Completing mandatory security training within required timeframes

### 4.3 Disciplinary Process for Security Violations

Security policy violations are treated seriously. The disciplinary process is as follows:

| Severity | Examples | Response |
|----------|---------|----------|
| **Minor** | Forgotten to lock screen; minor acceptable use violation | Verbal warning; remedial training |
| **Moderate** | Repeated minor violations; sharing credentials; storing sensitive data incorrectly | Written warning; mandatory retraining |
| **Serious** | Deliberate circumvention of controls; unauthorised access attempt; data exfiltration | Immediate suspension pending investigation; possible termination |
| **Gross Misconduct** | Selling company data; introducing malware deliberately; serious regulatory breach | Immediate dismissal; referral to law enforcement |

Security violations that constitute criminal offences will be referred to the appropriate authorities.

---

## 5. Role Changes

When an employee changes role:

- HR must notify IT/CISO within 2 business days
- Old access rights must be reviewed and adjusted within 5 business days
- New role-specific training and policy acknowledgements must be completed before accessing new systems

---

## 6. Termination and Offboarding

### 6.1 Standard Termination

At the point of resignation or termination:

| Action | Responsible | Deadline |
|--------|-------------|----------|
| IT access revocation | IT / CISO | On last day (immediately if security risk) |
| Physical asset return | HR / Manager | On last day |
| Physical access revocation | Office Manager | On last day |
| Exit interview | HR | Before last day |
| Reminder of ongoing confidentiality obligations | HR / Legal | Before last day |

### 6.2 Immediate Termination (Disciplinary / Security Risk)

Where an employee is terminated for gross misconduct or represents an active security risk:

- IT access revoked immediately upon decision, before the employee is notified
- Physical access revoked simultaneously
- CISO monitors for unusual activity in the preceding period
- Enhanced logging activated on any systems the individual had access to

### 6.3 Continuing Obligations

Employees and contractors retain the following obligations after termination:

- Confidentiality obligations (as specified in their contract; typically 2 years minimum)
- Return of any retained company information or documents
- Non-solicitation of customers and employees (where applicable per contract)

---

## 7. Contractor and Consultant Management

Contractors and consultants are subject to the same security requirements as employees, enforced through their contract. Additionally:

- Access is provisioned only for the duration and scope of the engagement
- Contractors must not access Chrysolite AI systems from unmanaged devices unless explicitly approved with VPN and EDR controls
- All work product created during the engagement is the property of Chrysolite AI

---

## 8. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
