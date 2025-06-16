import { z } from "zod";
import {
  insertArticlesSchema,
  insertServicesSchema,
  insertStaffSchema,
  insertLocationSchema
} from "@/lib/validators";

export type Service = z.infer<typeof insertServicesSchema> & {
  id: string;
};

export type Staff = z.infer<typeof insertStaffSchema> & {
  id: string;
};

export type Article = z.infer<typeof insertArticlesSchema> & {
  id: string;
};

export type Location = z.infer<typeof insertLocationSchema> & {
  id: string;
};
