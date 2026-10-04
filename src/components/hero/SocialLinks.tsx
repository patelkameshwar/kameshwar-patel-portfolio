import { Github, Linkedin } from "lucide-react";

const links = [
  {
    href: "https://github.com/patelkameshwar",
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/patelkameshwar/",
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-3">
      {links.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800
                     text-gray-700 dark:text-gray-200
                     border border-gray-200 dark:border-gray-700
                     hover:text-blue-600 dark:hover:text-blue-400
                     hover:border-blue-500
                     hover:-translate-y-1
                     transition-all duration-200"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}