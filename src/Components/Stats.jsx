import React, { useEffect, useRef, useState } from "react";

const Counter = ({ targetNumber, duration = 2000, className }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // trigger when 50% visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const end = parseInt(targetNumber, 10);
    const stepTime = Math.abs(Math.floor(duration / end));
    const startTime = performance.now();

    const updateCount = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <div ref={ref} className={className}>
      {count}
    </div>
  );
};

const StatsSection = () => {
  const statsTop = [
    { number: "2008", label: "Founded Year" },
    { number: "564", label: "Team Member" },
    { number: "1224", label: "Happy Customer" },
  ];

  const statsBottom = [
    { number: "5", label: "Countries" },
    { number: "1075", label: "Company Work With Us" },
    { number: "2569", label: "Project Completed" },
  ];

  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <h2 className="text-[32px] sm:text-4xl font-bold text-black italic leading-snug sm:text-left text-center mb-12">
        We Work Through Every
        <br />
        Aspect At The Planning
      </h2>

      <div className="max-w-5xl mx-auto">
        {/* Top Row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:border-b"
          style={{ color: "#B5B5B580" }}
        >
          {statsTop.map((stat, index) => (
            <div key={index} className="py-8 px-6 text-center">
              <Counter
                targetNumber={stat.number}
                className="text-3xl font-bold text-black"
              />
              <div className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 md:divide-x"
          style={{ color: "#B5B5B580" }}
        >
          {statsBottom.map((stat, index) => (
            <div key={index} className="py-8 px-6 text-center">
              <Counter
                targetNumber={stat.number}
                className="text-2xl font-bold text-black"
              />
              <div className="mt-2 text-sm text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
