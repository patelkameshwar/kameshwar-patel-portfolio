import React from "react";
import { SectionTitle } from "./ui/SectionTitle";

const badges = [
  {
    id: "Quickdraw",
    platform: "GitHub",
    title: "Quickdraw",
    image: "https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png",
    profile: "https://github.com/users/patelkameshwar/achievements/quickdraw",
  },
  {
    id: "pull-shark",
    platform: "GitHub",
    title: "pull-shark",
    image: "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    profile: "https://github.com/patelkameshwar?achievement=pull-shark&tab=achievements",
  },
  {
    id: "Introduction to Cybersecurity",
    platform: "Cisco",
    title: "Introduction to Cybersecurity",
    image: "https://images.credly.com/size/680x680/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    profile: "https://www.credly.com/badges/426c8c1e-f2eb-48e7-bcaf-1c4e5f8f5440",
  },
  {
    id: "HTML Essentials",
    platform: "Cisco",
    title: "HTML Essentials",
    image: "https://images.credly.com/size/680x680/images/b1c17d0c-e76b-45fc-9b28-87b01ae1caf3/blob",
    profile: "https://www.credly.com/badges/b9092d11-9d6f-4617-8eaf-d5543e94dc02",
  },
  {
    id: "Network Defense",
    platform: "Cisco",
    title: "Network Defense",
    image: "https://images.credly.com/size/680x680/images/b1c17d0c-e76b-45fc-9b28-87b01ae1caf3/blob",
    profile: "https://www.credly.com/badges/01c5045c-e914-4ceb-8a50-b4311422aa63",
  },
];


export function Badges() {
  return (
    <section id="badges" className="py-20">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Coding Badges</SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 gap-4">
          {badges.map((badge) => (
            <a
              key={badge.id}
              href={badge.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group flex flex-col items-center justify-center p-5 bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl blur-lg transition-all duration-300" />

              {/* Badge Image */}
              <img
                src={badge.image}
                alt={badge.platform}
                className="w-30 h-30 rounded-md transition-transform duration-300 group-hover:scale-110"
              />

              {/* Badge Text */}
              <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white text-center">
                {badge.title}
              </p>
              <span className="text-sm text-gray-600 dark:text-gray-400">{badge.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
