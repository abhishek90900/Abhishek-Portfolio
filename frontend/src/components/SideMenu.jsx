import React, { useEffect } from 'react';
import { FiX, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
// FaXTwitter এবং SiLeetcode ইমপোর্ট করা হয়েছে
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa'; 
import { FaXTwitter } from 'react-icons/fa6'; 
import { SiLeetcode } from 'react-icons/si';
import './SideMenu.css';
import profileImg from '../assets/profile.jpg'; 

const SideMenu = ({ isOpen, toggleMenu }) => {
  
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const isMobile = window.innerWidth <= 768;

    if (isOpen && isMobile) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.width = '100%';
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
    }

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
    };
  }, [isOpen]);

  return (
    <div className={`side-menu-wrapper ${isOpen ? 'active' : ''}`}>
      <div className="side-menu-overlay" onClick={toggleMenu}></div>
      
      <div className="side-menu-content">
        <button className="close-menu" onClick={toggleMenu}>
          <FiX />
        </button>
        
        <div className="side-profile">
          <div className="img-wrapper">
            <img src={profileImg} alt="Profile" />
          </div>
          <h3>Abhishek Mukherjee</h3>
          <p>Full Stack Developer | AI & ML Specialist</p>
        </div>

        <div className="side-contact">
          <h4>Contact</h4>
          
          <a href="mailto:mukherjeemukherjee895@gmail.com" className="contact-item">
            <FiMail className="contact-icon" />
            <span className="email-text">mukherjeemukherjee895@gmail.com</span>
          </a>

          <a href="tel:+919382028044" className="contact-item">
            <FiPhone className="contact-icon" />
            <span>+91-9382028044</span>
          </a>

          <div className="contact-item">
            <FiMapPin className="contact-icon" />
            <span>Kolkata, West Bengal, India</span>
          </div>
        </div>

        <div className="side-social">
          <h4>Social</h4>
          <div className="social-links">
            {/* GitHub */}
            <a href="https://github.com/abhishek90900" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/abhishek-mukherjee-93a845332/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/abhiaashiquiwala/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            {/* Facebook */}
            <a href="https://www.facebook.com/koushik.rajak.528" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>

            {/* X (formerly Twitter) */}
            <a href="https://x.com/আপনার-ইউজারনেম" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>

            {/* LeetCode */}
            <a href="https://leetcode.com/u/abhi90900/" target="_blank" rel="noreferrer">
              <SiLeetcode />
            </a>
          </div>
        </div>

        <ul className="side-nav-links mobile-only">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
          <li><a href="#resume" onClick={toggleMenu}>Resume</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;