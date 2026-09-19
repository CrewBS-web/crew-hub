"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { KIDS_GALLERY } from "@/lib/constants/kids";

const arrowClass =
  "absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition hover:bg-white disabled:pointer-events-none disabled:opacity-0 md:flex";

// Every slide has the same fixed aspect ratio, so the gallery never changes height.
// Swipe on touch devices is native scroll-snap; arrows scroll by one slide on desktop.
const KidsGallery = () => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [updateArrows]);

  const scrollBySlide = (direction: 1 | -1) => {
    const el = trackRef.current;
    const slide = el?.firstElementChild as HTMLElement | null;
    if (!el || !slide) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({
      left: direction * (slide.offsetWidth + gap),
      behavior: "smooth"
    });
  };

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Фото CREW kids"
    >
      <ul
        ref={trackRef}
        onScroll={updateArrows}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {KIDS_GALLERY.map((photo, i) => (
          <li
            key={photo.src}
            className="relative aspect-[4/5] w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl shadow-lg sm:w-[calc(50%-0.5rem)] md:w-[calc((100%-2rem)/3)]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 330px, (min-width: 640px) 45vw, 78vw"
              className="object-cover"
              draggable={false}
              loading={i < 2 ? "eager" : "lazy"}
            />
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Попереднє фото"
        disabled={!canPrev}
        onClick={() => scrollBySlide(-1)}
        className={arrowClass + " left-3"}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Наступне фото"
        disabled={!canNext}
        onClick={() => scrollBySlide(1)}
        className={arrowClass + " right-3"}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default KidsGallery;
