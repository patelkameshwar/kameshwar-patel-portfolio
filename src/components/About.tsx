import { User2, Code2, Briefcase, Target } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "Frontend-focused MERN developer with hands-on experience building web applications.",
      "Strong focus on React, JavaScript and responsive UI development.",
      "Interested in building clean, practical and user-focused products.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Build",
    description: [
      "Responsive web applications using React and modern JavaScript.",
      "REST APIs and full-stack features using Node.js and Express.js.",
      "Database-driven applications with MongoDB, authentication and role-based features.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: Briefcase,
    title: "My Experience",
    description: [
      "Hands-on experience through MERN stack internships.",
      "Worked on production websites, client projects and platform improvements.",
      "Experienced with debugging, feature development and team collaboration.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Target,
    title: "What I'm Looking For",
    description: [
      "Frontend, React or junior MERN developer opportunities.",
      "A team where I can contribute to real-world products.",
      "An environment where I can grow as a software developer.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.04]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-14 text-center">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Kameshwar Patel
            </span>
            , a frontend-focused MERN developer with hands-on experience
            building responsive web applications and full-stack projects. I
            primarily work with React and JavaScript, with experience in
            Node.js, Express.js and MongoDB.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I enjoy turning ideas into practical products, building
            user-friendly interfaces, integrating APIs and solving
            real-world development problems.
          </p>
        </div>

        {/* About Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(
            ({ icon: Icon, title, description, color }) => (
              <div key={title} className="relative group">
                {/* Subtle background effect */}
                <div
                  className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Card */}
                <div className="relative h-full bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className={`p-3 ${color} rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                      {title}
                    </h3>
                  </div>

                  <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                    {description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}