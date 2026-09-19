"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface KidsPhotoProps {
  side: "left" | "right";
  children: ReactNode;
}

// Photo floats to one side (text wraps around it) and slides in from that side.
export const KidsPhoto = ({ children, side }: KidsPhotoProps) => {
  const isLeft = side === "left";
  return (
    <motion.div
      className={
        "mb-6 w-full md:mb-4 md:w-[42%] " +
        (isLeft ? "md:float-left md:mr-8" : "md:float-right md:ml-8")
      }
      style={{ shapeOutside: "margin-box" }}
      initial={{ x: isLeft ? -120 : 120, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 60, damping: 16 }}
    >
      {children}
    </motion.div>
  );
};

interface KidsFadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// Text gently floats up while fading in.
export const KidsFadeUp = ({
  children,
  delay = 0,
  className
}: KidsFadeUpProps) => (
  <motion.div
    className={className}
    initial={{ y: 32, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: "easeOut", delay }}
  >
    {children}
  </motion.div>
);
