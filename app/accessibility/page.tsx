import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = { title: "Accessibility — trippydak" };

export default function AccessibilityPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero legal-hero">
        <p className="eyebrow"><span /> access is part of the build</p>
        <h1>Useful means<br /><em>usable.</em></h1>
        <p>trippydak.com is built to work across phones, keyboards, and assistive technology.</p>
      </section>
      <article className="legal-copy">
        <section>
          <h2>Current commitments</h2>
          <ul>
            <li>Semantic headings, navigation, labels, and form controls.</li>
            <li>Visible keyboard focus and keyboard-operable links and forms.</li>
            <li>High-contrast text and touch targets sized for mobile use.</li>
            <li>Meaningful alternative text for content images.</li>
            <li>Reduced-motion support for visitors who request it.</li>
            <li>No information available only through color or animation.</li>
          </ul>
        </section>
        <section>
          <h2>Report a problem</h2>
          <p>
            If something is difficult to read, reach, operate, or understand, email
            <a href="mailto:dakotajensen@trippydak.com"> dakotajensen@trippydak.com</a>
            or call/text <a href="tel:+15155008353">515.500.8353</a>. Include the page
            and what you were trying to do.
          </p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
