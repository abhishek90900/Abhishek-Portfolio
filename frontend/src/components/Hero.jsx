import React, { useState, useEffect } from 'react';
import './Hero.css';
// আপনার রেজ্যুমে ফাইলটি এখানে ইমপোর্ট করা হয়েছে
import resumeFile from '../assets/Abhishek_Resume.pdf'; 

const Hero = () => {
  const words = ['Frontend Developer', 'Backend Developer', 'AI/ML Engineer'];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // টাইপরাইটার অ্যানিমেশন লজিক
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          Hi, my name is <br /> 
          <span className="highlight">Abhishek Mukherjee</span>
        </h1>
        <h2>
          And I am a passionate <br />
          <span className="typewriter">
            {words[index].substring(0, subIndex)}
          </span>
          <span className="cursor">|</span>
        </h2>
        
        <div className="hero-btns">
          {/* assets থেকে ইমপোর্ট করা ফাইলটি এখানে ব্যবহার করা হয়েছে */}
          <a 
            href={resumeFile} 
            download="Abhishek_Resume.pdf" 
            className="glass-btn"
          >
            Resume Download
          </a>

          {/* GitHub প্রোফাইল লিঙ্ক */}
          <a 
            href="https://github.com/abhishek90900" 
            target="_blank" 
            rel="noreferrer" 
            className="glass-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;