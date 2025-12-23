import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiAward, FiArrowLeft, FiInfo, FiCode, FiZap } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si'; // LeetCode আইকন ইমপোর্ট করুন
import { Link } from 'react-router-dom';
import './Resume.css';

// --- এখান থেকে আপনি ভবিষ্যতে আরও তথ্য সহজে যোগ করতে পারবেন ---
const additionalInfoList = [
  {
    id: 1,
    text: "Solved 50+ problems on LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/abhi90900/"
  }
];

const projectsList = [
  {
    title: "Healthcare In AI",
    date: "Sept'25 - Dec'25",
    details: [
      "Developed an AI-powered healthcare web application with multimodal AI chatbot.",
      "Integrated Google Gemini API for natural language processing (NLP) and medical assistance.",
      "Designed a scalable full-stack architecture with secure RESTful APIs."
    ],
    tech: ["React.js", "JavaScript (ES6)", "MongoDB", "Google Gemini API"]
  },
  {
    title: "Jarvis - Voice Controlled Assistant",
    date: "Jun'24 - Sept'24",
    details: [
      "Built an AI-powered voice-controlled virtual assistant to automate system operations.",
      "Automated social media and messaging workflows 90% accurate.",
      "Enabled real-time voice command processing using speech-to-text APIs."
    ],
    tech: ["Python", "JavaScript", "Firebase", "React.js"]
  },
  {
    title: "eBook Commerce Platform",
    date: "Nov'24 - Dec'24",
    details: [
      "Developed a full-stack eCommerce platform for digital books.",
      "Implemented secure user authentication and dynamic content rendering.",
      "Optimized database queries and frontend performance."
    ],
    tech: ["React.js", "JavaScript", "MongoDB"]
  }
];

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="resume-page">
      <div className="resume-container glass-card">
        <Link to="/" className="back-btn">
          <FiArrowLeft /> Back to Home
        </Link>
        <h2 className="section-title">Resume</h2>

        {/* Education Section */}
        <div className="resume-section">
          <h3 className="resume-sub-title"><FiBookOpen /> Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="content-header">
                  <h4>B.Tech in Computer Science and Engineering (AI&ML)</h4>
                  <span className="res-date">2023 - 2026 (Expected)</span>
                </div>
                <p className="inst-name">Brainware University</p>
                <p className="grade">Average SGPA (till 7th Semester): 7.30 Out of 10</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="content-header">
                  <h4>Diploma in Computer Science and Engineering</h4>
                  <span className="res-date">2020 - 2023</span>
                </div>
                <p className="inst-name">Bishnupur Public Institute Of Engineering</p>
                <p className="grade">Percentage: 83.1% (SGPA: 8.9)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Internship Section */}
        <div className="resume-section">
          <h3 className="resume-sub-title"><FiBriefcase /> Internship</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="content-header">
                  <h4>CCNA & Python Programming</h4>
                  <span className="res-date">July' 2022</span>
                </div>
                <p className="inst-name">DataSpace Academy</p>
                <ul className="res-points">
                  <li>Gained practical exposure to network configuration and Python scripting.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h3 className="resume-sub-title"><FiZap /> Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Programming Languages</h4>
              <div className="skill-pills">
                {["Python", "C", "SQL", "JS", "HTML", "CSS", "React"].map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h4>AI/ML & Data Science</h4>
              <div className="skill-pills">
                {["OpenCV", "Machine Learning"].map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h4>Frameworks & Libraries</h4>
              <div className="skill-pills">
                {["React", "Flask", "REST APIs", "API Integration"].map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="skill-category">
              <h4>Other Tools</h4>
              <div className="skill-pills">
                {["Virtual Machines", "Git", "Github"].map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="resume-section">
          <h3 className="resume-sub-title"><FiCode /> Projects</h3>
          <motion.div className="timeline" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {projectsList.map((project, idx) => (
              <motion.div key={idx} className="timeline-item" variants={itemVariants}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="content-header">
                    <h4>{project.title}</h4>
                    <span className="res-date">{project.date}</span>
                  </div>
                  <ul className="res-points">
                    {project.details.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                  <div className="tech-tags">
                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div className="resume-section">
          <h3 className="resume-sub-title"><FiAward /> Certifications</h3>
          <ul className="cert-list">
            <li>Euphoria GenX-Industrial Training 2025</li>
            <li>Python, C, CPP Training - IIT Bombay</li>
            <li>8 - week CEH Training & Certification</li>
          </ul>
        </div>

        {/* Additional Information Section - Modern & Dynamic */}
        <div className="resume-section">
          <h3 className="resume-sub-title"><FiInfo /> Additional Information</h3>
          <div className="info-badges-container">
            {additionalInfoList.map((info) => (
              <a 
                key={info.id} 
                href={info.link} 
                target="_blank" 
                rel="noreferrer" 
                className="modern-info-badge"
              >
                <span className="badge-icon">{info.icon}</span>
                <span className="badge-text">{info.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;