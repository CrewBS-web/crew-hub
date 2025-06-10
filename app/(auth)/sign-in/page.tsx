import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import CredentialsSingInForm from "./credentials-signin-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metaData: Metadata = {
  title: "Sign in"
};

const SignInPage = async () => {
  const session = await auth();

  if (session) {
    return redirect("/admin-crew");
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <CardTitle className="text-center">Авторизація</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSingInForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
