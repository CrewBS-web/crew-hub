"use client";

import CallButton from "@/components/ui/call-button";
import { motion } from "framer-motion";
import SocialLinks from "../social-links";

const ContactSection = () => {
  return (
    <div className="p-8 border-t-2 border-b-2">
      <motion.div
        className="flex w-full flex-col items-center justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-lg font-normal text-center">
          Запишіться до провідних майстрів Ужгорода
        </h3>
        <CallButton />
        <SocialLinks />
      </motion.div>
    </div>
  );
};

export default ContactSection;
