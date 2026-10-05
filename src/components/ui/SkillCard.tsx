import React from "react";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
  color?: string;
  url?: string;
}

export function SkillCard({
  name,
  icon: Icon,
  color,
  url,
}: SkillCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Learn more about ${name}`}
      className="group flex flex-col items-center justify-center p-4 min-h-[125px]
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        rounded-xl
        shadow-sm
        hover:shadow-md
        hover:-translate-y-1
        transition-all duration-300"
    >
      <div
        className="flex items-center justify-center w-14 h-14 rounded-xl
          transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: color ? `${color}18` : undefined,
        }}
      >
        <Icon
          size={38}
          color={color}
          aria-hidden="true"
        />
      </div>

      <span className="mt-3 text-sm font-medium text-center text-gray-800 dark:text-gray-200">
        {name}
      </span>
    </a>
  );
}