import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "trippydak.com V2 — Project Notes",
  description: "The problem, process, tools, wins, and failures behind the trippydak.com V2 redesign.",
};

export default function WebsiteV2ProjectPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero detail-hero">
        <p className="eyebrow"><span /> launch candidate · web / documentation</p>
        <h1>Building the<br /><em>public workbench.</em></h1>
        <div className="detail-meta">
          <span>STATUS / FINAL REVIEW</span>
          <span>STARTED / 2026</span>
          <span>LOCATION / DES MOINES</span>
        </div>
      </section>

      <article className="project-story">
        <section>
          <p className="story-label">01 / SUMMARY</p>
          <h2>The site needed to explain the work, not just look like the brand.</h2>
          <p>
            The first trippydak site established a distinct visual signal. V2 keeps
            the lowercase name and experimental edge while turning the site into a
            place visitors can actually navigate, understand, and use.
          </p>
        </section>
        <section>
          <p className="story-label">02 / PROBLEM</p>
          <h2>Strong mood. Weak map.</h2>
          <p>
            The original one-page experience looked memorable but left important
            questions unanswered: What work belongs here? How can someone request
            help? What happens when a project card is clicked? Where are the safety
            boundaries and contact details?
          </p>
        </section>
        <section>
          <p className="story-label">03 / PROCESS</p>
          <h2>Question first. Structure second. Styling third.</h2>
          <ol>
            <li>Inventory every planned link, page, and visitor action.</li>
            <li>Separate current services from experimental capabilities.</li>
            <li>Build a mobile-first page system around projects, scheduling, and contact.</li>
            <li>Make privacy, ownership, and repair limits visible before a request is sent.</li>
            <li>Keep the existing live site available until the complete V2 is approved.</li>
          </ol>
        </section>
        <section>
          <p className="story-label">04 / TOOLS + TECHNOLOGY</p>
          <div className="tool-cloud">
            <span>Next.js</span><span>React</span><span>TypeScript</span>
            <span>CSS</span><span>OpenAI Sites</span><span>GitHub</span>
            <span>AI-assisted research</span><span>Human review</span>
          </div>
        </section>
        <section className="story-split">
          <div>
            <p className="story-label">05 / WHAT WORKED</p>
            <h3>Identity with a purpose.</h3>
            <p>
              The visual energy still feels unmistakably trippydak, but headings,
              labels, contrast, and calls to action now serve a clear visitor journey.
            </p>
          </div>
          <div>
            <p className="story-label">06 / WHAT FAILED</p>
            <h3>Assuming code was ready because files existed.</h3>
            <p>
              Early setup exposed incomplete source, misplaced generated files, and
              configuration dependencies. The fix was to inventory first, preserve the
              real hosting configuration, and validate the whole build before publishing.
            </p>
          </div>
        </section>
        <section className="safety-panel">
          <p className="story-label">07 / SAFETY + PRIVACY</p>
          <h2>Documentation never needs somebody else&apos;s private data.</h2>
          <p>
            Customer names, addresses, contact details, credentials, serial numbers,
            IMEIs, invoices, keys, certificates, and unredacted device records do not
            belong in public project notes.
          </p>
        </section>
        <div className="story-actions">
          <a className="secondary-action" href="/projects">← Back to all projects</a>
          <a className="primary-action" href="/contact">Ask about the project <span>↗</span></a>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
