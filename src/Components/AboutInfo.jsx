import React from "react";
import { Star } from "../assets";

const AboutInfo = () => {
  return (
    <div className="px-6 md:px-20 py-16 space-y-24 text-[#1a1a1a]">
      <div className="flex flex-col">
        <div className="md:w-1/2">
          <h2 className="text-[32px] sm:text-4xl italic font-bold leading-tight">
            We are Rental <br /> Company
          </h2>
        </div>
        <div className="mt-10 sm:mt-4 text-[#000000BF]">
          <div className="flex gap-5 sm:justify-end">
            <img src={Star} alt="" />
            <div className="w-full sm:w-1/2 flex flex-col gap-5 ">
              <p>
                Silver Line is one of the leading rental companies serving the
                construction, marine, oil & gas industries across the GCC
                region. For nearly a decade, we have built a reputation for
                reliability, quality, and exceptional service, earning the trust
                of our clients through timely rentals, sales, and expert
                support.
              </p>
              <div>
                <p>
                  Our modern, well-maintained fleet ensures efficiency, safety,
                  and top performance. Beyond rentals, we provide tailored
                  solutions and complementary services, delivering excellence,
                  innovation, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col">
        <div>
          <h2 className="text-[32px] italic sm:text-4xl font-bold leading-tight">
            Reliable Equipment, Ready
            <br />
            When You Need It
          </h2>
        </div>
        <div className="mt-10 sm:mt-4 text-[#000000BF]">
          <div className="flex gap-5 sm:justify-end">
            <img src={Star} alt="" />
            <div className="w-full sm:w-1/2 flex mt-6 flex-col gap-5">
              <p>
                Founded in 2008, Silver Line Machinery Rental LLC provides
                construction and oil field equipment rentals across the UAE. Our
                extensive fleet includes generators, excavators, loaders,
                compressors, and more, serving industries with reliable, on-time
                solutions. We also support the oil & gas sector and have
                successfully executed HVAC projects for top clients. With a
                focus on efficiency, teamwork, and competitive pricing, we
                ensure exceptional service and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
