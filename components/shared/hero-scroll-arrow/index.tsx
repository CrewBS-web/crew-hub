"use client";

import { useEffect } from "react";

const HeroScrollArrow = () => {
  useEffect(() => {
    if (window.innerWidth >= 768) return;
    document.documentElement.style.scrollSnapType = "y mandatory";
    return () => {
      document.documentElement.style.scrollSnapType = "";
    };
  }, []);

  const scrollToNext = () => {
    document.getElementById("after-hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToNext}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/40 text-lg cursor-pointer"
      aria-label="Scroll down"
    >
      ↓
    </button>
  );
};

export default HeroScrollArrow;
