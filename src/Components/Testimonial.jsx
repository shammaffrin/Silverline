import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import {
  ADNOC,
  ALTRAD,
  EMARAT,
  ENOC,
  Halliburton,
  NMDC,
  NPCC,
  Person1,
  Person2,
  Schlumberger,
  SNOC,
  Vector1,
  Vector2,
  Weatherford,
} from "../assets";

const TestimonialCard = ({ image, name, role, quote }) => {
  return (
    <div className="relative flex flex-col justify-between bg-[#b5b5b523] backdrop-blur-3xl border border-[#B5B5B540] text-[#111] rounded-xl p-4 sm:p-6 w-full max-w-[360px] sm:max-w-[400px] h-[300px] sm:h-[320px] mx-auto">
      {/* Quote Icons */}
      <div className="text-4xl text-gray-500 mb-2 sm:mb-4">
        <div className="flex">
          <img className="w-6 sm:w-8" src={Vector1} alt="" />
          <img className="w-6 sm:w-8" src={Vector1} alt="" />
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-sm py-4 sm:py-6 sm:h-[100px] overflow-hidden">
        {quote}
      </p>

      {/* Name & Role */}
      <div className="flex justify-between items-end sm:pt-6">
        <div>
          <div className="text-sm font-semibold">{name}</div>
          <div className="text-xs text-[#111]">{role}</div>
        </div>
        <div className="flex">
          <img className="w-6 sm:w-8" src={Vector2} alt="" />
          <img className="w-6 sm:w-8" src={Vector2} alt="" />
        </div>
      </div>

      {/* Clipped Image */}
      <div
        className="absolute top-2 right-2 sm:top-4 sm:right-4 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] overflow-hidden z-10"
        style={{ clipPath: "circle(100% at 100% 0%)" }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      image: Person1,
      name: "David R",
      role: "Construction Manager",
      quote:
        "Silver Line Rental provided top-quality equipment at the best price. The rental process was smooth, and their customer support was excellent!",
    },
    {
      image: Person2,
      name: "Sarah L.",
      role: "Project Engineer",
      quote:
        "Reliable, well-maintained equipment and on-time delivery made our project hassle-free. Highly recommended!",
    },
    {
      image: Person1,
      name: "Ahmad S.",
      role: "Site Supervisor",
      quote:
        "Exceptional customer service and reliable machinery. Our go-to for all future rentals.",
    },
    {
      image: Person2,
      name: "Meera T.",
      role: "Architect",
      quote:
        "They had every tool we needed, and it was all in great shape. The whole process was smooth and easy.",
    },
    {
      image: Person1,
      name: "John D.",
      role: "Equipment Operator",
      quote:
        "Great experience overall. The team was knowledgeable, and the equipment exceeded expectations.",
    },
    {
      image: Person2,
      name: "Meera T.",
      role: "Architect",
      quote:
        "They had every tool we needed, and it was all in great shape. The whole process was smooth and easy.",
    },
  ];
  const logos = [
    ADNOC,
    ENOC,
    NMDC,
    NPCC,
    ALTRAD,
    EMARAT,
    Weatherford,
    SNOC,
    Schlumberger,
    Halliburton,
  ];

  return (
    <section className="bg-[#eee] min-h-0 lg:min-h-screen py-12 px-4 sm:px-8">
      <h2 className="text-center text-xs sm:text-lg text-[#111] mb-10 sm:mb-16 tracking-widest">
        WHAT OUR PEOPLE SAYS
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`${index % 2 !== 0 ? "lg:mt-14" : ""}`}
          >
            <TestimonialCard
              image={item.image}
              name={item.name}
              role={item.role}
              quote={item.quote}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full overflow-hidden pt-16">
        <div className="flex gap-32 animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="h-20 max-w-[250px] w-auto object-contain inline-block"
              alt="brand"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
