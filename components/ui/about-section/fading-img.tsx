"use client";

import Image from "next/image";
import React from "react";

interface FadingImageProps {
  src: string;
  alt: string;
  fadeDirection?: "left" | "right";
}

const FadingImage: React.FC<FadingImageProps> = ({
  src,
  alt,
  fadeDirection = "right"
}) => {
  const isLeft = fadeDirection === "left";
  const horizontalFadeClass = isLeft
    ? "left-0 bg-gradient-to-r"
    : "right-0 bg-gradient-to-l";

  return (
    <div className="relative w-full sm:w-1/2 h-64 sm:h-auto">
      <Image src={src} alt={alt} fill className="object-cover" sizes="100vw" />

      {/* Mobile: top gradient */}
      <div
        className="
        sm:hidden absolute top-0 left-0 right-0 h-[20%]
        bg-gradient-to-b from-white dark:from-black to-transparent
        pointer-events-none
        z-10
      "
      />

      {/* Desktop: side gradient */}
      <div
        className={`
        hidden sm:block absolute top-0 bottom-0 w-[10%]
        ${horizontalFadeClass}
        from-white dark:from-black to-transparent
        pointer-events-none
      `}
      />
    </div>
  );
};

export default FadingImage;
