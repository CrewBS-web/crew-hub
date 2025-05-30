"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

// Get Staff

export async function getStaff() {
  const data = await prisma.staff.findMany();

  return convertToPlainObject(data);
}

export async function getStaffById(id: string) {
  const data = await prisma.staff.findUnique({
    where: { id: id }
  });

  return convertToPlainObject(data);
}
