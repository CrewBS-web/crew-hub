"use client";

import { Service } from "@/types";
import clsx from "clsx";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      initial={{ x: isEven ? "-100vw" : "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 10,
        delay: index * 0.2
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div
          className={clsx(
            "relative w-full p-6 shadow-md transition-all duration-300 ease-in-out overflow-hidden",
            "border-2 border-black dark:border-white",
            "hover:border-2 hover:scale-105",
            "rounded-sm"
          )}
        >
          <div className="flex justify-between gap-3">
            {" "}
            <h3 className="text-s md:text-xl font-semibold mb-2">
              {service.name}
            </h3>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {service.duration} хв.
            </span>
          </div>
          <p className="text-sm mb-2 border-b-2 pb-2 border-grey">
            {service.description}
          </p>
          <div className="flex overflow-hidden text-xs justify-end">
            {/* Senior column */}
            <div className="pr-2 text-center">
              <div className="mb-1 font-semibold">Senior:</div>
              <div>{service.senior_price} UAH</div>
            </div>

            {/* Divider */}
            <div className="w-px bg-gray-300" />

            {/* Expert column */}
            <div className="pl-2 text-center">
              <div className="mb-1 font-semibold">Expert:</div>
              <div>{service.price} UAH</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
