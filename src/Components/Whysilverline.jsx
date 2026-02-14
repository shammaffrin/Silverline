import React, { useState } from "react";
import {
  FaBriefcase,
  FaUsers,
  FaUserTie,
  FaLightbulb,
  FaSmile,
  FaGlobe,
  FaTrophy,
} from "react-icons/fa";
import { Teamimg } from "../assets";

const WhySilverline = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      icon: <FaBriefcase className="text-[#8B0000] text-2xl" />,
      title: "Diverse Opportunities Across Verticals",
      content:
        "Explore roles in Operations, Finance, IT, HR, Sales, and Inventory — whether you’re a fresher or a seasoned professional, there’s a path for you to thrive.",
    },
    {
      icon: <FaUsers className="text-[#8B0000] text-2xl" />,
      title: "Young & Vibrant Team",
      content:
        "Work with a dynamic, energetic, and collaborative team that encourages creativity and fresh ideas.",
    },
    {
      icon: <FaUserTie className="text-[#8B0000] text-2xl" />,
      title: "Supportive Leaders",
      content:
        "Learn and grow under mentors and leaders who guide, encourage, and empower you at every step of your journey.",
    },
    {
      icon: <FaLightbulb className="text-[#8B0000] text-2xl" />,
      title: "Innovation & Growth",
      content:
        "We foster a culture that celebrates innovation, learning, and leadership, empowering you to make meaningful contributions.",
    },
    {
      icon: <FaSmile className="text-[#8B0000] text-2xl" />,
      title: "Fun & Engaging Workplace",
      content:
        "From sports tournaments like cricket and football, cultural fests, field trips, and interactive games, to regular employee engagement activities, life at Silverline is always exciting.",
    },
    {
      icon: <FaGlobe className="text-[#8B0000] text-2xl" />,
      title: "Celebrating Diversity & Culture",
      content:
        "We embrace and celebrate all cultures, milestones, and achievements, creating an inclusive environment where everyone belongs.",
    },
    {
      icon: <FaTrophy className="text-[#8B0000] text-2xl" />,
      title: "Opportunities to Lead",
      content:
        "Every role is a chance to learn new skills, take on challenges, and prepare for future leadership.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Content */}
        <div>
          <h2 className="text-xl md:text-lg text-gray-900 leading-snug">
            At{" "}
            <span className="text-[#8B0000]">
              Silverline Construction Machinery Rental LLC
            </span>
            , we don’t just offer jobs — we provide opportunities to grow, learn,
            and shape your career. Every role is crafted to challenge you, help
            you develop new skills, and prepare you for future leadership. We are
            committed to empowering our employees to make meaningful
            contributions, take initiative, and be part of a team where their
            ideas and efforts are truly valued.
          </h2>

          <div className="mt-8 space-y-3">
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 hover:shadow-md transition"
              >
                <button
                  className="flex items-center justify-between w-full p-4 bg-[#fceaea] hover:bg-[#f7dcdc] transition rounded-lg"
                  onClick={() => toggleItem(index)}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <p className="text-gray-800 font-medium">{item.title}</p>
                  </div>
                  <span
                    className={`text-[#8B0000] text-lg transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Dropdown Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 p-4" : "max-h-0 p-0"
                  }`}
                >
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={Teamimg}
            alt="Silverline Rentals Team"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhySilverline;
