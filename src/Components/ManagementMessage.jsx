import { useEffect, useRef, useState } from "react";

const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

const AnimatedBlock = ({ children, delay = 0, className = "" }) => {
  const [ref, isInView] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default function ManagementMessage() {
  const [ref, isInView] = useInView();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div
        ref={ref}
        className="w-full"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "scale(1)" : "scale(0.97)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        {/* Card */}
        <div className="">
          {/* Top accent bar */}
          <div className="h-[2px] w-full bg-current opacity-30" />

          <div className="px-10 pt-12 pb-14">
            {/* Brand mark */}
            <AnimatedBlock delay={100} className="text-center mb-8">
              <div className="text-xs tracking-[0.5em] uppercase opacity-60 mb-3">
                Silver Line Group
              </div>
              <div className="text-lg opacity-30 tracking-[0.5em]">✦ ✦ ✦</div>
            </AnimatedBlock>

            {/* Main heading */}
            <AnimatedBlock delay={250} className="text-center mb-10">
              <h1 className="text-4xl font-semibold tracking-widest uppercase mb-2">
                Welcome
              </h1>
              <div className="h-[1px] w-32 mx-auto mt-4 bg-current opacity-30" />
            </AnimatedBlock>

            {/* Salutation */}
            <AnimatedBlock delay={400} className="mb-6">
              <p className="text-lg italic opacity-80">Dear Colleague,</p>
            </AnimatedBlock>

            {/* Body paragraphs */}
            <AnimatedBlock delay={550}>
              <div className="relative mb-6">
                <span
                  className="absolute top-2 -left-4 select-none italic opacity-10"
                  style={{ fontSize: "6rem", lineHeight: 0.5 }}
                >
                  "
                </span>
                <p className="text-base leading-relaxed">
                  Welcome to Silverline Group! <br />
                  By joining Silverline, you have taken a meaningful and
                  life-changing step in your professional journey. This marks
                  the beginning of a new chapter filled with opportunity,
                  growth, learning, and achievement.
                </p>
              </div>
            </AnimatedBlock>

            <AnimatedBlock delay={650}>
              <p className="text-base leading-relaxed mb-6">
                We are proud to welcome you to the{" "}
                <span className="italic font-semibold">Silverian team</span>,
                where your contribution becomes an integral part of our journey
                and success. At Silverline, we believe that every individual
                plays an important role in strengthening our organization and
                driving it forward.
              </p>
            </AnimatedBlock>

            <AnimatedBlock delay={750}>
              <p className="text-base leading-relaxed mb-6">
                This page is intended to introduce you to our company, our
                values, our culture, and the professional standards that guide
                us in everything we do. It reflects the spirit of{" "}
                <span className="italic font-semibold">
                  teamwork, commitment, and excellence
                </span>{" "}
                that defines us as an organization.
              </p>
            </AnimatedBlock>

            <AnimatedBlock delay={850}>
              <p className="text-base leading-relaxed mb-10">
                As you begin your journey with us, we are confident that your
                dedication, hard work, and passion will lead to a rewarding and
                successful future at Silverline.
              </p>
            </AnimatedBlock>

            {/* Divider */}
            <AnimatedBlock delay={950} className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-current opacity-20" />
              <span className="opacity-30 text-xs">✦</span>
              <div className="flex-1 h-px bg-current opacity-20" />
            </AnimatedBlock>

            {/* Closing */}
            <AnimatedBlock delay={1050} className="text-center">
              <p className="text-xl italic mb-2">
                Once again, welcome to the{" "}
                <span className="font-semibold">Silverian family.</span>
              </p>
              <p className="text-xs tracking-[0.35em] uppercase opacity-50 mt-6">
                Management
              </p>
              <p className="text-sm tracking-widest opacity-70 mt-1">
                Silver Line Group
              </p>
            </AnimatedBlock>
          </div>

          {/* Bottom accent bar */}
          <div className="h-[2px] w-full bg-current opacity-30" />
        </div>
      </div>
    </div>
  );
}
