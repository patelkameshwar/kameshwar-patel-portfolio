import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "MernStack Intern",
    issuer: "Swaastik Solutions",
    date: "Year",
    link: "#",
    image: "/assets/Mern Stack Certificate.jpg",
  },
  {
    title: "Techiehelp OfferLetter",
    issuer: "TechieHelp",
    date: "Year",
    link: "#",
    image: "/assets/Techiehelp_offerLetter.jpg",
  },
  {
    title: "Network Defense",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/network defense.jpg",
  },
  {
    title: "Cybersecurity_certificate",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/Cybersecurity_certificate.jpg",
  },
  {
    title: "Introduction On Intellectual Property To Engineers And Technologists",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/Intellectual Property To Engineers And Technologists.jpg",
  },
  {
    title: "HTML Essentials",
    issuer: "Company Name",
    date: "Year",
    link: "#",
    image: "/assets/HTML Essentials.jpg",
  },
  {
    title: "Team Core",
    issuer: "Swaastik Solutions",
    date: "Year",
    link: "#",
    image: "/assets/teamswaastik.jpg",
  },
  {
    title: "Ethics Engineering",
    issuer: "Company Name",
    date: "Year",
    link: "#",
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
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