import { SignalStage } from "@/components/SignalStage";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const disciplines = [
  {
    number: "01",
    name: "Android",
    copy: "Software troubleshooting, bootloader research, root consultation, and recovery work—with risk explained before anything changes.",
    status: "DOCUMENTATION OPEN",
  },
  {
    number: "02",
    name: "Apple",
    copy: "Practical diagnostics, part replacement, operating-system help, and careful documentation for the repairs that fit the bench.",
    status: "CASE STUDIES NEXT",
  },
  {
    number: "03",
    name: "PC / Laptop",
    copy: "Diagnostics, hardware upgrades, system installs, cleanup, data transfer, and the reasoning behind each decision.",
    status: "ACCEPTING INQUIRIES",
  },
  {
    number: "04",
    name: "Consoles + Misc.",
    copy: "A flexible lane for consoles and everyday electronics—evaluated one device at a time, without pretending every fix is routine.",
    status: "CASE BY CASE",
  },
];

const services = [
  "device diagnostics",
  "laptop + desktop repair",
  "screens + batteries",
  "storage + RAM upgrades",
  "operating-system installs",
  "data backup + transfer",
  "malware cleanup",
  "Android troubleshooting",
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Des Moines public workbench · online</p>
          <h1>
            Real work.<br />
            <em>Honest notes.</em><br />
            Better tech.
          </h1>
          <p className="hero-intro">
            I&apos;m Dakota J.—a local tech enthusiast turning a lifelong electronics
            habit into useful repairs, documented experiments, and practical things
            other people can learn from.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="/projects">
              Explore the projects <span aria-hidden="true">↗</span>
            </a>
            <a className="secondary-action" href="/schedule">
              Schedule a job <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className="hero-note">
            Independent · AI-assisted research · human judgment · no corporate act
          </p>
        </div>

        <SignalStage />
      </section>

      <div className="signal-ticker" aria-label="trippydak principles">
        <div>
          {["REPAIR", "RESTORE", "DOCUMENT", "LEARN", "SHARE", "REPAIR", "RESTORE", "DOCUMENT", "LEARN", "SHARE"].map((signal, index) => (
            <span key={`${signal}-${index}`}>{signal}<i aria-hidden="true">✦</i></span>
          ))}
        </div>
      </div>

      <section className="section current-build">
        <div className="section-intro">
          <p className="section-tag"><span>01</span> / CURRENT SIGNAL</p>
          <p className="status-chip"><i /> BUILDING IN PUBLIC</p>
        </div>
        <div className="current-grid">
          <div>
            <p className="overline">FEATURED PROJECT · WEB / DOCUMENTATION</p>
            <h2>The website is the first case study.</h2>
          </div>
          <div className="body-copy">
            <p>
              trippydak.com V2 is being rebuilt as the home for every repair story,
              experiment, failure, and useful discovery that follows. The design,
              decisions, and progress are part of the project—not hidden behind it.
            </p>
            <a className="inline-link" href="/projects/trippydak-com-v2">
              Read the build notes <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section project-section">
        <div className="section-heading-row">
          <div>
            <p className="section-tag light"><span>02</span> / THE TRIPPYDAK PROJECT</p>
            <h2>One workbench.<br />Several lanes.</h2>
          </div>
          <p>
            Projects are organized by the device in front of me, then documented
            with the problem, process, result, and what I would do differently.
          </p>
        </div>

        <div className="discipline-grid">
          {disciplines.map((item) => (
            <article className="discipline-card" key={item.number}>
              <div className="card-index">{item.number}</div>
              <h3>{item.name}</h3>
              <p>{item.copy}</p>
              <div className="card-status">{item.status}</div>
            </article>
          ))}
        </div>

        <a className="primary-action dark-action" href="/projects">
          Open the project index <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="section services-preview">
        <div className="services-title">
          <p className="section-tag"><span>03</span> / SERVICES</p>
          <h2>Useful help.<br /><em>No mystery pricing.</em></h2>
          <p>
            Every device and repair is different. I&apos;ll look at what is needed,
            explain the options, and quote the work before moving ahead.
          </p>
          <div className="button-row">
            <a className="primary-action" href="/schedule">
              Start an inquiry <span aria-hidden="true">↗</span>
            </a>
            <a className="inline-link" href="/services">See all services</a>
          </div>
        </div>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={service}><span>0{index + 1}</span>{service}</li>
          ))}
        </ul>
      </section>

      <section className="section process-section">
        <div className="section-heading-row compact">
          <div>
            <p className="section-tag light"><span>04</span> / THE PROCESS</p>
            <h2>Straightforward<br />from first message.</h2>
          </div>
        </div>
        <div className="process-grid">
          <article>
            <span>01</span>
            <h3>Tell me what happened.</h3>
            <p>Send the device details, symptoms, and the kind of help you need.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Meet, inspect, agree.</h3>
            <p>We schedule an appointment, review the device, and agree on scope and cost.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Repair, explain, return.</h3>
            <p>I do the approved work, share the result, collect payment, and arrange pickup.</p>
          </article>
        </div>
        <p className="boundary-note">
          <strong>Bench boundary:</strong> I reserve the right to decline work that is
          unsafe, unsupported, beyond my current knowledge, or cannot be verified as
          authorized by the device owner.
        </p>
      </section>

      <section className="section contact-band">
        <div>
          <p className="eyebrow dark"><span /> signal open · replies within 24 hours</p>
          <h2>Got a device,<br />idea, or question?</h2>
        </div>
        <div className="contact-links">
          <a href="tel:+15155008353"><span>Call or text</span>515.500.8353 <b>↗</b></a>
          <a href="mailto:dakotajensen@trippydak.com"><span>Email</span>dakotajensen@trippydak.com <b>↗</b></a>
          <a href="/contact"><span>Full contact page</span>Open contact options <b>→</b></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
