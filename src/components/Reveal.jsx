import { useEffect, useRef } from 'react'

export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed')
      return
    }

    let fallbackTimer

    const reveal = () => {
      el.classList.add('revealed')
      observer?.disconnect()
      clearTimeout(fallbackTimer)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal()
        }
      },
      {
        threshold: 0,
        rootMargin: '0px',
      }
    )

    observer.observe(el)

    // Prevent content from remaining invisible indefinitely.
    fallbackTimer = window.setTimeout(reveal, 2500)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}