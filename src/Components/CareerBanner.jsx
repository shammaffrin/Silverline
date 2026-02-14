import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { CareerBanner1, CareerBanner2 } from "../assets";

const CareerBanner = () => {
  const images = [CareerBanner1, CareerBanner2]; // You can add more images here
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full sm:h-[90vh] h-[70vh]">
      <Navbar />
      <section
        className="w-full h-full bg-center bg-cover flex flex-col justify-center relative transition-all duration-700"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Overlay */}

        {/* Text Content */}
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide z-10 pl-16">
          JOIN OUR TEAM
        </h1>
        <p className="pl-16 text-white max-w-2xl text-justify mt-2">At Silverline Construction & Machinery Rental LLC, we believe in empowering talent, nurturing growth, and building success stories. Our culture is rooted in collaboration, respect, and a shared commitment to excellence where every team member is valued and supported. Join us in shaping the future of infrastructure.</p>
      </section>
    </div>
  );
};

export default CareerBanner;
