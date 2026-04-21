import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const el = cursorRef.current
    let raf

    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      })
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button, .project-item, .hero-tags span')) {
        el.classList.add('is-hovering')
      }
    }

    const onLeave = (e) => {
      if (e.target.closest('a, button, .project-item, .hero-tags span')) {
        el.classList.remove('is-hovering')
      }
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="custom-cursor" ref={cursorRef} />
}
