"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Calendar as CalendarIcon } from "lucide-react";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

// Floating Action Button for mobile
const FabBook: React.FC<Props> = ({ children }) => {
  return (
  <div className="fixed bottom-[4.5rem] right-8 z-50 md:hidden">
      <Dialog>
        <DialogTrigger asChild>
          <button
            aria-label="Відкрити запис"
            className="relative h-20 w-20 rounded-full border flex items-center justify-center shadow-lg
                       dark:bg-white dark:text-black bg-black text-white border-white dark:border-black
                       hover:scale-105 transition-transform"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-[-3px] rounded-full animate-halo-fade z-0
                         shadow-[0_0_0_8px_rgba(0,0,0,0.9)] dark:shadow-[0_0_0_8px_rgba(255,255,255,0.9)]"
            />
            <CalendarIcon className="relative z-10 w-8 h-8" />
          </button>
        </DialogTrigger>
        <DialogContent className="flex flex-col max-h-[90vh] gap-0">
          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FabBook;
