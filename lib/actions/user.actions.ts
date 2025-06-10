"use server";

import { singInFormSchema } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Sign in user with credentials

export const signInWithCredentials = async (
  prevState: unknown,
  formData: FormData
) => {
  try {
    const user = singInFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password")
    });

    await signIn("credentials", user);

    return { success: true, message: "Успішний вхід" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: "Помилка входу" };
  }
};

// Sing out user
export const singOutUser = async () => {
  await signOut();
};
