import { useState } from 'react'
import emailLogo from '../assets/email.png'
import githubLogo from '../assets/github.png'
import xLogo from '../assets/x.png'
import Reveal from './Reveal'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (event) => {
  event.preventDefault()

  const form = event.currentTarget
  const formData = new FormData(form)

  setStatus('sending')

  try {
    const response = await fetch(
      'https://formspree.io/f/xeovjynz',
      {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      }
    )

    if (response.ok) {
      form.reset()
      setStatus('success')
    } else {
      setStatus('error')
    }
  } catch {
    setStatus('error')
  }
}
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <Reveal>
          <div className="contact-header">
            <p className="section-number">05 — Contact</p>
            <p className="contact-header-note">
              Have an idea, an opportunity or simply want to talk?
              I'd be glad to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="contact-grid">

          {/* LEFT — INTRODUCTION */}
          <Reveal delay={100} className="contact-intro">
            <div className="contact-heading">
              <span>Let's build</span>
              <strong>something worth talking about.</strong>
            </div>

            <p className="contact-description">
              I'm open to junior development opportunities,
              collaborations and projects where I can contribute,
              learn and continue growing as a developer.
            </p>

            <div className="contact-details">

            <div className="contact-detail">
                <div className="contact-detail-icon">
                    <img src={emailLogo} alt="" />
                </div>

                <div className="contact-detail-info">
                    <span className="contact-detail-label">Email</span>

                    <a href="mailto:samuelasalu@outlook.com">
                        <span>samuelasalu@outlook.com</span>
                        <span className="contact-detail-arrow">↗</span>
                    </a>
                </div>
            </div>

            <div className="contact-detail">
                <div className="contact-detail-icon">
                    <img src={githubLogo} alt="" />
                </div>

                <div className="contact-detail-info">
                    <span className="contact-detail-label">GitHub</span>

                    <a
                        href="https://github.com/CodingwithSam606"
                        target="_blank"
                        rel="noreferrer"
                    >
                    <span>CodingwithSam606</span>
                    <span className="contact-detail-arrow">↗</span>
                    </a>
                </div>
            </div>

            <div className="contact-detail">
                <div className="contact-detail-icon">
                    <img src={xLogo} alt="" />
                </div>

                <div className="contact-detail-info">
                    <span className="contact-detail-label">X</span>

                    <a
                        href="https://x.com/Asalu_dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span>@Asalu_dev</span>
                        <span className="contact-detail-arrow">↗</span>
                    </a>
            </div>
        </div>

    </div>

            <div className="contact-availability">
              <span className="contact-status-dot" />
              <span>Available for opportunities</span>
              <span className="contact-location">
                Lagos · Nigeria
              </span>
            </div>
          </Reveal>


          {/* RIGHT — FORM */}
          <Reveal delay={200} className="contact-form-wrap">
            <div className="contact-form-heading">
              <p>Get in touch</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="contact-field">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Samuel..."
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-field contact-field-message">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me a little about what you're working on..."
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={status === 'sending'}
              >
                <span>
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </span>
                <span>↗</span>
              </button>

            </form>
          </Reveal>

        </div>

        <Reveal delay={300}>
          <div className="contact-footer">
            <span className="contact-footer-line" />
            <p>
              Good things usually start with
              <em> a conversation.</em>
            </p>
          </div>
        </Reveal>

      </div>
        {(status === 'success' || status === 'error') && (
      <div
        className="contact-popup-overlay"
        onClick={() => setStatus('idle')}
      >
      <div
        className="contact-popup"
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="contact-popup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="contact-popup-close"
          aria-label="Close notification"
          onClick={() => setStatus('idle')}
        >
          ×
        </button>

        <span className="contact-popup-icon">
          {status === 'success' ? '✓' : '!'}
        </span>

        <h3 id="contact-popup-title">
          {status === 'success'
            ? 'Message sent successfully!'
            : 'Message could not be sent'}
        </h3>

        <p>
          {status === 'success'
            ? "Thank you for reaching out. I'll get back to you shortly."
            : 'Something went wrong. Please try again in a moment.'}
        </p>

        <button
          type="button"
          className="contact-popup-button"
          onClick={() => {
            if (status === 'success') {
              window.location.href = '/#home'
            } else {
              setStatus('idle')
            }
          }}
        >
          {status === 'success' ? 'Back to portfolio' : 'Try again'}
        </button>
      </div>
    </div>
  )}
    </section>
  )
}