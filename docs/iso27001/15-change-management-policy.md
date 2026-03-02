# Change Management Policy

**Document ID:** ISMS-POL-15
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO / Head of Engineering
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To ensure that all changes to Chrysolite AI's information systems, infrastructure, and processes are planned, assessed, tested, approved, and implemented in a controlled manner that minimises security risk and service disruption. Aligned with ISO/IEC 27001:2022 Annex A control A.8.32.

---

## 2. Scope

All changes to:
- Production application code and configuration
- Infrastructure (cloud services, DNS, networking, firewall rules)
- Security controls and configurations
- Database schemas
- Third-party integrations and API configurations
- ISMS policies and procedures

---

## 3. Change Categories

| Category | Description | Examples | Approval Required |
|----------|-------------|---------|-------------------|
| **Standard** | Pre-approved, low-risk routine changes with documented procedures | Dependency updates, routine content changes, automated security patches | Engineering lead; no CAB required |
| **Normal** | Planned changes requiring assessment and approval | New features, infrastructure changes, database schema changes, new third-party integrations | Engineering lead + CISO review for security impact |
| **Emergency** | Urgent changes required to restore service or prevent imminent security harm | Critical security patch (P1/P2 incident), production hotfix | On-call engineer initiates; CISO + CEO notified immediately; retrospective CAB review within 24h |
| **Major** | Significant changes with broad impact; architectural changes | Platform migration, new data processing capability, significant access control overhaul | Change Advisory Board (CAB): CISO, CTO/Head of Engineering, CEO |

---

## 4. Change Process

### 4.1 Request

All Normal and Major changes must be submitted via a **Change Request (CR)** in the project management / ticketing system. The CR must include:

- Description of the change and business justification
- Systems and data affected (including classification of data at risk)
- Security impact assessment (does this change affect access controls, encryption, authentication, logging, data processing?)
- Test plan and success criteria
- Rollback plan
- Planned implementation date and maintenance window
- Estimated downtime (if any)

### 4.2 Security Review

The CISO (or delegated security engineer) must review any change that:

- Introduces new data processing or data flows
- Modifies authentication, authorisation, or session management
- Changes network configuration, firewall rules, or public exposure of services
- Introduces new third-party integrations or changes to existing ones
- Modifies encryption or key management
- Alters security logging or monitoring

The CISO may approve, approve with conditions, or reject a change. Rejected changes must be re-submitted with mitigating measures.

### 4.3 Testing

All changes must be tested in the staging environment before deployment to production. Testing must include:

- Functional testing (does the change work as intended?)
- Security testing (does the change introduce new vulnerabilities? Regression testing of security controls)
- Performance testing (does the change affect system performance under load?)
- Rollback testing (can the change be safely rolled back if issues arise?)

### 4.4 Approval and Scheduling

- Normal changes: Approved by Engineering lead + CISO sign-off on security matters
- Major changes: CAB approval at minimum 5 business days before implementation
- Changes should be scheduled during low-traffic periods (typically weekday evenings or weekends)
- Customers must be notified of planned maintenance causing downtime at minimum 48 hours in advance via the status page

### 4.5 Implementation

- Changes must be deployed by a named engineer who is accountable for the implementation
- A second engineer must be available to assist and verify
- Implementation must be monitored in real time for the first 30 minutes after deployment
- Alert thresholds should be temporarily tightened during and after deployment

### 4.6 Post-Implementation Review

Within 24 hours of a Normal or Major change, the implementing engineer must:

- Confirm the change has been implemented successfully
- Document any deviations from the plan
- Confirm all tests have passed in production
- Update the Change Register with the outcome

---

## 5. Separation of Duties

- No individual should write, review, and approve their own code changes in isolation
- All code changes must be peer-reviewed via pull request before merging
- Engineers must not deploy directly to production except under pre-approved emergency procedures (break-glass)

---

## 6. Prohibited Changes

The following changes are strictly prohibited without explicit CEO and CISO approval:

- Disabling or weakening authentication controls
- Removing or reducing security headers
- Removing audit logging
- Granting public access to previously restricted resources
- Disabling backups or encryption

---

## 7. Emergency Changes

Emergency changes bypass normal approval timelines but must:

- Be approved verbally (and confirmed in writing within 2 hours) by the CISO or CTO
- Have a rollback plan prepared before implementation
- Be reviewed by the CAB within 24 hours via a retrospective review
- Be documented fully in the Change Register as an emergency change

---

## 8. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
