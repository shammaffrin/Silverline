import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { CgArrowTopRight, CgChevronLeft, CgChevronRight } from "react-icons/cg";
import {
  Airman1550,
  ConcreteMixers,
  CoreCutters,
  Cummins,
  Denyo,
  Forklifts,
  WheelLoader,
} from "../assets"; // Replace with actual image paths

import { Navigation, Autoplay } from "swiper/modules";
const heroData = [
  {
    title: "Air Compressors",
    desc: "Powerful and efficient air compressors for all your pneumatic tool needs. Reliable performance for construction and industrial applications.",
    btnText: "Rent Now",
    img: Airman1550,
  },
  {
    title: "Generators",
    desc: "Dependable power solutions for any job site. Our generators provide consistent and efficient energy to keep your operations running smoothly.",
    btnText: "Explore Generators",
    img: Cummins,
  },
  {
    title: "Welding Machines",
    desc: "Versatile welding machines suitable for various materials and thicknesses. Perfect for fabrication, repairs, and construction projects.",
    btnText: "View Details",
    img: Denyo,
  },
  {
    title: "Forklift",
    desc: "Essential for warehouses and industrial sites, this compact yet powerful machine is ideal for lifting and transporting heavy materials with ease and precision.",
    btnText: "Check Availability",
    img: Forklifts,
  },
  {
    title: "Concrete Mixer",
    desc: "Designed for efficient mixing of concrete, this machine ensures a consistent blend for your construction needs, enhancing productivity on-site.",
    btnText: "Rent Mixer",
    img: ConcreteMixers,
  },
  {
    title: "Core Cutters",
    desc: "Precision cutting tools for concrete and masonry. Ideal for creating clean, accurate holes for plumbing, electrical, and other installations.",
    btnText: "See Options",
    img: CoreCutters,
  },
  {
    title: "Wheel Loader",
    desc: "Built for heavy lifting and loading tasks, this machine offers excellent traction and maneuverability—perfect for moving large volumes of material quickly.",
    btnText: "Explore Loader",
    img: WheelLoader,
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="w-full bg-[#B5B5B540] relative overflow-hidden max-h-[70vh] sm:max-h-[100vh]">
      {/* Static Title - Top Left */}
      <div className="absolute top-10 left-6 sm:top-14 sm:left-14 z-0 text-black">
        <h1 className="text-4xl sm:text-4xl italic lg:text-6xl font-extrabold">
          {heroData[activeIndex].title.split(" ")[0]} <br />
          {heroData[activeIndex].title.split(" ")[1]}
        </h1>
      </div>

      {/* Static Rent Info Box - Responsive */}
      <div className="absolute z-30 w-[90%] sm:w-[280px] left-1/2 sm:left-auto sm:right-40 top-[70%] sm:top-52 transform -translate-x-1/2 sm:translate-x-0">
        <div className="bg-[#B5B5B51A] backdrop-blur-md text-[#00000080] rounded-xl p-4 shadow-md">
          <p className="text-sm mb-2">{heroData[activeIndex].desc}</p>
          <a href="/products">
          <div className="flex items-center gap-2 text-sm font-medium text-[#00000080] hover:underline cursor-pointer">
            {heroData[activeIndex].btnText}
            <CgArrowTopRight />
          </div></a>
        </div>
      </div>

      {/* Swiper - Only Slides the Image */}
      <Swiper
        slidesPerView={1}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false, // Keeps autoplay active after user interaction
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={setSwiperRef}
        className="w-full h-full"
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center w-full h-[70vh] md:h-[100vh]">
              <img
                src={item.img}
                alt={item.title}
                className="absolute z-20 object-contain w-[80%] sm:w-[600px] h-auto max-h-[700px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Info - Bottom Right */}
      <div className="absolute z-50 bottom-6 right-4 sm:right-10 text-sm sm:text-base text-gray-500 flex items-center gap-2">
        <span
          onClick={() => {
            const prevIndex =
              (activeIndex - 1 + heroData.length) % heroData.length;
            swiperRef?.slideToLoop(prevIndex);
          }}
          className="font-medium cursor-pointer hover:text-black"
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <span
          onClick={() => {
            const nextIndex = (activeIndex + 1) % heroData.length;
            swiperRef?.slideToLoop(nextIndex);
          }}
          className="opacity-60 hover:text-black hover:opacity-100 cursor-pointer"
        >
          Swipe →
        </span>
        <span className="font-medium cursor-pointer">0{heroData.length}</span>
      </div>
    </section>
  );
};

export default HeroSlider;
