"use client";

import { Instagram } from "lucide-react";
import Link from "next/link";
import { FaTelegramPlane, FaViber, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex flex-row gap-4">
      <Link
        target="_blank"
        href={"https://www.instagram.com/crew.barbershop.uzh/"}
      >
        <Instagram />
      </Link>
      <Link href={"https://t.me/crew_bbshop"} target="_blank">
        <FaTelegramPlane className="w-6 h-6" />
      </Link>
      <Link
        href={"https://api.whatsapp.com/send/?phone=%2B380967201181"}
        target="_blank"
      >
        <FaWhatsapp className="w-6 h-6" />
      </Link>
      <Link href={""} target="_blank">
        <FaViber className="w-6 h-6" />
      </Link>
    </div>
  );
};

export default SocialLinks;
