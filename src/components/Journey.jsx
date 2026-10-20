import Reveal from './Reveal'

const journey = [
  {
    number: '01',
    period: '2025',
    title: 'The foundation',
    text: 'I graduated with a background in Computer Science and Mathematics — the beginning of a much bigger journey into software development.',
    tags: ['Computer Science', 'Mathematics'],
  },
  {
    number: '02',
    period: '2025 → 2026',
    title: 'Learning to build',
    text: 'I focused heavily on the frontend, strengthening my HTML, CSS and JavaScript skills while turning what I learned into actual projects.',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    number: '03',
    period: '2026',
    title: 'Going deeper',
    text: 'React became a bigger part of how I build. At the same time, I started moving beyond the interface and learning C# and .NET.',
    tags: ['React', 'C#', '.NET'],
  },
  {
    number: '04',
    period: 'Right now',
    title: 'Becoming full-stack',
    text: 'The goal now is simple: become capable of taking an idea from the first interface all the way to a working application.',
    tags: ['Frontend', 'Backend', 'Full-stack'],
  },
]

export default function Journey() {
  return (
    <section className="journey-section">
      <div className="journey-container">

        <Reveal>
          <div className="journey-header">
            <div>
              <p className="section-number">03 / The journey</p>
            </div>

            <div className="journey-header-copy">
              <p>
                There wasn't one moment where everything clicked.
                It has been a series of small steps, projects,
                mistakes and decisions that gradually changed
                how I think about building software.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="journey-title">
            <span>From curious</span>
            <strong>to builder.</strong>
          </div>
        </Reveal>

        <div className="journey-grid">
          {journey.map((item, index) => (
            <Reveal
              key={item.number}
              delay={180 + index * 100}
            >
              <article
                className={`journey-card ${
                  index === 1 || index === 3
                    ? 'journey-card-offset'
                    : ''
                }`}
              >
                <div className="journey-card-top">
                  <span>{item.number}</span>
                  <span>{item.period}</span>
                </div>

                <div className="journey-card-body">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>

                <div className="journey-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="journey-footer">
            <div className="journey-footer-line" />

            <div>
              <span></span>
              <p>
                Still learning.
                <br />
                Still building.
              </p>
            </div>

            <span className="journey-footer-arrow">↘</span>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
