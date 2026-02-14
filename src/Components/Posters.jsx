// PosterSlider.jsx
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Import Autoplay module
import "swiper/css";
import { Poster1, Poster2, Poster3, Poster4 } from "../assets";

const posters = [
  Poster1,
  Poster2,
  Poster3,
  Poster4,
  Poster1,
  Poster2,
  Poster3,
  Poster4,
];

const Posters = () => {
  return (
    <div className="w-full py-10 bg-[#eee] px-6">
      <div className="uppercase text-xl text-center mb-10 font-semibold text-[#8B0000]">
        featured products
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="px-4"
      >
        {posters.map((poster, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="rounded-xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={poster}
                alt={`Poster ${index + 1}`}
                className="w-full object-cover aspect-[4/5]"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Posters;
