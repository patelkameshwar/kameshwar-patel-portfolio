import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    link: "",
    image: "/assets/HTML Essentials.jpg",
  },
  {
    title: "CSS Essentials",
    issuer: "Cisco Networking Academy",
    date: "2026",
    link: "",
    image: "/assets/CSS_Essentials_certificate.jpg",
  },
  {
    title: "JavaScript",
    issuer: "HackerRank",
    date: "2026",
    link: "",
    image: "/assets/javascript_basic certificate.jpg",
  },
  {
    title: "MERN Stack Internship",
    issuer: "Swaastik Solutions",
    date: "2025",
    link: "",
    image: "/assets/Mern Stack Certificate.jpg",
  },
  {
    title: "Team Core",
    issuer: "Swaastik Solutions",
    date: "2025",
    link: "",
    image: "/assets/teamswaastik.jpg",
  },
  {
    title: "Internship Offer Letter",
    issuer: "TechieHelp",
    date: "2025",
    link: "",
    image: "/assets/Techiehelp_offerLetter.jpg",
  },
  {
    title: "Front-end Developer",
    issuer: "TechieHelp",
    date: "2025-2026",
    link: "",
    image: "/assets/techiehelp_Completion_Certificate.jpg",
  },
  {
    title: "Network Defense",
    issuer: "Cisco Networking Academy",
    date: "2025",
    link: "",
    image: "/assets/network defense.jpg",
  },
  {
    title: "Introduction to Intellectual Property for Engineers and Technologists",
    issuer: "NPTEL",
    date: "2025",
    link: "",
    image: "/assets/Intellectual Property To Engineers And Technologists.jpg",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2025",
    link: "",
    image: "/assets/Cybersecurity_certificate.jpg",
  },
  {
    title: "Engineering Ethics",
    issuer: "NPTEL",
    date: "2025",
    link: "",
    image: "/assets/Ethics Engineering.jpg",
  },
];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications & Achievements</SectionTitle>

        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
