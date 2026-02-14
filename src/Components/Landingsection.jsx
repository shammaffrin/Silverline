import React from 'react';
import { Kuwaitflag, Logo, Omanflag, Qatarflag, SaudiArabiaflag, UAEflag } from '../assets';

const countries = [
  {
    name: 'UAE',
    flag: UAEflag,
  },
  {
    name: 'Qatar',
    flag: Qatarflag,
  },
  {
    name: 'Oman',
    flag: Omanflag,
  },
  {
    name: 'Kuwait',
    flag: Kuwaitflag,
  },
  {
    name: 'Saudi Arabia',
    flag: SaudiArabiaflag,
  },
];

const LandingSection = ({ onCountryClick }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden bg-[#d6d6d6]">
      {/* Foreground content */}
      <div className="z-10 max-w-4xl">
        <img src={Logo} alt="Silverline Group Logo" className="mx-auto w-40 mb-2" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          DISCOVER OUR GLOBAL REACH
        </h1>
        <p className="text-gray-700 mb-6">
          Welcome to Silverline Rental!<br/>With a strong presence across the Middle East, we provide specialized equipment rental solutions tailored to your industry's needs. Select your region to explore our wide range of services, trusted expertise, and how we can support your next project with reliability and efficiency.
        </p>
        <p className="text-md font-medium text-gray-800 mb-8">
          Reliable Equipment, Regional Expertise!
        </p>

        {/* Country Selector */}
        <div className="flex flex-wrap justify-center gap-6">
          {countries.map((country) => (
            <div
              key={country.name}
              onClick={onCountryClick}
              className="flex flex-col items-center cursor-pointer bg-[#ffffff2b] rounded-2xl py-2 w-32 hover:scale-105 transition-transform"
            >
              <img
                src={country.flag}
                alt={country.name}
                className="w-12 h-8 object-cover mb-1 rounded-sm"
              />
              <span className="text-sm font-medium">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
