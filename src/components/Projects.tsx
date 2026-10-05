import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ProjectCard } from "./ui/ProjectCard";

const projects = [
  {
    title: "MeetDoc – Doctor Appointment Platform",
    description:
      "Built a full-stack doctor appointment platform with separate authentication and dashboards for patients, doctors, and admins. Implemented appointment booking and management, doctor profiles, earnings tracking, and admin controls.",
    image: "/assets/meetdoc.png",
    link: "https://presto-meetdoc.onrender.com",
    github: "https://github.com/patelkameshwar/Presto",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Tailwind CSS",
      "Render",
    ],
  },

  {
    title: "TechieHelp – Web Platform",
    description:
      "Contributed to TechieHelp's core platform and official website during my internship. Worked on responsive UI, new features, bug fixes, performance improvements, client websites, and platform enhancements based on requirements.",
    image: "/assets/techie.png",
    link: "https://www.techiehelp.in/",
    github: "https://github.com/patelkameshwar/TechieHelp.in",
    tags: [
      "React.js",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Node.js",
      "Firebase",
      "Git",
    ],
  },

  {
    title: "OnlineChat – Real-Time Chat Application",
    description:
      "Developed a full-stack real-time chat application using Socket.IO. Implemented user authentication, message storage, instant messaging, and dynamic UI updates without page reloads.",
    image: "/assets/onlinechat.png",
    link: "https://quick-chat-opal.vercel.app/",
    github: "ADD_YOUR_ACTUAL_GITHUB_REPO_URL",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Authentication",
      "Vercel",
    ],
  },

  {
    title: "College Monthly Magazine",
    description:
      "Collaborated with the college magazine team to create and edit monthly publications. Worked on layouts and visual content using Canva and managed supporting data using Microsoft Excel.",
    image: "/assets/canva.png",
    link: "https://www.canva.com/design/DAGmCsjYtTI/7n2crk0144raWALzqLqFQA/edit?utm_content=DAGmCsjYtTI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    github: "",
    tags: ["Canva", "Microsoft Excel", "Content Editing", "Team Collaboration"],
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}