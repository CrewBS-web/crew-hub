import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();
  await prisma.services.deleteMany();
  await prisma.services.createMany({ data: sampleData.services });
  await prisma.locations.deleteMany();
  await prisma.locations.createMany({ data: sampleData.location });
  await prisma.staff.deleteMany();
  await prisma.staff.createMany({ data: sampleData.staff });
  await prisma.articles.deleteMany();
  await prisma.articles.createMany({ data: sampleData.articles });

  console.log("Database seeded successfully");
}

main();
