import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );

// Schema for inserting products
export const insertProductsSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slag must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  brand: z.string().min(3, "Brand must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency
});

// Schema for inserting service
export const insertServicesSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  duration: z.coerce.number(),
  price: z.number(),
  senior_price: z.number()
});

// Schema for inserting article
export const insertArticlesSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  text: z.string().min(3, "Text must be at least 3 characters"),
  images: z.array(z.string()).min(1, "Article must have at least one image")
});

// Schema for sign in users
export const singInFormSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 symbols")
});

// Schema for inserting Staff
export const insertStaffSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  description_short: z
    .string()
    .min(3, "Description must be at least 3 characters"),
  isSenior: z.boolean(),
  isArtDirector: z.boolean(),
  isBarber: z.boolean(),
  images: z.string().min(6, "Password must be at least 6 symbols"),
  slug: z.string().min(3, "Slag must be at least 3 characters").nullable(),
  reserve_link: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .nullable(),
  priority: z.number().int().default(0)
});

// Schema for inserting Location
export const insertLocationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  mapLink: z.string().min(3, "Name must be at least 3 characters"),
  address: z.string().min(3, "Name must be at least 3 characters"),
  reservationUrl: z.string().min(3, "Name must be at least 3 characters")
});
