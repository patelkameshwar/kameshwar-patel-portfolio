import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "MERN Stack Intern",
    company: "TechieHelp",
    period: "Dec 2025 – April 2026",
    description: `Worked on TechieHelp's core platform, official website, and client web projects using the MERN stack. Implemented responsive UI, new features, UI/UX improvements, bug fixes, and performance enhancements. Built and integrated frontend functionality with backend services and APIs. Worked on custom websites based on client requirements and collaborated with the team to deliver features and fixes. Contributed to maintaining existing applications, debugging issues, and improving overall user experience.`,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Git & GitHub",
      "Debugging",
      "Responsive UI",
      "Performance Optimization",
      "Team Collaboration",
    ],
  },

  {
    title: "MERN Stack Intern",
    company: "Swaastik Solutions",
    period: "June 2025 – August 2025",
    description: `Completed an 8-week MERN Stack internship with hands-on experience building and improving full-stack web applications. Worked with React.js, Node.js, Express.js, and MongoDB, implemented RESTful APIs, developed responsive interfaces, and collaborated with the team on real-world development tasks.`,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Responsive UI",
      "UI/UX",
      "Problem Solving",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>

        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <div key={index}>
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}