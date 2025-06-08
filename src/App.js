import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/vendorSection/Header';
import Footer from './components/vendorSection/Footer';

import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import WhyEdutrack from './components/WhyEdutrack';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / scrollHeight) * 100;

      const navbar = document.getElementById('navbar');
      if (navbar) {
        if (scrollPercent > 2) {
          navbar.classList.add('navbar-fixed');
          navbar.classList.remove('bg-white');
        } else {
          navbar.classList.add('bg-white');
          navbar.classList.remove('navbar-fixed');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (

    <div className="edutrack-web-layout">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-edutrack" element={<WhyEdutrack />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
