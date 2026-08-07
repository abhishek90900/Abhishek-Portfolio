import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  FiGithub,
  FiExternalLink,
  FiGrid,
  FiArrowLeft
} from "react-icons/fi";

import {
  FaRobot,
  FaJs,
  FaPython,
  FaReact,
  FaLayerGroup
} from "react-icons/fa";

import { MdDesignServices } from "react-icons/md";
import { SiFirebase, SiTypescript, SiPostgresql } from "react-icons/si";

import "./Portfolio.css";

// --- প্রজেক্ট ডাটা (এখানে ইচ্ছেমতো ছবির পাথ যোগ করতে পারবেন) ---
const projectsData = [
  {
  id: 1,
  title: "AI-Healthcare Platform",
  images: [
    "/images/healthcare01.png"
  ],
  date: "August 2025",
  details: [
    "AI-powered healthcare platform with intelligent chatbot, OCR, and smart health analysis.",
    "Supports medical report scanning, AI-assisted diagnosis, doctor appointments, and medicine recommendations.",
    "Secure full-stack application with cloud storage, online payments, and responsive user experience."
  ],
  tech: [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Gemini API",
    "OCR",
    "JWT Authentication",
    "bcrypt",
    "Cloudinary",
    "Razorpay",
    "Nodemailer",
    "Google Maps API",
    "YouTube API",
    "Git",
    "GitHub"
  ],
  category: [
    "Full Stack Project",
    "AI/ML Project"
  ],
  github: "https://github.com/abhishek90900/AI-Revolution",
  demo: "https://ai-revolution-1.onrender.com"
},
  {
  id: 2,
  title: "Nakshatra E-Book Store",
  images: [
    "/images/nakshatra01.png"
  ],
  date: "November 2025",
  details: [
    "Full-stack eBook store with secure user authentication and online payments.",
    "Browse, search, purchase, and manage digital books with a responsive user interface.",
    "Admin dashboard for book management, orders, users, and inventory control."
  ],
  tech: [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "bcrypt",
    "React Router",
    "Axios",
    "Redux Toolkit",
    "Cloudinary",
    "Multer",
    "Razorpay",
    "Git",
    "GitHub"
  ],
  category: [
    "Full Stack Project"
  ],
  github: "https://github.com/abhishek90900/NAKSHATRA",
  demo: "https://nakshatraa.onrender.com/"
},
  {
  id: 3,
  title: "Jarvis Voice Assistant",
  images: [
    "/images/jarvis01.png"
  ],
  date: "March 2026",
  details: [
    "AI-powered voice assistant for hands-free computer control and task automation.",
    "Executes voice commands to open applications, browse websites, play media, and perform system operations.",
    "Integrates speech recognition, AI, computer vision, and desktop automation for an intelligent user experience."
  ],
  tech: [
    "Python",
    "Tkinter",
    "SpeechRecognition",
    "pyttsx3",
    "OpenCV",
    "MediaPipe",
    "Gemini API",
    "Groq API",
    "Llama 3",
    "PyAutoGUI",
    "PyWhatKit",
    "Requests",
    "BeautifulSoup",
    "NumPy",
    "SQLite",
    "Threading",
    "JSON",
    "Git",
    "GitHub"
  ],
  category: ["AI/ML Project", "Full Stack Project",],
  github: "https://github.com/abhishek90900/Jarvis-Voice-Controlled-Assistant-",
  demo: "https://demo.com/"
},
{
  id: 4,
  title: "Doctor Appointment System",
  images: [
    "/images/doctor01.png"
  ],
  date: "Dec 2025",
  details: [
    "Full-stack doctor appointment booking platform with secure authentication.",
    "Patients can search doctors, book appointments, manage profiles, and view appointment history.",
    "Admin dashboard for doctor management, appointment scheduling, and healthcare system administration."
  ],
  tech: [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "bcrypt",
    "React Router",
    "Axios",
    "Cloudinary",
    "Razorpay",
    "Nodemailer",
    "REST API",
    "Git",
    "GitHub"
  ],
  category: [
    "Full Stack Project"
  ],
  github: "https://github.com/abhishek90900/DR.-appointment",
  demo: "https://online-appointment-03fp.onrender.com"
},
{
  id: 5,
  title: "Enterprise RAG Platform",
  video: "/videos/VID-20260807-WA0015.mp4",
  date: "2026",
  details: [
    "Production-grade Retrieval-Augmented Generation (RAG) engine built for high-precision, sub-second document intelligence.",
    "Combines dense vector embeddings with Qdrant BM25 sparse search and BAAI cross-encoder neural reranking to eliminate hallucinations.",
    "Interactive Streamlit web dashboard supporting multi-format document ingestion (PDF, TXT, DOCX), granular source citations, and conversational memory."
  ],
  tech: [
    "Python",
    "LlamaIndex",
    "Qdrant Vector DB",
    "Groq LPUs",
    "HuggingFace Transformers",
    "Streamlit",
    "Pydantic",
    "REST API",
    "Git",
    "GitHub"
  ],
  category: [
    "AI / ML Project",
    "Full Stack Project"
  ],
  github: "https://github.com/abhishek90900/ENTERPRICE-RAG-PLATFORM",
  demo: ""
}
];

// --- অটোমেটিক ও ম্যানুয়াল ইমেজ স্লাইডার সাব-কম্পোনেন্ট ---
const ProjectImageSlider = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // অটোমেটিক স্লাইড করার জন্য (প্রতি ৪ সেকেন্ড পর পর)
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="slider-wrapper">
      {/* স্লাইড ইমেজেস কন্টেইনার */}
      <div
        className="slider-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgUrl, imgIndex) => (
          <img
            key={imgIndex}
            src={imgUrl}
            alt={`${title} screenshot ${imgIndex + 1}`}
            className="project-img"
          />
        ))}
      </div>

      {/* একাধিক ছবি থাকলেই কেবল অ্যারো ও নিচের বিন্দুগুলো (Dots) দেখাবে */}
      {images.length > 1 && (
        <>
          <button className="slide-arrow left" onClick={prevSlide}>&#10094;</button>
          <button className="slide-arrow right" onClick={nextSlide}>&#10095;</button>

          <div className="slider-dots">
            {images.map((_, imgIndex) => (
              <span
                key={imgIndex}
                className={`dot ${currentIndex === imgIndex ? 'active-dot' : ''}`}
                onClick={() => setCurrentIndex(imgIndex)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// --- মূল পোর্টফোলিও কম্পোনেন্ট ---
const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
  { name: "All", icon: <FiGrid /> },
  { name: "Full Stack Project", icon: <FaLayerGroup /> },
  { name: "AI/ML Project", icon: <FaRobot /> },
  { name: "UI/UX Design", icon: <MdDesignServices /> },
];

  const filteredProjects =
  filter === "All"
    ? projectsData
    : projectsData.filter((project) => {
        const categoryMatch = Array.isArray(project.category)
          ? project.category.includes(filter)
          : project.category === filter;

        const techMatch = project.tech.includes(filter);

        return categoryMatch || techMatch;
      });

  return (
    <section id="portfolio" className="portfolio-page">
      <div className="portfolio-container glass-card">

        {/* হোম পেজে ফেরার বাটন */}
        <Link to="/" className="back-btn">
          <FiArrowLeft /> Back to Home
        </Link>

        <h2 className="section-title">My Projects</h2>

        {/* ফিল্টার নেভিগেশন বার */}
        <nav className="filter-nav">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`filter-item ${filter === cat.name ? 'active' : ''}`}
              onClick={() => setFilter(cat.name)}
            >
              <span className="cat-icon">{cat.icon}</span>
              <span className="cat-name">{cat.name}</span>
            </button>
          ))}
        </nav>

        {/* প্রজেক্ট গ্রিড */}
        <div className="projects-display">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card-box">

              {/* ১. প্রজেক্টের নাম ও তারিখ */}
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="p-date">{project.date}</span>
              </div>

              {/* ২. প্রজেক্টের মিডিয়া সেকশন (ভিডিও থাকলে ভিডিও, না থাকলে ইমেজ স্লাইডার) */}
              {project.video ? (
                <div className="video-container" style={{ width: "100%", borderRadius: "8px", overflow: "hidden", marginBottom: "12px" }}>
                  <video 
                    src={project.video} 
                    controls 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    style={{ width: "100%", height: "auto", display: "block" }} 
                  />
                </div>
              ) : (
                project.images && project.images.length > 0 && (
                  <ProjectImageSlider images={project.images} title={project.title} />
                )
              )}

              {/* ৩. প্রজেক্টের পয়েন্টসমূহ */}
              <ul className="p-points">
                {project.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {/* ৪. টেকনোলজি পিলস */}
              <div className="tech-pills">
                {project.tech.map((t, index) => (
                  <span key={index} className="pill">{t}</span>
                ))}
              </div>

              {/* ৫. লিংক অ্যাকশন বাটন */}
              <div className="p-action-btns">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                  <FiGithub /> GitHub
                </a>
                
                {/* স্মার্ট ডেমো বাটন: লিংক থাকলে ডাইরেক্ট বাটন, না থাকলে Live Demo Soon */}
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-filled">
                    <FiExternalLink /> View
                  </a>
                ) : (
                  <span className="btn-filled disabled" style={{ opacity: 0.5, cursor: "not-allowed", pointerEvents: "none" }}>
                    <FiExternalLink /> Live Demo Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
