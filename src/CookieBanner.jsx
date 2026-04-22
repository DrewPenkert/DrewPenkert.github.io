import { useState, useEffect } from 'react'
import './CookieBanner.css'

const STORAGE_KEY = 'analytics_consent'

function loadGA() {
  if (window.__ga_loaded) return
  window.__ga_loaded = true

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-EPKDYSLWYC'
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', 'G-EPKDYSLWYC')
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [collapsed, setCollapsed] = useState(true)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (consent === 'accepted') {
      loadGA()
    } else if (consent === null) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (!visible) return
    const onScroll = () => {
      if (window.scrollY > 80) {
        setCollapsed(false)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [visible])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    loadGA()
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  if (!visible) return null

  if (collapsed) {
    return (
      <button className="cookie-collapsed" onClick={() => setCollapsed(false)} aria-label="Show cookie settings">
        Cookies
      </button>
    )
  }

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-text">
        Crossing the t's, dotting the i's. We use cookies to improve your experience.
      </p>
      <div className="cookie-actions">
        <button className="cookie-btn cookie-btn--collapse" onClick={() => setCollapsed(true)} aria-label="Minimise">—</button>
        <button className="cookie-btn cookie-btn--decline" onClick={decline}>Decline</button>
        <button className="cookie-btn cookie-btn--accept" onClick={accept}>Accept</button>
      </div>
    </div>
  )
}
