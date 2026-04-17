import React, { useState } from "react";
import { WhiteStar } from "../assets";

const OverVision = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const valuesData = [
    {
      title: "TRUST",
      desc: "At SilverLine, TRUST is our cornerstone, our guiding principle in all operations. We prioritize integrity, transparency, and accountability in all our interactions, focusing on delivering promises, meeting commitments, and being dependable in all aspects of business. We are also committed to earning and maintaining the trust of all stakeholders, our employees, customers, partners and everyone.",
    },
    {
      title: "SAFETY",
      desc: "At SilverLine, SAFETY is non-negotiable. We proactively assess risks, enforce strict protocols, and empower every individual to ensure safety in their actions. Our commitment to safety extends beyond compliance, fostering an environment where everyone feels secure and valued. Through comprehensive training, proactive risk management, and a culture of vigilance, we integrate safety in every aspect of our operations.",
    },
    {
      title: "TEAMWORK",
      desc: "At SilverLine, TEAMWORK is the power to our success. We believe in utilizing the diverse strengths and perspectives of our team members to achieve common goals. Through effective and open communication, mutual support, and shared accountability, we cultivate an environment where collaboration flourishes, driving innovation and excellence in all that we do.",
    },
    {
      title: "CONSISTENCY",
      desc: "At SilverLine, CONSISTENCY is the foundation of our operations. We are committed to maintaining unwavering standards of quality, reliability, and performance in all aspects of our business. By consistently delivering excellence, showcasing reliability, we build trust, confidence, and drive for long-term success.",
    },
    {
      title: "INNOVATION",
      desc: "At SilverLine, INNOVATION designs our culture. We encourage creativity, forward thinking, research and continuous improvement. By undertaking adaptation, we stay in the frontline of our industry, anticipate future needs, and deliver cutting-edge solutions that drive us and our clients forward.",
    },
    {
      title: "CUSTOMERS",
      desc: "At SilverLine, CUSTOMERS are our heart. We are dedicated to understanding their needs, exceeding their expectations, and building strong, consistent partnership. Our commitment to customer satisfaction drives us to deliver exceptional products, services, and experiences at every interaction",
    },
  ];

  return (
    <div className="w-full relative bg-[#111111] text-white px-4 sm:px-6 md:px-20 py-16 sm:py-10 overflow-y-hidden space-y-16 sm:space-y-15">
      {/* VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start border-b border-gray-800 pb-8 sm:pb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          VISION
        </h2>
        <div className="flex gap-3 sm:gap-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          <img src={WhiteStar} alt="Star" className="w-4 h-4 mt-1 shrink-0" />
          <p>
            To revolutionize innovation and creativity by providing efficient
            and reliable solutions to build a better world.
          </p>
        </div>
      </div>

      {/* MISSION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start border-b border-gray-800 pb-8 sm:pb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          MISSION
        </h2>
        <div className="flex gap-3 sm:gap-4 text-gray-400 text-base sm:text-lg leading-relaxed">
          <img src={WhiteStar} alt="Star" className="w-4 h-4 mt-1 shrink-0" />
          <p>
            Empowering companies across the globe by providing best-in-class
            machinery through reliable equipment rental solutions and efficient
            facility management operations to ensure consistent development.
          </p>
        </div>
      </div>

      {/* VALUES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-start">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide">
          VALUES
        </h2>

        <div className="space-y-4">
          {valuesData.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="cursor-pointer border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:bg-[#1a1a1a]"
            >
              <div className="flex items-start gap-3">
                <img
                  src={WhiteStar}
                  alt="Star"
                  className="w-4 h-4 mt-1 shrink-0"
                />

                <div>
                  <h3 className="text-white font-semibold tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {activeIndex === index
                      ? item.desc
                      : item.desc.substring(0, 80) + "..."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glow Effects */}
      <div className="absolute -bottom-36 sm:-bottom-40 -left-36 sm:-left-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[100px] sm:blur-[120px] opacity-30 bg-[#8B0000]" />
      <div className="absolute -top-36 sm:-top-40 -right-36 sm:-right-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-[100px] sm:blur-[120px] opacity-20 bg-[#8B0000]" />
    </div>
  );
};

export default OverVision;
