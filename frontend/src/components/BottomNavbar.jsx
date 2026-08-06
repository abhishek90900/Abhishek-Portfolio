import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// আধুনিক Remix Icons এর সেট
import {
  RiAccountCircleLine, RiAccountCircleFill,
  RiLayoutMasonryLine, RiLayoutMasonryFill, // একদম নতুন ম্যাসনরি গ্রিড স্টাইল
  RiArticleLine, RiArticleFill
} from 'react-icons/ri';
import './BottomNavbar.css';

const BottomNavbar = () => {
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      label: 'About',
      outline: <RiAccountCircleLine />,
      fill: <RiAccountCircleFill />
    },
    {
      path: '/portfolio',
      label: 'Projects',
      outline: <RiLayoutMasonryLine />, // আধুনিক আনইভেন গ্রিড স্টাইল
      fill: <RiLayoutMasonryFill />      // ক্লিক করলে ভর্তি হয়ে যাবে
    },
    {
      path: '/resume',
      label: 'Resume',
      outline: <RiArticleLine />, // সাধারণ পেপার আইকনের চেয়ে মডার্ন
      fill: <RiArticleFill />
    },
  ];

  return (
    <nav className="bottom-navbar">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link key={item.path} to={item.path} className={`bottom-nav-link ${isActive ? 'active' : ''}`}>
            <div className="icon-pill">
              {/* ক্লিক করার সময় আইকন ফিল্ড (ভর্তি) দেখাবে */}
              {isActive ? item.fill : item.outline}
            </div>
            <span className="bottom-nav-label">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default BottomNavbar;