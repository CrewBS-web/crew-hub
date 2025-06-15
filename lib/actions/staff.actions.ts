"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { Staff } from "@prisma/client";

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

export async function deleteStaff(id: string) {
  await prisma.staff.delete({
    where: {
      id: id
    }
  });
}

export async function createStaff(staff: Staff) {
  await prisma.staff.create({
    data: {
      ...staff
    }
  });
}

export async function updateStaff(staff: Staff) {
  await prisma.staff.update({
    where: {
      id: staff.id
    },
    data: {
      ...staff
    }
  });
}
