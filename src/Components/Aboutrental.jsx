import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets";

const Aboutrental = ({ aboutRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={(el) => {
        aboutRef.current = el;
        sectionRef.current = el;
      }}
      id="aboutrental"
      className="w-full px-6 md:px-14 py-10 md:py-5 h-auto"
    >
      <div className="w-full h-full flex flex-col items-center relative gap-5">
        
        {/* Heading */}
        <div className="uppercase text-base md:text-2xl font-semibold text-[#00000080] text-center">
          about silverline rentals
        </div>

        {/* Content Section */}
        <div
          className="
            w-full flex flex-col-reverse 
            md:flex-row 
            gap-8 md:gap-5 items-center md:items-start
          "
        >
          {/* Left Side (Text + Button) */}
          <div className="flex flex-col justify-between py-0 sm:py-6 items-center w-full">
            
            <p className="
              text-base sm:text-lg 
              mt-0 sm:mt-10 
              text-justify 
              sm:px-6 md:px-0
            ">
              Founded in 2006, Silverline Group is a premier provider of
              equipment rental solutions, operating across the UAE, Qatar,
              Kuwait, Oman, and Saudi Arabia. We offer a wide range of
              high-quality, industry-certified equipment to support key
              sectors such as construction, oil & gas, and infrastructure.
              With flexible rental options, competitive pricing, and a strong
              focus on customer satisfaction, Silverline is the trusted
              partner for projects of every size and scope.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
              <Link to="/about">
                <p className="
                  bg-[#8B0000] 
                  hover:scale-105 
                  transition duration-300 ease-in-out 
                  px-6 py-2 rounded-full 
                  text-white text-sm
                ">
                  Explore More
                </p>
              </Link>
            </div>
          </div>

          {/* Right Side (Image) */}
          <img
            className="
              w-full h-80 max-w-[450px] 
              sm:max-w-[500px] object-cover
            "
            src={Logo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutrental;
