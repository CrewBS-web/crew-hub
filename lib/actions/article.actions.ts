"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";

// Get Articles

export async function getArticles() {
  const data = await prisma.articles.findMany();

  return convertToPlainObject(data);
}

export async function getArticleById(id: string) {
  const data = await prisma.articles.findUnique({
    where: { id: id }
  });

  return convertToPlainObject(data);
}
