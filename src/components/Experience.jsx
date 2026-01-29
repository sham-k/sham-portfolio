import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import './Experience.css';

const experienceData = [
  {
    date: '2022 – 2025',
    company: 'Optum',
    role: 'Frontend Engineer – Web & Mobile',
    description: [
      'Built an Adobe Analytics engagement dashboard for the UHC mobile app, reducing time to insight by 75% for product leadership',
      'Developed Angular stakeholder form pages enabling users to view and validate vendor data through streamlined workflows',
      'Owned break/fix for heavy UI, resolving critical issues and partnering with backend/API teams to restore reliability',
      'Directed the design and development of major UHC Mobile Platform features, boosting overall customer satisfaction',
    ],
  },
  {
    date: '2020',
    company: 'The Wall Street Journal',
    role: 'Frontend Software Developer',
    description: [
      'Reduced content deployment time by 85% across 300+ websites by developing 12+ customizable React/Next.js components',
      'Collaborated on designing and launching a custom internal newsroom design system for 50+ users organization-wide',
    ],
  },
  {
    date: '2020',
    company: 'The Knowledge House',
    role: 'Frontend Engineer',
    description: [
      'Employed React, Next.js, and GraphQL to design reusable components, elevating the applicant pool by 25%',
      'Reduced deployment time by 50% with Trello and GitHub integration, empowering efficient team collaboration',
    ],
  },
];

const ExperienceItem = ({ item, index }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <motion.article 
      ref={ref}
      className="experience-item"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      role="listitem"
    >
      <div className="experience-dot" aria-hidden="true"></div>
      <span className="experience-date">{item.date}</span>
      <h3 className="experience-company">{item.company}</h3>
      <p className="experience-role">{item.role}</p>
      <ul className="experience-description">
        {item.description.map((desc, i) => (
          <li key={i}>{desc}</li>
        ))}
      </ul>
    </motion.article>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section-header">
        <span className="section-label">Experience</span>
        <h2 className="section-title" id="experience-title">Where I've worked</h2>
      </div>
      <div className="experience-timeline" role="list">
        {experienceData.map((item, index) => (
          <ExperienceItem key={item.company} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
