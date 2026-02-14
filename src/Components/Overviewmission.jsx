import React from "react";
import { WhiteStar } from "../assets";

const OverVision = () => {
  return (
    <div className="w-full relative overflow-hidden bg-[#111111] text-white px-6 md:px-20 py-24 space-y-24">

      {/* MISSION */}
      <div className="grid md:grid-cols-2 gap-16 items-start border-b border-gray-800 pb-16">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            MISSION
          </h2>
        </div>

        <div className="flex gap-4 text-gray-400 text-lg leading-relaxed">
          <img src={WhiteStar} alt="Star" className="w-4 h-4 mt-2 shrink-0" />
          <p>
            At Silverline Rental, we recognize that our people are the foundation
            of our success. We are committed to creating an inclusive, dynamic,
            and growth-oriented work environment where every team member feels
            valued and empowered.
          </p>
        </div>
      </div>

      {/* VISION */}
      <div className="grid md:grid-cols-2 gap-16 items-start border-b border-gray-800 pb-16">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            VISION
          </h2>
        </div>

        <div className="flex gap-4 text-gray-400 text-lg leading-relaxed">
          <img src={WhiteStar} alt="Star" className="w-4 h-4 mt-2 shrink-0" />
          <p>
            We aim to cultivate a workplace that nurtures innovation,
            excellence, and leadership. By embracing sustainability and
            forward-thinking strategies, we strive to be an industry leader
            while empowering every individual within our organization.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
            VALUES
          </h2>
        </div>

        <div className="flex gap-4 text-gray-400 text-lg leading-relaxed">
          <img src={WhiteStar} alt="Star" className="w-4 h-4 mt-2 shrink-0" />
          <p>
            Built on respect, teamwork, and professional growth, we foster
            a culture where safety, integrity, and collaboration guide
            everything we do.
          </p>
        </div>
      </div>

      {/* Subtle Accent Glow */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[120px] opacity-30 bg-[#8B0000]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[120px] opacity-20 bg-[#8B0000]" />
      
    </div>
  );
};

export default OverVision;
