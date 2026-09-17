import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cursor from './Cursor'
import CookieBanner from './CookieBanner'
import { initLenis } from './animations'
import './IconographyCaseStudy.css'
import './VideoTestCaseStudy.css'

const META = [
  { label: 'Type',    value: 'Video Test' },
  { label: 'File',    value: 'Sequence 01.mp4' },
  { label: 'Status',  value: 'In Progress' },
  { label: 'Format',  value: 'MP4' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.cs-reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cs-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
}

export default function VideoTestCaseStudy() {
  const navigate = useNavigate()
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
    initLenis()
  }, [])

  return (
    <>
      <Cursor />
      <CookieBanner />
      <div className="cs-shell">

        {/* Header */}
        <header className="cs-header">
          <a href="/" className="logo" aria-label="Drew Design Studio"
            onClick={e => { e.preventDefault(); navigate('/') }}>
            <img src="/logo.png" alt="DREW." className="logo-img" />
          </a>
          <button className="cs-home-btn" onClick={() => navigate('/')} aria-label="Back to home">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>
        </header>

        {/* Hero */}
        <section className="cs-hero">
          <div className="cs-hero-top">
            <span className="cs-hero-label">Video Test</span>
            <h1 className="cs-hero-title">
              <span className="cs-hero-line">
                <span className="cs-hero-line-inner">Sequence 01</span>
              </span>
            </h1>
          </div>
          <div className="cs-hero-meta">
            {META.map(m => (
              <div className="cs-hero-meta-item" key={m.label}>
                <span>{m.label}</span>
                <strong>{m.value}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* Controlled playback */}
        <section className="cs-section vt-video-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Playback</span>
            <h2>Watch it<br />play.</h2>
          </div>
          <div className="vt-video-wrap cs-reveal">
            <video src="/Sequence%2001.mp4" controls playsInline />
          </div>
        </section>

        {/* Autoplay loop */}
        <section className="cs-section vt-loop-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Loop</span>
            <h2>Running<br />on loop.</h2>
          </div>
          <div className="vt-loop-wrap cs-reveal">
            <video src="/Sequence%2001.mp4" autoPlay loop muted playsInline />
          </div>
        </section>

      </div>
    </>
  )
}
