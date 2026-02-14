import React from "react";
import { WhiteStar } from "../assets";


const Vision = () => {
  return (
    <div className="w-full relative overflow-hidden -z-20 bg-black text-white px-6 md:px-20 py-16 space-y-16">
      {/* Vision */}
      <div className="flex flex-col md:flex-row md:items-start gap-10 border-b border-gray-700 pb-10">
        <div className="md:w-1/2">
          <h2 className="text-[32px] sm:text-4xl font-bold">VISION</h2>
        </div>
        <div className="md:w-1/2 flex items-center gap-5 text-gray-300 text-lg">
        <img src={WhiteStar} alt="Star" className="w-3 h-3 mt-2" />
          To revolutionize innovation and creativity by providing efficient and reliable solutions to build a better world.
        </div>
      </div>

      {/* Mission */}
      <div className="flex flex-col md:flex-row md:items-start gap-10 border-b border-gray-700 pb-10">
        <div className="md:w-1/2 flex items-start gap-3">
          <h2 className="text-[32px] sm:text-4xl font-bold">MISSION</h2>
        </div>
        <div className="md:w-1/2 flex items-center gap-5 text-gray-300 text-lg">
        <img src={WhiteStar} alt="Star" className="w-3 h-3 mt-2" />
          Empowering companies across the Globe by providing best-in-class machinery through reliable equipment rental solutions and efficient facility management operations to ensure consistent development.
        </div>
      </div>

      {/* Values */}
      <div className="flex flex-col md:flex-row md:items-start gap-10">
        <div className="md:w-1/2 flex items-start gap-3">
          <h2 className="text-[32px] sm:text-4xl font-bold">VALUES</h2>
        </div>
        <div className="md:w-1/2 flex items-center gap-5 text-gray-300 text-lg space-y-2">
        <img src={WhiteStar} alt="Star" className="w-3 h-3 mt-2" />
          <div>
          <p>We TRUST through Accountability</p>
          <p>We prioritize SAFETY at every step</p>
          <p>We unite everyone with TEAMWORK</p>
          <p>We delight CUSTOMERS every time</p>
          <p>We uphold CONSISTENCY anytime every time</p>
          <p>We inspire INNOVATION through experimentation</p>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 -bottom-20 rounded-full -left-20 w-82 h-82 blur-[90px] opacity-80 bg-[#8B0000]">
      </div>
      <div className="absolute -z-10 top-0 rounded-full -right-32 w-82 h-82 blur-[90px] opacity-80 bg-[#8B0000]">
      </div>
    </div>
  );
};

export default Vision;
