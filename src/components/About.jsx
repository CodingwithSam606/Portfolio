import Reveal from './Reveal'

const facts = [
  ['Based in', 'Lagos, Nigeria'],
  ['Focus', 'Frontend → Full-stack'],
  ['Experience', 'Personal & academic projects'],
  ['Approach', 'Curious, practical, intentional'],
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* SECTION HEADER */}
        <Reveal>
          <div className="about-heading-row">
            <p className="section-number">02 — About</p>
            <p className="section-side-note">A little context</p>
          </div>
        </Reveal>


        {/* INTRO FROM APP.JSX */}
        <div className="about-intro">
          <Reveal delay={100}>
            <h2>
              I didn't start with
              <span>a perfect roadmap.</span>
            </h2>
          </Reveal>

          <Reveal delay={220}>
            <div className="about-intro-note">
              <span className="about-note-line" />

              <p>
                I started with curiosity, a computer and a desire
                to build something useful. Since then, I've been
                turning that curiosity into real projects and
                steadily expanding from frontend development
                toward full-stack engineering.
              </p>
            </div>
          </Reveal>
        </div>


        {/* DETAILED ABOUT CONTENT */}
        <div className="about-content">

          <Reveal delay={100} className="about-story">
            <p className="about-label">01 / The story</p>

            <p className="about-large-copy">
              I got into development because I wanted to understand
              how ideas become things people can actually use.
            </p>

            <p>
              My background is in Computer Science and Mathematics,
              but most of my growth has happened by building.
              Websites, interfaces, experiments, and projects have
              taught me things that simply reading about code never
              could.
            </p>

            <p>
              I started from the frontend — learning how to structure
              pages, create responsive interfaces and make experiences
              feel right. Now I'm pushing beyond the browser and
              learning what it takes to build complete applications.
            </p>
          </Reveal>


          <Reveal delay={220} className="about-facts">
            <p className="about-label">02 / Right now</p>

            <div className="facts-list">
              {facts.map(([label, value], index) => (
                <div className="fact-row" key={label}>
                  <span className="fact-index">
                    0{index + 1}
                  </span>

                  <span className="fact-label">
                    {label}
                  </span>

                  <span className="fact-value">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="about-quote">
              <span>“</span>

              <p>
                The goal isn't to know everything.
                It's to become someone who can figure things out.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}