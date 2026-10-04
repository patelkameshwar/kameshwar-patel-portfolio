import React from "react";
import { Mail, MapPin } from "lucide-react";

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? "a" : "div";

  return (
    <Component
      href={href}
      className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>

      <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        {text}
      </span>
    </Component>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
      <ContactItem
        icon={<Mail className="w-5 h-5" />}
        text="patelkameshwar01@gmail.com"
        href="mailto:patelkameshwar01@gmail.com"
      />

      <ContactItem
        icon={<MapPin className="w-5 h-5" />}
        text="Jodhpur, Rajasthan, India"
      />
    </div>
  );
}