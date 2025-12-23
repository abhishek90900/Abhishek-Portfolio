import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume'; // ১. রেজ্যুম কম্পোনেন্ট ইমপোর্ট করুন
import SideMenu from './components/SideMenu';
import BottomNavbar from './components/BottomNavbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className={`App ${isMenuOpen ? 'menu-open' : ''}`}>
        <Navbar toggleMenu={toggleMenu} />
        <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        
        <div className="main-wrapper">
          <Routes>
            {/* হোম পেজ */}
            <Route path="/" element={
              <main>
                <Hero />
                <About />
              </main>
            } />

            {/* পোর্টফোলিও পেজ */}
            <Route path="/portfolio" element={<Portfolio />} />

            {/* ২. রেজ্যুম পেজ রুট যোগ করুন */}
            <Route path="/resume" element={<Resume />} />
          </Routes>
          
          <BottomNavbar />
        </div>
      </div>
    </Router>
  );
}

export default App;