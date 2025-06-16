"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CirclePlus, Pen, Trash } from "lucide-react";
import {
  createLocation,
  deleteLocation,
  updateLocation
} from "@/lib/actions/location.actions";
import { Location as LocationType } from "@/types";

import LocationEditDialog from "./location-edit-dialog";
import Location from "../../location";

interface AdminLocationProps {
  locations: LocationType[];
}

export default function AdminLocationView({ locations }: AdminLocationProps) {
  const [editLocation, setEditLocation] = useState<LocationType | null>(null);
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isNew, setIsNew] = useState(false);

  const router = useRouter();

  const emptyLocation = {
    name: "",
    mapLink: "",
    address: "",
    reservationUrl: ""
  };

  const handleDelete = (id: string) => {
    if (isPending) return;
    startTransition(() => {
      deleteLocation(id).then(() => {
        router.refresh();
      });
    });
  };

  const handleEdit = (location: LocationType) => {
    setIsNew(false);
    setEditLocation(location);
    if (!location.id) {
      setIsNew(true);
    }
    setOpen(true);
  };

  const handleSave = async () => {
    setOpen(false);
    if (!isNew && editLocation) {
      updateLocation(editLocation).then(() => {
        router.refresh();
      });
    } else if (isNew && editLocation) {
      createLocation(editLocation).then(() => {
        router.refresh();
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-12">
      <Button
        onClick={() => handleEdit(emptyLocation as LocationType)}
        className="w-1/3"
      >
        <CirclePlus />
        Додати локацію
      </Button>
      <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-3 mt-8">
        {locations.map((location, index) => (
          <div key={index}>
            <Location
              key={index}
              name={location.name}
              mapLink={location.mapLink}
              address={location.address}
              reservationUrl={location.reservationUrl}
            />

            <div className="flex flex-row gap-2 justify-center items-center">
              <Button
                variant="ghost"
                onClick={() => handleDelete?.(location.id)}
              >
                <Trash className="text-red-500 w-5 h-5" />
              </Button>
              <Button variant="ghost" onClick={() => handleEdit?.(location)}>
                <Pen className="w-5 h-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <LocationEditDialog
        open={open}
        setOpen={setOpen}
        editLocation={editLocation}
        setEditLocation={setEditLocation}
        handleSave={handleSave}
      />
    </div>
  );
}
