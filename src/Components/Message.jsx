import React from 'react';
import { Person1 } from '../assets';

const MessageSection = () => {
  return (
    <div className="bg-white py-16 sm:px-4 text-center">
      <h2 className="text-4xl font-bold text-black leading-snug mb-12">
        Valued Message<br />From Valued People
      </h2>

      <div className="sm:px-26 px-10 flex flex-col items-center md:flex-row md:items-center gap-10 md:gap-12 text-left">
        {/* Image */}
        <img
          src={Person1}
          alt="Farooq Mahmood"
          className="w-[300px] h-[300px] object-cover rounded-xl"
        />

        {/* Message */}
        <div className="relative z-10 flex-1">
          <p className="text-lg text-black leading-relaxed">
            At Silverline Rental, we are committed to delivering excellence in equipment rental
            solutions. Our goal is to provide businesses with reliable, high-quality machinery that
            enhances efficiency and drives success.
          </p>

          <span className="absolute top-4 right-0 text-[180px] leading-20 text-[#B5B5B5] -z-10">”</span>

          {/* Name & Role */}
          <div className="mt-6">
            <p className="font-bold text-md tracking-wide">FAROOQ MAHMOOD</p>
            <p className="text-sm text-[#000000BF]">Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
