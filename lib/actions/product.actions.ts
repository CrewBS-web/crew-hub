"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

// Get services

export async function getServices() {
  const data = await prisma.services.findMany();

  return convertToPlainObject(data);
}
