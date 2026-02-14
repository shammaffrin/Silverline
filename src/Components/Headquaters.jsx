import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const locations = [
  {
    country: "Dubai",
    address: "P.O Box: 80478, Saih Shuaib-4, Dubai Industrial City, UAE",
    email: "infodubai@silverlinerental.com",
    phone: "+971 4 576 2626",
    map: "#",
  },
  {
    country: "Qatar",
    address: "P.O Box: 201972, Doha, Qatar",
    email: "infoqatar@silverlinerental.com",
    phone: "+974 70 21 2312",
    map: "#",
  },
  {
    country: "Saudi Arabia",
    address: "P.O Box: 112233, Riyadh, KSA",
    email: "infosaudi@silverlinerental.com",
    phone: "+966 50 123 4567",
    map: "#",
  },
  {
    country: "Oman",
    address: "P.O Box: 445566, Muscat, Oman",
    email: "infooman@silverlinerental.com",
    phone: "+968 24 123 456",
    map: "#",
  },
];

const Headquaters = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-10">
      <h2 className="text-center text-xl font-semibold mb-10">
        OUR HEADQUARTERS LOCATIONS
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        {locations.map((loc, index) => (
          <SwiperSlide key={index}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-100 p-6 rounded-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold mb-3">{loc.country}</h3>
                <p className="mb-3">{loc.address}</p>
                <p className="mb-1 font-semibold">Email:</p>
                <p className="mb-3">{loc.email}</p>
                <p className="mb-1 font-semibold">Phone:</p>
                <p>{loc.phone}</p>
              </div>
              <a
                href={loc.map}
                className="text-sm underline mt-4 inline-block font-semibold"
              >
                View Map
              </a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Headquaters;
