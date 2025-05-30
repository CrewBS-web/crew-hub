import clsx from "clsx";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LocationProps {
  name: string;
  address: string;
  mapLink: string;
  reservationUrl: string;
}

const Location = (props: LocationProps) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div
        className={clsx(
          "relative w-full p-6 shadow-md transition-all duration-300 ease-in-ou",
          "border-2 border-black dark:border-white",
          "hover:border-2 hover:scale-105",
          "rounded-sm"
        )}
      >
        <div className="flex flex-col justify-between gap-1">
          <h3 className="text-s md:text-xl font-semibold mb-2">{props.name}</h3>
          <Link href={props.mapLink} target="_blank">
            <span className="text-s text-gray-400 whitespace-nowrap flex flex-row gap-1">
              <MapPin />
              {props.address}
            </span>
          </Link>
        </div>
        <div className="flex flex-row items-end justify-end mt-4 md:mt-2">
          <Button asChild variant={"default"} className="w-full md:w-auto">
            <Link href={props.reservationUrl}>Обрати</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Location;
