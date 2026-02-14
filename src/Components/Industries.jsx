import React from "react";
import {
  Construction,
  Defense,
  Events,
  Manufacturing,
  Marine,
  OilandGas,
} from "../assets";

const industries = [
 {
  icon: OilandGas,
  title: "Oil And Gas",
  description: "Comprehensive exploration, drilling, and production support services ensuring safety and efficiency throughout the oil and gas lifecycle.",
},
{
  icon: Construction,
  title: "Construction",
  description: "End-to-end project planning, resource management, and on-site operations delivering sustainable and innovative infrastructure solutions.",
},
{
  icon: Events,
  title: "Events",
  description: "Expert logistics, meticulous coordination, and state-of-the-art infrastructure to create memorable and seamless event experiences.",
},
{
  icon: Manufacturing,
  title: "Manufacturing",
  description: "Advanced production line optimization and factory automation to enhance productivity, quality, and operational efficiency.",
},
{
  icon: Marine,
  title: "Marine And Ports",
  description: "Efficient port management and vessel operations ensuring smooth maritime logistics and compliance with global standards.",
},
{
  icon: Defense,
  title: "Defense & Military",
  description: "Robust security systems and comprehensive defense logistics tailored to meet critical military operational demands.",
},

];

const Industries = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <h2 className="text-[28px] sm:text-4xl font-bold mb-12 leading-snug sm:text-left text-center">
        Industries We <br /> Serves
      </h2>

      {/* Top 4 cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 md:border-b border-[#B5B5B580]">
        {industries.slice(0, 4).map((industry, index) => (
          <div
            key={index}
            className={`relative group flex flex-col items-center text-center p-6 overflow-hidden transition-all duration-300 ${
              index !== 3 ? "md:border-r" : ""
            } md:border-[#B5B5B580]`}
          >
            {/* Default Content */}
            <div className="flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0">
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                <img
                  src={industry.icon}
                  alt={industry.title}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-semibold mb-1">{industry.title}</h3>
              <a href="#" className="text-sm text-[#B5B5B5] hover:underline">
                Learn More
              </a>
            </div>

            {/* Hover Content */}
            <div
              className="absolute inset-0 bg-[#8B0000] text-white p-6 flex items-center justify-center text-sm text-center
  opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0
  transition-all duration-500"
            >
              {industry.description}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom 2 cards centered */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="hidden md:block"></div>

        {/* Card 5 */}
        <div className="relative group flex flex-col items-center text-center p-6 md:border-r md:border-b border-[#B5B5B580] overflow-hidden transition-all duration-300">
          <div className="flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0">
            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <img
                src={industries[4].icon}
                alt={industries[4].title}
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-semibold mb-1">{industries[4].title}</h3>
            <a href="#" className="text-sm text-[#B5B5B5] hover:underline">
              Learn More
            </a>
          </div>
          <div
            className="absolute inset-0 bg-[#8B0000] text-white p-6 flex items-center justify-center text-sm text-center
  opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0
  transition-all duration-500"
          >
            {industries[4].description}
          </div>
        </div>

        {/* Card 6 */}
        <div className="relative group flex flex-col items-center text-center p-6 md:border-b border-[#B5B5B580] overflow-hidden transition-all duration-300">
          <div className="flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0">
            <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mb-4">
              <img
                src={industries[5].icon}
                alt={industries[5].title}
                className="w-8 h-8"
              />
            </div>
            <h3 className="font-semibold mb-1">{industries[5].title}</h3>
            <a href="#" className="text-sm text-[#B5B5B5] hover:underline">
              Learn More
            </a>
          </div>
          <div
            className="absolute inset-0 bg-[#8B0000] text-white p-6 flex items-center justify-center text-sm text-center
  opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0
  transition-all duration-500"
          >
            {industries[5].description}
          </div>
        </div>

        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default Industries;
