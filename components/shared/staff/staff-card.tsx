"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

interface StaffCardProps {
  id: string;
  name: string;
  description_short: string;
  images: string;
  isSenior: boolean;
  isArtDirector: boolean;
  isBarber: boolean;
  description: string;
  hideDescription?: boolean;
  noEntryAnimation?: boolean;
  firstNameOnly?: boolean;
}

const StaffCard = ({
  id,
  name,
  description_short,
  images,
  isSenior,
  isArtDirector,
  isBarber,
  hideDescription = false,
  noEntryAnimation = false,
  firstNameOnly = false
}: StaffCardProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  let roleLabel = "Експерт";
  if (isArtDirector) roleLabel = "Арт директор";
  else if (isSenior) roleLabel = "Старший експерт";
  else if (isBarber) roleLabel = "Барбер";

  return (
    <motion.div
      className="h-full w-full"
      initial={noEntryAnimation ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{
        background: "rgba(255,255,255,0.06)",
        backdropFilter: "blur(28px) saturate(180%)",
        WebkitBackdropFilter: "blur(28px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.35)",
        borderRadius: "20px",
        boxShadow:
          "0 2px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.5)",
      }}
    >
      <Link href={`/staff/${id}`} className="block p-4 h-full">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="relative rounded-full border-2 border-white/40 h-30 w-30 overflow-hidden">
            {!imgLoaded && (
              <div className="absolute inset-0 bg-white/10 animate-pulse" />
            )}
            <Image
              src={images}
              alt={name}
              fill
              className="object-cover transition-opacity duration-300"
              style={{ opacity: imgLoaded ? 1 : 0 }}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
          <h4 className="font-bold text-l text-center leading-tight min-h-[2.6rem] flex items-center justify-center">
            {firstNameOnly ? name.split(" ")[0] : name}
          </h4>
          <p className="text-gray-400 text-xs">{roleLabel}</p>
          {!hideDescription && (
            <p className="text-center font-medium text-sm">{description_short}</p>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default StaffCard;
