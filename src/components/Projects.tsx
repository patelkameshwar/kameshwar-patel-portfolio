import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'MeetDoc-Online Doctor Appointment',
    description: 'EdgeCareer.AI – An AI-powered career platform that generates ATS-friendly resumes, cover letters, and helps with interview preparation, ensuring job seekers stand out in the hiring process. ',
    image: '/assets/meetdoc.png',
    link: 'https://presto-meetdoc.onrender.com',
    tags: ['React 19', 'Node.js 15', 'Tailwind CSS', 'MongoDB', 'JWT Authentication'],
  },
  {
    title: 'TechieHelp',
    description: 'TechieHelp is a platform founded by Kameshwar Patel that provides internships, career guidance, and tech services across various domains. It offers web development, app development, AI/ML solutions, UI/UX design, SEO, and more. TechieHelp also assists students with admissions, resume building, and placement preparation, making it a one-stop solution for tech enthusiasts and job seekers. ',
    image: '/assets/Tech.png',
    link: 'https://techiehelp.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'OnlineChat',
    description: 'TechieHelp is a platform founded by Kameshwar Patel that provides internships, career guidance, and tech services across various domains. It offers web development, app development, AI/ML solutions, UI/UX design, SEO, and more. TechieHelp also assists students with admissions, resume building, and placement preparation, making it a one-stop solution for tech enthusiasts and job seekers. ',
    image: '/assets/onlinechat.png',
    link: 'https://quick-chat-opal.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}