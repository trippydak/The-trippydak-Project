import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Technology Services — trippydak",
  description: "Local device diagnostics, repair, upgrades, software help, and restoration in the Des Moines metro.",
};

const offered = [
  "Device diagnostics",
  "Laptop and desktop repair",
  "Screen and battery replacement",
  "Storage and RAM upgrades",
  "Operating-system installation",
  "Data backup and transfer",
  "Malware cleanup",
  "Android software troubleshooting",
  "Bootloader and root consultation",
  "Firmware recovery — experimental",
  "Console and miscellaneous electronics",
];

const declined = [
  "Stolen devices or work without proof of ownership",
  "Ownership-lock bypasses without verifiable authorization",
  "Unsafe or dangerously damaged batteries",
  "Unsupported microsoldering or precision board-level repair",
  "Guaranteed data recovery",
  "Requests that require sending credentials through an insecure channel",
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero services-hero">
        <p className="eyebrow"><span /> Des Moines metro · appointment only</p>
        <h1>Practical help for<br /><em>technology in trouble.</em></h1>
        <p>
          Local diagnostics, repair, upgrades, and software help—quoted for the
          device in front of me, with the risks and limits explained plainly.
        </p>
        <a className="primary-action" href="/schedule">Start an inquiry <span>↗</span></a>
      </section>

      <section className="section service-detail">
        <div className="section-heading-row">
          <div>
            <p className="section-tag"><span>01</span> / ON THE BENCH</p>
            <h2>What I can<br />look at.</h2>
          </div>
          <p>
            Accepted devices vary. Send the manufacturer, model, symptoms, and
            service you need; I&apos;ll tell you whether the job fits the bench.
          </p>
        </div>
        <ul className="service-matrix">
          {offered.map((service, index) => (
            <li key={service}><span>{String(index + 1).padStart(2, "0")}</span>{service}</li>
          ))}
        </ul>
      </section>

      <section className="section quote-section">
        <div>
          <p className="section-tag light"><span>02</span> / PRICING</p>
          <h2>Quote first.<br /><em>No fixed menu.</em></h2>
        </div>
        <div className="body-copy">
          <p>
            Pricing changes with the device, damage, parts, and time required. You
            receive a quote before approved work begins. Parts must be paid by debit
            or credit card; other approved expenses may be paid by card or cash.
          </p>
          <p>
            Pickup may be arranged after completion. There is currently no mail-in
            service and no public walk-in address.
          </p>
        </div>
      </section>

      <section className="section boundary-section">
        <div>
          <p className="section-tag"><span>03</span> / BOUNDARIES</p>
          <h2>Some jobs are a no.</h2>
          <p>
            Safety, ownership, honest capability, and customer privacy matter more
            than accepting every device.
          </p>
        </div>
        <ul>
          {declined.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="section service-cta">
        <p>Replies are normally sent within 24 hours.</p>
        <h2>Ready to explain<br />what happened?</h2>
        <a className="primary-action" href="/schedule">Open the schedule form <span>↗</span></a>
      </section>
      <SiteFooter />
    </main>
  );
}
