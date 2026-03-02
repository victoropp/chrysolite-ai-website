# Risk Assessment & Treatment Policy

**Document ID:** ISMS-POL-01
**Version:** 1.0
**Effective Date:** 2026-03-02
**Review Date:** 2027-03-02
**Owner:** CISO
**Approved By:** CEO
**Classification:** Internal — Confidential

---

## 1. Purpose

To define a consistent, repeatable approach for identifying, analysing, evaluating, and treating information security risks across Chrysolite AI, in accordance with ISO/IEC 27001:2022 Clauses 6.1.2, 8.2, and 8.3.

---

## 2. Scope

All information assets, systems, processes, and third-party relationships within the ISMS scope.

---

## 3. Risk Assessment Process

### 3.1 Risk Identification

Risks are identified by:

- **Annual formal risk assessment** (scheduled, CISO-led)
- **Event-driven assessments** triggered by: new systems, significant changes, major incidents, new regulations, or significant threat intelligence
- **Continuous monitoring** via vulnerability scanning, SIEM alerts, and penetration testing results

For each risk, the following are documented in the Risk Register:

- Unique Risk ID
- Asset(s) affected
- Threat and threat source
- Vulnerability being exploited
- Existing controls in place
- Potential impact (CIA triad)

### 3.2 Risk Analysis — Likelihood

| Score | Rating | Definition |
|-------|--------|------------|
| 1 | Rare | May occur once in more than 5 years |
| 2 | Unlikely | May occur once in 2–5 years |
| 3 | Possible | May occur once per year |
| 4 | Likely | May occur multiple times per year |
| 5 | Almost Certain | May occur multiple times per month |

### 3.3 Risk Analysis — Impact

| Score | Rating | Definition |
|-------|--------|------------|
| 1 | Negligible | No material harm; no regulatory impact |
| 2 | Minor | Minor disruption; no customer data affected |
| 3 | Moderate | Temporary service degradation; limited customer impact |
| 4 | Major | Significant data breach or system outage; regulatory notification likely |
| 5 | Critical | Catastrophic data breach; business-threatening; regulatory enforcement action |

### 3.4 Risk Score Calculation

```
Risk Score = Likelihood × Impact
```

| Score Range | Risk Level | Default Requirement |
|-------------|------------|---------------------|
| 1–4 | Low | Accept; review annually |
| 5–9 | Medium | Treat or accept with documented justification |
| 10–14 | High | Must treat; escalate to CISO; remediation plan within 30 days |
| 15–25 | Critical | Immediate action; escalate to CEO; remediation plan within 7 days |

---

## 4. Risk Treatment Options

For each identified risk, one of four treatment options must be selected:

| Option | Description | When to Use |
|--------|-------------|-------------|
| **Modify** | Implement or strengthen controls to reduce likelihood or impact | Preferred for High and Critical risks |
| **Avoid** | Discontinue the activity or technology that creates the risk | When modification cost exceeds benefit |
| **Transfer** | Shift the risk via insurance, contracts, or outsourcing | Residual risks that cannot be economically mitigated |
| **Accept** | Formally accept the residual risk | Low and documented Medium risks only; requires CISO sign-off |

### 4.1 Risk Treatment Plan

For each risk requiring treatment, a Risk Treatment Plan (RTP) must document:

- Selected treatment option and rationale
- Specific controls to implement (referencing ISO 27001:2022 Annex A)
- Responsible owner
- Target completion date
- Residual risk score after treatment

---

## 5. Risk Acceptance

- **Low risks:** May be accepted by the relevant team lead
- **Medium risks:** Must be accepted by the CISO
- **High risks:** Must be accepted by the CISO with notification to the CEO
- **Critical risks:** May not be accepted without CEO approval and a documented remediation timeline

---

## 6. Risk Register

The Risk Register is maintained by the CISO in a controlled document. It includes all identified risks, their scores, treatment decisions, owners, and current status. The register is reviewed:

- Formally: annually
- Informally: quarterly as part of ISMS management review
- Immediately: after any significant security incident

---

## 7. Statement of Applicability (SoA)

Chrysolite AI maintains a Statement of Applicability listing all ISO 27001:2022 Annex A controls, documenting which are included in the ISMS, which are excluded, and the justification for each decision. The SoA is reviewed annually alongside the risk assessment.

---

## 8. Document Control

| Version | Date | Change |
|---------|------|--------|
| 1.0 | 2026-03-02 | Initial issue |
