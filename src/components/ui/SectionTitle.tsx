import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {children}
      </h2>

      <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-blue-600" />
    </div>
  );
}