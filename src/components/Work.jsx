import Reveal from './Reveal'

import tusamImage from '../assets/tusam-bakery.png'
import samstoreImage from '../assets/samstore.png'
import portfolioOneImage from '../assets/portfolio-v1.png'
import portfolioTwoImage from '../assets/portfolio-v2.png'
import fakeNewsImage from '../assets/fake-news.png'

const experiences = [
  {
    year: '2021 — 2025',
    type: 'Education',
    title: 'B.Sc. Computer Science',
    organization: 'Caleb University',
    location: 'Lagos, Nigeria',
    description:
      'Studied computer science with a focus on programming, software development, problem solving and the foundations of computing.',
    tags: ['Computer Science', 'Programming', 'Software Development'],
  },
  {
    year: '2024',
    type: 'Practical Experience',
    title: 'Industrial Training',
    organization: 'Alliance Consulting & Digital Solutions',
    location: 'Lagos, Nigeria',
    description:
      'Gained practical exposure to web development and working in a professional environment, using HTML, CSS, JavaScript, Bootstrap and web hosting tools.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'cPanel'],
  },
]

const projects = [
  {
    title: 'Tusam Bakery',
    description:
      'A responsive website created for a bakery, designed to present the business, products and services in a simple and welcoming way.',
    image: tusamImage,
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://bakery-website-lemon.vercel.app/',
  },
  {
    title: 'SamStore',
    description:
      'A React-based e-commerce store built to explore modern frontend development and create a practical shopping experience.',
    image: samstoreImage,
    stack: ['React', 'JavaScript', 'C#'],
    link: 'https://sam-store-e-commerce.vercel.app/',
  },
  {
    title: 'Portfolio v1',
    description:
      'My first personal portfolio, built from scratch while developing my foundations in HTML, CSS and JavaScript.',
    image: portfolioOneImage,
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'http://my-portfolio-ten-ruddy-52.vercel.app/',
  },
  {
    title: 'Portfolio v2',
    description:
      'A redesigned personal portfolio built with React, focusing on component-based development, animation and responsive design.',
    image: portfolioTwoImage,
    stack: ['React', 'CSS', 'Vite'],
    link: 'https://samuel-asalu-website.vercel.app/',
  },
  {
    title: 'AI Fake News Detection',
    description:
      'An AI-based application designed to identify potentially fake news using a RoBERTa model and Flask backend.',
    image: fakeNewsImage,
    stack: ['Python', 'Flask', 'RoBERTa'],
    link: 'https://github.com/CodingwithSam606/fake-news-detection.git',
  },
]

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-container">

        {/* Header */}

        <Reveal>
          <div className="work-header">
            <p className="section-number">04 — Experience</p>

            <p className="work-header-note">
              A record of where I've learned, gained
              practical experience and built.
            </p>
          </div>
        </Reveal>

        {/* Heading */}

        <Reveal delay={120}>
          <div className="work-heading">
            <span>Learning, building</span>
            <strong>& growing.</strong>
          </div>
        </Reveal>

        {/* Experience */}

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <Reveal
              key={experience.title}
              delay={180 + index * 100}
            >
              <article className="experience-item">

                <div className="experience-year">
                  {experience.year}
                </div>

                <div className="experience-main">

                  <div className="experience-meta">
                    <span>{experience.type}</span>
                  </div>

                  <h3>{experience.title}</h3>

                  <div className="experience-organization">
                    <strong>{experience.organization}</strong>
                    <span>{experience.location}</span>
                  </div>

                  <p>{experience.description}</p>

                  <div className="experience-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                </div>

                <span className="experience-arrow">
                  ↗
                </span>

              </article>
            </Reveal>
          ))}
        </div>

        {/* Projects intro */}

        <Reveal delay={280}>
          <div className="projects-intro">
            <div>
              <p className="work-label">
                Selected projects
              </p>
            </div>

            <p>
              Things I've built while learning,
              experimenting and developing my skills.
            </p>
          </div>
        </Reveal>

        {/* Projects */}

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal
              key={project.number}
              delay={320 + index * 80}
            >
              <article className="project-card">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card"
                >
              <div className="project-image">
                <img
                src={project.image}
                alt={`${project.title} project preview`}
                />

                <div className="project-image-overlay">
                  <span>View project</span>
                </div>
              </div>

                <div className="project-card-content">

                  <div className="project-card-top">
                    <span className="project-number">
                    {project.number}
                    </span>

                    <span className="project-card-arrow">
                     ↗
                    </span>
                  </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                  <div className="project-stack">
                      {project.stack.map((technology) => (
                      <span key={technology}>
                      {technology}
                      </span>
                    ))}
                  </div>

                </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* More projects */}

        <Reveal delay={500}>
          <div className="projects-more">

            <div className="projects-more-line" />

            <div className="projects-more-content">

              <p>
                Want to see more of what I've been building?
              </p>

              <a
                href="https://github.com/CodingwithSam606"
                target="_blank"
                rel="noreferrer"
                className="projects-github-button"
              >
                <span>View more on GitHub</span>
                <span>↗</span>
              </a>

            </div>

          </div>
        </Reveal>

        {/* Bottom */}

        <Reveal delay={600}>
          <div className="work-bottom">

            <span className="work-bottom-line" />

            <p>
              Still learning.
              <br />
              Still building.
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  )
}