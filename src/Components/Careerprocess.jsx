import React, { useState } from "react";

const CareerProcess = () => {
  const steps = [
    {
      title: "Job Opportunities & Application",
      description:
        "Our career section enables you to apply for the job you desire. Submit your resume with a complete list of credentials and provide detailed information about your experience.",
    },
    {
      title: "Shortlisting",
      description:
        "Our team reviews all submitted applications and shortlists candidates based on required skills, qualifications, and relevant experience.",
    },
    {
      title: "Business/Technical Interview",
      description:
        "Shortlisted candidates attend technical or business-focused interviews to evaluate problem-solving abilities and domain expertise.",
    },
    {
      title: "HR Interview",
      description:
        "An HR discussion ensures alignment with company culture, salary expectations, and employment terms.",
    },
    {
      title: "Decision and Offer",
      description:
        "Successful candidates receive an official offer letter with role details, compensation, and onboarding instructions.",
    },
  ];

  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section className="bg-[#EEF2FB] py-16 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-[#0F172A] mb-6">
          How We Hire
        </h2>
        <p className="text-lg text-[#334155] max-w-3xl mx-auto leading-relaxed">
          Putting people first begins the moment we meet. Tell us about your
          skills and aspirations. Explore job opportunities that speak to your
          journey.
        </p>

        {/* Steps */}
        <div className="flex flex-col items-center gap-4 sm:gap-0 md:flex-row justify-center mt-12">
          {steps.map((step, index) => {
            const isActive = selectedStep === index;
            return (
              <div
                key={index}
                className="relative flex items-center cursor-pointer"
                onClick={() => setSelectedStep(index)}
              >
                <div
                  className={`flex w-50 h-16 rounded-lg px-4 items-center gap-3 border shadow-sm transition-all duration-200 ${
                    isActive
                      ? "bg-[#8B0000] text-white border-[#8B0000]"
                      : "bg-white text-[#1F2937] border-[#E5E7EB]"
                  }`}
                >
                  <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full font-bold text-sm ${
                      isActive
                        ? "bg-white text-[#8B0000]"
                        : "bg-[#8B0000] text-white"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <p className="text-xs w-1/2 text-left max-w-[140px]">
                    {step.title}
                  </p>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-8 h-[2px] bg-[#D1D5DB]"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Info Box */}
        <div className="bg-white shadow-md rounded-xl p-8 max-w-4xl mx-auto mt-12 transition-all duration-300">
          <p className="text-lg text-[#1F2937] leading-relaxed">
            {steps[selectedStep].description}
          </p>
        </div>

        {/* Button */}
        <button
          className="mt-10 bg-[#8B0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#670101] transition-all"
          onClick={() => {
            const jobsSection = document.getElementById("jobs");
            if (jobsSection) {
              jobsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Explore job opportunities →
        </button>
      </div>
    </section>
  );
};

export default CareerProcess;
