import { useEffect, useRef, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import Cursor from './Cursor'
import CookieBanner from './CookieBanner'
import { initLenis } from './animations'
import './IconographyCaseStudy.css'

/* ── Shared data ── */
const META = [
  { label: 'Company',  value: 'Keelvar' },
  { label: 'Industry', value: 'B2B SaaS / Procurement' },
  { label: 'Duration', value: 'January – March 2026' },
  { label: 'Role',     value: '3 weeks into internship' },
]

const PILLARS = [
  { title: 'Remove Duotone',  body: 'Elevates the platform into a new era, a single-colour system that scales.' },
  { title: 'Curved Forms',    body: 'More fluid, less rigid structures to match the intelligence of the AI agents.' },
  { title: 'Simplicity',      body: 'Core ideas front and centre. Semantic meaning more obvious for every user.' },
]

const TIMELINE = [
  {
    date: 'January 12th',
    title: 'First submission rejected.',
    body: "Submitted the initial icon set. Too complex, too much duotone, and it fell apart at 12px.",
    images: ['/timeline%201.png'],
  },
  {
    date: 'January 20th',
    title: 'Pushed back on duotone.',
    body: 'When I tried to match the icons to the illustration style they started to lose clarity at smaller sizes. Instead of forcing a direct match, I focused on pulling over the core principles: rounded shapes, consistent line weight, intentional spacing.',
    images: ['/timeline-2.png', '/timeline-3.png', '/timeline-4.png'],
    sideBySide: true,
  },
  {
    date: 'February 17th',
    title: 'Ran WCAG audit unprompted. Adjusted colour palette to meet 3:1 minimum across all seven variants.',
    body: null,
    images: ['/timeline-5.svg'],
  },
  {
    date: 'February 25th',
    title: 'Presented three colour palette options. Proposed light background with darker shade as the most cohesive direction.',
    body: null,
    images: ['/timeline-6.png'],
  },
  {
    date: 'March 2nd',
    title: 'Icons approved. Final locked palette presented, all seven colour variants clean.',
    body: null,
    images: ['/timeline-7.png'],
  },
  {
    date: 'March 10th',
    title: 'Live in Product.',
    body: null,
    images: ['/timeline-8.png'],
    final: true,
  },
]

const STICKY_NOTES = [
  {
    text: 'Starting in greyscale. The colour palette can be reintroduced once the main components are in place and the icon works.',
    initX: 10,
    initY: 20,
    rotation: -2.8,
    color: '#fde4cc',
  },
  {
    text: 'Potential issue: The illustration style itself is very detailed.',
    initX: 272,
    initY: 8,
    rotation: 1.6,
    color: '#d6e0ff',
  },
  {
    text: 'Resolution: Minimal line work so it scales nicely, but bring in more of its characteristics. Block shape, smart use of colour.',
    initX: 534,
    initY: 22,
    rotation: -1.4,
    color: '#fde4cc',
  },
  {
    text: 'These don\'t work. Too complex when scaled down to 16x16px.',
    initX: 60,
    initY: 218,
    rotation: 2.4,
    color: '#d6e0ff',
  },
  {
    text: 'Shapes have a divider / subtraction between elements. Keeps them stylistic and modern.',
    initX: 322,
    initY: 204,
    rotation: -2.1,
    color: '#ffe4e1',
  },
  {
    text: 'Less is more. Line work may be too prominent right now.',
    initX: 584,
    initY: 212,
    rotation: 3.0,
    color: '#d6f0e4',
  },
]

const NEXT_PROJECT = {
  title: 'Good Enough',
  category: 'Brand Identity',
  image: '/good%20enough%20end%20card.png',
}

/* ── Draggable sticky note ── */
function DraggableNote({ note, zIndex, onFocus }) {
  const [pos, setPos] = useState({ x: note.initX, y: note.initY })
  const dragging = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return
      const cx = e.touches ? e.touches[0].clientX : e.clientX
      const cy = e.touches ? e.touches[0].clientY : e.clientY
      setPos({ x: cx - offset.current.x, y: cy - offset.current.y })
    }
    const onUp = () => { dragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onMove, { passive: true })
    window.addEventListener('touchend', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onUp)
    }
  }, [])

  const onDown = (e) => {
    const cx = e.touches ? e.touches[0].clientX : e.clientX
    const cy = e.touches ? e.touches[0].clientY : e.clientY
    dragging.current = true
    offset.current = { x: cx - pos.x, y: cy - pos.y }
    onFocus()
    e.preventDefault()
  }

  return (
    <div
      className="sticky-note"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `rotate(${note.rotation}deg)`,
        zIndex,
        background: note.color,
      }}
      onMouseDown={onDown}
      onTouchStart={onDown}
    >
      <p>{note.text}</p>
    </div>
  )
}

function StickyBoard() {
  const [zOrders, setZOrders] = useState(STICKY_NOTES.map((_, i) => i + 10))
  const bringToFront = (i) => {
    setZOrders(prev => {
      const next = [...prev]
      next[i] = Math.max(...prev) + 1
      return next
    })
  }
  return (
    <div className="sticky-board">
      {STICKY_NOTES.map((note, i) => (
        <DraggableNote
          key={i}
          note={note}
          zIndex={zOrders[i]}
          onFocus={() => bringToFront(i)}
        />
      ))}
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
export default function IconographyCaseStudy() {
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
                <span className="cs-hero-line-inner">Iconography</span>
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
              <strong>Shipped Mar 10th</strong>
            </div>
          </div>

          <div className="cs-hero-image cs-reveal">
            <img src="/cs-hero-mockup.png" alt="Iconography project mockup" />
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="cs-section cs-intro">
          <div className="cs-intro-inner">
            <div className="cs-section-head cs-reveal">
              <span className="cs-section-label">Overview</span>
              <h2>A broken visual<br />language.</h2>
            </div>
            <div className="cs-intro-body">
              <p className="cs-reveal">
                Keelvar helps companies spend smarter, automating the complex negotiations and supplier decisions that procurement teams used to do manually. Within my first three weeks as a product design intern I was handed the icon system redesign with no formal brief.
              </p>
              <p className="cs-reveal">
                The existing system was too detailed to hold at small sizes and users had started naming icons by appearance rather than meaning. The visual language had <strong>stopped working.</strong>
              </p>
              <p className="cs-reveal">
                I removed duotone, simplified every icon for better legibility, replaced failing symbolism, ran WCAG audits unprompted, and navigated feedback from five senior designers across two months of iteration. <strong>Shipped to production March 10th.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="cs-section cs-problem">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">The Problem</span>
            <h2>When users name<br />your icons for you.</h2>
          </div>
          <div className="cs-problem-grid">
            <div className="cs-problem-text">
              <p className="cs-reveal">
                The existing icon system was carrying too much visual detail to hold up at the sizes they were actually used, some as small as 12px in production.
              </p>
              <p className="cs-reveal">
                The more telling signal was behavioural. Users were referring to icons by appearance rather than meaning. The excavator was not "Logistics Other", it was <em>"the digger."</em> When users start naming your icons for you, the visual language has stopped working.
              </p>
              <p className="cs-reveal">
                <strong>Duotone</strong> added complexity without meaning, and the style had <strong>drifted</strong> from the product's illustration language. The two no longer felt like they belonged together.
              </p>
            </div>
            <div className="cs-problem-visual cs-reveal" style={{ transitionDelay: '400ms' }}>
              <img src="/cs-problem-icons.svg" alt="Original icon system" />
            </div>
          </div>
        </section>

        {/* ── Vision and Strategy ── */}
        <section className="cs-section cs-vision">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Vision and Strategy</span>
            <h2>Three principles.<br />One direction.</h2>
          </div>
          <div className="cs-vision-cards">
            {PILLARS.map((p, i) => (
              <div className="cs-vision-card cs-reveal" key={i}>
                <span className="cs-vision-num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── First Iterations ── */}
        <section className="cs-section cs-iterations">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">First Iterations</span>
            <h2>Genuinely shocking<br />on purpose.</h2>
          </div>
          <p className="cs-iterations-intro cs-reveal">
            The first iterations need to be genuinely shocking to get to the end goal. Drag them around.
          </p>
          <StickyBoard />
        </section>

        {/* ── Timeline ── */}
        <section className="cs-section cs-timeline-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Timeline</span>
            <h2>Two months.<br />Six rounds.</h2>
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
                  {item.images && item.images.length > 0 && (
                    <div className={`cs-timeline-images${item.sideBySide ? ' cs-timeline-pair' : ''}`}>
                      {item.images.map((src, j) => (
                        <img key={j} src={src} alt={item.title} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final Outcomes ── */}
        <section className="cs-section cs-outcomes">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Final Outcomes</span>
            <h2>Shipped. Scaled.<br />In production.</h2>
          </div>
          <div className="cs-outcomes-pair cs-reveal">
            <div className="cs-outcomes-video">
              <video src="/outcome-1.mov" autoPlay loop muted playsInline />
            </div>
            <div className="cs-outcomes-image">
              <img src="/outcome-2.png" alt="Final icon set, all colour variants" />
            </div>
          </div>
          {/* Still image slot — drop an image here when ready */}
        </section>

        {/* ── Next Project ── */}
        <section className="cs-section cs-next">
          <span className="cs-section-label cs-reveal">Next Project</span>
          <div
            className="cs-next-card cs-reveal"
            onClick={() => navigate('/')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate('/')}
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
