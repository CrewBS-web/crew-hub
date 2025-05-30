"use client";

import ModeToggle from "./mode-toggle";
import { EllipsisVertical } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import NavigationMenuMobile from "@/components/ui/navigation-menu-mobile";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-end gap-3">
      <nav className="flex w-full max-w-xs gap-1">
        <ModeToggle />
      </nav>
      <nav className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="align-middle">
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start pl-10 pt-2">
            <SheetTitle className="text-2xl">Меню</SheetTitle>
            <NavigationMenuMobile onLinkClick={() => setOpen(false)} />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
