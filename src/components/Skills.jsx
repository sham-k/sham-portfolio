import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import './Skills.css';

const skillsData = [
  {
    title: 'Languages',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    skills: ['React', 'React Native', 'Angular', 'Next.js', 'HTML5', 'CSS3', 'Jest'],
  },
  {
    title: 'Backend',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"/>
      </svg>
    ),
    skills: ['Node.js', 'Flask', 'Spring'],
  },
  {
    title: 'AI/ML',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    skills: ['LangChain', 'PyTorch', 'Hugging Face', 'Claude', 'Gemini', 'ChatGPT'],
  },
  {
    title: 'Cloud & DevOps',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
      </svg>
    ),
    skills: ['AWS', 'Kubernetes', 'Jenkins', 'Sonar', 'Git'],
  },
  {
    title: 'Mobile & Tools',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
      </svg>
    ),
    skills: ['Xcode', 'Android Studio', 'Figma', 'Jira', 'Okta'],
  },
];

const SkillCategory = ({ category }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <motion.div 
      ref={ref}
      className="skill-category"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      role="listitem"
    >
      <h3 className="skill-category-title">
        <span className="skill-category-icon" aria-hidden="true">
          {category.icon}
        </span>
        {category.title}
      </h3>
      <div className="skill-list">
        {category.skills.map((skill) => (
          <span key={skill} className="skill-item">{skill}</span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="section-header">
        <span className="section-label">Skills</span>
        <h2 className="section-title" id="skills-title">Technologies I work with</h2>
      </div>
      <div className="skills-container" role="list">
        {skillsData.map((category) => (
          <SkillCategory key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
