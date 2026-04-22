import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cursor from './Cursor'
import CookieBanner from './CookieBanner'
import { initLenis } from './animations'
import './IconographyCaseStudy.css'
import './FairhillCaseStudy.css'

const META = [
  { label: 'Client',   value: 'Fairhill Fairfield Community Association' },
  { label: 'Project',  value: 'Brand Identity' },
  { label: 'Timeline', value: 'January – May 2022' },
]

// Add filenames to public/ then list them here
const OUTCOME_IMAGES = [
  // { src: '/fairhill-outcome-1.jpg', alt: 'The Logo' },
  // { src: '/fairhill-outcome-2.jpg', alt: 'Colours' },
  // { src: '/fairhill-outcome-3.jpg', alt: 'Brand Applications' },
  // { src: '/fairhill-outcome-4.jpg', alt: 'Website' },
  // { src: '/fairhill-outcome-5.jpg', alt: 'Social Media Posts' },
  // { src: '/fairhill-outcome-6.jpg', alt: 'Facebook' },
  // { src: '/fairhill-outcome-7.jpg', alt: 'Instagram' },
  // { src: '/fairhill-outcome-8.jpg', alt: 'Final' },
]

const NEXT_PROJECT = {
  title: 'Workvivo AI',
  category: 'Brand Identity',
  image: '/workvivo.png',
  slug: '/workvivo',
}

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

export default function FairhillCaseStudy() {
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
          <a href="/" className="logo" aria-label="Drew Penkert"
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
        <section className="cs-hero fh-hero">
          <div className="fh-hero-top">
            <div>
              <span className="cs-hero-label">Case Study</span>
              <h1 className="cs-hero-title">
                <span className="cs-hero-line">
                  <span className="cs-hero-line-inner">Fairhill</span>
                </span>
                <span className="cs-hero-line">
                  <span className="cs-hero-line-inner">Fairfield.</span>
                </span>
              </h1>
              <p className="fh-subtitle">Community Association</p>
            </div>
          </div>

          <div className="cs-hero-meta">
            {META.map(m => (
              <div className="cs-hero-meta-item" key={m.label}>
                <span>{m.label}</span>
                <strong>{m.value}</strong>
              </div>
            ))}
          </div>

          {/* Hero image — add to public/ */}
          <div className="cs-hero-image cs-reveal fh-placeholder">
            <span>Hero / cover image</span>
          </div>
        </section>

        {/* Overview */}
        <section className="cs-section cs-intro">
          <div className="cs-intro-inner">
            <div className="cs-section-head cs-reveal">
              <span className="cs-section-label">Overview</span>
              <h2>Building a brand<br />for community.</h2>
            </div>
            <div className="cs-intro-body">
              <p className="cs-reveal">
                Overview copy goes here — the brief, the client and what the project set out to achieve.
              </p>
            </div>
          </div>
        </section>

        {/* Phase One */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Phase One</span>
            <h2>Getting to know<br />our client.</h2>
          </div>

          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 01</span>
              <h3>Research and discovery.</h3>
              <p>Understanding the community, their values and what the brand needed to communicate.</p>
            </div>
            <div className="fh-phase-image fh-placeholder">
              <span>Research / sticky notes image</span>
            </div>
          </div>

          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 02</span>
              <h3>Mood board and direction.</h3>
              <p>Establishing the visual tone — playful, community-driven, approachable.</p>
            </div>
            <div className="fh-phase-image fh-placeholder">
              <span>Mood board image</span>
            </div>
          </div>
        </section>

        {/* Phase Two */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Phase Two</span>
            <h2>The brand<br />iterations.</h2>
          </div>

          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 03</span>
              <h3>Logo development.</h3>
              <p>Exploring letterform directions, colour pairings and logo lockups across multiple rounds.</p>
            </div>
            <div className="fh-phase-image fh-placeholder">
              <span>Logo iterations image</span>
            </div>
          </div>

          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 04</span>
              <h3>Refining and presenting.</h3>
              <p>Narrowing to a final direction and presenting three refined options to the client.</p>
            </div>
            <div className="fh-phase-image fh-placeholder">
              <span>Refinement image</span>
            </div>
          </div>
        </section>

        {/* Final Outcomes — full-width image stack */}
        <section className="cs-section fh-outcomes-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Final Outcomes</span>
            <h2>Final<br />outcomes.</h2>
          </div>

          {OUTCOME_IMAGES.length > 0 ? (
            <div className="fh-outcomes-stack">
              {OUTCOME_IMAGES.map((img, i) => (
                <div className="fh-outcome-img cs-reveal" key={i}>
                  <img src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          ) : (
            <div className="fh-outcomes-stack">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div className="fh-outcome-img fh-placeholder cs-reveal" key={i}>
                  <span>Outcome image {i}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Next Project */}
        <section className="cs-section cs-next">
          <span className="cs-section-label cs-reveal">Next Project</span>
          <div
            className="cs-next-card cs-reveal"
            onClick={() => navigate(NEXT_PROJECT.slug)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate(NEXT_PROJECT.slug)}
          >
            <div className="cs-next-image">
              <img src={NEXT_PROJECT.image} alt={NEXT_PROJECT.title} />
            </div>
            <div className="cs-next-meta">
              <span className="cs-next-category">{NEXT_PROJECT.category}</span>
              <h3>{NEXT_PROJECT.title}</h3>
              <span className="cs-next-arrow" aria-hidden="true">→</span>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
