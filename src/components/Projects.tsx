import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'MeetDoc-Doctor Appointment',
    description: 'Appointment booking website, implemented three-level authentication for Patients, Doctors, and Admin. Patients can book and manage appointments, doctors can view appointments, earnings, and update profile, while admin can manage doctors and appointments through a dedicated dashboard.',
    image: '/assets/meetdoc.png',
    link: 'https://presto-meetdoc.onrender.com',
    tags: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Express.js', 'MongoDB', 'Git & GitHub', 'Render'],
  },
  {
    title: 'TechieHelp',
    description: 'TechieHelp – Contributed to the development of TechieHelp’s core platform and website. Worked on web development, feature implementation, and platform enhancements for a platform providing internships, career guidance, AI/ML solutions, UI/UX, and placement support.',
    image: '/assets/techie.png',
    link: 'https://www.techiehelp.in/',
    tags: ['React.js', 'Html', 'Css', 'JavaScript', 'Node.js', 'Tailwind CSS','Firebase'],
  },
  {
    title: 'OnlineChat',
    description: 'Developed a full-stack chat application using Socket.IO for real-time messaging. The app allows users to send and receive messages instantly without page reloads, supporting seamless one-on-one communication. Implemented user authentication, message storage, and dynamic updates.',
    image: '/assets/onlinechat.png',
    link: 'https://quick-chat-opal.vercel.app/',
    tags: ['React.js', 'Node.js', 'Express.js', 'Socket.IO', 'MongoDB', 'Git & GitHub', 'Vercel'],
  },
  {
    title: 'College Magzine',
    description: 'Created College Monthly Magazines, Worked collaboratively with a team to co-create and edit content for the college magazine. Collaborated on layouts and visuals using Canva and managed data with Excel. Ensured timely publication and maintain quality and consistency.',
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