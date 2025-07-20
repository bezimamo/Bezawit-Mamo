"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Personal Portfolio (v1)",
    description: "My first portfolio built with HTML, CSS, and JS showcasing my early journey into web dev.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/portfolio.png",
    link: "https://bezawitmamo-bitsr01.netlify.app/",
  },
  {
    title: "Rick & Morty Viewer",
    description: "A Vue 3 + Tailwind app to explore Rick and Morty characters and episodes.",
    techStack: ["Vue 3", "Tailwind CSS"],
    image: "/images/projects/rick.png",
    link: "https://rick-morty-project1.netlify.app/",
  },
  {
    title: "Real-Time Chat App",
    description: "Built with React + Firebase during my Awura internship to allow live chat functionality.",
    techStack: ["React", "Firebase"],
    image: "/images/projects/chatapp.png",
    link: "https://react-chat-app-five-zeta.vercel.app/",
  },
  {
    title: "QR Ticket Validator",
    description: "Cross-platform QR scanner for Owl Events — web with Next.js/Convex and mobile with Flutter.",
    techStack: ["Next.js", "Convex", "Flutter", "Firebase"],
    image: "/images/projects/validator.png",
    link: "#", // Placeholder
  },
  {
    title: "Hiyaw Animation Website",
    description: "Professional website to showcase animations and promote Hiyaw’s creative work.",
    techStack: ["Next.js", "Tailwind CSS"],
    image: "/images/projects/hiyaw.png",
    link: "https://www.hiyawanimations.com/"
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const project = projects[current];

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-white to-indigo-50 py-20 px-4 text-gray-800"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-700 mb-4">Projects</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore some of my most exciting work — blending design, code, and real-world problem solving.
        </p>

        <div className="relative">
          <div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl overflow-hidden transition duration-300 px-6 sm:px-10 py-8 sm:py-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text section */}
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-indigo-800 mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-white bg-indigo-600 px-5 py-2 rounded-full hover:bg-indigo-700 transition"
                  >
                    View Live
                  </a>
                )}
                {project.link === "#" && (
                  <span className="inline-block mt-2 text-sm text-gray-500 italic">
                    Live link coming soon
                  </span>
                )}
              </div>

              {/* Image section */}
              <div className="flex justify-center">
                <div className="rounded-xl overflow-hidden border border-gray-300 shadow-md max-w-full max-h-[350px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={520}
                    height={320}
                    className="object-contain w-full h-auto max-h-[350px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden md:flex">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white text-indigo-700 hover:bg-indigo-100 shadow-md transition"
              aria-label="Previous project"
            >
              <ChevronLeft size={28} />
            </button>
          </div>
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden md:flex">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white text-indigo-700 hover:bg-indigo-100 shadow-md transition"
              aria-label="Next project"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
