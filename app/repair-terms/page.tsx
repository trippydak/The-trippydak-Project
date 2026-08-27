import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Repair Terms — trippydak" };

const terms = [
  {
    title: "Authorization and ownership",
    body: "You must own the device or have the owner's permission to request service. Proof of ownership may be required. Ownership-lock bypass work is not accepted without verifiable authorization.",
  },
  {
    title: "Estimates and approval",
    body: "A request is not a confirmed repair. Work begins only after the device is reviewed, the scope and estimate are discussed, and you approve the work. New findings may require a revised estimate.",
  },
  {
    title: "Parts and payment",
    body: "Required parts must be paid by debit or credit card before they are ordered. Other approved expenses may be paid by card or cash. Final payment is due when the completed device is returned unless another arrangement is agreed in writing.",
  },
  {
    title: "Backups and data loss",
    body: "Back up important data before service whenever possible. Repair, recovery, unlocking, rooting, firmware work, and operating-system changes can cause permanent data loss. No data-recovery outcome is guaranteed.",
  },
  {
    title: "Passwords and private information",
    body: "Never send credentials through the website form or ordinary email. If approved work requires access, a safer handoff method and the minimum information needed will be discussed directly.",
  },
  {
    title: "Experimental work",
    body: "Bootloader, root, firmware, and recovery work may affect warranties, security features, updates, device stability, or future service. These jobs require a separate risk acknowledgment and may be declined.",
  },
  {
    title: "Warranty",
    body: "Any workmanship warranty and its length will be stated on the approved estimate or receipt. Parts are subject to the supplier or manufacturer's warranty. Accidental damage, unrelated failures, software changes, and misuse are not covered.",
  },
  {
    title: "Unrepairable or abandoned devices",
    body: "A device may be returned unrepaired when the job is unsafe, parts are unavailable, damage is beyond the agreed scope, or the work exceeds current capability. Pickup deadlines and any abandoned-device terms will be communicated in writing before service.",
  },
];

export default function RepairTermsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero legal-hero terms-hero">
        <p className="eyebrow"><span /> review before requesting service</p>
        <h1>Clear terms.<br /><em>No surprise promises.</em></h1>
        <p>Working draft for owner review · last updated August 25, 2026.</p>
      </section>
      <article className="legal-copy terms-list">
        <div className="legal-alert">
          <strong>Service can be declined.</strong>
          <p>
            trippydak reserves the right to turn down work that is unsafe,
            unsupported, outside current knowledge, or cannot be verified as authorized.
          </p>
        </div>
        {terms.map((term, index) => (
          <section key={term.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{term.title}</h2>
              <p>{term.body}</p>
            </div>
          </section>
        ))}
        <p className="legal-review-note">
          These terms are a practical operating draft and should receive owner—and,
          if desired, legal—review before the V2 site is published.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
