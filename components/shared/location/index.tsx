import clsx from "clsx";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationProps {
  name: string;
  address: string;
  mapLink: string;
  reservationUrl: string;
  compact?: boolean;
}

const Location = ({
  name,
  address,
  mapLink,
  reservationUrl,
  compact = false,
  className
}: LocationProps & { className?: string }) => {
  if (!compact) {
    // old layout
    return (
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div
          className={clsx(
            "relative w-full p-6 shadow-md transition-all duration-300 ease-in-out",
            "border-2 border-black dark:border-white",
            "hover:border-2 hover:scale-105",
            "rounded-sm"
          )}
        >
          <div className="flex flex-col justify-between gap-1">
            <h3 className="text-s md:text-xl font-semibold mb-2">{name}</h3>
            <Link href={mapLink} target="_blank">
              <span className="text-s text-gray-400 whitespace-nowrap flex flex-row gap-1">
                <MapPin /> {address}
              </span>
            </Link>
          </div>
          <div className="flex flex-row items-end justify-end mt-4 md:mt-2">
            <Button asChild variant="default" className="w-full md:w-auto">
              <Link href={reservationUrl}>Обрати</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  // compact layout
  return (
    <div
      className={clsx(
        "relative flex flex-col justify-between w-full h-full p-4 sm:p-6 shadow-md transition-all duration-300 ease-in-out",
        "border-2 border-black dark:border-white",
        "hover:border-2 hover:scale-105",
        "rounded-sm",
        className
      )}
    >
      <div>
        <h3 className="text-sm md:text-base font-semibold mb-2 leading-tight">
          {name}
        </h3>
        <Link href={mapLink} target="_blank">
          <span className="text-[10px] sm:text-xs md:text-sm text-gray-400 whitespace-normal flex items-center gap-1">
            <MapPin /> {address}
          </span>
        </Link>
      </div>
      <div className="mt-4 md:mt-2">
        <Button asChild variant="default" className="w-full md:w-auto">
          <Link href={reservationUrl}>Обрати</Link>
        </Button>
      </div>
    </div>
  );
};

export default Location;
