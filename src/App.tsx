import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './LandingPage'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import Navigation from './components/Navigation'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navigation />
      <PageTransition>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </div>
  )
}

export default App
