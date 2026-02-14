import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import Autoplay
import "swiper/css";
import { CgArrowTopRight } from "react-icons/cg";
import {
  Airman185,
  Airman655,
  AsphaltCutters,
  ConcreteMixers,
  Cummins,
  Denyo,
  Excavator,
  JackHammers,
  Miller,
  PlateCompactors,
  RollerCompactors,
  TowerLight,
  Vibrator,
} from "../assets";

const categories = [
  {
    title: "Diesel Generators",
    image: Cummins, // ✅ Pick a main representative image
  },
  {
    title: "Air Compressors",
    image: Airman185, // Example image
  },
  {
    title: "Tower Lights",
    image: TowerLight, // Example image
  },
  {
    title: "Welding Machines",
    image: Miller, // Example image
  },
  {
    title: "Small Machines",
    image: Vibrator, // Example image
  },
  {
    title: "Cabins",
    image: PlateCompactors, // Placeholder image
  },
  {
    title: "Heavy Machinery",
    image: Excavator,
  },
];

const CategorySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="px-4 sm:px-6 md:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
        <h2 className="text-[#00000080] font-semibold text-base sm:text-lg">
          CATEGORIES WE RENT
        </h2>
        <div className="text-gray-400 font-medium text-sm">
          {String(currentSlide).padStart(2, "0")} —{" "}
          {String(categories.length).padStart(2, "0")}
        </div>
      </div>

      {/* Swiper */}
      <div className="px-2 sm:px-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          modules={[Autoplay]} // ✅ Register autoplay module
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false, // Keeps autoplay after user interaction
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
          onSwiper={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              {/* Image Card */}
              <div className="bg-[#f4f4f4] rounded-2xl p-6 sm:p-10 flex items-center justify-center h-[250px] sm:h-[300px] md:h-[360px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-contain max-h-full max-w-full hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              {/* Title + Arrow */}
              <a href="/products">
                <div className="flex items-center justify-between w-full mt-4 group">
                  <p className="bg-[#f4f4f4] rounded-full px-4 py-2 sm:py-3 text-sm text-gray-700 w-full text-center">
                    {item.title}
                  </p>
                  <div className="bg-[#8B0000] text-white p-2 sm:p-2.5 rounded-full text-lg ml-2 shrink-0 group-hover:translate-x-2 group-hover:-translate-y-2 ease-in-out duration-300">
                    <CgArrowTopRight />
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
