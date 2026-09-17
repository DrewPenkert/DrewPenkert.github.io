import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cursor from './Cursor'
import CookieBanner from './CookieBanner'
import { initLenis } from './animations'
import './AboutPage.css'

export default function AboutPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    initLenis()
  }, [])

  return (
    <>
      <Cursor />
      <CookieBanner />
      <div className="about-page">

        <header className="about-page-header">
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
        <section className="about-page-hero">
          <div className="about-page-image-wrap">
            <img src="/IMG_5011.jpg" alt="Drew Penkert" />
          </div>
          <div className="about-page-hero-text">
            <span className="about-page-kicker">About</span>
            <h1 className="about-page-title">About<br />me.</h1>
            <p className="about-page-intro">
              From pipe cleaners and glue to a Mac and Illustrator. The tools changed, the drive never did.
            </p>
          </div>
        </section>

        {/* Journey */}
        <div className="about-page-body">
          <aside className="about-page-nav">
            <span>The story</span>
          </aside>

          <div className="about-page-copy">

            <div className="about-chapter">
              <span className="about-chapter-label">The beginning</span>
              <h2>Always hands on.</h2>
              <p>
                Growing up I was always making something. From pipe cleaners and glue to a Mac and Illustrator, I have always had a passion for craft and design. That curiosity turned into direction when I studied Visual Communications at MTU, graduating with a 1:1 honours.
              </p>
            </div>

            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-num">1:1</span>
                <span className="about-stat-label">MTU Visual Comms</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">1yr+</span>
                <span className="about-stat-label">Freelance at Workvivo</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">5+</span>
                <span className="about-stat-label">Disciplines</span>
              </div>
            </div>

            <div className="about-chapter about-chapter--split">
              <div className="about-chapter-text">
                <span className="about-chapter-label">Freelance, 2024 to 2025</span>
                <h2>Workvivo by Zoom.</h2>
                <p>
                  After graduating I spent just over a year freelancing with Workvivo by Zoom. Brand work, digital assets, social content. It was the first time my work was operating at real scale, inside a product used by millions of people.
                </p>
              </div>
              <div className="about-chapter-image">
                <img src="/IMG_5010.jpg" alt="Workvivo" />
              </div>
            </div>

            <div className="about-chapter">
              <span className="about-chapter-label">Joining Keelvar</span>
              <h2>Expanding the skillset.</h2>
              <p>
                Joining Keelvar pushed me into new territory: UI/UX basics, illustration, motion design. The designer in me re-emerged and found a bigger surface to work on. That led to the opportunity to design for Croke Park and Keelvar Konnect 2026, a project that pulled every discipline together.
              </p>
            </div>

            <div className="about-chapter">
              <span className="about-chapter-label">Now</span>
              <h2>Design that drives results.</h2>
              <p>
                I went beyond the brief, independently sourcing and setting up in house interview video production, from planning shoots to a full Premiere Pro and After Effects edit workflow. Alongside that I picked up brand guardianship and event and campaign design, upskilling fast across production, creative direction and systems well beyond where I started.
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}
