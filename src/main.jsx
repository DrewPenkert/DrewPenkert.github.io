import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import IconographyCaseStudy from './IconographyCaseStudy.jsx'
import MotionDesignCaseStudy from './MotionDesignCaseStudy.jsx'
import GoodEnoughCaseStudy from './GoodEnoughCaseStudy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/iconography" element={<IconographyCaseStudy />} />
        <Route path="/motion-design" element={<MotionDesignCaseStudy />} />
        <Route path="/good-enough" element={<GoodEnoughCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
