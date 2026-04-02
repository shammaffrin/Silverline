import React from "react";
import {
  Photo16,
  Photo2,
  Photo60,
  Photo75,
  Photo84,
  Photo86,
} from "../assets/assets";

const GallerySection = () => {
  const images = [Photo86, Photo75, Photo84, Photo16, Photo2, Photo60];

  return (
    <div className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12">GALLERY</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-14 mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl w-full h-full group"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
