import { useEffect } from 'react'
import cv from '../assets/Samuel-Asalu-CV.pdf'

export default function CVPreview({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="cv-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="cv-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cv-modal-title"
      >
    
        <header className="cv-modal-header">
            <div className="cv-modal-heading">
                <p className="cv-modal-eyebrow">Selected document</p>

                <h2 id="cv-modal-title">Samuel Asalu</h2>

                <p className="cv-modal-subtitle">
                    Full-Stack Developer · Curriculum Vitae
                </p>
            </div>

            <div className="cv-modal-actions">
                <a
                    href={cv}
                    download="Samuel-Asalu-CV.pdf"
                    className="cv-download-button"
                >
                <span>Download CV</span>
                <span className="cv-download-button-arrow" aria-hidden="true">
                    ↗
                </span>
                </a>


                <button
                    type="button"
                    className="cv-close-button"
                    onClick={onClose}
                    aria-label="Close CV preview"
                >
                    ×
                </button>
            </div>
        </header>

        <div className="cv-modal-body">
          <iframe
            src={cv}
            title="Preview of Samuel Asalu's CV"
            className="cv-pdf-viewer"
          />
        </div>
      </div>
    </div>
  )
}