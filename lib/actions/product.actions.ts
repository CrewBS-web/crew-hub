"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { Service } from "@/types";

// Get services

export async function getServices() {
  const data = await prisma.services.findMany();

  return convertToPlainObject(data);
}

export async function deleteService(id: string) {
  await prisma.services.delete({
    where: {
      id: id
    }
  });
}

export async function createService(service: Service) {
  debugger;
  await prisma.services.create({
    data: {
      ...service
    }
  });
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
}
