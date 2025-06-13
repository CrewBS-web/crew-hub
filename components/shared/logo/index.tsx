"use client";

import { APP_NAME } from "@/lib/constants";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import Image from "next/image";

interface LogoProps {
  height: number;
  width: number;
}

const Logo = ({ height, width }: LogoProps) => {
  const { theme, systemTheme } = useTheme();
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  useEffect(() => {
    if (theme) {
      setCurrentSrc(
        theme === "dark" ? "/images/CREW-white.png" : "/images/CREW.png"
      );
    } else if (systemTheme) {
      setCurrentSrc(
        systemTheme === "dark" ? "/images/CREW-white.png" : "/images/CREW.png"
      );
    }
  }, [theme, systemTheme]);

  if (!currentSrc) {
    return null;
  }

  return (
    <Image
      src={currentSrc}
      alt={`${APP_NAME} logo`}
      height={height}
      width={width}
      priority={true}
      style={{ borderRadius: "10px" }}
    />
  );
};

export default Logo;
