import React, { useRef } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Photo1,Photo10,Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, } from "../assets/assets";

const Lifeatsilver = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10];

  return (
    <div className="p-10 relative">
      <h2 className="text-4xl mb-8 font-semibold">Life at Silverline</h2>

      <div className="relative">

        {/* LEFT BUTTON */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 
          bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300 transition z-10"
        >
          <ChevronLeft size={24} />
        </button>

        {/* RIGHT BUTTON */}
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 
          bg-gray-200 p-3 rounded-full shadow hover:bg-gray-300 transition z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          spaceBetween={0}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={false}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt="Team"
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default Lifeatsilver;
