import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// নতুন এবং স্টাইলিশ RiMenu3Fill আইকনটি ইমপোর্ট করা হয়েছে
import { RiMenu3Fill } from 'react-icons/ri'; 
import './Navbar.css';
import signatureImg from '../assets/signature.png'; 

const Navbar = ({ toggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        
        {/* ল্যাপটপে বামদিকে নতুন আধুনিক মেনু আইকন */}
        <div className="desktop-menu-trigger" onClick={toggleMenu}>
          <RiMenu3Fill />
        </div>

        {/* লোগোর জায়গায় সিগনেচার ইমেজ */}
        <div className="logo">
          <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
            <img 
              src={signatureImg} 
              alt="Signature Logo" 
              className="signature-logo" 
            />
          </Link>
        </div>

        {/* ল্যাপটপে মেনু লিঙ্ক */}
        <ul className="nav-menu desktop-links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/portfolio">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>

        {/* মোবাইলে ডানদিকে নতুন আধুনিক মেনু আইকন */}
        <div className="mobile-menu-trigger" onClick={toggleMenu}>
          <RiMenu3Fill />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;