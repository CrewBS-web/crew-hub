"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

// Outline-only animal doodles on a 64x64 grid. Stroke uses currentColor,
// no fill and no background, so they sit directly on the page.
const DOODLES: Record<string, ReactNode> = {
  bear: (
    <>
      <circle cx="32" cy="36" r="17" />
      <circle cx="18" cy="21" r="6" />
      <circle cx="46" cy="21" r="6" />
      <ellipse cx="32" cy="42" rx="7" ry="5" />
      <path d="M30 39.5h4" />
      <circle cx="25" cy="32" r="1" />
      <circle cx="39" cy="32" r="1" />
    </>
  ),
  cat: (
    <>
      <path d="M15 32V10l12 9M49 32V10L37 19" />
      <ellipse cx="32" cy="37" rx="18" ry="15" />
      <path d="M30 39l2 2 2-2z" />
      <path d="M32 41v3M28 45q4 2 4-1q0 3 4 1" />
      <circle cx="25" cy="34" r="1" />
      <circle cx="39" cy="34" r="1" />
      <path d="M6 36l11 2M6 44l11-3M58 36l-11 2M58 44l-11-3" />
    </>
  ),
  rabbit: (
    <>
      <ellipse cx="24" cy="14" rx="5" ry="12" />
      <ellipse cx="40" cy="14" rx="5" ry="12" />
      <circle cx="32" cy="41" r="15" />
      <path d="M30 44l2 2 2-2z" />
      <path d="M32 46v2M29 49q3 2 3-1q0 3 3 1" />
      <circle cx="26" cy="38" r="1" />
      <circle cx="38" cy="38" r="1" />
    </>
  ),
  paw: (
    <>
      <path d="M32 30c-8 0-15 8-15 15 0 5 4 7 8 6 3-1 5-2 7-2s4 1 7 2c4 1 8-1 8-6 0-7-7-15-15-15z" />
      <ellipse cx="14" cy="28" rx="4.5" ry="6" transform="rotate(-20 14 28)" />
      <ellipse cx="25" cy="17" rx="4.5" ry="6.5" transform="rotate(-8 25 17)" />
      <ellipse cx="39" cy="17" rx="4.5" ry="6.5" transform="rotate(8 39 17)" />
      <ellipse cx="50" cy="28" rx="4.5" ry="6" transform="rotate(20 50 28)" />
    </>
  ),
  fish: (
    <>
      <path d="M8 32c8-12 24-14 36-4l12-8v24l-12-8c-12 10-28 8-36-4z" />
      <circle cx="18" cy="30" r="1.2" />
      <path d="M28 26q3 6 0 12" />
    </>
  ),
  star: (
    <path d="M32 8l7.5 15.5 17 2.3-12.4 12 3 16.9L32 46.5 16.9 54.7l3-16.9-12.4-12 17-2.3z" />
  ),
  heart: (
    <path d="M32 54C10 38 8 24 16 16c6-6 14-4 16 3 2-7 10-9 16-3 8 8 6 22-16 38z" />
  ),
  cloud: (
    <path d="M18 46a10 10 0 010-20 14 14 0 0127-3 11 11 0 011 23z" />
  )
};

type DoodleName = keyof typeof DOODLES;

interface DoodleProps {
  icon: DoodleName;
  size: number;
  rotate: number;
  accent?: boolean;
  delay?: number;
  index?: number;
}

const DoodleSvg = ({
  icon,
  size,
  rotate,
  accent,
  delay = 0,
  index = 0
}: DoodleProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div style={{ transform: `rotate(${rotate}deg)` }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
      >
        <motion.svg
          viewBox="0 0 64 64"
          width={size}
          height={size}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={
            accent ? "text-amber-400/70" : "text-black/25 dark:text-white/30"
          }
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={{
            duration: 4 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay
          }}
        >
          {DOODLES[icon]}
        </motion.svg>
      </motion.div>
    </div>
  );
};

export interface DoodleItem extends Omit<DoodleProps, "index"> {
  x: string;
  y: string;
}

interface DoodleFieldProps {
  items: DoodleItem[];
  className?: string;
}

// Absolute area (sized by className) that fills an empty spot of the page
// with doodles placed by percentage. Sits behind the content.
export const KidsDoodleField = ({ items, className }: DoodleFieldProps) => (
  <div
    aria-hidden
    className={"pointer-events-none absolute -z-10 " + (className ?? "")}
  >
    {items.map(({ x, y, ...doodle }, i) => (
      <div key={i} className="absolute" style={{ left: x, top: y }}>
        <DoodleSvg {...doodle} index={i} />
      </div>
    ))}
  </div>
);

// Small row of doodles for phones, where there is no empty space beside photos.
export const KidsDoodleRow = ({ icons }: { icons: DoodleName[] }) => (
  <div
    aria-hidden
    className="pointer-events-none flex items-center justify-around md:hidden"
  >
    {icons.map((icon, i) => (
      <DoodleSvg
        key={i}
        icon={icon}
        size={56}
        rotate={i % 2 ? 10 : -10}
        accent={icon === "star" || icon === "heart" || icon === "paw"}
        delay={i * 0.15}
        index={i}
      />
    ))}
  </div>
);
