import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiGrid, FiArrowLeft } from 'react-icons/fi';
import { FaPython, FaReact, FaRobot, FaJs } from 'react-icons/fa';
import { SiFirebase, SiTypescript, SiPostgresql } from 'react-icons/si';
import './Portfolio.css';

// --- এখানে আপনি আপনার নতুন প্রজেক্ট যোগ করবেন ---
const projectsData = [
  {
    id: 1,
    title: "Chanakya - Health Care AI",
    date: "August 2025",
    details: ["AI-powered disease prediction.", "Real-time doctor consultation.", "Integrated medical report analysis."],
    tech: ["React", "JS", "AI integration", "MongoDB"],
    category: "AI/ML",
    github: "https://github.com/abhishek90900",
    demo: "https://demo.com/"
  },
  {
    id: 2,
    title: "Nakshatra E-book Store",
    date: "November 2025",
    details: ["E-commerce platform for books.", "Seamless payment integration.", "Admin dashboard for inventory."],
    tech: ["React", "MongoDB", "JS", "Api Integration"],
    category: "React",
    github: "https://github.com/abhishek90900",
    demo: "https://demo.com/"
  }
  // আরও প্রজেক্ট যোগ করতে এখানে ওপরের ফরম্যাটটি পেস্ট করুন
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const categories = [
    { name: 'All', icon: <FiGrid /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'JS', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Typescript', icon: <SiTypescript /> },
    { name: 'AI/ML', icon: <FaRobot /> },
    { name: 'SQL', icon: <SiPostgresql /> },
  ];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter || p.tech.includes(filter));

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
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="p-date">{project.date}</span>
              </div>
              
              <ul className="p-points">
                {project.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              <div className="tech-pills">
                {project.tech.map((t, index) => (
                  <span key={index} className="pill">{t}</span>
                ))}
              </div>

              <div className="p-action-btns">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                  <FiGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-filled">
                  <FiExternalLink /> View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;