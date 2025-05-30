"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

// Get Locations

export async function getLocations() {
  const data = await prisma.locations.findMany();

  return convertToPlainObject(data);
}
