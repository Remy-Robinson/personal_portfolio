import project1 from "../assets/Project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import selfphoto from "../assets/selfphoto.png";
import { SkillsSection } from "../components/Skills";

const projects = [
  {
    id: 1,
    title: "Video Privacy App | Blurify",
    description: "A web application that blurs sensitive content from videos.",
    tags: ["Python", "PyTorch", "Flask", "OpenCV"],
    image: project1,
    link: "https://devpost.com/software/blurify-fast-and-easy-video-blurring-online",
  },
  {
    id: 2,
    title: "STM32 Environmental Monitor Board",
    description:
      "After spending time self-leaching KiCad, I designed a PCB board that is intended to monitor temperature conditions using an STM32 microcontroller.",
    tags: ["KiCad", "Embedded Systems", "STM32"],
    image: project2,
    link: "https://github.com/Remy-Robinson/STM32-Environmental-Monitor-Board",
  },
  {
    id: 3,
    title: "Autonomous Battlebot",
    description: "As a requirement for McMaster's Sumobot competition, I developed an autonomous battlebot capable of detecting opponents and avoiding collisions.",
    tags: ["Arduino", "C++", "Robotics"],
    image: project3,
    link: "https://devpost.com/software/sumo-bot-4l7o0c",
  },
  {
    id: 4,
    title: "DRV8833 Motor Driver PCB",
    description: "A motor driver board based on the DRV8833 chip, designed for controlling DC motors.",
    tags: ["KiCad", "PCB Design", "Motors"],
    image: project4,
    link: "https://example.com",
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

        <p className={`text-center text-muted-foreground mb-12 max-w-2xl mx-auto ${isDark ? "text-gray-200" : "text-gray-700"}`}>
          Here are some of my recent projects, showcasing my skills in software development and electronics.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block rounded-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-600/20 bg-white/10 dark:bg-gray-800/40 backdrop-blur-md`}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="h-56 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className={`text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors ${isDark ? "text-gray-200" : "text-gray-900"}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? "text-gray-100" : "text-gray-800"}`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm px-3 py-1 rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-500/80"
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
