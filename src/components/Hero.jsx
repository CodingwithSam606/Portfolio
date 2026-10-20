import { useState } from 'react'
import Reveal from './Reveal'
import CVPreview from './CVPreview'
import portrait from '../assets/portrait.png'

export default function Hero() {
  const [isCVOpen, setIsCVOpen] = useState(false)
  return (
    <section id="home" className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow" />
      </div>

      <div className="hero-content">

        <Reveal>
          <div className="hero-kicker">
            <span className="status-dot" />
            <span>Available for junior opportunities</span>
            <span className="kicker-line" />
            <span>Lagos · Nigeria</span>
          </div>
        </Reveal>

        <div className="hero-main">

          <div className="hero-copy">

            <Reveal delay={100}>
              <p className="hero-eyebrow">
                The portfolio of a careful builder
              </p>
            </Reveal>

            <Reveal delay={180}>
              <h1 className="hero-title">
                Samuel
                <span>Asalu.</span>
              </h1>
            </Reveal>

            <Reveal delay={260}>
              <div className="hero-description">
                <p>
                  I build thoughtful digital experiences with
                  <strong> React</strong>, JavaScript and
                  <strong> .NET</strong> — while growing into the
                  full-stack developer I want to become.
                </p>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="hero-actions">
                <a href="#work" className="hero-primary">
                  <span>Explore my work</span>
                  <span className="hero-primary-arrow">↗</span>
                </a>

                <button
                  type="button"
                  className="hero-secondary"
                  onClick={() => setIsCVOpen(true)}
                >
                  Preview my CV
                  <span className="hero-secondary-arrow">↗</span>
                </button>
              </div>
            </Reveal>

          </div>

          <Reveal delay={220} className="hero-portrait-wrap">
            <div className="hero-portrait">

              <div className="portrait-orbit portrait-orbit-one" />
              <div className="portrait-orbit portrait-orbit-two" />

              <div className="portrait-image">
                <img
                  src={portrait}
                  alt="Samuel Asalu"
                />
              </div>

              <div className="portrait-label portrait-label-top">
                <span>01</span>
                <span>Samuel</span>
              </div>

              <div className="portrait-label portrait-label-bottom">
                <span>BUILDING</span>
                <span>WITH INTENTION</span>
              </div>

            </div>
          </Reveal>

        </div>

        <Reveal delay={480}>
          <div className="hero-bottom">

            <div className="hero-statement">
              <span className="statement-line" />
              <p>
                Frontend first.
                <br />
                Full-stack in progress.
              </p>
            </div>

            <div className="hero-meta">
              <span>Scroll to explore</span>
              <span className="meta-arrow">↓</span>
            </div>

          </div>
        </Reveal>

      </div>

      <div className="hero-scroll-line" aria-hidden="true" />
      <CVPreview
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
      />
    </section>
  )
}