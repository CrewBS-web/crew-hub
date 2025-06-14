"use client";

import { APP_NAME } from "@/lib/constants";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Image from "next/image";
interface LogoProps {
  height: number;
  width: number;
  fixColor: boolean;
}

const Logo = ({ height, width, fixColor }: LogoProps) => {
  const { theme, systemTheme } = useTheme();
  const [currentSrc, setCurrentSrc] = useState<string | null>(
    "/images/CREW-white.png"
  );

  useEffect(() => {
    if (fixColor) {
      setCurrentSrc("/images/CREW-white.png");
      return;
    }

    if (theme) {
      setCurrentSrc(
        theme === "dark" ? "/images/CREW-white.png" : "/images/CREW.png"
      );
    } else if (systemTheme) {
      setCurrentSrc(
        systemTheme === "dark" ? "/images/CREW-white.png" : "/images/CREW.png"
      );
    }
  }, [theme, systemTheme, fixColor]);

  if (!currentSrc) {
    return null;
  }

  return (
    <div>
      <Image
        src={currentSrc}
        alt={`${APP_NAME} logo`}
        height={height}
        width={width}
        priority={true}
        style={{ borderRadius: "10px", objectFit: "cover" }}
      />
    </div>
  );
};

export default Logo;
