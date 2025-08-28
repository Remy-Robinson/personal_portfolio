import project1 from "../assets/Project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import { SkillsSection } from "./Skills";
import "./Projects.css"

const projects = [
  {
    id: 1,
    title: "Video Privacy App | Blurify",
    description:
      "A web application that blurs sensitive content from videos.",
    tags: ["Python", "PyTorch", "Flask", "OpenCV"],
    image: project1,
    link: "https://devpost.com/software/blurify-fast-and-easy-video-blurring-online",
  },
  {
    id: 2,
    title: "STM32 Environmental Monitor Board",
    description:
      "After spending time self-learning KiCad, I designed a PCB board that is intended to monitor temperature conditions using an STM32 microcontroller.",
    tags: ["KiCad", "Embedded Systems", "STM32"],
    image: project2,
    link: "https://github.com/Remy-Robinson/STM32-Environmental-Monitor-Board",
  },
  {
    id: 3,
    title: "Autonomous Battlebot",
    description:
      "As a requirement for McMaster's Sumobot competition, I developed an autonomous battlebot capable of detecting opponents and avoiding collisions.",
    tags: ["Arduino", "C++", "Robotics"],
    image: project3,
    link: "https://devpost.com/software/sumo-bot-4l7o0c",
  },
  {
    id: 4,
    title: "DRV8833 Motor Driver PCB",
    description:
      "A motor driver board based on the DRV8833 chip, designed for controlling DC motors.",
    tags: ["KiCad", "PCB Design", "Motors"],
    image: project4,
    link: "https://github.com/Remy-Robinson/Motor-Driver",
  },
  {
    id: 5,
    title: "Electric Scooter [In Progress]",
    description:
      "Working on taking a regular scooter and converting it into an electric scooter by integrating a brushless hub motor, BMS, ESC, throttle, and brake system.",
    tags: ["Battery Management", "Embedded Systems", "Electric Vehicles"],
    image: project5,
    link: "https://github.com/Remy-Robinson/Electric-Scooter",
  }
];

const ProjectsSection = ({ isDark }) => {
  return (
    <section id="projects" className="relative bg-secondary/30 px-6 py-24 z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className={`text-center text-3xl md:text-5xl font-bold mb-6 animate-gradient ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Projects
        </h2>

        <p
          className={`text-center mb-12 max-w-2xl mx-auto ${
            isDark ? "text-gray-200" : "text-gray-700"
          }`}
        >
          Here are some of my recent projects, showcasing my skills in software
          development and electronics.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block rounded-2xl overflow-hidden
              transform transition-all duration-500 ease-out
              hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-600/30
              backdrop-blur-md opacity-0 animate-fade-in
              ${isDark ? "bg-gray-700/60" : "bg-gray-300/30"}`}
              style={{
                animationDelay: `${i * 200}ms`,
                animationFillMode: "forwards",
              }}
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover
                             transform transition-transform duration-700 ease-out
                             group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3
                  className={`text-xl font-semibold mb-2 transition-colors duration-300
                              group-hover:text-indigo-400
                              ${isDark ? "text-gray-200" : "text-gray-900"}`}
                >
                  {project.title}
                </h3>
                <p
                  className={`text-sm mb-4 transition-colors duration-300
                              ${isDark ? "text-gray-100" : "text-gray-800"}`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 rounded-full bg-indigo-600 text-white
                                 shadow-md shadow-indigo-500/80
                                 transition-transform duration-300
                                 group-hover:scale-105"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="z-10 w-full">
        <SkillsSection isDark={isDark} />
      </div>
    </section>
  );
};

export default ProjectsSection;
