import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
} from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";

const skills = [
  // Frontend
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "#e34f26",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    icon: SiCss3,
    color: "#1572b6",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#f7df1e",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React.js",
    icon: SiReact,
    color: "#61dafb",
    url: "https://react.dev/",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#38bdf8",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Redux",
    icon: SiRedux,
    color: "#764abc",
    url: "https://redux.js.org/",
  },

  // Backend
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#68a063",
    url: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
    url: "https://expressjs.com/",
  },

  // Database
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    url: "https://www.mongodb.com/",
  },

  // Tools
  {
    name: "Git",
    icon: SiGit,
    color: "#f34f29",
    url: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    color: "#181717",
    url: "https://github.com/patelkameshwar",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "#ff6c37",
    url: "https://www.postman.com/",
  },
  {
    name: "Vite",
    icon: SiVite,
    color: "#646cff",
    url: "https://vite.dev/",
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-5xl mx-auto">
          {/* Frontend */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-5 text-center">
              Frontend Development
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {skills
                .filter((skill) =>
                  [
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "React.js",
                    "Tailwind CSS",
                    "Redux",
                  ].includes(skill.name)
                )
                .map((tech) => (
                  <SkillCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    color={tech.color}
                    url={tech.url}
                  />
                ))}
            </div>
          </div>

          {/* Backend & Database */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-5 text-center">
              Backend & Database
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {skills
                .filter((skill) =>
                  ["Node.js", "Express.js", "MongoDB"].includes(skill.name)
                )
                .map((tech) => (
                  <SkillCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    color={tech.color}
                    url={tech.url}
                  />
                ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-5 text-center">
              Tools & Workflow
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {skills
                .filter((skill) =>
                  ["Git", "GitHub", "Postman", "Vite"].includes(
                    skill.name
                  )
                )
                .map((tech) => (
                  <SkillCard
                    key={tech.name}
                    name={tech.name}
                    icon={tech.icon}
                    color={tech.color}
                    url={tech.url}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}