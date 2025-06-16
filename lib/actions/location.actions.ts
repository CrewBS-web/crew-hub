"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { revalidatePath } from "next/cache";
import { Location } from "@/types";

export async function getLocations() {
  const data = await prisma.locations.findMany();

  return convertToPlainObject(data);
}

export async function deleteLocation(id: string) {
  await prisma.locations.delete({
    where: {
      id: id
    }
  });
  revalidatePath("/");
  revalidatePath("/locations");
}

export async function createLocation(location: Location) {
  await prisma.locations.create({
    data: {
      ...location
    }
  });
  revalidatePath("/");
  revalidatePath("/locations");
}

export async function updateLocation(location: Location) {
  await prisma.locations.update({
    where: {
      id: location.id
    },
    data: {
      ...location
    }
  });
  revalidatePath("/");
  revalidatePath("/locations");
}
