import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cursor from './Cursor'
import CookieBanner from './CookieBanner'
import { initLenis } from './animations'
import trendsData from './data/trendsData.json'
import './TrendsPage.css'

export default function TrendsPage() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    initLenis()
  }, [])

  const formattedDate = new Date(`${trendsData.updatedAt}T00:00:00`).toLocaleDateString('en-IE', {
    day: 'numeric', month: 'long', year: 'numeric',
  })

  return (
    <>
      <Cursor />
      <CookieBanner />
      <div className="trends-page">

        <header className="trends-page-header">
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

        <section className="trends-hero">
          <span className="trends-kicker">Daily trends</span>
          <h1 className="trends-title">What's moving today.</h1>
          <p className="trends-updated">Updated {formattedDate}</p>
        </section>

        <section className="trends-section">
          <div className="section-head">
            <span className="section-label">Marketing</span>
            <h2>Marketing trends.</h2>
          </div>
          <div className="trends-list">
            {trendsData.marketing.map((item, i) => (
              <article className="trend-item" key={i}>
                <span className="trend-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="trend-body">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h3>{item.title}</h3>
                  </a>
                  <p>{item.summary}</p>
                  {item.source && <span className="trend-source">{item.source}</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="trends-section">
          <div className="section-head">
            <span className="section-label">Design &amp; Motion</span>
            <h2>Graphic design &amp; motion trends.</h2>
          </div>
          <div className="trends-list">
            {trendsData.design.map((item, i) => (
              <article className="trend-item" key={i}>
                <span className="trend-index">{String(i + 1).padStart(2, '0')}</span>
                <div className="trend-body">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <h3>{item.title}</h3>
                  </a>
                  <p>{item.summary}</p>
                  {item.source && <span className="trend-source">{item.source}</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}
