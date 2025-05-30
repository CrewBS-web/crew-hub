"use client";

import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

interface StaffCardProps {
  id: string;
  name: string;
  description_short: string;
  images: string;
  isSenior: boolean;
  description: string;
}

const StaffCard = ({
  id,
  name,
  description_short,
  images,
  isSenior
}: StaffCardProps) => {
  return (
    <motion.div
      className="h-full w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="h-full w-full">
        <div
          className={clsx(
            "relative w-full h-full flex flex-col p-4 shadow-md transition-all duration-300 ease-in-out overflow-hidden",
            "border-2 border-black dark:border-white",
            "hover:border-2 hover:scale-105",
            "rounded-sm"
          )}
        >
          <Link href={`/staff/${id}`}>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="relative rounded-full border-2 border-white h-30 w-30 overflow-hidden">
                <Image src={images} alt={name} fill className="object-cover" />
              </div>
              <h4 className="font-bold text-l text-center">{name}</h4>
              <p className="text-gray-400">{isSenior ? "Senior" : "Expert"}</p>
              <p className="text-xs text-center">{description_short}</p>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default StaffCard;
