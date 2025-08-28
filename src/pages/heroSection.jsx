import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import './heroSection.css';

const HeroSection = ({ isDark = true, setIsDark }) => {
  const buttons = [
    {
      id: 1,
      icon: <FaGithub />,
      href: "https://github.com/remy-robinson",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      href: "https://linkedin.com", // replace with your LinkedIn
    },
    {
      id: 3,
      icon: <MdOutlineEmail />,
      href: "mailto:remyrobinson17@gmail.com",
    },
  ];

  // Smooth scroll with floating effect
  const scrollToSection = (id, buttonRef) => {
    const element = document.getElementById(id);
    if (element) {
      // Add a 'lift' animation class
      buttonRef.current.classList.add("lift");
      setTimeout(() => {
        buttonRef.current.classList.remove("lift");
      }, 300);

      // Scroll smoothly
      window.scrollTo({
        top: element.offsetTop - 50, // adjust offset if needed
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home">
      <div className="flex flex-col justify-center items-center min-h-screen px-4 text-center">
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
          Welcome to my portfolio! I'm a Computer Engineering Student @{" "}
          <span className="font-semibold">McMaster</span>, specializing in building
          digital experiences. 
        </p>

        {/* Social Buttons */}
        <div className="flex space-x-6 max-w-2xl justify-center">
          {buttons.map((button) => {
            const buttonRef = useRef(null);
            return (
              <a
                key={button.id}
                href={button.href}
                ref={buttonRef}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = button.href.startsWith("#")
                    ? button.href.replace("#", "")
                    : null;
                  if (targetId) scrollToSection(targetId, buttonRef);
                  else window.open(button.href, "_blank");
                }}
                className={`text-3xl cursor-pointer ${
                  isDark ? "text-gray-200 hover:text-indigo-400" : "text-gray-800 hover:text-indigo-600"
                } transition-colors`}
              >
                {button.icon}
              </a>
            );
          })}
        </div>

        {/* Portfolio Links */}
        <div className="mt-8 space-x-6 max-w-2xl">
          <a
            href="#experience"
            className={`cosmic-button ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
            My Experience
          </a>
          <a
            href="#projects"
            className={`cosmic-button ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
