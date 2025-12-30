import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Mern-Stack Intern",
    company: "TechieHelp",
    period: "Dec 2025 – Present ",
    description: `Launched and managed the Campus Ambassador Program for Reckon 6.0, overseeing the recruitment and coordination of campus ambassadors to promote the hackathon. 
      Handled student registration on Unstop, ensuring smooth onboarding and accurate data entry for participants. 
      Coordinated with campus ambassadors, providing them with the necessary resources and support to successfully promote Reckon 6.0 within their campuses. 
      Worked closely with the technical team to resolve any registration issues and streamline the event's processes. 
      Contributed to the overall success of the event by ensuring high engagement and participation through the campus ambassador network.`,
    skills: ["Mern-Stack", "Vercel/Render", "Git & Github", "OpenSource Contribution", "Team Collaboration"]
  },  
  {
    title: "Mern-Stack Intern",
    company: "Swaastik Solutions",
    period: "June 2025 - August 2025",
    description: `Selected for an 8-week MERN Stack Internship at Swaastik Solutions, where I gained hands-on experience in full-stack development using MongoDB, Express.js, React.js, and Node.js. Worked on real-world project development, implemented RESTful APIs, collaborated with team members, and enhanced problem-solving skills through mentorship and practical learning.`,
    skills: ["Mern-Stack", "UI/UX", "Problem Solving"],
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
