import { Staff } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Pen, Trash } from "lucide-react";

import clsx from "clsx";
import StaffCard from "./staff-card";

interface StaffListProps {
  data: Staff[];
  isAdmin?: boolean;
  onEdit?: (service: Staff) => void;
  onDelete?: (id: string) => void;
}

const StaffList = ({ data, isAdmin, onDelete, onEdit }: StaffListProps) => {
  return (
    <div className="my-10">
      <h2 className="h3-bold mb-4 font-semibold">Майстри:</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 s:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-3 sm:gap-3 md:gap-6 items-stretch">
          {data.map((staff: Staff) => (
              <div
                key={staff.id}
                className={clsx(
                  "flex",
                  isAdmin && "max-w-4xl w-full mx-auto flex-col gap-2"
                )}
              >
                <StaffCard {...staff} key={staff.id} />
                {isAdmin && (
                  <div className="flex flex-row gap-2 justify-center items-center">
                    <Button
                      variant="ghost"
                      onClick={() => onDelete?.(staff.id)}
                    >
                      <Trash className="text-red-500 w-5 h-5" />
                    </Button>
                    <Button variant="ghost" onClick={() => onEdit?.(staff)}>
                      <Pen className="w-5 h-5" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
        </div>
      ) : (
        <div>
          <p>No Staff found</p>
        </div>
      )}
    </div>
  );
};

export default StaffList;
