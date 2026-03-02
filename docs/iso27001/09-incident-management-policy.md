# Incident Management Policy

**Document ID:** ISMS-POL-09
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To ensure information security incidents are detected, reported, assessed, contained, remediated, and learned from consistently and promptly. Aligned with ISO/IEC 27001:2022 Annex A controls A.5.24–A.5.28.

---

## 2. Scope

All information security events and incidents affecting Chrysolite AI systems, data, personnel, or customers. Includes incidents at third-party suppliers where Chrysolite AI data is involved.

---

## 3. Definitions

| Term | Definition |
|------|------------|
| **Security Event** | Any observable occurrence that may be relevant to information security (e.g., a failed login attempt, a suspicious email) |
| **Security Incident** | A security event that has resulted in, or has significant likelihood of resulting in, an adverse impact on Chrysolite AI's operations, assets, or customer data |
| **Data Breach** | An incident involving the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to personal data |
| **Near Miss** | An event that could have become an incident but was prevented or did not result in harm |

---

## 4. Incident Classification

| Severity | Description | Example | Response SLA |
|----------|-------------|---------|-------------|
| **P1 — Critical** | Confirmed breach of customer data; complete service outage; ransomware or destructive attack | Customer data exposed publicly; production database encrypted by ransomware | Immediate; all-hands; CEO notified within 30 minutes |
| **P2 — High** | Potential data exposure; significant service degradation; confirmed account compromise | Admin account credentials stolen; sustained API abuse | Within 1 hour; CISO leads response |
| **P3 — Medium** | Contained security issue; partial service impact; no confirmed data exposure | Successful phishing attempt (credentials reset immediately); rate limit bypass | Within 4 hours; CISO notified |
| **P4 — Low** | Minor security event; no service impact; no data risk | Repeated failed login attempts (blocked by rate limiting); malware blocked by EDR | Within 24 hours; logged and monitored |

---

## 5. Incident Response Procedure

### Phase 1: Detection and Reporting

All employees must report suspected security incidents **immediately** upon discovery:

- **Primary:** Email security@chrysoliteai.com and message the CISO directly
- **Out-of-hours:** Use the emergency contact number provided in the employee handbook
- **Do not:** Attempt to investigate or remediate the incident independently; do not discuss the incident on unsecured channels; do not delete any evidence

Reports must include (where known):
- When the event was detected
- What systems, data, or users are affected
- How the event was discovered
- Any actions already taken

### Phase 2: Triage and Assessment

The CISO (or delegated Incident Commander) will:

1. Verify the report and determine whether it constitutes an incident
2. Assign a severity classification (P1–P4)
3. Assemble the incident response team (IRT) for P1/P2 incidents
4. Begin the Incident Log — documenting all actions, findings, and decisions with timestamps

### Phase 3: Containment

Containment actions must be taken promptly to prevent the incident from spreading or worsening:

- **Short-term containment:** Isolate affected systems, revoke compromised credentials, block malicious IPs, disable affected integrations
- **Long-term containment:** Patch or mitigate the underlying vulnerability before restoring systems
- Evidence must be preserved before any remediation that could destroy it (memory dumps, log exports, disk images where appropriate)

### Phase 4: Eradication

Identify and remove the root cause of the incident:

- Identify all affected systems and confirm the extent of compromise
- Remove malware, unauthorised accounts, or malicious code
- Patch vulnerabilities that were exploited

### Phase 5: Recovery

Restore systems to normal operation:

- Restore from clean backups where necessary
- Verify system integrity before reconnecting to production networks
- Implement enhanced monitoring during the recovery period
- Confirm with stakeholders that services have been restored

### Phase 6: Post-Incident Review

Within 5 business days of incident closure, the CISO must conduct a post-incident review:

- Root cause analysis
- Timeline of events
- Effectiveness of containment and response
- Lessons learned
- Recommended improvements to controls, procedures, or training
- Updated Risk Register entry

The review findings must be presented to the CEO and acted upon within 30 days.

---

## 6. Regulatory Notification Obligations

### 6.1 GDPR / UK GDPR — Data Breach Notification

If the incident constitutes a personal data breach:

| Notification | Deadline | Recipient |
|-------------|----------|-----------|
| Supervisory authority (ICO in UK; lead DPA in EU) | Within 72 hours of becoming aware | ICO / Lead DPA |
| Affected data subjects | Without undue delay (if high risk to rights and freedoms) | Individuals affected |

The CISO and Legal must jointly assess every incident for personal data breach obligations. The 72-hour clock starts when Chrysolite AI becomes aware, not when the breach occurred.

### 6.2 Customer Notification

Customers whose data may have been affected must be notified:

- **P1 incidents:** Within 24 hours of confirmation, regardless of regulatory obligation
- **P2 incidents:** Within 48 hours of confirmation where customer data is involved

Customer notifications must be drafted by Legal and approved by the CEO before sending.

---

## 7. Incident Records

All incidents (including P4) must be recorded in the Incident Register. Incident records must be retained for a minimum of 3 years. Records must include:

- Incident ID, date/time detected, date/time closed
- Classification and description
- Actions taken (with timestamps)
- Root cause
- Regulatory notifications made (if any)
- Post-incident review outcome

---

## 8. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
