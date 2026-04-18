import React from "react";
import Navbar from "./Navbar";
import LoginNavbar from "./LoginNavbar";
import { CareerBanner1, SilverBg } from "../assets";

const OverviewBanner = () => {
  return (
    <div className="w-full md:min-h-screen bg-gray-100 relative overflow-hidden">
      <LoginNavbar />
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <img className="h-full w-full object-cover" src={SilverBg} alt="" />
      </div>

      {/* Content */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[70vh] sm:min-h-[100vh] px-4 sm:px-6 md:px-12">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-bold uppercase  sm:pt-16">
          Welcome to Silverline GROUP
        </h1>

        {/* Description */}
        <p className="max-w-xs sm:max-w-xl md:max-w-2xl text-base sm:text-lg md:text-lg text-black mt-4 sm:mt-6 leading-relaxed">
          #proudsilverian
        </p>

        {/* Button placeholder (optional) */}
      </section>
    </div>
  );
};

export default OverviewBanner;
