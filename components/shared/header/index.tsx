"use client";

import Link from "next/link";
import Menu from "./menu";
// import BookPopUp from "../book-popup";
import Logo from "../logo";
import { Button } from "@/components/ui/button";
import { PenLineIcon } from "lucide-react";
import { useAltegBooking } from "@/lib/hooks/use-alteg-booking";

const Header = () => {
  const { openBooking } = useAltegBooking();

  return (
    <header className="w-full border-b-2 fixed top-0 z-50 bg-[#FFF] dark:bg-[#0f0c1f]">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Logo height={88} width={88} fixColor={false} />
          </Link>
        </div>
        <div className="flex flex-row">
          {/* <BookPopUp /> */}
          <Button size={"long"} variant={"book"} onClick={() => openBooking()}>
            <PenLineIcon /> ЗАПИС
          </Button>
          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
