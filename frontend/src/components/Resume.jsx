import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiBriefcase, FiAward, FiArrowLeft, FiInfo, FiCode, FiZap } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si'; 
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
    title: "AI-Based Fraud Detection System",
    date: "Jan'26 - Mar'26",
    details: [
      "Developed an AI-powered fraud detection system using Machine Learning (XGBoost, Random Forest) and Deep Learning (LSTM Autoencoder) to identify fraudulent transactions.",
      "Engineered a complete data preprocessing and feature engineering pipeline, including missing value handling, class imbalance (SMOTE), feature scaling, and model optimization.",
      "Built a real-time fraud monitoring dashboard with secure RESTful APIs, risk scoring, transaction analytics, and explainable AI insights."
    ],
    tech: ["Python", "Scikit-learn", "TensorFlow/Keras", "XGBoost", "Pandas", "NumPy", "Flask/FastAPI", "React.js", "MongoDB", "REST APIs", "JWT", "Git"]
  },
  {
    title: "Healthcare In AI",
    date: "Sept'25 - Dec'25",
    details: [
      "Developed an AI-powered healthcare web application with multimodal AI chatbot (text, voice, image) for medicine information retrieval, symptom-based assistance, and online doctor appointment scheduling.",
      "Integrated Google Gemini API for natural language processing (NLP), context-aware responses, and AI-driven medical assistance.",
      "Designed a scalable full-stack architecture with secure RESTful APIs, role-based access, and optimized MongoDB queries."
    ],
    tech: ["React.js", "JavaScript (ES6)", "MongoDB", "Google Gemini API", "RESTful APIs", "JWT Authentication"]
  },
  {
    title: "Doctor Appointment Booking System",
    date: "Apr'25 - July'25",
    details: [
      "Developed a full-stack Doctor Appointment Booking System enabling patients to search doctors, schedule appointments, and access healthcare services.",
      "Implemented secure online payment integration (Razorpay), appointment scheduling, booking confirmation, cancellation, and automated notifications.",
      "Designed role-based authentication for Patients, Doctors, and Administrators with secure profile management and centralized healthcare data management."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Razorpay", "JWT Authentication", "Cloudinary", "HTML", "CSS", "JavaScript", "Git", "GitHub"]
  },
  {
    title: "Jarvis - Voice Controlled Assistant",
    date: "Jun'24 - Sept'24",
    details: [
      "Built an AI-powered voice-controlled virtual assistant to automate system operations and web applications using speech recognition and command parsing.",
      "Automated social media and messaging workflows (WhatsApp, Instagram, Facebook) 90% accurate.",
      "Enabled real-time voice command processing using speech-to-text APIs, Python automation scripts, and third-party API integrations."
    ],
    tech: ["Python", "JavaScript", "Firebase", "Speech Recognition APIs", "Google Gemini API", "REST APIs", "React.js", "CSS"]
  },
  {
    title: "eBook Commerce Platform",
    date: "Nov'24 - Dec'24",
    details: [
      "Developed a full-stack eCommerce platform enabling users to buy, sell, and read digital books, with secure payment-ready architecture.",
      "Implemented secure user authentication, authorization workflows, and dynamic content rendering.",
      "Optimized database queries and frontend performance to ensure scalability, responsiveness, and fast load times."
    ],
    tech: ["React.js", "JavaScript", "MongoDB"]
  }
];

const Resume = () => {
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
                  <h4>Bachelor of Technology - Computer Science and Engineering (AI&ML)</h4>  
                  <span className="res-date">2023 - 2026</span>  
                </div>  
                <p className="inst-name">Brainware University</p>  
                <p className="grade">CGPA: 7.58 Out of 10</p>  
              </div>  
            </div>  
            <div className="timeline-item">  
              <div className="timeline-dot"></div>  
              <div className="timeline-content">  
                <div className="content-header">  
                  <h4>Diploma (Polytechnic) - Computer Science and Engineering</h4>  
                  <span className="res-date">2020 - 2023</span>  
                </div>  
                <p className="inst-name">Bishnupur Public Institute Of Engineering</p>  
                <p className="grade">Percentage: 83.1% (SGPA: 8.9 Out of 10)</p>  
              </div>  
            </div>  
            <div className="timeline-item">  
              <div className="timeline-dot"></div>  
              <div className="timeline-content">  
                <div className="content-header">  
                  <h4>Higher Secondary Education</h4>  
                  <span className="res-date">2020</span>  
                </div>  
                <p className="inst-name">Jambad Anchalik High School</p>  
                <p className="grade">Percentage: 84.8% (Marks: 424 Out of 500)</p>  
              </div>  
            </div>  
            <div className="timeline-item">  
              <div className="timeline-dot"></div>  
              <div className="timeline-content">  
                <div className="content-header">  
                  <h4>Secondary Education</h4>  
                  <span className="res-date">2018</span>  
                </div>  
                <p className="inst-name">Jambad Anchalik High School</p>  
                <p className="grade">Percentage: 53.0% (Marks: 371 Out of 700)</p>  
              </div>  
            </div>  
          </div>  
        </div>  

        {/* Internship Section */}  
        <div className="resume-section">  
          <h3 className="resume-sub-title"><FiBriefcase /> Internship / Industrial Training</h3>  
          <div className="timeline">  
            <div className="timeline-item">  
              <div className="timeline-dot"></div>  
              <div className="timeline-content">  
                <div className="content-header">  
                  <h4>MERN Stack Development (Industrial Training)</h4>  
                  <span className="res-date">April' 2025 - July' 2025</span>  
                </div>  
                <p className="inst-name">Euphoria GenX</p>  
                <ul className="res-points">  
                  <li>Developed scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>  
                  <li>Implemented RESTful APIs, authentication, CRUD operations, database integration, and Git/GitHub version control following industry standards.</li>  
                </ul>  
              </div>  
            </div>  
            <div className="timeline-item">  
              <div className="timeline-dot"></div>  
              <div className="timeline-content">  
                <div className="content-header">  
                  <h4>CCNA & Python Programming</h4>  
                  <span className="res-date">July' 2022</span>  
                </div>  
                <p className="inst-name">DataSpace Academy</p>  
                <ul className="res-points">  
                  <li>Gained practical exposure to network configuration, IP addressing, routing and switching fundamentals, network troubleshooting, and Python scripting for automation.</li>  
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
                {["Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"].map(s => <span key={s}>{s}</span>)}  
              </div>  
            </div>  
            <div className="skill-category">  
              <h4>AI / ML & Data Science</h4>  
              <div className="skill-pills">  
                {["Machine Learning", "Deep Learning", "TensorFlow", "Scikit-learn", "XGBoost", "LSTM", "OpenCV", "Feature Engineering", "Data Preprocessing", "Model Evaluation", "Pandas", "NumPy", "Data Visualization"].map(s => <span key={s}>{s}</span>)}  
              </div>  
            </div>  
            <div className="skill-category">  
              <h4>Frontend & Backend</h4>  
              <div className="skill-pills">  
                {["React.js", "Flutter", "Angular", "Node.js", "Express.js", "Flask", "FastAPI", "REST APIs", "API Integration", "JWT Authentication"].map(s => <span key={s}>{s}</span>)}  
              </div>  
            </div>  
            <div className="skill-category">  
              <h4>Database, Cloud & Tools</h4>  
              <div className="skill-pills">  
                {["MongoDB", "Firebase", "MySQL", "PostgreSQL", "AWS", "Docker", "Virtual Machines", "Git", "GitHub"].map(s => <span key={s}>{s}</span>)}  
              </div>  
            </div>  
            <div className="skill-category">  
              <h4>Soft Skills</h4>  
              <div className="skill-pills">  
                {["Problem Solving", "Research & Analysis", "Team Leadership & Management", "Effective Communication"].map(s => <span key={s}>{s}</span>)}  
              </div>  
            </div>  
          </div>  
        </div>  

        {/* Projects Section */}  
        <div className="resume-section projects-section-fix">  
          <h3 className="resume-sub-title"><FiCode /> Projects</h3>  
          <div className="timeline">  
            {projectsList.map((project, idx) => (  
              <motion.div 
                key={idx} 
                className="timeline-item" 
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >  
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
          </div>  
        </div>  

        {/* Certifications Section */}  
        <div className="resume-section">  
          <h3 className="resume-sub-title"><FiAward /> Certifications</h3>  
          <ul className="cert-list">  
            <li>Euphoria GenX - Industrial Training 2025</li>  
            <li>Python 3.4.3, C, CPP Training - Spoken Tutorial Project, IIT Bombay, 2025</li>  
            <li>8 - week CEH Training & Certification</li>  
          </ul>  
        </div>  

        {/* Additional Information Section */}  
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