import Lenis from 'lenis'

export function initLenis() {
  const lenis = new Lenis()
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  return lenis
}

export function initScrollAnimations() {
  const els = document.querySelectorAll(
    '.section-label, .section-head h2, .about-photo-wrap, .about-copy p, .project-item, .contact-panel h2, .contact-tagline, .contact-email, .contact-socials'
  )

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  els.forEach((el) => {
    // stagger siblings by their index within their parent
    const siblings = el.parentElement.querySelectorAll(':scope > *')
    const sibIdx = Array.from(siblings).indexOf(el)
    el.style.transitionDelay = `${sibIdx * 60}ms`
    observer.observe(el)
  })
}
