import type { Metadata } from "next";
import { ContactForm } from "@/components/EmailForms";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact — trippydak",
  description: "Call, text, or email trippydak in Des Moines, Iowa.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero contact-hero">
        <p className="eyebrow"><span /> messages open 24/7 · replies within 24 hours</p>
        <h1>Say what&apos;s up.<br /><em>I keep it 100.</em></h1>
        <p>
          Repair question, project idea, collaboration, or something else—choose
          the contact method that works for you.
        </p>
      </section>

      <section className="section contact-page-grid">
        <div className="direct-contact">
          <p className="section-tag"><span>01</span> / DIRECT</p>
          <a href="tel:+15155008353">
            <small>WORK PHONE · CALL OR TEXT</small>
            <strong>515.500.8353</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <a href="mailto:dakotajensen@trippydak.com">
            <small>EMAIL</small>
            <strong>dakotajensen@trippydak.com</strong>
            <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-facts">
            <p><span>AREA</span>Des Moines, Iowa</p>
            <p><span>APPOINTMENTS</span>Scheduled only</p>
            <p><span>TIME ZONE</span>Central Time</p>
            <p><span>RESPONSE</span>Within 24 hours</p>
          </div>
        </div>
        <div>
          <p className="section-tag"><span>02</span> / WRITE A MESSAGE</p>
          <h2>Build the email<br />right here.</h2>
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
