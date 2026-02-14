import React from "react";
import { Related2 } from "../assets";
import Navbar from "./Navbar";

const BlogBanner = () => {
  return (
    <div className="relative w-full h-[70vh] bg-[#eee]">
      <Navbar />
      <section
        className="w-full h-full bg-center bg-cover flex items-center justify-center relative"
      >
        {/* Overlay */}

        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide z-10">
          BLOGS
        </h1>
      </section>
    </div>
  );
};

export default BlogBanner;
