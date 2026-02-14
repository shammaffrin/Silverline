import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Teamimg } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const MeetOurPeople = () => {
  const cards = [
    {
      quote:
        "My journey with Silverline Rentals has been fantastic. The teamwork, innovation, and people-first culture make every day exciting.",
      name: "Arjun and Neha",
      location: "Silverline Rentals, India",
      image: Teamimg,
    },
    {
      quote:
        "At Silverline Rentals, we’re encouraged to think big and give back. Our mentors empower us to make an impact.",
      name: "Priya Sharma",
      location: "Silverline Rentals, India",
      image: Teamimg,
    },
    {
      quote:
        "Working here has been a transformative experience. Collaboration and trust are at the heart of what we do.",
      name: "Ravi Kumar",
      location: "Silverline Rentals, UAE",
      image: Teamimg,
    },
    {
      quote:
        "I’m proud to be part of a company that values creativity and innovation. It motivates me every day.",
      name: "Meera Nair",
      location: "Silverline Rentals, India",
      image: Teamimg,
    },
    {
      quote:
        "Every idea matters here. The leadership listens and encourages innovation from every level.",
      name: "Aarav Singh",
      location: "Silverline Rentals, India",
      image: Teamimg,
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our People
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl">
            At{" "}
            <span className="text-[#8B0000] font-semibold">
              Silverline Rentals
            </span>
            , we believe our people are our greatest strength. Every idea
            matters, every voice counts.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            768: { slidesPerView: 2 }, // 2 cards on desktop
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-lg overflow-hidden bg-black text-white h-80 md:h-96 flex flex-col">
                <img
                  src={card.image}
                  alt={card.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <FaQuoteLeft className="text-3xl mb-4 text-white/80" />
                  <p className="text-sm md:text-base leading-relaxed">
                    {card.quote}
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold">{card.name}</p>
                    <p className="text-sm text-gray-300">{card.location}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MeetOurPeople;
