import { useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Cursor from './Cursor'
import CookieBanner from './CookieBanner'
import { initLenis } from './animations'
import './IconographyCaseStudy.css'
import './KonnectCaseStudy.css'

const META = [
  { label: 'Company',  value: 'Keelvar' },
  { label: 'Industry', value: 'B2B SaaS / Procurement' },
  { label: 'Role',     value: 'Social, Video, iPosters, Deck' },
  { label: 'Timeline', value: 'Under 2 weeks' },
]

const BRIEF_ITEMS = [
  {
    title: 'Social Assets',
    body: 'Speaker spotlights, announcements, a sold out card, and a post-event thank you. Templates built to be reused for every future event.',
  },
  {
    title: 'Vertical Video',
    body: 'A 9:16 hype video for LinkedIn ahead of Konnect. Built to generate momentum and had to work without sound.',
  },
  {
    title: 'Pitch Screen Video',
    body: 'The event video played on the main stage. Specific frame rates and export dimensions were required to match the venue playback system.',
  },
  {
    title: 'iPosters',
    body: 'Digital posters for on-site screens and event displays. Getting the dimensions and DPI right was the key challenge.',
  },
  {
    title: 'Master Deck Slides',
    body: 'Slide templates and event-specific builds for the Konnect presentation deck. Built for a stage, not a browser.',
  },
]

const NEXT_PROJECT = {
  title: 'Motion Design',
  category: 'Video & Animation',
  image: '/Motion%20Design%20case%20study%20.png',
  slug: '/motion-design',
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

export default function KonnectCaseStudy() {
  const navigate = useNavigate()
  const finalVideoRef = useRef(null)
  const phoneVideoRef = useRef(null)

  const handlePhoneTap = useCallback(() => {
    const vid = phoneVideoRef.current
    if (!vid) return
    if (vid.requestFullscreen) vid.requestFullscreen()
    else if (vid.webkitEnterFullscreen) vid.webkitEnterFullscreen()
  }, [])
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
    initLenis()
  }, [])

  const scrollToFinalVideo = () => {
    finalVideoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

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
            <span className="cs-hero-label">Case Study</span>
            <h1 className="cs-hero-title">
              <span className="cs-hero-line">
                <span className="cs-hero-line-inner">Konnect 2026</span>
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
            <div className="cs-hero-meta-item cs-hero-stat">
              <span>Output</span>
              <strong>Social + Video + Deck</strong>
            </div>
          </div>
          <div className="cs-hero-image cs-reveal">
            <img src="/Keelvar_Konnect_2026_D2_137.jpg" alt="Keelvar Konnect 2026" />
          </div>
        </section>

        {/* Overview */}
        <section className="cs-section cs-intro">
          <div className="cs-intro-inner">
            <div className="cs-section-head cs-reveal">
              <span className="cs-section-label">Overview</span>
              <h2>Event design.<br />Start to finish.</h2>
            </div>
            <div className="cs-intro-body">
              <p className="cs-reveal">
                Keelvar Konnect is the company's flagship field event. The goal was to elevate the brand for the occasion, bring a fresh creative angle, and coordinate with the external agency to make sure every digital asset landed at Croke Park on time. My scope started with an intern brief covering social media assets, then expanded into video, iPosters for on-site screens, and slides for the master Konnect deck.
              </p>
              <p className="cs-reveal">
                Everything was built as a template. Designed for Konnect 2026, adopted and used live, and built so the team can fill them in for any future event or speaker without starting from scratch.
              </p>
              <p className="cs-reveal">
                The challenge across all of it was keeping everything <strong>consistent but not repetitive.</strong> Same event, same brand, five different formats.
              </p>
            </div>
          </div>
        </section>

        {/* Brief */}
        <section className="cs-section cs-vision">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">The Brief</span>
            <h2>Five formats.<br />One event.</h2>
          </div>
          <div className="kn-brief-cards">
            {BRIEF_ITEMS.map((b, i) => (
              <div className="cs-vision-card cs-reveal" key={i}>
                <span className="cs-vision-num">0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social — event posts */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Social Templates</span>
            <h2>Built once.<br />Used every time.</h2>
          </div>
          <p className="cs-iterations-intro cs-reveal">
            The social assets were designed as reusable templates from the start. Fireside chat announcements, meet-the-speaker cards, post-event thank yous. Each one built so the next person only needs to swap the content, not rebuild the design.
          </p>

          <div className="kn-mosaic cs-reveal">
            <div className="kn-mosaic-item kn-mosaic-item--speakers">
              <img src="/NEEW%20SPEAKERS.jpg" alt="Speaker card" />
            </div>
            <div className="kn-mosaic-item kn-mosaic-item--spotlight">
              <img src="/Spotlight%20post.png" alt="Spotlight post" />
            </div>
            <div className="kn-mosaic-item kn-mosaic-item--templates">
              <img src="/TEMPLATES.png" alt="Social templates" />
            </div>
            <div className="kn-mosaic-item kn-mosaic-item--soldout">
              <img src="/Sold%20Out%20Light.jpg" alt="Sold out" />
            </div>
            <div className="kn-mosaic-item kn-mosaic-item--thanks">
              <img src="/Thanks%20for%20joining.png" alt="Thanks for joining" />
            </div>
          </div>

          {/* Stats */}
          <p className="kn-impact-title cs-reveal">Results of KK social media graphics, June 1–22</p>
          <div className="kn-impact cs-reveal">
            <div className="kn-ring-item">
              <div className="kn-ring-wrap">
                <svg viewBox="0 0 160 160" className="kn-ring" aria-hidden="true">
                  <circle cx="80" cy="80" r="60" fill="none" stroke="#ece8df" strokeWidth="14" />
                  <circle cx="80" cy="80" r="60" fill="none" stroke="var(--accent)" strokeWidth="14"
                    strokeDasharray="376.99" strokeLinecap="round"
                    className="kn-ring-arc kn-ring-arc--full"
                    transform="rotate(-90 80 80)" />
                </svg>
                <div className="kn-ring-inner">
                  <span className="kn-ring-val">+200%</span>
                </div>
              </div>
              <span className="kn-ring-label">Reposts</span>
            </div>
            <div className="kn-ring-item">
              <div className="kn-ring-wrap">
                <svg viewBox="0 0 160 160" className="kn-ring" aria-hidden="true">
                  <circle cx="80" cy="80" r="60" fill="none" stroke="#ece8df" strokeWidth="14" />
                  <circle cx="80" cy="80" r="60" fill="none" stroke="var(--accent)" strokeWidth="14"
                    strokeDasharray="376.99" strokeLinecap="round"
                    className="kn-ring-arc kn-ring-arc--90"
                    transform="rotate(-90 80 80)" />
                </svg>
                <div className="kn-ring-inner">
                  <span className="kn-ring-val">+90%</span>
                </div>
              </div>
              <span className="kn-ring-label">Reactions</span>
            </div>
            <div className="kn-ring-item">
              <div className="kn-ring-wrap">
                <svg viewBox="0 0 160 160" className="kn-ring" aria-hidden="true">
                  <circle cx="80" cy="80" r="60" fill="none" stroke="#ece8df" strokeWidth="14" />
                  <circle cx="80" cy="80" r="60" fill="none" stroke="var(--accent)" strokeWidth="14"
                    strokeDasharray="376.99" strokeLinecap="round"
                    className="kn-ring-arc kn-ring-arc--24"
                    transform="rotate(-90 80 80)" />
                </svg>
                <div className="kn-ring-inner">
                  <span className="kn-ring-val">+24%</span>
                </div>
              </div>
              <span className="kn-ring-label">Impressions</span>
            </div>
          </div>
        </section>

        {/* Vertical video */}
        <section className="cs-section">
          <div className="kn-vertical-layout">
            <div className="kn-vertical-text">
              <div className="cs-section-head cs-reveal">
                <span className="cs-section-label">LinkedIn Video</span>
                <h2>Built for<br />the scroll.</h2>
              </div>
              <p className="cs-iterations-intro cs-reveal">
                A hype video made for LinkedIn ahead of Konnect. Built to generate momentum and get people excited before the event, not a formal recap.
              </p>
            </div>
            <div className="kn-phone-wrap cs-reveal" style={{ flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div className="kn-phone">
                <div className="kn-phone-screen" onClick={handlePhoneTap}>
                  <video ref={phoneVideoRef} src="/V1%20KEELVAR%20PROMO%20DUB%2026.mp4" autoPlay loop muted playsInline />
                </div>
              </div>
              <span className="kn-phone-pill">Tap to watch full screen</span>
            </div>
          </div>
        </section>

        {/* iPosters */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">iPosters</span>
            <h2>On-site.<br />On screen.</h2>
          </div>
          <p className="cs-iterations-intro cs-reveal">
            Designed for the event screens at Konnect. The main challenge was colour — what looked right on screen did not translate to the live displays, so the values had to be iterated until they held up on the actual hardware.
          </p>
          <div className="kn-iposter-grid">
            <div className="kn-iposter-item cs-reveal">
              <img src="/IMG_4852.jpg" alt="iPoster at event" />
            </div>
            <div className="kn-iposter-item cs-reveal">
              <img src="/IMG_4830.jpeg" alt="iPoster at event" />
            </div>
            <div className="kn-iposter-item cs-reveal">
              <img src="/IMG_4817.jpeg" alt="iPoster at event" />
            </div>
          </div>
        </section>

        {/* Slide deck */}
        <section className="cs-section">
          <div className="kn-deck-head cs-reveal">
            <div className="cs-section-head">
              <span className="cs-section-label">Master Deck</span>
              <h2>Built for<br />the stage.</h2>
            </div>
            <div className="kn-deck-stats">
              <div className="kn-deck-stat">
                <strong>80+</strong>
                <span>slides</span>
              </div>
              <div className="kn-deck-stat">
                <strong>3</strong>
                <span>days</span>
              </div>
            </div>
          </div>
          <p className="cs-iterations-intro cs-reveal">
            The deck was the biggest challenge. Content landed in my hands right before it went on screen, so I built a system of holding slides and a consistent graphic structure that could flex around whatever came in last minute. Translating from Pitch to PPTX for the venue broke a lot of the design work. Big learning: lock the format and export pipeline from day one.
          </p>
          <div className="kn-deck-grid cs-reveal">
            <div className="kn-deck-item">
              <img src="/deck-slide-3.png" alt="Deck slide" />
            </div>
            <div className="kn-deck-item">
              <img src="/deck-slide-4.png" alt="Deck slide" />
            </div>
            <div className="kn-deck-item">
              <img src="/deck-slide-1.png" alt="Deck slide" />
            </div>
            <div className="kn-deck-item">
              <img src="/deck-slide-2.png" alt="Deck slide" />
            </div>
          </div>
        </section>

        {/* Landscape cut */}
        <section className="cs-section">
          <div className="kn-play-cta cs-reveal">
            <span className="kn-play-label">Final output</span>
            <div
              className="kn-play-word"
              onClick={scrollToFinalVideo}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && scrollToFinalVideo()}
            >
              Play
            </div>
            <p className="kn-play-sub">A video capturing some of the outcomes from both days.</p>
          </div>
          <div className="kn-landscape-wrap cs-reveal" ref={finalVideoRef}>
            <video src="/Sequence%2001.mp4" autoPlay loop muted playsInline />
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
