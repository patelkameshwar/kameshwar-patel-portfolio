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
  SiAxios,
  SiSocketdotio,
  SiAmazonwebservices,
  SiTerraform,
  SiCloudinary,
} from "react-icons/si";

import { FaNodeJs, FaServer } from "react-icons/fa";

const frontendSkills = [
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
];

const backendSkills = [
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
  {
    name: "REST APIs",
    icon: FaServer,
    color: "#2563eb",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/REST",
  },
  {
    name: "Axios",
    icon: SiAxios,
    color: "#5a29e4",
    url: "https://axios-http.com/",
  },
  {
    name: "JWT / Auth",
    icon: FaServer,
    color: "#111827",
    url: "https://jwt.io/",
  },
  {
    name: "Socket.IO",
    icon: SiSocketdotio,
    color: "#010101",
    url: "https://socket.io/",
  },
];

const databaseCloudSkills = [
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47a248",
    url: "https://www.mongodb.com/",
  },
  {
    name: "Cloudinary",
    icon: SiCloudinary,
    color: "#3448c5",
    url: "https://cloudinary.com/",
  },
  {
    name: "AWS",
    icon: SiAmazonwebservices,
    color: "#ff9900",
    url: "https://aws.amazon.com/",
  },
  {
    name: "Terraform",
    icon: SiTerraform,
    color: "#7b42bc",
    url: "https://www.terraform.io/",
  },
];

const toolsSkills = [
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

interface Skill {
  name: string;
  icon: any;
  color: string;
  url: string;
}

function SkillGroup({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-5 text-center">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((tech) => (
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
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto">
          <SkillGroup title="Frontend Development" skills={frontendSkills} />

          <SkillGroup title="Backend & APIs" skills={backendSkills} />

          <SkillGroup title="Database & Cloud" skills={databaseCloudSkills} />

          <SkillGroup title="Tools & Workflow" skills={toolsSkills} />
        </div>
      </div>
    </section>
  );
}
