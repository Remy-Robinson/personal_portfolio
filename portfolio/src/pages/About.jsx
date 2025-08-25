import React from "react";
import "./About.css";
import Card from "../components/Card.jsx";
import selfphoto from '../assets/selfphoto.png';
import { SkillsSection } from "../components/Skills.jsx";

const AboutMe = ({ isDark = true }) => {
  return (
    <section
      id="about"
      className="flex flex-col justify-start items-center min-h-screen px-4 py-12 gap-16"
    >
      {/* Top: About text + image */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full gap-10">
        {/* LEFT: About text */}
        <div className="flex-1">
          <h2
            className={`text-left text-3xl md:text-5xl font-bold mb-6 animate-gradient ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            About Me!
          </h2>

          <p
            className={`text-left text-lg md:text-xl max-w-3xl mb-6 animate-fade-in ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm a{" "}
            <span className="font-semibold text-indigo-400">
              Computer Engineering at McMaster University
            </span>{" "}
            with a passion for{" "}
            <span className="font-semibold text-indigo-400">
              software development and creating electronics
            </span>
            .
          </p>

          <p
            className={`text-left text-lg md:text-xl max-w-3xl mb-6 animate-fade-in ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I’ve worked on projects ranging from{" "}
            <span className="font-semibold">autonomous robotics</span> to{" "}
            <span className="font-semibold">React-based web apps</span>. Recently, I've been focused on{" "}
            <span className="font-semibold">learning new technologies</span>{" "}
            in order to create projects with a real-world impact.
          </p>

          <p
            className={`text-left text-lg md:text-xl max-w-3xl mb-10 animate-fade-in ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm always looking forward to meeting new people! Feel free to reach out if you are{" "}
            <span className="font-semibold">hiring interns</span>,{" "}
            <span className="font-semibold">looking to work on projects</span>, or{" "}
            <span className="font-semibold">if you have any questions!</span>
          </p>
        </div>

        {/* RIGHT: Image */}
        <div className="flex-1 flex justify-center items-start h-full w-full">
          <div className="relative inline-block picframe mt-10">
            <img
              src={selfphoto}
              alt="Description"
              className="w-88 h-88 rounded-[10px] shadow-lg transition-transform duration-300 hover:scale-105 relative z-10 ring-4 ring-blue-500 ring-offset-2 ring-offset-black hover:shadow-[0_0_20px_5px_rgba(59,130,246,0.7)]"
            />
          </div>
        </div>
      </div>

      {/* Skills Section BELOW the top row */}
      <div className="z-10 w-full">
        <SkillsSection
          isDark={isDark}
        />
      </div>
    </section>
  );
};

export default AboutMe;
