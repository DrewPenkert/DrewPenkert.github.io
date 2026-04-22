import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cursor from './Cursor'
import CookieBanner from './CookieBanner'
import { initLenis } from './animations'
import './IconographyCaseStudy.css'
import './WorkvivoCaseStudy.css'

const META = [
  { label: 'Client',   value: 'Workvivo' },
  { label: 'Project',  value: 'One Pager' },
  { label: 'Timeline', value: '25th–29th May 2023' },
  { label: 'Duration', value: '1 week project' },
]

const NEXT_PROJECT = {
  title: 'Good Enough',
  category: 'Brand Identity',
  image: '/Good%20Enough.png',
  slug: '/good-enough',
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

export default function WorkvivoCaseStudy() {
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
        <section className="cs-hero wv-hero">
          <div className="wv-hero-top">
            <div className="wv-hero-titles">
              <span className="cs-hero-label">Case Study</span>
              <h1 className="cs-hero-title">
                <span className="cs-hero-line">
                  <span className="cs-hero-line-inner">Workvivo</span>
                </span>
              </h1>
              <p className="wv-subtitle">One Pager</p>
            </div>
            <div className="wv-stat cs-reveal">
              <span className="wv-stat-num">25%</span>
              <span className="wv-stat-label">completion in first iteration</span>
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

          <div className="cs-hero-image cs-reveal">
            <img src="/wv-hero-01.png" alt="Workvivo One Pager" />
          </div>
        </section>

        {/* Overview */}
        <section className="cs-section cs-intro">
          <div className="cs-intro-inner">
            <div className="cs-section-head cs-reveal">
              <span className="cs-section-label">Overview</span>
              <h2>One page.<br />One week.</h2>
            </div>
            <div className="cs-intro-body">
              <p className="cs-reveal">
                A one-pager designed for Workvivo's two-year anniversary campaign. Working within a one-week timeline and strict brand guidelines, I explored how to make a corporate milestone feel genuinely celebratory without sliding into party clichés.
              </p>
              <p className="cs-reveal">
                The challenge was threading illustration and typography in a way that felt expressive but still credible for a B2B audience. Starting from bold logotype explorations, I iterated toward a purple-heavy, illustration-led layout that balanced Workvivo's visual identity with something worth stopping to read.
              </p>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="cs-section cs-vision">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">The Problem</span>
            <h2>Three constraints.<br />One shot.</h2>
          </div>
          <div className="cs-vision-cards">
            {[
              { title: 'Tone', body: 'Making a milestone feel exciting without losing B2B professionalism.' },
              { title: 'Brand within bounds', body: "Expressive illustration while staying locked to Workvivo's visual identity." },
              { title: '1 week, 1 shot', body: 'Concept to final delivery with a limited feedback loop.' },
            ].map((p, i) => (
              <div className="cs-vision-card cs-reveal" key={i}>
                <span className="cs-vision-num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Process */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">The Process</span>
            <h2>From brief<br />to flat.</h2>
          </div>

          {/* Step 01 */}
          <div className="wv-process-step cs-reveal">
            <div className="wv-process-meta">
              <span className="cs-vision-num">Step 01</span>
              <h3>Understanding the brief.</h3>
              <p>Unpacking the two-year milestone brief, the brand guidelines and what the one-pager needed to achieve for a B2B audience.</p>
            </div>
            <div className="wv-two-images">
              <div className="wv-process-image"><img src="/wv-iteration-1.png" alt="Iteration 1" /></div>
              <div className="wv-process-image"><img src="/wv-iteration-2.png" alt="Iteration 2" /></div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="wv-process-step cs-reveal">
            <div className="wv-process-meta">
              <span className="cs-vision-num">Step 02</span>
              <h3>Initial concepts and rethinks.</h3>
              <p>Early logotype explorations, type experiments and illustration-led concept directions.</p>
            </div>
            <div className="wv-two-images">
              <div className="wv-process-image"><img src="/wv-iteration-3.png" alt="Iteration 3" /></div>
              <div className="wv-process-image"><img src="/wv-iteration-4.png" alt="Iteration 4" /></div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="wv-process-step cs-reveal">
            <div className="wv-process-meta">
              <span className="cs-vision-num">Step 03</span>
              <h3>The flat draft.</h3>
              <p>Moving into Figma, refining the purple-heavy illustration-led layout toward a final deliverable.</p>
            </div>
            <div className="wv-two-images">
              <div className="wv-process-image"><img src="/wv-iteration-5.png" alt="Iteration 5" /></div>
              <div className="wv-process-image"><img src="/wv-iteration-6.png" alt="Iteration 6" /></div>
            </div>
          </div>
        </section>

        {/* Final Outcomes */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Final Outcomes</span>
            <h2>Final<br />outcomes.</h2>
          </div>
          <div className="wv-outcomes-grid cs-reveal">
            {/* Add outcome images here — replace placeholders */}
            {[1, 2, 3, 4].map(i => (
              <div className="wv-outcome-img wv-placeholder" key={i}>
                <span>Outcome {i}</span>
              </div>
            ))}
          </div>
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
