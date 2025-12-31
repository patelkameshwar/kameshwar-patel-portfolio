import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Mern-Stack Intern",
    company: "TechieHelp",
    period: "Dec 2025 – Present ",
    description: `Contributed to the core project and official website of TechieHelp, focusing on web development and platform improvements.  
Worked on implementing new features, enhancing user experience, and optimizing the website for better performance.  
Collaborated with the team to ensure smooth functionality and maintain high code quality across the platform.  
Assisted in managing content, layouts, and interactive elements to improve the overall usability of the site.  
Worked on client projects, developing and delivering custom web solutions according to client requirements.  
Contributed to the growth and effectiveness of TechieHelp by helping create a seamless experience for students seeking internships, career guidance, and tech services.`,
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Git & Github", "Vercel/Render", "Debugging", "OpenSource Contribution", "Team Collaboration"]
  },  
  {
    title: "Mern-Stack Intern",
    company: "Swaastik Solutions",
    period: "June 2025 - August 2025",
    description: `Selected for an 8-week MERN Stack Internship at Swaastik Solutions, where I gained hands-on experience in full-stack development using MongoDB, Express.js, React.js, and Node.js. Worked on real-world project development, implemented RESTful APIs, collaborated with team members, and enhanced problem-solving skills through mentorship and practical learning.`,
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "UI/UX", "Problem Solving"],
  }
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
