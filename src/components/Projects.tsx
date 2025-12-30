import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'MeetDoc-Online Doctor Appointment',
    description: 'Built a full-stack appointment booking website and implemented three-level authentication for Patients, Doctors, and Admin. Patients can book and manage appointments, doctors can view appointments, earnings, and update profiles, while admins can manage doctors and appointments through a dedicated dashboard.',
    image: '/assets/meetdoc.png',
    link: 'https://presto-meetdoc.onrender.com',
    tags: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Git & GitHub', 'Render'],
  },
  {
    title: 'TechieHelp',
    description: 'TechieHelp – Contributed to the development of TechieHelp’s core platform and website. Worked on web development, feature implementation, and platform enhancements for a platform providing internships, career guidance, AI/ML solutions, UI/UX, and placement support.',
    image: '/assets/Tech.png',
    link: 'https://techiehelp.netlify.app/',
    tags: ['React.js', 'Node.js', 'Tailwind CSS','Firebase'],
  },
  {
    title: 'OnlineChat',
    description: 'Developed a full-stack chat application using MongoDB, Express, React, Node.js, and Socket.IO for real-time messaging. The app allows users to send and receive messages instantly without page reloads, supporting seamless one-on-one communication. Implemented user authentication, message storage, and dynamic updates to create a smooth and interactive chat experience.',
    image: '/assets/onlinechat.png',
    link: 'https://quick-chat-opal.vercel.app/',
    tags: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Git & GitHub', 'Vercel'],
  },
  {
    title: 'College Magzine',
    description: 'TechieHelp is a platform founded by Kameshwar Patel that provides internships, career guidance, and tech services across various domains. It offers web development, app development, AI/ML solutions, UI/UX design, SEO, and more. TechieHelp also assists students with admissions, resume building, and placement preparation, making it a one-stop solution for tech enthusiasts and job seekers. ',
    image: '/assets/canva.png',
    link: 'https://www.canva.com/design/DAGmCsjYtTI/7n2crk0144raWALzqLqFQA/edit?utm_content=DAGmCsjYtTI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    tags: ['Canva'],
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