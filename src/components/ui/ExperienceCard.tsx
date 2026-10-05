import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-6 sm:pl-10">
      {/* Timeline Dot */}
      <div className="absolute left-[-17px] top-6 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
        <div className="w-2.5 h-2.5 bg-white rounded-full" />
      </div>

      {/* Experience Card */}
      <div className="bg-white dark:bg-gray-900 p-5 sm:p-7 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="shrink-0 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {title}
            </h3>

            <p className="mt-1 text-base font-medium text-blue-600 dark:text-blue-400">
              {company}
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {period}
            </p>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            Key Contributions
          </h4>

          <ul className="space-y-2.5">
            {description.split("\n").map((line, index) => {
              const cleanLine = line.trim();

              if (!cleanLine) return null;

              return (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm sm:text-base leading-6 text-gray-700 dark:text-gray-300"
                >
                  <span className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
                  <span>{cleanLine}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            Technologies & Skills
          </h4>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="px-3 py-1.5 text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}