import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Cursor from './Cursor'
import { initLenis } from './animations'
import './IconographyCaseStudy.css'
import './MotionDesignCaseStudy.css'

const META = [
  { label: 'Company',  value: 'Keelvar' },
  { label: 'Industry', value: 'B2B SaaS / Procurement' },
  { label: 'Duration', value: 'March – April 2026' },
  { label: 'Role',     value: '8 weeks into internship' },
]

const BRIEF = [
  {
    title: 'Promote the Product',
    body: 'Create a compelling product story that communicates the intelligence behind Keelvar\'s AI agents to enterprise procurement leads.',
  },
  {
    title: 'Match the Brand',
    body: 'Every frame needed to align with Keelvar\'s visual system. Serious, modern, and clean. No visual drift from the existing design language.',
  },
  {
    title: 'Move Quickly',
    body: 'One week from brief to final export. No extended iteration cycles. Clear decisions, fast execution, first-pass approvals.',
  },
]

const STORYBOARD_FRAMES = [
  { scene: '01', label: 'Opening',  description: 'Keelvar wordmark fades in on a clean background. The problem framed in type.' },
  { scene: '02', label: 'Problem',  description: 'Manual procurement fragmented, slow, and riddled with human error.' },
  { scene: '03', label: 'Solution', description: 'AI agents introduced as the answer. Fluid motion, structured grid.' },
  { scene: '04', label: 'Product',  description: 'Platform UI animated in. Key workflows highlighted with precision.' },
  { scene: '05', label: 'Outcome',  description: 'Results. Faster cycles, less friction. The numbers land.' },
  { scene: '06', label: 'Close',    description: 'Keelvar mark returns. Call to action. Clean fade out.' },
]

const TIMELINE = [
  {
    date: 'March 14th',
    title: 'Brief landed. One week to ship.',
    body: 'No templates, no precedent. Build a motion piece that tells the Keelvar product story end-to-end from scratch.',
  },
  {
    date: 'March 15th',
    title: 'Storyboard approved on first pass.',
    body: 'Six scenes drafted covering the full narrative arc: problem, product, outcome. Senior team approved with no revisions required.',
  },
  {
    date: 'March 17th',
    title: 'First motion draft reviewed.',
    body: 'Timing and transitions locked in After Effects. One brand colour inconsistency flagged. Fixed same day.',
  },
  {
    date: 'March 19th',
    title: 'Final render approved.',
    body: null,
  },
  {
    date: 'March 21st',
    title: 'Delivered.',
    body: null,
    final: true,
  },
]

const NEXT_PROJECT = {
  title: 'Iconography',
  category: 'Print & Digital',
  image: '/iconography.png',
  slug: '/work/iconography',
}

/* ── Draggable film strip ── */
function FilmStrip() {
  const stripRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - stripRef.current.offsetLeft
    scrollLeft.current = stripRef.current.scrollLeft
    stripRef.current.style.cursor = 'grabbing'
  }

  const onUp = () => {
    isDragging.current = false
    if (stripRef.current) stripRef.current.style.cursor = 'grab'
  }

  const onMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - stripRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    stripRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <div
      className="md-filmstrip"
      ref={stripRef}
      onMouseDown={onDown}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onMouseMove={onMove}
    >
      <div className="md-filmstrip-holes">
        {Array.from({ length: 24 }).map((_, i) => <span key={i} className="md-hole" />)}
      </div>
      <div className="md-filmstrip-frames">
        {STORYBOARD_FRAMES.map((frame, i) => (
          <div className="md-frame" key={i}>
            <span className="md-frame-scene">{frame.scene}</span>
            <p className="md-frame-label">{frame.label}</p>
            <p className="md-frame-desc">{frame.description}</p>
          </div>
        ))}
      </div>
      <div className="md-filmstrip-holes">
        {Array.from({ length: 24 }).map((_, i) => <span key={i} className="md-hole" />)}
      </div>
    </div>
  )
}

/* ── Scroll reveal ── */
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

/* ── Page ── */
export default function MotionDesignCaseStudy() {
  const navigate = useNavigate()
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
    initLenis()
  }, [])

  return (
    <>
      <Cursor />
      <div className="cs-shell">

        {/* ── Header ── */}
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

        {/* ── Hero ── */}
        <section className="cs-hero">
          <div className="cs-hero-top">
            <span className="cs-hero-label">Case Study</span>
            <h1 className="cs-hero-title">
              <span className="cs-hero-line">
                <span className="cs-hero-line-inner">Motion Design</span>
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
              <span>Outcome</span>
              <strong>Shipped Mar 21st</strong>
            </div>
          </div>

          <div className="cs-hero-image cs-reveal">
            <img src="/Motion%20Design%20case%20study%20.png" alt="Motion Design project" />
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="cs-section cs-intro">
          <div className="cs-intro-inner">
            <div className="cs-section-head cs-reveal">
              <span className="cs-section-label">Overview</span>
              <h2>Making the product<br />move.</h2>
            </div>
            <div className="cs-intro-body">
              <p className="cs-reveal">
                Keelvar is an AI-powered procurement platform helping enterprise teams automate complex negotiations and supplier decisions. Eight weeks into my internship, I was handed a motion design brief with no templates and a one-week deadline.
              </p>
              <p className="cs-reveal">
                The task was to create a <strong>product story video</strong> that could sit in a sales deck, play at a trade event, or land on a landing page. It had to communicate what Keelvar's AI agents actually do in under two minutes.
              </p>
              <p className="cs-reveal">
                Storyboard approved on first pass. Draft reviewed and corrected same day. <strong>Final render delivered March 21st.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ── The Brief ── */}
        <section className="cs-section cs-vision">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">The Brief</span>
            <h2>Three goals.<br />One week.</h2>
          </div>
          <div className="cs-vision-cards">
            {BRIEF.map((b, i) => (
              <div className="cs-vision-card cs-reveal" key={i}>
                <span className="cs-vision-num">0{i + 1}</span>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Storyboard ── */}
        <section className="cs-section cs-iterations">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Storyboard</span>
            <h2>Six scenes.<br />One story.</h2>
          </div>
          <p className="cs-iterations-intro cs-reveal">
            The narrative arc was mapped before a single frame was animated. Drag the strip to scrub through it.
          </p>
          <FilmStrip />
        </section>

        {/* ── Iterations ── */}
        <section className="cs-section cs-revision">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Iterations</span>
            <h2>Four drafts.<br />One direction.</h2>
          </div>
          <div className="md-video-grid">
            {[
              { src: '/video%201.mov',  label: 'Draft 01' },
              { src: '/Video%202.mp4',  label: 'Draft 02' },
              { src: '/video%203.mp4',  label: 'Draft 03' },
              { src: '/video%204.mp4',  label: 'Draft 04' },
            ].map((v, i) => (
              <div className="md-video-item cs-reveal" key={i}>
                <div className="md-video-wrap">
                  <video src={v.src} autoPlay loop muted playsInline />
                </div>
                <span className="md-video-label">{v.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="cs-section cs-timeline-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Timeline</span>
            <h2>One week.<br />Five milestones.</h2>
          </div>
          <div className="cs-timeline">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className={`cs-timeline-item cs-reveal${item.final ? ' cs-timeline-final' : ''}`}
              >
                <div className="cs-timeline-marker">
                  <div className="cs-timeline-dot" />
                  <span className="cs-timeline-date">{item.date}</span>
                </div>
                <div className="cs-timeline-content">
                  <p className="cs-timeline-title">{item.title}</p>
                  {item.body && <p className="cs-timeline-body">{item.body}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Play CTA */}
          <div className="md-play-cta cs-reveal">
            <span className="md-play-label">Final output</span>
            <div className="md-play-word">Play</div>
            <p className="md-play-sub">The finished motion piece. A product story for Keelvar's AI procurement agents.</p>
            <div className="md-final-video cs-reveal">
              <video src="/final%20video.mp4" controls playsInline />
            </div>
          </div>
        </section>

        {/* ── Next Project ── */}
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
