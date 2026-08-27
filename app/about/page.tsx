import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About — trippydak",
  description: "A draft introduction to Dakota J. and the values behind trippydak.",
};

const values = [
  "Right to repair",
  "Open technology",
  "Honest documentation",
  "No gatekeeping",
  "Privacy",
  "Accessibility",
  "Sustainability + reuse",
  "Creative freedom",
  "Harm reduction",
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <div className="draft-banner" role="status">
        OWNER REVIEW DRAFT · THIS PAGE IS NOT APPROVED FOR PUBLICATION
      </div>
      <section className="about-visual-section">
        <div className="about-art-frame">
          <Image
            src="/trippydak-mark-v2.webp"
            alt="Abstract trippydak TD signal emblem in violet and acid green"
            width={1254}
            height={1254}
            priority
          />
        </div>
        <div>
          <p className="eyebrow"><span /> operator file · draft 01</p>
          <h1>Curiosity with the<br /><em>factory seal broken.</em></h1>
        </div>
      </section>

      <section className="section about-story">
        <div>
          <p className="section-tag"><span>01</span> / THE OPERATOR</p>
          <h2>Dakota J.<br />Des Moines, Iowa.</h2>
        </div>
        <div className="body-copy large-copy">
          <p>
            trippydak is a real person building in public—not a giant repair chain or
            a million-dollar corporation. I&apos;m a 27-year-old technology enthusiast
            turning a lifelong electronics hobby into practical work, stronger skills,
            and documentation that might help the next curious person.
          </p>
          <p>
            AI supports the research, organization, and learning process. The judgment,
            hands-on work, accountability, and final decisions stay human.
          </p>
        </div>
      </section>

      <section className="section values-section">
        <p className="section-tag light"><span>02</span> / OPERATING VALUES</p>
        <div className="value-grid">
          {values.map((value, index) => (
            <div key={value}><span>{String(index + 1).padStart(2, "0")}</span>{value}</div>
          ))}
        </div>
      </section>

      <section className="section owner-note">
        <p className="section-tag"><span>03</span> / OWNER NOTE NEEDED</p>
        <h2>This is where Dakota&apos;s own words finish the story.</h2>
        <p>
          Before launch, replace this review note with a personal paragraph about
          where the name came from, what started the electronics obsession, and what
          kind of work trippydak should become next.
        </p>
      </section>
      <SiteFooter />
    </main>
  );
}
