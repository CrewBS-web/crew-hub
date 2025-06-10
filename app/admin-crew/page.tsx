import { redirect } from "next/navigation";
import { auth } from "@/auth";

import ExitButton from "./exit-button";

const Admin = async () => {
  const session = await auth();

  if (!session) {
    return redirect("/sign-in");
  }
  return <ExitButton />;
};

export default Admin;
