import React from "react";
import { Link } from "react-router-dom";
import {
  AirCompressorVec,
  CabinsVec,
  ConcreteMixerVec,
  GeneratorsVec,
  HeavyMachineryVec,
  SmallMachinesVec,
  TowerLightVec,
  WeldingMachineVec,
} from "../assets";

const categories = [
  { title: "Generators", image: GeneratorsVec, categoryValue: "Generators" },
  {
    title: "Air Compressors",
    image: AirCompressorVec,
    categoryValue: "Air Compressors",
  },
  {
    title: "TowerLights",
    image: TowerLightVec,
    categoryValue: "TowerLights",
  },
  {
    title: "Welding Machines",
    image: WeldingMachineVec,
    categoryValue: "Electrical Welding Machines",
  },
  {
    title: "Concrete Mixers",
    image: ConcreteMixerVec,
    categoryValue: "Concrete Mixers",
  },
  {
    title: "Small Machines",
    image: SmallMachinesVec,
    categoryValue: "Vaccum Cleaner",
  },
  {
    title: "Security Cabin",
    image: CabinsVec,
    categoryValue: "Security Cabin",
  },
  {
    title: "Heavy Machinery",
    image: HeavyMachineryVec,
    categoryValue: "Excavator", // ✅ changed
  },
];

const CategoryGrid = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h2 className="text-[#00000080] font-semibold text-base sm:text-lg">
          CATEGORIES WE RENT
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6 p-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 sm:p-10">
        {categories.map((item, index) => (
          <Link
            key={index}
            to={`/products?category=${encodeURIComponent(item.categoryValue)}`}
            className="flex flex-col items-center cursor-pointer sm:w-[30%] lg:w-[22%]"
          >
            <div className="flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain transition-transform duration-300"
              />
            </div>

            <p className="rounded-full px-4 py-2 sm:py-3 text-sm text-gray-700 text-center mt-4">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
