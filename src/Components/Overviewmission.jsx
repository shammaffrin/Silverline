import React from "react";
import { WhiteStar } from "../assets";

const OverVision = () => {
  return (
    <div className="w-full relative overflow-hidden bg-[#111111] text-white px-4 sm:px-6 md:px-20 py-16 sm:py-24 space-y-16 sm:space-y-24">
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-16 sm:h-20 md:h-28"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C360,140 1080,0 1440,80 L1440,150 L0,150 Z"
            fill="#111111"
          />
        </svg>
      </div>
      {/* MISSION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start border-b border-gray-800 pb-8 sm:pb-16">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            MISSION
          </h2>
        </div>

        <div className="flex gap-3 sm:gap-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          <img src={WhiteStar} alt="Star" className="w-4 h-4 mt-1 shrink-0" />
          <p>
            At Silverline Rental, we recognize that our people are the
            foundation of our success. We are committed to creating an
            inclusive, dynamic, and growth-oriented work environment where every
            team member feels valued and empowered.
          </p>
        </div>
      </div>

      {/* VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start border-b border-gray-800 pb-8 sm:pb-16">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            VISION
          </h2>
        </div>

        <div className="flex gap-3 sm:gap-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          <img src={WhiteStar} alt="Star" className="w-4 h-4 mt-1 shrink-0" />
          <p>
            We aim to cultivate a workplace that nurtures innovation,
            excellence, and leadership. By embracing sustainability and
            forward-thinking strategies, we strive to be an industry leader
            while empowering every individual within our organization.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
            VALUES
          </h2>
        </div>

        <div className="flex gap-3 sm:gap-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          <img src={WhiteStar} alt="Star" className="w-4 h-4 mt-1 shrink-0" />
          <p>
            Built on respect, teamwork, and professional growth, we foster a
            culture where safety, integrity, and collaboration guide everything
            we do.
          </p>
        </div>
      </div>

      {/* Subtle Accent Glow */}
      <div className="absolute -bottom-36 sm:-bottom-40 -left-36 sm:-left-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[100px] sm:blur-[120px] opacity-30 bg-[#8B0000]" />
      <div className="absolute -top-36 sm:-top-40 -right-36 sm:-right-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[100px] sm:blur-[120px] opacity-20 bg-[#8B0000]" />
    </div>
  );
};

export default OverVision;
