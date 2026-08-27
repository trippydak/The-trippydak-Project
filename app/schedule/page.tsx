import type { Metadata } from "next";
import { ScheduleForm } from "@/components/EmailForms";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Schedule a Repair Inquiry — trippydak",
  description: "Tell trippydak about your device and requested service.",
};

export default function SchedulePage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero schedule-hero">
        <p className="eyebrow"><span /> short intake · no account required</p>
        <h1>Tell me what the<br /><em>device is doing.</em></h1>
        <p>
          Give me the basics. I&apos;ll review the request, decide whether it fits my
          current bench, and normally respond within 24 hours.
        </p>
      </section>

      <section className="section schedule-grid">
        <aside>
          <p className="section-tag"><span>01</span> / BEFORE YOU START</p>
          <h2>A few things<br />to know.</h2>
          <ul>
            <li>This is an inquiry, not a confirmed appointment.</li>
            <li>Pricing is based on the device, damage, parts, and time.</li>
            <li>No mail-in service is available right now.</li>
            <li>Appointments are arranged in the Des Moines metro.</li>
            <li>Proof of ownership may be required.</li>
          </ul>
          <a className="inline-link" href="/repair-terms">Read the repair terms →</a>
        </aside>
        <div>
          <ScheduleForm />
          <div className="hard-disclaimer">
            <strong>Service is never guaranteed.</strong>
            <p>
              I reserve the right to turn down any repair that is unsafe, unsupported,
              outside my current knowledge, or otherwise not a responsible fit for the bench.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
