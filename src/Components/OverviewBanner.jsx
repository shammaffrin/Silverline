import React from "react";
import md from "../assets/Management/md.jpeg";
import shamila from "../assets/Management/shamila.jpeg";
import Thanzil from "../assets/Management/thanzil.jpeg";

const Card = ({ image, name, role, dark }) => {
  return (
    <div className="flex flex-col items-center 
                    w-40 sm:w-44 md:w-48 lg:w-52 
                    rounded-xl overflow-hidden 
                    shadow-lg bg-white">

      {/* Image */}
      <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div
        className={`w-full text-center py-3 px-2 sm:py-4 sm:px-3 ${
          dark ? "bg-[#4a4346] text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        <h3 className="font-semibold text-sm sm:text-base md:text-lg">
          {name}
        </h3>
        <p className="text-xs sm:text-sm opacity-80">
          {role}
        </p>
      </div>
    </div>
  );
};

export default function ManagementChart() {
  return (
    <div className="w-full bg-gray-100 
                    py-10 sm:py-16 md:py-20 
                    px-4 sm:px-6 md:px-10 
                    overflow-x-hidden">

      {/* Title */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold 
                       text-[#8b2c2c] mb-12 sm:mb-20 
                       border-b-2 border-[#8b2c2c] 
                       inline-block">
          MANAGEMENT
        </h2>
      </div>

      <div className="flex flex-col items-center">

        {/* MD */}
        <Card
          image={md}
          name="Ummer Farook"
          role="(Managing Director)"
          dark
        />

        {/* Vertical Line */}
        <div className="w-px  sm:h-16 bg-gray-500"></div>

        {/* Horizontal Line */}
        <div className="relative hidden md:block 
                        w-[700px] max-w-5xl mx-auto 
                        h-px bg-gray-500">

          <div className="absolute left-0 top-0 
                          w-px h-16 bg-gray-500"></div>

          <div className="absolute left-1/2  top-0 
                          w-px h-16 bg-gray-500"></div>

          <div className="absolute right-0 top-0 
                          w-px h-16 bg-gray-500"></div>
        </div>

        {/* Second Row */}
        <div className="mt-10 md:mt-16 
                        w-full max-w-5xl mx-auto
                        flex flex-col md:grid md:grid-cols-3
                        items-center md:items-start
                        gap-12 md:gap-0">

          {/* Person 1 */}
          <div className="flex flex-col items-center">
            <Card
              image={shamila}
              name="Shameela Nafih"
              role="(Chief of Staff)"
              dark
            />

            {/* Child Connector */}
            <div className="w-px h-8 sm:h-12 bg-gray-500"></div>

            <Card
              image="/assistant.jpg"
              name="Executive Assistant"
              role="Assistant"
            />
          </div>

          {/* Person 2 */}
          <div className="flex justify-center">
            <Card
              image={Thanzil}
              name="Thanzil Athinan"
              role="(Business Manager)"
              dark
            />
          </div>

          {/* Person 3 */}
          <div className="flex justify-center">
            <Card
              image="/person3.jpg"
              name="Operations Head"
              role="Manager"
              dark
            />
          </div>

        </div>
      </div>
    </div>
  );
}