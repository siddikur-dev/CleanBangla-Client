import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Root = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    if (ScrollSmoother.get()) ScrollSmoother.get().kill();

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
    });

    // 🎯 Cursor follow
    const cursor = document.getElementById("cursor");
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    // 📈 Scroll progress tracker
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
      document.documentElement.style.setProperty("--scroll-progress", scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => {
      smoother.kill();
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div id="cursor">
        <svg viewBox="0 0 36 36" className="progress-ring">
          <path
            className="progress-ring__circle"
            stroke="hsl(var(--p))"
            strokeWidth="3"
            fill="transparent"
            d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
            style={{
              strokeDasharray: "100, 100",
              strokeDashoffset: `${100 - scrollPercent}`,
              transition: "stroke-dashoffset 0.2s ease",
            }}
          />
        </svg>
      </div>

      {/* Right-side scroll percentage */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-6 bottom-6 z-[9999] flex flex-col items-center cursor-pointer group"
      >
        <div className="relative w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 border-3">
          <svg
            className="absolute top-0 left-0"
            viewBox="0 0 36 36"
            width="56"
            height="56"
          >
            <path
              stroke="hsl(var(--b1))" /* contrast border on primary bg */
              strokeWidth="4"
              fill="none"
              strokeDasharray="100,100"
              strokeDashoffset={100 - scrollPercent}
              style={{ transition: "stroke-dashoffset 0.2s ease" }}
              d="M18 2a16 16 0 1 1 0 32 16 16 0 0 1 0-32"
            />
          </svg>
          <span className="text-sm font-semibold text-white ">
            {Math.round(scrollPercent)}%
          </span>
        </div>
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Root;
