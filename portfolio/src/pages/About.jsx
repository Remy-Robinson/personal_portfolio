import React from "react";
import "./About.css";
import Card from "../components/Card.jsx";
import selfphoto from '../assets/selfphoto.png';

const AboutMe = ({ isDark = true }) => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row justify-between items-start min-h-screen px-4 py-12 gap-10"
    >
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
            software development and creating innovative tech
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
          <span className="font-semibold">React-based web apps</span>. Beyond
          engineering, I care deeply about{" "}
          <span className="font-semibold">environmental sustainability</span>{" "}
          and integrating technology with real-world impact.
        </p>

        <p
          className={`text-left text-lg md:text-xl max-w-3xl mb-10 animate-fade-in ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Outside of coding, you’ll probably find me{" "}
          <span className="font-semibold">exploring nature trails</span>,{" "}
          <span className="font-semibold">learning new tech</span>, or{" "}
          <span className="font-semibold">experimenting with DIY electronics</span>.
        </p>
      </div>
      <div className="flex-1 justify-end h-full w-full">
        <img
        src={selfphoto}
        alt="Description"
        className={`w-88 h-88 justify-right object-cover rounded-[10px] border-4 ${
            isDark ? "border-indigo-400" : "border-indigo-600"
        } shadow-lg transition-transform duration-300 ml-30 mt-10 hover:scale-105`}
        />  
      </div>
    </section>
  );
};

export default AboutMe;
