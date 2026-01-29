import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact', isCta: true },
  ];

  return (
    <motion.nav 
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      role="navigation" 
      aria-label="Main navigation"
    >
      <a href="#" className="nav-logo" aria-label="Home">SK<span>.</span></a>
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        aria-label="Toggle menu" 
        aria-expanded={isMenuOpen}
        aria-controls="nav-menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a 
              href={link.href} 
              className={`nav-link ${link.isCta ? 'nav-cta' : ''}`}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
