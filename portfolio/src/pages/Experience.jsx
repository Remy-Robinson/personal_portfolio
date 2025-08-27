import React, { useRef, useState, useEffect } from "react";
import "./Projects.css";

const experiences = [
  {
    role: "Full-Stack Development Intern",
    company: "Ridan 3D Industries Inc.",
    date: "JUL 2025 - AUG 2025",
    location: "Canada",
    description: "Built a full-stack interactive web application enabling real-time gesture-based user interaction using MediaPipe, integrating frontend and backend logic.",
    skills: ["React", "JavaScript", "Tailwind CSS", "MediaPipe", "Full-Stack Development", "Gesture Recognition"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=300&fit=crop&crop=center"
  },
  {
    role: "Web Design and Development Intern",
    company: "Quantuity Analytics Inc",
    date: "MAR 2025 - JUN 2025",
    location: "Canada",
    description: "Engineered a responsive WordPress website using HTML, CSS, and custom themes, aligned with modern web standards and Quantuity Analytics' branding.",
    skills: ["WordPress", "HTML", "CSS", "Figma", "UX/UI Design", "SEO", "Responsive Design"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=300&fit=crop&crop=center"
  },
  {
    role: "VR Technician",
    company: "Mirage VR",
    date: "JUN 2024 - FEB 2025",
    location: "Mississauga, Canada",
    description: "Maintained and calibrated virtual reality hardware, including headsets, controllers, sensors, and PCs, ensuring optimal performance for customers.",
    skills: ["VR Hardware", "Troubleshooting", "System Configuration", "Technical Support"],
    image: "https://www.rollingstone.com/wp-content/uploads/2021/01/AdobeStock_268919036.jpeg?w=1581&h=1054&crop=1"
  },
];

const Experience = ({ isDark = true }) => {
  const experienceItemsRef = useRef([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.2,
      rootMargin: "-50px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = entry.target.dataset.index;
        if (entry.isIntersecting && index !== undefined) {
          setVisibleItems(prev => [...new Set([...prev, parseInt(index)])]);
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    experienceItemsRef.current.forEach((item, index) => {
      if (item) {
        item.dataset.index = index;
        observer.observe(item);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="relative min-h-screen">
      {/* Header */}
      <div className="pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold animate-gradient mb-6">
          My Experience
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto px-6">
          Here's my professional journey and the skills I've developed along the way.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-7xl mx-auto px-8 pb-5 ml-8 md:ml-16">
        <div className="relative">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative mb-16 md:mb-20 opacity-0 transform translate-y-8 transition-all duration-700"
              ref={(el) => (experienceItemsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Dot + Date */}
              <div className="absolute -left-8 md:-left-16 top-10 flex items-center z-10">
                <span className="text-indigo-400 font-medium text-sm md:text-base mr-3">
                  {exp.date}
                </span>
                <div className="relative">
                  {visibleItems.includes(i) && (
                    <div className="absolute -inset-2 rounded-full bg-indigo-500 opacity-50 animate-ping" />
                  )}
                  <div className="w-4 h-4 rounded-full bg-indigo-300 border-2 border-slate-900 relative z-10" />
                </div>
              </div>

              {/* Content Card */}
              <div className="ml-24 md:ml-40">
                <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-lg overflow-hidden hover:border-slate-600/50 transition-all duration-500 hover:shadow-lg hover:shadow-indigo-600/10 group w-full max-w-4xl">
                  {/* Image Header */}
                  <div className="relative h-24 md:h-28 overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={`${exp.role} at ${exp.company}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-4">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm md:text-base text-indigo-500 font-semibold mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-3 text-xs md:text-sm">
                      {exp.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-0.5 text-xs bg-slate-700/50 border border-slate-600/50 text-gray-300 rounded-md hover:bg-slate-600/50 hover:border-indigo-600/50 hover:text-indigo-400 transition-all duration-300 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Experience;