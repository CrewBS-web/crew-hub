import { z } from "zod";
import { insertArticlesSchema, insertServicesSchema } from "@/lib/validators";

export type Service = z.infer<typeof insertServicesSchema> & {
  id: string;
};

export type Article = z.infer<typeof insertArticlesSchema> & {
  id: string;
};
