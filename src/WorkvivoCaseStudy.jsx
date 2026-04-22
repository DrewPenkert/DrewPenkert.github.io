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
              <h2>One pager.<br />One week.</h2>
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

        {/* Understanding the brief */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">The Process</span>
            <h2>Understanding<br />the brief.</h2>
          </div>
          <div className="wv-grid-4 cs-reveal">
            <div className="wv-grid-img"><img src="/sticky%20note.webp" alt="Brief questions sticky note" /></div>
            <div className="wv-grid-img"><img src="/notebook-updated.png" alt="Layout notebook sketches" /></div>
          </div>
          <p className="wv-caption cs-reveal">Unpacking the brief before touching any software. Key questions around tone, clichés and brand boundaries set the direction for the entire project.</p>
        </section>

        {/* Initial Concepts */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">The Process</span>
            <h2>Initial<br />concepts.</h2>
          </div>
          <div className="wv-grid-6 cs-reveal">
            <div className="wv-grid-img"><img src="/cover_iterating_.png" alt="Cover iteration" /></div>
            {[1,3,4,5,6].map(i => (
              <div className="wv-grid-img" key={i}>
                <img src={`/wv-iteration-${i}.png`} alt={`Iteration ${i}`} />
              </div>
            ))}
          </div>
          <p className="wv-caption cs-reveal">Explored bold W lockups, from serif to fluid forms. Illustration experiments helped surface the celebratory tone before committing.</p>
        </section>

        {/* Flat Draft */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">The Process</span>
            <h2>The flat<br />draft.</h2>
          </div>
          <div className="wv-grid-4 cs-reveal">
            {[1,2,3,4].map(i => (
              <div className="wv-grid-img" key={i}>
                <img src={`/Flat%20draft${i}.png`} alt={`Flat draft ${i}`} />
              </div>
            ))}
          </div>
          <p className="wv-caption cs-reveal">Pages from the initial draft. Feedback pointed toward needing more energy, pushing beyond the purple-heavy palette toward bolder, more expressive visuals.</p>
        </section>

        {/* Final Outcome */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Final Outcome</span>
            <h2>Final<br />outcome.</h2>
          </div>
          <div className="wv-final-img cs-reveal">
            <img src="/final%20outcome%20wv.png" alt="Workvivo final outcome" />
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
