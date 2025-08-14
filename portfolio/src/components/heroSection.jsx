import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

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
    <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
      <h1
        className={`text-4xl md:text-6xl font-bold mb-4 ${
          isDark ? "text-white" : "text-gray-900"
        }`}
      >
        Remy Robinson
      </h1>
      <p
        className={`text-lg md:text-2xl mb-8 max-w-2xl ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        I'm a Computer Engineering Student @ McMaster specializing in building
        (and occasionally designing) digital experiences. Currently, I'm focused
        on building responsive full-stack web applications.
      </p>
      <div className="flex space-x-6">
        {buttons.map((button) => (
          <a
            key={button.id}
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-3xl ${button.className}`}
          >
            {button.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
