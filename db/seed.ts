import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  const prisma = new PrismaClient();

  await prisma.articles.deleteMany();
  await prisma.articles.createMany({ data: sampleData.articles });

  console.log("Database seeded successfully");
}

main();
