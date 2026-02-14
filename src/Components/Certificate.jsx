import React from "react";
import {
  Certificate1,
  Certificate2,
  Certificate3,
  Certificate4,
  Star,
} from "../assets";
import { MdOutlineFileDownload } from "react-icons/md";

const Certificate = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 justify-around">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between px-6 sm:px-10 py-8 gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Trusted. Certified. Reliable.
          </h1>
          <a
            href="/brochure.pdf"
            download
            className="group bg-[#8B0000] inline-flex justify-center items-center pl-4 pr-4 py-2 hover:pr-8 rounded-full text-white font-medium text-sm transition-all duration-300 overflow-hidden"
          >
            <span className="relative flex items-center">
              Download
              <span className="absolute left-full ml-0 opacity-0 group-hover:ml-2 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <MdOutlineFileDownload className="text-base" />
              </span>
            </span>
          </a>
        </div>

        {/* Certificates and Info */}
        <div className="flex flex-col sm:flex-row gap-6 px-6 sm:px-10 justify-around items-center sm:items-start">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 grayscale">
            <img className="h-24 sm:h-28" src={Certificate1} alt="" />
            <img className="h-24 sm:h-28" src={Certificate2} alt="" />
            <img className="h-24 sm:h-28" src={Certificate3} alt="" />
            <img className="h-24 sm:h-28" src={Certificate4} alt="" />
          </div>
          <div className="flex gap-4 items-start w-full sm:w-72">
            <img src={Star} alt="" className="w-6 h-6 mt-1" />
            <p className="text-sm font-semibold">
              We are an ISO-certified company committed to high-quality
              equipment, exceptional service, and industry-leading safety
              standards.
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 py-6 px-6 sm:px-0">
          <p className="bg-[#0000001A] px-5 py-2 rounded-full text-sm text-center">
            ✅ Serving UAE, Qatar, Kuwait, Oman & Saudi Arabia
          </p>
          <p className="bg-[#0000001A] px-5 py-2 rounded-full text-sm text-center">
            ✅ Flexible Rentals & Competitive Pricing
          </p>
          <p className="bg-[#0000001A] px-5 py-2 rounded-full text-sm text-center">
            ✅ ISO-Certified for Quality & Safety
          </p>
          <p className="bg-[#0000001A] px-5 py-2 rounded-full text-sm text-center">
            ✅ Trusted by Industry Leaders
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
