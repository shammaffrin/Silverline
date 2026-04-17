import React, { useState, useRef, useEffect } from "react";

// ✅ IMPORT FILES (IMPORTANT FOR VITE)
import thumb from "../assets/Management/shamila.jpeg";
import videoFile from "../assets/Management/sample.mp4";

const Video = () => {
  const [play, setPlay] = useState(false);
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);

  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouse = { x: 0, y: 0 };
    let pos = { x: 0, y: 0 };

    const speed = 0.35;

    // ✅ SET INITIAL POSITION ON ENTER
    const handleEnter = (e) => {
      const rect = container.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      pos.x = mouse.x;
      pos.y = mouse.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
    };

    const handleMove = (e) => {
      const rect = container.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const animate = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mousemove", handleMove);

    animate();

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mousemove", handleMove);
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setPlay(true);
    }, 300);
  };

  return (
    <div className="pt-10 pb-36 relative">
       {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 150" className="w-full h-16 sm:h-20 md:h-28" preserveAspectRatio="none">
          <path d="M0,80 C360,140 1080,0 1440,80 L1440,150 L0,150 Z" fill="#111111" />
        </svg>
      </div>
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-wide">
          MESSAGE FROM THE MANAGEMENT
        </h3>
      </div>

      {/* Video Section */}
      <div className="flex justify-center">
        <div
          ref={containerRef}
          className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden cursor-none"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleClick}
        >
          {/* Thumbnail / Video */}
          {!play ? (
            <img
              src={thumb}
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
            />
          ) : (
            <video className="w-full h-full" controls autoPlay>
              <source src={videoFile} type="video/mp4" />
            </video>
          )}

          {/* Overlay */}
          {!play && (
            <div
              className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition duration-500 z-10
              ${hover ? "opacity-100" : "opacity-0"}`}
            />
          )}

          {/* Ripple */}
          {clicked && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="w-16 h-16 rounded-full bg-white/30 animate-ping" />
            </div>
          )}

          {/* ✅ CUSTOM CURSOR (FIXED) */}
          <div
            ref={cursorRef}
            className={`pointer-events-none absolute top-0 left-0 z-30
              transition-all duration-200
              ${hover ? "opacity-100 scale-100" : "opacity-0 scale-50"}
            `}
          >
            <div
              className="w-24 h-24 flex flex-col items-center justify-center rounded-full
              bg-white/20 backdrop-blur-xl border border-white/40
              text-white shadow-xl"
            >
              <span className="text-sm font-semibold">Click</span>
              <span className="text-[10px] opacity-80">Watch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
