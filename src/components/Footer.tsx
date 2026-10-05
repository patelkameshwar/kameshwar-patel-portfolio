import React from "react";
import { Link } from "./Link";
import { SocialLinks } from "./hero/SocialLinks";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#github", label: "GitHub" },
    { href: "#certifications", label: "Certifications" },
    { href: "#education", label: "Education" },
    { href: "#badges", label: "Badges" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-6">

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-4 justify-center">
            {links.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </nav>

          {/* Social Links */}
          <div className="scale-90">
            <SocialLinks />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center space-y-2">
            <p>
              © {currentYear} Kameshwar Patel. All rights reserved.
            </p>

            <p className="flex items-center justify-center gap-2">
              Frontend-focused MERN Developer · Built with
              <FaReact className="w-5 h-5 text-blue-500" />
              React &{" "}
              <SiVite className="w-5 h-5 text-yellow-500" />
              Vite
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}