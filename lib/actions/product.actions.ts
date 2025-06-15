"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { Service } from "@/types";
import { revalidatePath } from "next/cache";

// Get services

export async function getServices() {
  const data = await prisma.services.findMany({
    orderBy: {
      name: "asc"
    }
  });

  return convertToPlainObject(data);
}

export async function deleteService(id: string) {
  await prisma.services.delete({
    where: {
      id: id
    }
  });
  revalidatePath("/admin-crew/services");
  revalidatePath("/services");
}

export async function createService(service: Service) {
  await prisma.services.create({
    data: {
      ...service
    }
  });
  revalidatePath("/admin-crew/services");
  revalidatePath("/services");
}

export async function updateService(service: Service) {
  await prisma.services.update({
    where: {
      id: service.id
    },
    data: {
      ...service
    }
  });
  revalidatePath("/admin-crew/services");
  revalidatePath("/services");
}
