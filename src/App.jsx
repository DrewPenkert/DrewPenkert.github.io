import { useEffect, useState } from 'react'
import './App.css'
import Cursor from './Cursor'
import { initLenis, initScrollAnimations } from './animations'

const PROJECTS = [
  { title: 'Good Enough',              category: 'Brand Identity',   image: '/Good%20Enough.png'                      },
  { title: 'Workvivo AI',              category: 'Brand Identity',   image: '/workvivo.png'                           },
  { title: 'Fairhill/Fairfield',       category: 'Editorial Design', image: '/Fairhill%20Fairfield%20Rebrand.png'     },
  { title: 'Iconography',              category: 'Print & Digital',  image: '/iconography.png'                        },
  { title: 'Motion Design Case Study', category: 'Motion Design',    image: '/Motion%20Design%20case%20study%20.png'  },
]

const MARQUEE = ['Brand Identity', 'Editorial Design', 'Print & Digital', 'Social Media', 'Visual Systems', 'Motion Design']

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    initLenis()
    initScrollAnimations()
  }, [])

  // close menu on nav click
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <Cursor />

      {/* ── Full-screen menu overlay ── */}
      <div className={`nav-overlay ${menuOpen ? 'is-open' : ''}`}>
        <nav className="nav-overlay-links">
          <a href="#about"   onClick={closeMenu}>About</a>
          <a href="#work"    onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>

      <div className="app-shell">

        {/* ── Header ── */}
        <header className="site-header">
          <a href="/" className="logo" aria-label="Drew Design Studio">
            <img src="/logo.png" alt="DREW." className="logo-img" />
          </a>
          <button
            className={`menu-btn ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </header>

        <main>
          {/* ── Hero ── */}
          <section className="hero-section">
            <h1 className="hero-headline">
              <span className="hero-line">
                <span className="hero-line-inner">We are Drew</span>
              </span>
              <span className="hero-line">
                <span className="hero-line-inner">Design Studio.</span>
              </span>
            </h1>

            <div className="hero-body">
              <p className="hero-intro">
                Fuelled by ambition, productive procrastination and a strong coffee.
              </p>
              <a href="#work" className="hero-cta">
                View work <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Scrolling marquee ticker */}
            <div className="hero-marquee" aria-hidden="true">
              <div className="marquee-track">
                {[...MARQUEE, ...MARQUEE].map((item, i) => (
                  <span key={i}>{item} <em>◦</em></span>
                ))}
              </div>
            </div>
          </section>

          {/* ── About ── */}
          <section className="section about" id="about">
            <div className="about-grid">
              <div className="about-right">
                <div className="section-head">
                  <span className="section-label">About</span>
                  <h2>Hello, I'm Drew Penkert.</h2>
                </div>
                <div className="about-copy">
                  <p>
                    Junior Graphic Designer based in Cork. I create memorable brand systems, editorial experiences and brand systems, motion, editorial design, and illustration with a playful edge and a polished finish.
                  </p>
                </div>
              </div>
              <div className="about-photo-wrap">
                <img src="/headshot.png" alt="Drew Penkert" className="about-photo" />
              </div>
            </div>
          </section>

          {/* ── Work ── */}
          <section className="section work" id="work">
            <div className="section-head">
              <span className="section-label">Work</span>
              <h2>Featured projects.</h2>
            </div>
            <div className="project-grid">
              {PROJECTS.map((p) => (
                <article className="project-item" key={p.title}>
                  <div className="project-visual-wrap">
                    <img src={p.image} alt={p.title} className="project-visual" />
                  </div>
                  <div className="project-meta">
                    <span className="project-category">{p.category}</span>
                    <h3>{p.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Contact ── */}
          <section className="section contact" id="contact">
            <div className="contact-panel">
              <div className="contact-content">
                <div className="contact-text">
                  <span className="section-label">Contact</span>
                  <p className="contact-tagline">From Farm to Figma...</p>
                  <h2>Let's work<br />together.</h2>
                </div>
                <a className="contact-email" href="mailto:drewpenkert@gmail.com">
                  drewpenkert@gmail.com
                </a>
                <div className="contact-socials">
                  <a href="https://www.linkedin.com/in/drewpenkert/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="4" />
                      <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
                    </svg>
                    LinkedIn
                  </a>
                  <a href="https://www.instagram.com/drew_penkert/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                    Instagram
                  </a>
                </div>
              </div>
              <div className="contact-image-wrap">
                <img src="/cabbage%20-08.png" alt="Drew Penkert" className="contact-cabbage" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
