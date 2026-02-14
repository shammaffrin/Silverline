import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { Herobg1, Herobg2, Herobg3, Herobg4, Herobg5 } from "../assets";

const Hero = ({ aboutRef }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  const slides = [
    { img: Herobg1, heading: "Extensive Inventory", description: "We maintain a wide range of high-performance equipment sourced from globally trusted manufacturers. Our fleet is industry-specific, rigorously maintained, and ready to meet diverse operational demands—ensuring you always have the right tools, exactly when you need them." },
    { img: Herobg2, heading: "Flexible Rental Solutions", description: "We provide tailored, cost-efficient rental options designed to align precisely with your project timelines and budget requirements. Whether for short-term engagements or extended operations, our solutions ensure seamless integration with your workflow while maximizing operational efficiency." },
    { img: Herobg3, heading: "Tailored Industry Expertise", description: "We understand the complexities of your field. From oil & gas to construction and infrastructure, our solutions are designed around your operational requirements supporting activities like drilling, production, well intervention, and exploration with precision and care." },
    { img: Herobg4, heading: "Dedicated Technical Support", description: "Our experienced team stands beside you at every stage offering expert guidance, technical assistance, and practical solutions. With Silverline, you’re never alone; we’re here to ensure your operations run smoothly and efficiently." },
    { img: Herobg5, heading: "Uncompromising Quality & Safety", description: "We prioritize safety and reliability in everything we deliver. Each piece of equipment undergoes thorough inspection and maintenance to meet the highest industry standards because your team’s safety and your project's success are our top priorities." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative sm:h-[100vh] h-[80vh] w-full overflow-hidden">
      <Navbar />

      {/* Background Slider */}
      <div className="absolute top-0 left-0 h-full w-full">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.img}
            alt=""
            className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Black Overlay */}
      <div className="h-full w-full absolute top-0 bg-[#00000080] z-10">
        <div className="h-full flex flex-col justify-end sm:justify-center px-5 sm:px-10 md:px-16 lg:px-0">

          {/* Text Container */}
          <a href="/about">
            <div
              className="
                text-white flex flex-col gap-3 
                max-w-[90%] sm:max-w-2xl 
                mb-28 sm:mb-0 sm:ml-20
              "
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
            >
              <h1 className="
                font-bold 
                text-2xl leading-tight
                sm:text-4xl 
                lg:text-5xl
              ">
                {slides[currentImage].heading}
              </h1>

              <p className="
                text-sm leading-relaxed 
                sm:text-lg 
                md:text-[16px] 
                opacity-90
              ">
                {slides[currentImage].description}
              </p>
            </div>
          </a>

          {/* Scroll Down Button */}
          <div className="
            absolute bottom-5 
            left-1/2 transform -translate-x-1/2 
            sm:left-1/2 sm:-translate-x-1/2
            text-white
          ">
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-2 text-xs sm:text-sm hover:underline"
            >
              <p>Scroll Down</p>
              <FaAnglesDown />
            </button>
          </div>

          {/* Social Icons */}
          <div className="
            absolute bottom-6 right-4 
            md:right-10 flex gap-4 
            text-white 
            text-xl sm:text-2xl
          ">
            <a className="hover:animate-bounce" href="https://www.facebook.com/SILVERLINE.RENTAL">
              <RiFacebookFill />
            </a>
            <a className="hover:animate-bounce" href="https://www.instagram.com/silverline_rental/">
              <RiInstagramFill />
            </a>
            <a className="hover:animate-bounce" href="https://www.linkedin.com/company/80963387/admin/dashboard/">
              <RiLinkedinBoxFill />
            </a>
            <a className="hover:animate-bounce" href="http://www.youtube.com/@silverlinerental3312">
              <RiYoutubeFill />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
