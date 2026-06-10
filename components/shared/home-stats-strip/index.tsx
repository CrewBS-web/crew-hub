"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "5+", label: "Років досвіду" },
  { num: "20+", label: "Майстрів" },
  { num: "4", label: "Локації" },
  { num: "1000+", label: "Клієнтів" }
];

const HomeStatsStrip = () => {
  return (
    <section className="py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex flex-col gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <span className="text-4xl md:text-5xl font-bold tracking-tight">
              {s.num}
            </span>
            <span className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeStatsStrip;
