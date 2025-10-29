"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Pen, Trash } from "lucide-react";
import ServiceCard from "./services-card";
import { Service } from "@/types";
import clsx from "clsx";

interface Props {
  data: Service[];
  title?: string;
  isAdmin: boolean;
  onEdit?: (service: Service) => void;
  onDelete?: (id: string) => void;
}

const ServicesList = ({ data, title, isAdmin, onEdit, onDelete }: Props) => {
  // TODO: Temporary keyword-based ordering until services get explicit priority in the CMS.
  const prioritizedServices = useMemo(() => {
    const priorityOf = (service: Service) => {
      const nameLower = service.name.toLowerCase();
      const normalizedName = nameLower.replace(/\s+/g, " ").trim();

      if (normalizedName === "стрижка") return 0;
      if (nameLower.includes("стрижка")) return 1;
      if (nameLower.includes("бород")) return 2;
      return 3;
    };

    return data
      .map((service, originalIndex) => ({ service, originalIndex }))
      .sort((a, b) => {
        const priorityDiff = priorityOf(a.service) - priorityOf(b.service);

        if (priorityDiff !== 0) {
          return priorityDiff;
        }

        return a.originalIndex - b.originalIndex;
      })
      .map(({ service }) => service);
  }, [data]);

  return (
    <div className="my-10">
      <h2 className="h3-bold mb-4 font-semibold">{title}</h2>

      {prioritizedServices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          {prioritizedServices.map((service, index) => (
            <div
              key={service.id}
              className={clsx("flex", isAdmin && "max-w-4xl w-full mx-auto")}
            >
              <ServiceCard service={service} index={index} isAdmin={isAdmin} />
              {isAdmin && (
                <div className="flex flex-col gap-2 justify-center items-center">
                  <Button
                    variant="ghost"
                    onClick={() => onDelete?.(service.id)}
                  >
                    <Trash className="text-red-500 w-5 h-5" />
                  </Button>
                  <Button variant="ghost" onClick={() => onEdit?.(service)}>
                    <Pen className="w-5 h-5" />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No services found</p>
      )}
    </div>
  );
};

export default ServicesList;
