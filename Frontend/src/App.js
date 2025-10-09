import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollRevealSR from './hooks/useScrollRevealSR';

function AppInner() {
  const location = useLocation();
  useScrollRevealSR(location.pathname);
  return (
    <div className="app-shell">
      <div id="top" />
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

export default App;
