import React from "react";
import Navbar from "./Navbar";

const OverviewBanner = () => {
    return (
        <div className="w-full min-h-screen bg-gray-100 relative  overflow-hidden">
            <Navbar />

            {/* Subtle Background Pattern */}
            <div className="absolute inset-0  opacity-10">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)]  bg-[length:40px_40px]" />
            </div>

            {/* Content */}
            <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[90vh] px-6">

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl text-black font-bold uppercase pt-16">
                    Welcome to Silverline
                </h1>


                {/* Description */}
                <p className="max-w-2xl text-lg sm:text-base text-black mt-6 leading-relaxed">
                    At Silverline, we believe our people are our greatest strength.
                    Every employee plays a vital role in shaping our success, driving
                    innovation, and delivering excellence.
                </p>

                {/* Button */}
            </section>
            {/* Wave Divider */}
<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
  <svg
    viewBox="0 0 1440 150"
    className="w-full h-20 md:h-28"
    preserveAspectRatio="none"
  >
    <path
      d="M0,80 C360,140 1080,0 1440,80 L1440,150 L0,150 Z"
      fill="#111111"
    />
  </svg>
</div>



        </div>
    );
};

export default OverviewBanner;
