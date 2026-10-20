import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      const sections = navItems
  .map(({ href }) => document.querySelector(href))
  .filter(Boolean)

const contactSection = document.querySelector('#contact')

let current = 'home'

sections.forEach((section) => {
  const top = section.getBoundingClientRect().top

  if (top <= window.innerHeight * 0.35) {
    current = section.id
  }
})

// Contact is intentionally not part of the navbar,
// so remove the active indicator when it is in view.
if (contactSection) {
  const contactTop = contactSection.getBoundingClientRect().top

  if (contactTop <= window.innerHeight * 0.35) {
    current = ''
  }
}

setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`site-nav ${
          scrolled ? 'site-nav-scrolled' : ''
        }`}
      >
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">SA</span>

          <span className="brand-name">
            Samuel Asalu
            <small>Full-stack developer</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.slice(1) ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}

          <a href="#contact" className="nav-contact">
            <span>Say hello</span>
            <span className="nav-arrow">↗</span>
          </a>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-inner">
          <p className="mobile-menu-label">Navigation</p>

          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="mobile-nav-link"
                style={{ '--menu-index': index }}
              >
                <span className="mobile-nav-number">
                  0{index + 1}
                </span>

                <span className="mobile-nav-text">
                  {item.label}
                </span>

                <span className="mobile-nav-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mobile-nav-link mobile-nav-contact"
              style={{ '--menu-index': navItems.length }}
            >
              <span className="mobile-nav-number">05</span>

              <span className="mobile-nav-text">Say hello</span>

              <span className="mobile-nav-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </nav>

          <div className="mobile-menu-footer">
            <span>Lagos, Nigeria</span>
            <span>Available for opportunities</span>
          </div>
        </div>
      </div>
    </>
  )
}