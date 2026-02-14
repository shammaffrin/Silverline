import React from "react";
import { motion } from "framer-motion";
import { Related1, Related2 } from "../assets";

const articles = [
  {
    title: "Expanding Our Fleet: New Heavy Equipment Available! (New)",
    description:
      "We’ve added state-of-the-art excavators, loaders, and forklifts to our fleet to meet growing demand. Get the best equipment for your projects today!",
    image: Related1,
  },
  {
    title: "New Service Locations: We’re Expanding!",
    description:
      "We’re now serving additional cities and regions! Find out if Silverline Rental is available in your area and explore our growing network.",
    image: Related2,
  },
  {
    title: "Expanding Our Fleet: New Heavy Equipment Available! (New)",
    description:
      "We’ve added state-of-the-art excavators, loaders, and forklifts to our fleet to meet growing demand. Get the best equipment for your projects today!",
    image: Related1,
  },
];

const RelatedArticles = () => {
  return (
    <div className="px-4 md:px-10 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Related Article</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {articles.map((article, index) => (
          <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="group p-5 rounded-2xl bg-white shadow-md overflow-hidden transition-colors duration-300"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 object-cover rounded-2xl"
          />
          <div className="py-4">
            <h3 className="font-semibold text-lg mb-2 text-black group-hover:text-[#8B0000] transition-colors duration-300">
              {article.title}
            </h3>
            <p className="text-sm text-[#00000080] group-hover:text-[#000] transition-colors duration-300">
              {article.description}
            </p>
          </div>
        </motion.div>
        
        
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
