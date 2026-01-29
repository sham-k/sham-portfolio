import React from 'react';
import { motion } from 'motion/react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <span className="hero-badge-dot" aria-hidden="true"></span>
          Available for opportunities
        </motion.div>
        
        <h1 className="hero-title" id="hero-title">
          <span className="hero-title-line">
            <motion.span 
              className="hero-title-text"
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              Shamar
            </motion.span>
          </span>
          <span className="hero-title-line">
            <motion.span 
              className="hero-title-text hero-title-accent"
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: '0%' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
            >
              Knibbs
            </motion.span>
          </span>
        </h1>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
        >
          Frontend Engineer crafting exceptional digital experiences with React, TypeScript, and modern web technologies. Passionate about performance, accessibility, and beautiful interfaces.
        </motion.p>
        
        <motion.div 
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
        >
          <a href="#contact" className="btn btn-primary">
            Get in Touch
            <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
