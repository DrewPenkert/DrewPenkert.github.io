import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import IconographyCaseStudy from './IconographyCaseStudy.jsx'
import MotionDesignCaseStudy from './MotionDesignCaseStudy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/iconography" element={<IconographyCaseStudy />} />
        <Route path="/work/motion-design" element={<MotionDesignCaseStudy />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
