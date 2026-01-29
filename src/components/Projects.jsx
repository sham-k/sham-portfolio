import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import './Projects.css';

const projectsData = [
  {
    title: 'Kidopedia AI',
    description: 'An AI-native learning platform delivering safe, interactive educational experiences for children. Features real-time LLM interaction with robust content-moderation safeguards.',
    tech: ['React', 'Next.js', 'TypeScript', 'Python', 'Flask', 'LLM APIs'],
    link: 'https://github.com/sham-k/kidopedia-ai',
    isEnterprise: false,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Enterprise analytics dashboard tracking screen-level usage and engagement for the UHC mobile app, reducing time to insight by 75% for product leadership.',
    tech: ['Angular', 'TypeScript', 'Adobe Analytics', 'AWS'],
    link: null,
    isEnterprise: true,
  },
  {
    title: 'WSJ Design System',
    description: 'Custom internal newsroom design system providing operational support for 50+ users, featuring 12+ customizable components that reduced deployment time by 85%.',
    tech: ['React', 'Next.js', 'Component Library'],
    link: null,
    isEnterprise: true,
  },
  {
    title: 'ShipFoundry',
    description: 'AI-powered app builder that generates complete Next.js applications from text descriptions. Describe your app idea and get a production-ready codebase instantly.',
    tech: ['TypeScript', 'Next.js', 'AI', 'Code Generation'],
    link: 'https://github.com/sham-k/shipfoundry',
    isEnterprise: false,
  },
  {
    title: 'Onboarding Agent',
    description: 'AI-powered onboarding assistant built with Next.js, TailwindCSS, and n8n — automates personalized onboarding summaries via OpenAI.',
    tech: ['TypeScript', 'Next.js', 'TailwindCSS', 'n8n', 'OpenAI'],
    link: 'https://github.com/sham-k/Onboarding-Agent',
    isEnterprise: false,
  },
  {
    title: 'SoundMind',
    description: 'AI Emotion Recognition from Voice using MFCC and Deep Learning. Analyzes audio to detect emotional states through advanced machine learning techniques.',
    tech: ['Python', 'Deep Learning', 'MFCC', 'Audio Processing'],
    link: 'https://github.com/sham-k/SoundMind',
    isEnterprise: false,
  },
];

const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <motion.article 
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      role="listitem"
    >
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      {project.isEnterprise ? (
        <span className="project-link project-link-enterprise">Enterprise Project</span>
      ) : (
        <a 
          href={project.link} 
          className="project-link"
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
      )}
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="section-header">
        <span className="section-label">Projects</span>
        <h2 className="section-title" id="projects-title">Featured work</h2>
      </div>
      <div className="projects-grid" role="list">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
