import htmlLogo from '../assets/Html5.png'
import cssLogo from '../assets/icons8-css-logo-48.png'
import javascriptLogo from '../assets/icons8-javascript-48.png'
import reactLogo from '../assets/icons8-react-40.png'
import csharpLogo from '../assets/icons8-c-sharp-logo-50.png'
import dotnetLogo from '../assets/icons8-.net-framework-48.png'
import pythonLogo from '../assets/icons8-python-48.png'
import gitLogo from '../assets/icons8-git-48.png'
import Reveal from './Reveal'

const services = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive, thoughtful interfaces that feel good to use and work across different screen sizes.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend Development',
    description:
      'Developing the logic behind applications while continuing to grow my experience with server-side development and APIs.',
    stack: ['C#', '.NET', 'Python'],
  },
  {
    title: 'Responsive Websites',
    description:
      'Creating websites that adapt naturally across devices while following solid foundations for accessibility, structure and search visibility.',
    stack: ['Responsive UI', 'Semantic HTML', 'SEO'],
  },
]

const technologies = [
  {
    name: 'HTML',
    logo: htmlLogo,
  },
  {
    name: 'CSS',
    logo: cssLogo,
  },
  {
    name: 'JavaScript',
    logo: javascriptLogo,
  },
  {
    name: 'React',
    logo: reactLogo,
  },
  {
    name: 'C#',
    logo: csharpLogo,
  },
  {
    name: '.NET',
    logo: dotnetLogo,
  },
  {
    name: 'Python',
    logo: pythonLogo,
  },
  {
    name: 'Git & GitHub',
    logo: gitLogo,
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        <Reveal>
          <div className="services-header">
            <p className="section-number">03 — Services</p>

            <p className="services-header-note">
              What I can help build and the technologies
              I use to bring those ideas to life.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="services-heading">
            <span>Building for the</span>
            <strong>web.</strong>
          </div>
        </Reveal>

        {/* SERVICES */}
        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={180 + index * 100}
            >
              <article className="service-card">
                <div className="service-card-top">
                  <span className="service-card-label">
                    What I do
                  </span>

                  <span className="service-card-arrow">
                    ↗
                  </span>
                </div>

                <div className="service-card-content">
                  <h3>{service.title}</h3>

                  <p>{service.description}</p>
                </div>

                <div className="service-stack">
                  {service.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* TECHNOLOGIES */}
        <Reveal delay={300}>
          <div className="services-toolbox">

            <div className="toolbox-heading">
              <p className="services-label">
                The toolbox
              </p>

              <p>
                Technologies I'm working with,
                learning and using to build.
              </p>
            </div>

            <div className="technology-grid">
              {technologies.map((technology) => (
                <div
                  className="technology-item"
                  key={technology.name}
                >
                  <div className="technology-logo">
                    <img
                      src={technology.logo}
                      alt={`${technology.name} logo`}
                    />
                  </div>

                  <div className="technology-info">
                    <span>{technology.name}</span>
                    <span className="technology-arrow">
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="services-bottom">
            <span className="services-bottom-line" />

            <p>
              The stack will keep changing.
              <br />
              The curiosity won't.
            </p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}