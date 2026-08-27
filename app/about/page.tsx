import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About — trippydak",
  description: "Meet Dakota J. and the purpose, history, and values behind trippydak.",
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
      <section className="about-visual-section">
        <div className="about-art-frame">
          {/* A plain img keeps this static local asset out of the hosted image-optimization path. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/trippydak-mark-v2.webp"
            alt="Abstract trippydak TD signal emblem in violet and acid green"
            width={1254}
            height={1254}
            loading="eager"
          />
        </div>
        <div>
          <p className="eyebrow"><span /> operator file · personal signal</p>
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
            a million-dollar corporation. I&apos;m a Des Moines technology enthusiast
            turning a lifelong electronics habit into practical work, stronger skills,
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
        <p className="section-tag"><span>03</span> / WHY TRIPPYDAK</p>
        <h2>A personal signal becoming professional work.</h2>
        <div className="body-copy owner-note-copy">
          <p>
            trippydak began as a PSN username. It wasn&apos;t created in a boardroom or
            designed around a business plan—it was simply a name that came to me while
            choosing an online handle. Over time, it became the identity behind my
            technical work and the standard I want that work to represent.
          </p>
          <p>
            My interest in technology took off after I started rooting Android devices
            and learning how operating systems, bootloaders, and the wider Android
            ecosystem fit together. Completing increasingly technical projects for
            myself and others turned that curiosity into practical skill and showed me
            that the work could become more than a hobby.
          </p>
          <p>
            The trippydak Project is a record of progress: learning deliberately,
            solving real problems, documenting the process honestly, and refusing to
            let outside assumptions place a ceiling on what I can build.
          </p>
          <p>
            I currently work full-time in a job I prefer to keep private while building
            trippydak on the side. My goal is to turn the work I do after hours into my
            full-time work and grow trippydak into a recognized brand without placing a
            ceiling on what it can become.
          </p>
          <p>
            I want this work to serve paying customers and people who are finding their
            own way into electronics outside a traditional path. Useful repair work,
            open documentation, and visible progress can make technical knowledge feel
            reachable. The project is still evolving, and each completed build adds to
            the proof.
          </p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
