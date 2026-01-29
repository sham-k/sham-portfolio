import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import './About.css';

const About = () => {
  const [contentRef, contentInView] = useInView({ threshold: 0.3 });
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '300+', label: 'Websites Enhanced' },
    { value: '85%', label: 'Deployment Reduction' },
    { value: '12+', label: 'Components Built' },
  ];

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="section-header">
        <span className="section-label">About Me</span>
        <h2 className="section-title" id="about-title">
          Building the future of the web,<br/>one component at a time.
        </h2>
      </div>
      
      <div className="about-grid">
        <motion.div 
          ref={contentRef}
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>
            I'm a Frontend Engineer based in New York City with a passion for creating seamless, accessible, and performant web experiences. With experience at major companies like <strong>Optum</strong> and <strong>The Wall Street Journal</strong>, I've had the privilege of working on products that reach millions of users.
          </p>
          <p>
            I specialize in React ecosystems and have a growing expertise in AI/ML integration, having earned my <strong>Google Generative AI Leader Certificate</strong> in 2025. When I'm not coding, I'm exploring the intersection of education and artificial intelligence.
          </p>
        </motion.div>
        
        <div ref={statsRef} className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
