const signals = ["ROOT", "REPAIR", "CREATE", "QUESTION", "SHARE"];

const transmissions = [
  {
    number: "01",
    label: "root & rebuild",
    title: "Every device has another life in it.",
    body: "Bootloaders, firmware, rescued hardware, strange operating systems, and the useful knowledge hiding underneath the factory settings.",
    color: "violet",
    meta: "ANDROID / HARDWARE / OPEN SYSTEMS",
  },
  {
    number: "02",
    label: "visual originals",
    title: "Color loud enough to leave a mark.",
    body: "Psychedelic identities, glitch-soaked graphics, digital artifacts, and experiments built to feel unmistakably trippydak.",
    color: "orange",
    meta: "ART / IDENTITY / EXPERIMENTS",
  },
  {
    number: "03",
    label: "field notes",
    title: "No gatekeeping. Show the whole process.",
    body: "Honest breakdowns from the bench: what worked, what failed, what finally fixed it, and how somebody else can do it better next time.",
    color: "green",
    meta: "GUIDES / DISCOVERIES / RECEIPTS",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="trippydak home">
          trippy<span>dak</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">about</a>
          <a href="#transmissions">transmissions</a>
          <a href="#contact">contact</a>
        </nav>
        <a className="signal-button" href="#transmissions">
          enter the signal <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> independent frequency // online now</p>
          <h1>
            tech made <em>stranger.</em>
            <br />
            art made <strong>personal.</strong>
          </h1>
          <p className="hero-intro">
            Welcome to the digital headquarters of <b>trippydak</b>—a living
            archive of rooted devices, rescued hardware, visual experiments,
            and ideas that refuse the default setting.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#transmissions">explore the work <span>↗</span></a>
            <a className="text-action" href="#about">decode trippydak <span>↓</span></a>
          </div>
        </div>

        <div className="signal-core" aria-label="Animated trippydak signal graphic">
          <div className="orbit orbit-one"><i /></div>
          <div className="orbit orbit-two"><i /></div>
          <div className="orbit orbit-three"><i /></div>
          <div className="core-mark" aria-hidden="true">
            <span>t</span><span>d</span>
          </div>
          <p className="core-label">ORIGINAL FREQUENCY<br />DES MOINES // EARTH</p>
        </div>

        <div className="hero-index" aria-hidden="true">00—01</div>
      </section>

      <div className="signal-ticker" aria-label="trippydak principles">
        <div>
          {[...signals, ...signals].map((signal, index) => (
            <span key={`${signal}-${index}`}>{signal}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section className="about-section" id="about">
        <div className="section-tag"><span>01</span> / THE OPERATOR</div>
        <div className="about-grid">
          <h2>A curious mind with the factory seal <em>already broken.</em></h2>
          <div className="about-copy">
            <p>
              <b>trippydak</b> is a digital maker, relentless tinkerer, and
              visual troublemaker working where everyday technology meets a
              more colorful reality.
            </p>
            <p>
              This is not a polished corporate portfolio. It is a public
              workbench—built for experiments, honest discoveries, useful
              detours, and original work with a pulse.
            </p>
            <div className="coordinates">
              <span>41.5868° N</span>
              <span>93.6250° W</span>
              <span>STATUS: BUILDING</span>
            </div>
          </div>
        </div>
      </section>

      <section className="transmissions-section" id="transmissions">
        <div className="section-heading">
          <div className="section-tag light"><span>02</span> / TRANSMISSIONS</div>
          <h2>What lives<br />on this frequency.</h2>
          <p>Three lanes. No fixed destination.</p>
        </div>

        <div className="transmission-grid">
          {transmissions.map((item) => (
            <article className={`transmission-card ${item.color}`} key={item.number}>
              <div className="card-top">
                <span>{item.number}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
              <p className="card-label">{item.label}</p>
              <h3>{item.title}</h3>
              <p className="card-body">{item.body}</p>
              <div className="card-meta">{item.meta}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto-section">
        <p className="manifesto-kicker">THE OPERATING PRINCIPLE</p>
        <blockquote>
          “Open it. Question it.<br />Make it <em>yours.</em>”
        </blockquote>
        <div className="manifesto-stamp" aria-hidden="true">
          <span>NO DEFAULT SETTINGS</span>
          <b>✦</b>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="eyebrow dark"><span /> signal remains open</p>
          <h2>Find me wherever<br /><em>@trippydak</em> appears.</h2>
        </div>
        <div className="contact-side">
          <p>
            The archive is just switching on. New builds, field notes, and
            original drops will surface here as the signal gets stronger.
          </p>
          <a href="#top">return to the source <span>↑</span></a>
        </div>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">trippy<span>dak</span></a>
        <p>© 2026 TRIPPYDAK // ALL ORIGINAL FREQUENCIES</p>
        <p>BUILT OUTSIDE THE DEFAULT</p>
      </footer>
    </main>
  );
}
