import React from "react";
import { FileText, FolderOpen } from "lucide-react";
import { Link } from "../Link";

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        href="#projects"
        className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm sm:text-base bg-blue-600 text-white hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
      >
        <FolderOpen className="w-5 h-5" />
        <span>View Projects</span>
      </Link>

      <a
        href="/assets/Kameshwar_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm sm:text-base text-blue-600 dark:text-blue-400 border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-transform duration-300 hover:scale-105"
      >
        <FileText className="w-5 h-5" />
        <span>View Resume</span>
      </a>
    </div>
  );
}