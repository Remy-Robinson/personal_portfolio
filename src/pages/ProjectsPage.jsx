import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectsPage.css';

// Import project images from assets
import project1 from '../assets/Project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';
import tailSyncImg from '../components/images/tailSync (1).png';

const projects = [
  {
    title: 'tailsync',
    role: 'deltahacks 12 winner',
    year: 'jan 2025',
    description:
      'secure multi-device collaboration platform enabling real-time chat and file sharing via tailscale vpn. built end-to-end encrypted p2p tunnels with zero-config networking — no servers, no cloud.',
    tech: ['electron', 'react', 'typescript', 'tailscale', 'node.js'],
    link: 'https://github.com/calvinkarthik/tailSync',
    image: tailSyncImg,
  },
  {
    title: 'blurify',
    role: 'privacy project',
    year: 'aug 2025',
    description:
      'a web application that blurs sensitive content from videos using pytorch inference pipelines. supports real-time frame-by-frame redaction with configurable detection thresholds.',
    tech: ['python', 'pytorch', 'flask', 'opencv'],
    link: 'https://devpost.com/software/blurify-fast-and-easy-video-blurring-online',
    image: project1,
  },
  {
    title: 'electric scooter',
    role: '[in progress]',
    year: '2025',
    description:
      'converting a regular scooter into an electric one by integrating a brushless hub motor, BMS, ESC, throttle, and brake system. focusing on efficient power delivery and safety.',
    tech: ['battery management', 'embedded systems', 'electric vehicles'],
    link: 'https://github.com/Remy-Robinson/Electric-Scooter',
    image: project5,
  },
  {
    title: 'stm32 pcb board',
    role: 'environmental sensor',
    year: '2024',
    description:
      'designed a pcb board for temperature and environmental monitoring using an stm32 microcontroller. focused on low-power sensor integration and kicad pcb layout best practices.',
    tech: ['kicad', 'embedded systems', 'stm32'],
    link: 'https://github.com/Remy-Robinson/STM32-Environmental-Monitor-Board',
    image: project2,
  },
  {
    title: 'autonomous battlebot',
    role: 'sumobot finalist',
    year: '2024',
    description:
      'autonomous battlebot capable of opponent detection and collision avoidance for mcmaster sumobot competition. developed control logic for tactical movement and sensor processing.',
    tech: ['arduino', 'c++', 'robotics'],
    link: 'https://devpost.com/software/sumo-bot-4l7o0c',
    image: project3,
  },
  {
    title: 'motor driver pcb',
    role: 'pcb design',
    year: '2024',
    description:
      'a custom motor driver board based on the drv8833 chip, designed for robust control of dc motors in robotics applications. includes thermal protection and current limiting.',
    tech: ['kicad', 'pcb design', 'motors'],
    link: 'https://github.com/Remy-Robinson/Motor-Driver',
    image: project4,
  },
];

export default function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <motion.div 
      className="proj-page"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 30, stiffness: 150 }}
    >
      {/* Minimal navbar */}
      <nav className="proj-nav">
        <button className="proj-back" onClick={() => navigate('/')}>← remy robinson</button>
        <span className="proj-nav-title">projects</span>
      </nav>

      {/* Cards grid */}
      <div className="proj-grid">
        {projects.map((p) => (
          <article className="proj-card" key={p.title}>
            {/* Image / placeholder */}
            <div className="proj-card-img">
              {p.image ? (
                <img src={p.image} alt={p.title} />
              ) : (
                <div className="proj-card-placeholder">
                  <span>{p.title}</span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="proj-card-body">
              <div className="proj-card-meta">
                <h2 className="proj-card-title">{p.title}</h2>
                <span className="proj-card-role">{p.role}</span>
              </div>
              <p className="proj-card-date">{p.year}</p>
              <p className="proj-card-desc">{p.description}</p>

              {/* Tech tags */}
              <div className="proj-card-tags">
                {p.tech.map((t) => (
                  <span className="proj-tag" key={t}>{t}</span>
                ))}
              </div>

              {/* Source button */}
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="proj-source-btn"
              >
                {/* GitHub mark SVG */}
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
                    0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
                    1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604
                    -2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176
                    0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404
                    2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221
                    0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293
                    0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                source
              </a>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}
