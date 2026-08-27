import Link from "next/link";

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/repair-terms", label: "Repair terms" },
  { href: "/accessibility", label: "Accessibility" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-primary">
        <Link className="wordmark footer-mark" href="/">
          trippy<span>dak</span>
        </Link>
        <p>Real work. Honest notes. No default settings.</p>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        {footerLinks.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
        <a href="https://github.com/trippydak" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <div className="footer-meta">
        <p>© 2026 trippydak</p>
        <p>Des Moines, Iowa · messages open 24/7</p>
      </div>
    </footer>
  );
}
