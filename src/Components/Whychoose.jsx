import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Star } from "../assets";

const accordionData = [
  {
    id: 1,
    title: "Extensive Inventory",
    content:
      "Access a wide selection of high-performance machinery and equipment tailored for diverse industrial needs, ensuring uninterrupted operations.",
  },
  {
    id: 2,
    title: "Customized Solutions",
    content:
      "We work closely with clients to deliver rental packages that meet specific project demands, offering flexibility and efficiency.",
  },
  {
    id: 3,
    title: "Quality and Safety",
    content:
      "We prioritize quality and safety in oil field operations, with rigorously inspected equipment ensuring optimal performance and compliance.",
  },
  {
    id: 4,
    title: "Flexible Rental Options",
    content:
      "Choose from daily, weekly, or long-term rental plans to suit your schedule and budget without compromising on quality.",
  },
  {
    id: 5,
    title: "Technical Expertise",
    content:
      "Our knowledgeable team offers expert guidance and on-site support, ensuring you get the most out of every rental.",
  },
  {
    id: 6,
    title: "Prompt Delivery and Support",
    content:
      "We guarantee on-time delivery and round-the-clock assistance, minimizing downtime and maximizing productivity.",
  },
];

const Whychoose = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="w-full px-15 my-20 mx-auto">
      <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
      <div className="mb-10 md:ml-[50%] font-medium text-md text-black flex items-start gap-6">
        <img className="w-4 h-4" src={Star} alt="" />
        <p className="font-light text-justify">
          {" "}
          We offer a wide range of high-quality equipment, flexible and cost
          effective rental solutions, reliable and responsive customer support,
          and expert guidance designed to ensure the success of every project no
          matter the size or complexity.
        </p>
      </div>
      <div className="divide-y divide-[#B5B5B5] border-t border-[#B5B5B5]">
        {accordionData.map((item, index) => (
          <div key={item.id} className="py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-sm text-gray-400 font-semibold w-10">
                {String(item.id).padStart(2, "0")}
              </span>
              <h3 className="text-[#535353] text-lg sm:text-2xl font-normal flex-1 ml-4 sm:ml-32">
                {item.title}
              </h3>
              <span className="text-[#00000040]">
                {activeIndex === index ? <FaTimes /> : <FaPlus />}
              </span>
            </div>
            {activeIndex === index && item.content && (
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-black pl-4 sm:mx-38">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychoose;
