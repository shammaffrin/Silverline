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
  { title: "Diesel Generators", image: GeneratorsVec },
  { title: "Air Compressors", image: AirCompressorVec },
  { title: "Tower Lights", image: TowerLightVec },
  { title: "Welding Machines", image: WeldingMachineVec },
  { title: "Concrete Mixers", image: ConcreteMixerVec },
  { title: "Small Machines", image: SmallMachinesVec },
  { title: "Cabins", image: CabinsVec },
  { title: "Heavy Machinery", image: HeavyMachineryVec },
];

const CategoryGrid = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h2 className="text-[#00000080] font-semibold text-base sm:text-lg">
          CATEGORIES WE RENT
        </h2>
      </div>

      {/* MOBILE = GRID | DESKTOP = FLEX */}
      <div
        className="
          grid grid-cols-2 gap-6 p-6   
          sm:flex sm:flex-wrap sm:justify-center sm:gap-8 sm:p-10
        "
      >
        {categories.map((item, index) => (
          <Link
            to={`/products?category=${encodeURIComponent(item.title)}`}
            key={index}
            className="
              flex flex-col items-center cursor-pointer
              sm:w-[30%] lg:w-[22%]       /* Desktop sizing remains same */
            "
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
