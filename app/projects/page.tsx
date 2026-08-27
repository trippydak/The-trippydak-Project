import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "The trippydak Project",
  description: "Repairs, rebuilds, experiments, and honest documentation from the trippydak workbench.",
};

const categories = [
  { number: "01", title: "Android", note: "Rooting, bootloaders, software repair, firmware research, and recovery notes." },
  { number: "02", title: "Apple", note: "Hardware repair, part replacement, system recovery, and practical diagnostics." },
  { number: "03", title: "PC / Laptop", note: "Upgrades, repair, operating systems, cleanup, data transfer, and restoration." },
  { number: "04", title: "Consoles", note: "Console and controller diagnostics, restoration, and case-by-case repair work." },
  { number: "05", title: "Misc. Electronics", note: "Useful devices that do not fit a clean category, documented anyway." },
  { number: "06", title: "Visual Originals", note: "Identity work, experimental graphics, and the visual process behind trippydak." },
];

export default function ProjectsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero projects-hero">
        <p className="eyebrow"><span /> archive index · growing in public</p>
        <h1>The trippydak<br /><em>Project.</em></h1>
        <p>
          A record of the work—not just the polished ending. Each finished case
          study will show the problem, tools, decisions, failures, result, and the
          safety details worth knowing.
        </p>
      </section>

      <section className="section featured-project">
        <div className="project-feature-card">
          <div className="project-feature-copy">
            <p className="status-chip"><i /> ACTIVE BUILD</p>
            <p className="overline">WEB / BRAND / DOCUMENTATION · 2026</p>
            <h2>trippydak.com V2</h2>
            <p>
              Rebuilding a vague one-page signal into a useful public workbench—
              with real navigation, repair intake, contact options, policies, and a
              home for future project evidence.
            </p>
            <a className="primary-action" href="/projects/trippydak-com-v2">
              Open project notes <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="project-progress" aria-label="Project progress">
            <span>DISCOVERY <b>COMPLETE</b></span>
            <span>CONTENT MAP <b>COMPLETE</b></span>
            <span>V2 BUILD <b>ACTIVE</b></span>
            <span>OWNER REVIEW <b>NEXT</b></span>
          </div>
        </div>
      </section>

      <section className="section category-section">
        <div className="section-heading-row">
          <div>
            <p className="section-tag"><span>02</span> / CATEGORIES</p>
            <h2>Filed by what<br />was on the bench.</h2>
          </div>
          <p>
            These lanes are ready for the photos and write-ups. Empty categories
            stay honest instead of pretending unfinished work is already a portfolio.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <article key={category.number}>
              <span>{category.number}</span>
              <h3>{category.title}</h3>
              <p>{category.note}</p>
              <small>FIRST CASE STUDY COMING SOON</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section archive-callout">
        <p className="section-tag light"><span>03</span> / DOCUMENTATION STANDARD</p>
        <h2>No customer details.<br /><em>No fake certainty.</em></h2>
        <p>
          Public write-ups remove names, contact information, serial numbers,
          credentials, invoices, and other identifying records. Risky procedures get
          clear warnings. Failed attempts remain in the story when they teach something.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
