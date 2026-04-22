import { useEffect, useState } from 'react'
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

const OUTCOME_IMAGES = [
  { src: '/fairhill%20fairfield%20portfolio-03.jpg', alt: 'Final outcomes' },
  { src: '/fairhill%20fairfield%20portfolio-04.jpg', alt: 'Final outcomes' },
  { src: '/fairhill%20fairfield%20portfolio-05.jpg', alt: 'Final outcomes' },
  { src: '/fairhill%20fairfield%20portfolio-06.jpg', alt: 'Final outcomes' },
  { src: '/fairhill%20fairfield%20portfolio-07.jpg', alt: 'Final outcomes' },
  { src: '/fairhill%20fairfield%20portfolio-08.jpg', alt: 'Final outcomes' },
  { src: '/fairhill%20fairfield%20portfolio-09.jpg', alt: 'Final outcomes' },
  { src: '/fairhill%20fairfield%20portfolio-10.jpg', alt: 'Final outcomes' },
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
  const [lightbox, setLightbox] = useState(null)
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
    initLenis()
  }, [])

  return (
    <>
      <Cursor />
      <CookieBanner />

      {lightbox && (
        <div className="fh-lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Expanded" />
        </div>
      )}

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
              <p className="fh-collab">A collaborative project with Marlene Borkert and Kate O'Riordan.</p>
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
            <img src="/fairhill%20fairfield%20portfolio-01.jpg" alt="Fairhill Fairfield cover" />
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
                Fairhill/Fairfield Community Centre, a non-profit community supporting families, based in the north of Cork were in need of a full rebrand and editorial system. The goal being to modernise their presence whilst remaining warm and approachable to connect to the local community.
              </p>
              <p className="cs-reveal">
                Constraints within this collaborative project included the wide range of print and digital touchpoints that needed to be considered whilst keeping the balance between professionalism and friendliness within the proposed designs.
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

          {/* Client research */}
          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 01</span>
              <h3>Research and discovery.</h3>
              <p>Understanding the community, their values and what the brand needed to communicate — from client interviews to mission statements.</p>
            </div>
            <div className="fh-phase-image fh-contain">
              <img src="/fh-client-research.png" alt="Getting to know the client" />
            </div>
          </div>

          {/* Target audience */}
          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 02</span>
              <h3>Defining the target audience.</h3>
              <p>Three distinct audience groups emerged: the broader Fairhill/Fairfield community, local youth, and families and adults. Each with different needs from the brand.</p>
            </div>
            <div className="fh-phase-image fh-contain">
              <img src="/fh-Target%20Audience.png" alt="Target audience" />
            </div>
          </div>

          {/* Personas */}
          <div className="fh-personas-section cs-reveal">
            <span className="cs-vision-num">Step 03</span>
            <h3>User personas.</h3>
            <p>Personas helped keep real community members at the centre of every design decision.</p>
            <div className="fh-personas-grid">
              {[
                { src: '/fh-persona-john.png', alt: 'John Murphy persona' },
                { src: '/fh-persona-kevin.png', alt: 'Kevin O\'Keeffe persona' },
              ].map((p, i) => (
                <div className="fh-persona-img fh-zoomable" key={i} onClick={() => setLightbox(p.src)} title="Click to expand">
                  <img src={p.src} alt={p.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* Moodboard */}
          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 04</span>
              <h3>Mood board and visual direction.</h3>
              <p>Establishing the visual tone. Playful, community-driven, approachable and inclusive.</p>
            </div>
            <div className="fh-phase-image fh-contain">
              <img src="/fh-moodboard.png" alt="Mood board" />
            </div>
          </div>
        </section>

        {/* Phase Two */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Phase Two</span>
            <h2>The brand<br />iterations.</h2>
          </div>

          {/* Character sketches */}
          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 05</span>
              <h3>Character development.</h3>
              <p>Exploring an illustration-led identity. Inclusive, neutral characters that could be replicated by any team member and represent the full community.</p>
            </div>
            <div className="fh-phase-image fh-contain">
              <img src="/fh-sketches.png" alt="Character sketches" />
            </div>
          </div>

          {/* Characters in colour + direction side by side */}
          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 06</span>
              <h3>Colour and illustration style.</h3>
              <p>Applying the brand palette to the character system. Testing how the figures work as patterns and individual assets across brand touchpoints.</p>
            </div>
            <div className="fh-two-images">
              <div className="fh-phase-image fh-contain">
                <img src="/fh-characters-colour.png" alt="Characters in colour" />
              </div>
              <div className="fh-phase-image fh-contain">
                <img src="/fh-logo-iterations-2.png" alt="Logo iterations" />
              </div>
            </div>
          </div>

          {/* Logo round 1 */}
          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 07</span>
              <h3>Logo exploration, round one.</h3>
              <p>First round of logo directions exploring the FAIR typographic treatment and HILL / FIELD stacking across several lockups.</p>
            </div>
            <div className="fh-phase-image fh-contain">
              <img src="/fh-logo-iteractions-1.png" alt="Logo iterations round one" />
            </div>
          </div>

          {/* Logo round 2 — final before outcomes */}
          <div className="fh-phase-step cs-reveal">
            <div className="fh-phase-meta">
              <span className="cs-vision-num">Step 08</span>
              <h3>Final direction.</h3>
              <p>Arriving at the final character-driven identity. A geometric illustration system that could work warmly and consistently across all print and digital formats.</p>
            </div>
            <div className="fh-phase-image fh-contain">
              <img src="/fh-direction.png" alt="Final direction" />
            </div>
          </div>
        </section>

        {/* Final Outcomes */}
        <section className="cs-section fh-outcomes-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Final Outcomes</span>
            <h2>Final<br />outcomes.</h2>
          </div>
          <div className="fh-outcomes-stack">
            {OUTCOME_IMAGES.map((img, i) => (
              <div className="fh-outcome-img cs-reveal" key={i}>
                <img src={img.src} alt={img.alt} />
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
