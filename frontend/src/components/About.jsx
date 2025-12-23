import React from 'react';
import './About.css';
// থিম বেজড আইকন ইমপোর্ট করা হলো - নতুন আইকন FiPenTool যোগ করা হয়েছে
import { FiLayout, FiDatabase, FiCpu, FiPenTool } from 'react-icons/fi'; 

const About = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces using React and modern CSS.",
      icon: <FiLayout /> // আধুনিক লেআউট আইকন
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Developing robust server-side logic and RESTful APIs with Node.js and Express.",
      icon: <FiDatabase /> // সার্ভার/ডাটাবেস আইকন
    },
    {
      id: 3,
      title: "AI/ML Integration",
      description: "Implementing intelligent features and machine learning models into web applications.",
      icon: <FiCpu /> // এআই/প্রসেসর আইকন
    },
    // নতুন Web Design বক্সটি এখানে যোগ করা হয়েছে
    {
      id: 4,
      title: "Web Design",
      description: "Crafting visually stunning and intuitive user experiences. Focusing on aesthetics and usability to engage visitors effectively.",
      icon: <FiPenTool /> // ডিজাইন টুল আইকন
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* About Me Section */}
        <div className="about-box glass-card">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a passionate Full Stack Developer with a strong focus on Applied Artificial Intelligence and End-to-End System Architecture. 
            I specialize in building scalable web applications and intelligent systems.
            <br /><br />
            <span className="highlight">Always learning. Always building.</span>
          </p>
        </div>

        {/* What I Do - Big Wrapper */}
        <div className="what-i-do-wrapper glass-card">
          <h2 className="section-title">What I Do</h2>
          
          {/* এখানে নতুন বক্সটি অটোমেটিক্যালি গ্রিডে বসে যাবে */}
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card rectangle">
                {/* আপনার ছবির মতো আইকন বক্স */}
                <div className="styled-icon-box">
                  <div className="icon-overlay"></div>
                  <span className="actual-icon">{service.icon}</span>
                </div>
                
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;