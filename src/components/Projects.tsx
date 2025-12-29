import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';

const projects = [
  {
    title: 'EdgeCareer',
    description: 'EdgeCareer.AI – An AI-powered career platform that generates ATS-friendly resumes, cover letters, and helps with interview preparation, ensuring job seekers stand out in the hiring process. ',
    image: '/assets/edge.png',
    link: 'https://github.com/amitkumardemo/EdgeCareer.git',
    tags: ['React 19', 'Node.js 15', 'Tailwind CSS & Shadcn UI', 'NeonDB & Prisma', 'Clerk Authentication', 'Inngest', 'Gemini API'],
  },
  {
    title: 'TechieHelp',
    description: 'TechieHelp is a platform founded by Amit Kumar that provides internships, career guidance, and tech services across various domains. It offers web development, app development, AI/ML solutions, UI/UX design, SEO, and more. TechieHelp also assists students with admissions, resume building, and placement preparation, making it a one-stop solution for tech enthusiasts and job seekers. ',
    image: '/assets/Tech.png',
    link: 'https://techiehelpt.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'University-Management-System',
    description: 'A comprehensive University Management System designed to streamline student and faculty data management, academic tracking, fee handling, and more. This system offers a centralized database solution to manage and optimize various university operations with ease.',
    image: '/assets/uni.png',
    link: 'https://github.com/amitkumardemo/University-Management-System.git',
    tags: ['Core Java', 'MySQL', 'Swings'],
  },
  {
    title: 'Plant-Disease-Detection-System',
    description: 'The Plant Disease Detection System is an AI-powered solution designed to identify crop diseases using deep learning techniques.',
    image: '/assets/plant.png',
    link: 'https://github.com/amitkumardemo/Plant-Disease-Detection-System.git',
    tags: ['Python', 'Tensorflow', 'Keras','OpenCv','Numpy','Pandas','Streamlit','Matplotlib'],
  },
  {
    title: 'TechieHelp_Chatbot',
    description: 'TechieHelp-AI Chatbot Assistant is an intelligent and user-friendly assistant designed to provide seamless support to users.',
    image: '/assets/chat.png',
    link: 'https://github.com/amitkumardemo/TechieHelp_Chatbot.git',
    tags: ['Python', 'MongoDB', 'Gemini API', 'Streamlit'],
  },
  {
    title: 'image_to_pdf_converter',
    description: 'Image to PDF Converter is a tool that converts images (JPG, PNG, etc.) into a single or multiple-page PDF file. It allows users to upload images, adjust order, and generate a high-quality PDF for easy sharing and storage.',
    image: '/assets/img.png',
    link: 'https://imagetopdfconverter.streamlit.app/',
    tags: ['python', 'Streamlit', 'Pillow', 'Fpdf'],
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