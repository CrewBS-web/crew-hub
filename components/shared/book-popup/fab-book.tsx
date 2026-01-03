"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import React from "react";

import { useAltegBooking } from "@/lib/hooks/use-alteg-booking";

// Floating Action Button for mobile
const FabBook: React.FC = () => {
  const { openBooking } = useAltegBooking();

  return (
    <div className="fixed bottom-[4.5rem] right-8 z-50 md:hidden">
      <button
        type="button"
        onClick={() => openBooking()}
        aria-label="Відкрити запис"
        className="relative h-20 w-20 rounded-full border flex items-center justify-center shadow-lg
                   dark:bg-white dark:text-black bg-black text-white border-white dark:border-black
                   active:scale-105 focus-visible:scale-105 transition-transform"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[-3px] rounded-full animate-halo-fade z-0
                     shadow-[0_0_0_8px_rgba(0,0,0,0.9)] dark:shadow-[0_0_0_8px_rgba(255,255,255,0.9)]"
        />
        <CalendarIcon className="relative z-10 w-8 h-8" />
      </button>
    </div>
  );
};

export default FabBook;
