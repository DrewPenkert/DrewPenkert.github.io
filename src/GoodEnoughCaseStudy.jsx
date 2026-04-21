import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cursor from './Cursor'
import CookieBanner from './CookieBanner'
import { initLenis } from './animations'
import './IconographyCaseStudy.css'
import './GoodEnoughCaseStudy.css'

const META = [
  { label: 'Industry', value: 'Fine Art / Print Design' },
  { label: 'Project',  value: 'Self-initiated' },
  { label: 'Timeline', value: 'January – March 2024' },
]

const PROCESS_STEPS = [
  {
    label: 'Step 01',
    title: 'What does procrastination actually look like?',
    body: 'A self-initiated editorial project built around a simple observation: procrastination had become a cultural artefact with its own logic. I wanted to design something that deliberately mirrors the chaotic self-aware landscape of someone mid-procrastination. Something bigger than just a book.',
    image: '/sticky_note_l%20copy.png',
    polaroids: null,
  },
  {
    label: 'Step 02',
    title: 'Rip it up and start again.',
    body: 'The worst progress is no progress. After the second round of layout work stalled, I printed everything out, cut it apart and rebuilt it physically on the floor. The restart produced the final structure in a single afternoon.',
    image: null,
    polaroids: [
      { src: '/IMG_4857%20copy.jpg', alt: 'Rip it up and start again' },
      { src: '/IMG_4859%20copy.jpg', alt: 'Do Your Thing' },
      { src: '/IMAGE%201.jpg',       alt: 'Pages laid out' },
    ],
  },
]

const OUTCOMES = [
  { src: "/%27Clowing%20Around%27%20photographed.jpg",             alt: 'Clowing Around spread' },
  { src: "/%27The%20Necessary%20DIY%20Project%27%20photographed.jpg", alt: 'D.I.Y Project spread' },
  { src: '/img%201%20copy.png',                                    alt: 'Interior spread' },
  { src: '/img%202%20copy.png',                                    alt: 'Interior spread' },
  { src: '/IMG%203.png',                                           alt: 'Interior spread' },
]

const NEXT_PROJECT = {
  title: 'Iconography',
  category: 'Print & Digital',
  image: '/iconography.png',
  slug: '/work/iconography',
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

export default function GoodEnoughCaseStudy() {
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
        <section className="cs-hero ge-hero">
          <div className="ge-hero-top">
            <div className="ge-hero-titles">
              <span className="cs-hero-label">Case Study</span>
              <h1 className="cs-hero-title">
                <span className="cs-hero-line">
                  <span className="cs-hero-line-inner">Good Enough</span>
                </span>
              </h1>
              <p className="ge-subtitle">A Procrastinators How To</p>
            </div>
            <div className="ge-stat cs-reveal">
              <span className="ge-stat-num">25%</span>
              <span className="ge-stat-label">of people are chronic procrastinators</span>
            </div>
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
              <strong>Printed and bound</strong>
            </div>
          </div>

          <div className="cs-hero-image cs-reveal">
            <img src="/easel%20book.png" alt="Good Enough cover on easel" />
          </div>
        </section>

        {/* ── Overview ── */}
        <section className="cs-section cs-intro">
          <div className="cs-intro-inner">
            <div className="cs-section-head cs-reveal">
              <span className="cs-section-label">Overview</span>
              <h2>A book about<br />not finishing.</h2>
            </div>
            <div className="cs-intro-body">
              <p className="cs-reveal">
                A self-initiated editorial project built around a simple observation: procrastination had become a cultural artefact with its own logic. The classic self-aware landscape of someone mid-task, mid-spiral, mid-YouTube rabbit hole. Something bigger than a single poster.
              </p>
              <p className="cs-reveal">
                The brief set to myself was to deliberately mirrors the chaotic landscape of someone mid-procrastination — type that breaks its own rules, layouts that feel unfinished by design. The reader self-identifies in ways that feel personal.
              </p>
              <p className="cs-reveal">
                Designed, printed and hand-bound. <strong>Final outcome: a complete editorial publication.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* ── The Process ── */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">The Process</span>
            <h2>Chaotic by<br />design.</h2>
          </div>

          {PROCESS_STEPS.map((step, i) => (
            <div className={`ge-process-step cs-reveal${step.polaroids ? ' ge-process-step--full' : ''}`} key={i}>
              <div className="ge-process-meta">
                <span className="cs-vision-num">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              {step.image && (
                <div className="ge-process-image">
                  <img src={step.image} alt={step.title} />
                </div>
              )}
              {step.polaroids && (
                <div className="ge-polaroids">
                  {step.polaroids.map((p, j) => (
                    <div className="ge-polaroid" key={j}>
                      <img src={p.src} alt={p.alt} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* ── Video ── */}
        <section className="cs-section">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">Final Outcome</span>
            <h2>Good Enough.<br />Printed.</h2>
          </div>
          <div className="ge-video-wrap cs-reveal">
            <iframe
              src="https://www.youtube-nocookie.com/embed/u-VROsx2HK0"
              title="Good Enough — final video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* ── Final images ── */}
        <section className="cs-section ge-outcomes">
          <div className="cs-section-head cs-reveal">
            <span className="cs-section-label">In Print</span>
            <h2>Talk to the hand.</h2>
          </div>
          <div className="ge-outcomes-grid">
            {OUTCOMES.map((img, i) => (
              <div className="ge-outcome-img cs-reveal" key={i}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
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
