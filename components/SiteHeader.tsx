import Link from "next/link";

const navigation = [
  { href: "/projects", label: "The trippydak Project" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="trippydak homepage">
        trippy<span>dak</span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="schedule-button" href="/schedule">
        Schedule <span aria-hidden="true">↗</span>
      </a>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a href="/schedule">Schedule</a>
        </nav>
      </details>
    </header>
  );
}
