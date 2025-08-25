import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import './heroSection.css';


const HeroSection = ({ isDark = true, setIsDark }) => {
  const buttons = [
    {
      id: 1,
      icon: (
        <FaGithub
          className={`text-gray-500 hover:text-gray-700 transition-colors ${
            isDark ? "text-gray-200" : "text-gray-800"
          }`}
        />
      ),
      href: "https://github.com/remy-robinson",
    },
    {
      id: 2,
      icon: (
        <FaLinkedin
          className={`text-gray-500 hover:text-gray-700 transition-colors ${
            isDark ? "text-gray-200" : "text-gray-800"
          }`}
        />
      ),
    },
    {
      id: 3,
      icon: (
        <MdOutlineEmail
          className={`text-gray-500 hover:text-gray-700 transition-colors ${
            isDark ? "text-gray-200" : "text-gray-800"
          }`}
        />
      ),
      href: "mailto:remyrobinson17@gmail.com",
    },
  ];

  // MAIN LOOP

  return (
    <section id="home">
      <div className="flex flex-col justify-center items-left min-h-screen px-4 text-center">
        <h1
          className={`text-left text-4xl md:text-6xl font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
      >
        Hi, I'm{" "}
        <span className="text-4xl md:text-6xl font-bold animate-gradient">
          Remy!
        </span>
      </h1>
      <p
        className={`text-left text-lg md:text-2xl mb-8 max-w-2xl animate-fade-in ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
      Welcome to my portfolio! I'm a Computer Engineering Student @ <span className="font-semibold">McMaster</span>, specializing in building
      digital experiences. 
      </p>
      <div className="flex space-x-6 max-w-2xl justify-center">
        {buttons.map((button) => (
          <a
            key={button.id}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            whilehover={{
              color: isDark ? "#818cf8" : "#6366f1",
            }}
            className={`text-3xl ${button.className}`}
          >
            {button.icon}
          </a>
        ))}
      </div>
      <div className="mt-8 space-x-6 max-w-2xl align-left">
        <a
          href="#experience"
          className={`cosmic-button  ${isDark ? "text-gray-200" : "text-gray-800"}`}
        >
         My Experience
        </a>
        <a
          href="#projects"
          className={`cosmic-button  ${isDark ? "text-gray-200" : "text-gray-800"}`}
        >
         View My Projects
        </a>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
