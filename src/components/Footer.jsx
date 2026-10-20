import Reveal from './Reveal'

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* NAVIGATION AND BRAND */}
        <Reveal>
          <div className="footer-main">
            <a href="#home" className="footer-brand">
              <span className="footer-brand-symbol">SA</span>
              <span>Samuel Asalu</span>
            </a>

            <nav className="footer-nav" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}

              <a href="#contact">Contact</a>
            </nav>

            <a
              href="https://x.com/Asalu_dev"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              X <span>↗</span>
            </a>
          </div>
        </Reveal>

        {/* COPYRIGHT */}
        <Reveal delay={150} className="footer-bottom-reveal">
          <div className="footer-bottom">
            <p>© {year} Samuel Asalu</p>

            <p className="footer-bottom-note">
              Designed with intention.
            </p>

            <a href="#home" className="footer-top-link">
              Back to top ↑
            </a>
          </div>
        </Reveal>

      </div>
    </footer>
  )
}