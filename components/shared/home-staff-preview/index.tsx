"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Staff } from "@prisma/client";
import StaffCard from "@/components/shared/staff/staff-card";

function pickRandom(arr: Staff[], count: number, exclude: Staff[] = []): Staff[] {
  const excludeIds = new Set(exclude.map((s) => s.id));
  const pool = arr.filter((s) => !excludeIds.has(s.id));
  const source = pool.length >= count ? pool : arr;
  return [...source].sort(() => Math.random() - 0.5).slice(0, count);
}

const HomeStaffPreview = ({ staff }: { staff: Staff[] }) => {
  const initial = [...staff]
    .sort((a, b) => +b.isArtDirector - +a.isArtDirector)
    .slice(0, 6);

  const [current, setCurrent] = useState<Staff[]>(initial);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (staff.length <= 6) return;

    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrent((prev) => pickRandom(staff, 6, prev));
        setTimeout(() => setOpacity(1), 80);
      }, 450);
    }, 7000);

    return () => clearInterval(interval);
  }, [staff]);

  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px]"
      animate={{ opacity }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {current.map((s) => (
        <StaffCard key={s.id} {...s} hideDescription noEntryAnimation />
      ))}
    </motion.div>
  );
};

export default HomeStaffPreview;
