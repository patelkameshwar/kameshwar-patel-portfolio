import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Master of Computer Applications',
    institution: 'JIET Group of Institutions, Jodhpur',
    score: '8.23 CGPA',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Mahatma Gandhi Kashi Vidyapith University, Varanasi',
    score: '59.75%',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: "Rana Vikram Inter College (RVIC), Varanasi",
    score: '65%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Education</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
