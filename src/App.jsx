import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import Cursor from './Cursor'
import CookieBanner from './CookieBanner'
import { initLenis, initScrollAnimations } from './animations'

const FEATURED = { title: 'Konnect 2026', category: 'Social · Video · Events', image: '/newer%20banner.png', slug: '/konnect' }

// Future: a video goes here, between the hero and "Featured projects" below.

const PROJECTS = [
  { title: 'Good Enough',              category: 'Brand Identity',            image: '/Good%20Enough.png', slug: '/good-enough' },
  { title: 'Workvivo 2 Year Anniversary', category: 'Freelance · Brand Identity', image: '/workvivo.png', slug: '/workvivo' },
  { title: 'Fairhill Fairfield Community Association', category: 'Editorial Design', image: '/Fairhill%20Fairfield%20Rebrand.png', slug: '/fairhill' },
  { title: 'Motion Design Case Study', category: 'Motion Design',             image: '/Motion%20Design%20case%20study%20.png', slug: '/motion-design' },
]

const ARCHIVE = [
  { title: 'Iconography', category: 'Print & Digital', image: '/iconography.png', slug: '/iconography' },
]

const MARQUEE = ['Brand Identity', 'Editorial Design', 'Print & Digital', 'Social Media', 'Visual Systems', 'Motion Design']

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    initLenis()
    initScrollAnimations()
  }, [])

  // close menu on nav click
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <Cursor />
      <CookieBanner />

      {/* ── Full-screen menu overlay ── */}
      <div className={`nav-overlay ${menuOpen ? 'is-open' : ''}`}>
        <nav className="nav-overlay-links">
          <a href="/about" onClick={e => { e.preventDefault(); closeMenu(); navigate('/about') }}>About</a>
          <a href="#work"    onClick={closeMenu}>Work</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="https://drive.google.com/file/d/1cSZeEvtMJJSweKUUSUK_C8lHPuoZd0b2/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>CV</a>
        </nav>
      </div>

      <button
        className={`menu-btn ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <div className="app-shell">

        {/* ── Header ── */}
        <header className="site-header">
        </header>

        <main>
          {/* ── Hero ── */}
          <section className="hero-section">
            <span className="hero-kicker">Graphic Designer</span>
            <h1 className="hero-headline">
              <span className="hero-line">
                <span className="hero-line-inner">DREW.</span>
              </span>
            </h1>

            <div className="hero-body">
              <p className="hero-intro">
                Fuelled by ambition and a strong coffee.
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
                  <h2>Hiya, I'm Drew Penkert.</h2>
                </div>
                <div className="about-copy">
                  <p>
                    Junior Graphic Designer based in Cork. I create memorable brand systems, editorial experiences.
                  </p>
                  <p>
                    Motion, print and illustration with a playful edge and a polished finish.
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
            {/* Featured project */}
            <article
              className="project-featured"
              onClick={() => navigate(FEATURED.slug)}
            >
              <div className="project-featured-banner">
                <img src={FEATURED.image} alt={FEATURED.title} />
              </div>
              <div className="project-meta">
                <span className="project-category">{FEATURED.category}</span>
                <h3>{FEATURED.title}</h3>
              </div>
            </article>

            <div className="project-grid">
              {PROJECTS.map((p) => (
                <article
                  className="project-item"
                  key={p.title}
                  onClick={p.slug ? () => navigate(p.slug) : undefined}
                  style={p.slug ? { cursor: 'pointer' } : undefined}
                >
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

          {/* ── Archive ── */}
          <section className="section archive">
            <div className="section-head">
              <span className="section-label">Archive</span>
            </div>
            <div className="archive-list">
              {ARCHIVE.map(p => (
                <article
                  className="archive-item"
                  key={p.title}
                  onClick={() => navigate(p.slug)}
                >
                  <div className="archive-thumb">
                    <img src={p.image} alt={p.title} />
                  </div>
                  <div className="archive-meta">
                    <span className="project-category">{p.category}</span>
                    <h3>{p.title}</h3>
                  </div>
                  <span className="archive-arrow">→</span>
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
                  <h2>Let's work<br />together.</h2>
                </div>
                <a className="contact-email" href="mailto:drewpenkert@gmail.com">
                  drewpenkert@gmail.com
                </a>
                <div className="contact-socials">
                  <a href="https://www.linkedin.com/in/drewpenkert/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://www.instagram.com/drew_penkert/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://drive.google.com/file/d/1cSZeEvtMJJSweKUUSUK_C8lHPuoZd0b2/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a>
                </div>
              </div>
              <div className="contact-image-wrap">
                <img src="/b-pic.png" alt="Drew Penkert" className="contact-bpic" />
                <p className="contact-bpic-label">Designer in the making since '01</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
