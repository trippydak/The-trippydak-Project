import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Privacy — trippydak" };

export default function PrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero legal-hero">
        <p className="eyebrow"><span /> plain-language policy</p>
        <h1>Privacy without<br /><em>the smoke screen.</em></h1>
        <p>Last updated August 27, 2026.</p>
      </section>
      <article className="legal-copy">
        <section>
          <h2>What this site collects</h2>
          <p>
            V2 does not use advertising trackers or cross-site tracking. The contact
            and repair forms send the information you enter to Formspree so it can be
            delivered to trippydak. The website does not maintain its own submission
            database, but Formspree processes and may retain form submissions according
            to its <a href="https://formspree.io/legal/privacy-policy/">privacy policy</a>.
          </p>
          <p>
            Hosting and security providers may process ordinary technical request data,
            such as an IP address, browser information, requested page, and timestamp,
            to deliver the site, prevent abuse, and maintain reliability. trippydak does
            not use that information for advertising or cross-site profiling.
          </p>
        </section>
        <section>
          <h2>When you contact trippydak</h2>
          <p>
            Information you choose to submit or email is used to answer your message, evaluate
            a repair inquiry, schedule approved work, and keep necessary service
            records. Access is limited to trippydak. You may request deletion by
            emailing <a href="mailto:dakotajensen@trippydak.com">dakotajensen@trippydak.com</a>.
          </p>
        </section>
        <section>
          <h2>What not to send</h2>
          <p>
            Do not email passwords, PINs, recovery codes, full payment-card numbers,
            private keys, or complete identity documents. If credentials are needed
            for approved work, a safer handoff method will be discussed directly.
          </p>
        </section>
        <section>
          <h2>Cookies and analytics</h2>
          <p>
            The first V2 release does not add optional analytics or marketing cookies.
            If privacy-respecting measurement is added later, this page will be updated
            before that change goes live.
          </p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
