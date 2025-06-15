import { redirect } from "next/navigation";
import { auth } from "@/auth";

const Admin = async () => {
  const session = await auth();

  if (!session) {
    return redirect("/sign-in");
  }
  return redirect("/admin-crew/services");
};

export default Admin;
