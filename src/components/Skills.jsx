import React, { useState } from "react";
import './Skills.css';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiNumpy,
  SiFlask,
  SiArduino,
  SiKicad,
  SiAltiumdesigner,
  SiTailwindcss,
} from "react-icons/si";

// skills array
const skills = [
  // Languages
  { title: "HTML", icon: FaHtml5, category: "Languages" },
  { title: "CSS", icon: FaCss3, category: "Languages" },
  { title: "JavaScript", icon: FaJs, category: "Languages" },
  { title: "Python", icon: FaPython, category: "Languages" },
  { title: "C++", icon: SiCplusplus, category: "Languages" },

  // Frameworks & Libraries
  { title: "Node.js", icon: FaNodeJs, category: "Frameworks/Libraries" },
  { title: "NumPy", icon: SiNumpy, category: "Frameworks/Libraries" },
  { title: "Flask", icon: SiFlask, category: "Frameworks/Libraries" },
  { title: "React", icon: FaReact, category: "Frameworks/Libraries" },
  { title: "Tailwind", icon: SiTailwindcss, category: "Frameworks/Libraries" },

  // Tools
  { title: "Github", icon: FaGithub, category: "Tools" },
  { title: "Figma", icon: FaFigma, category: "Tools" },
  { title: "KiCad", icon: SiKicad, category: "Tools" },
  { title: "Altium Designer", icon: SiAltiumdesigner, category: "Tools" },
  { title: "Arduino", icon: SiArduino, category: "Tools" },
];

export const SkillsSection = ({ isDark }) => {
  const categories = ["All", "Languages", "Frameworks/Libraries", "Tools"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  // filter skills
  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative bg-secondary/30 px-6 py-24 z-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-indigo-800">
          Skills
        </h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`z-5 px-5 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/50"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              } ${isDark ? "text-gray-300" : "text-gray-700"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="z-10 flex flex-col items-center p-6 bg-white/5 rounded-2xl shadow-lg hover:shadow-indigo-500/50 transition-all duration-300"
              >
                <div className="z-10 w-12 h-12 mb-3 flex items-center justify-center bg-indigo-500/20 rounded-full">
                  <Icon className="z-10 w-8 h-8 text-white" />
                </div>
                <p
                  className={`text-lg font-medium ${isDark ? "text-gray-100" : "text-gray-700"}`}
                >
                  {skill.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
