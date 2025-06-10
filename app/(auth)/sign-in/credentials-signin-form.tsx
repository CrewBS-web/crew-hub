"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import { signInWithCredentials } from "@/lib/actions/user.actions";

const CredentialsSingInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: ""
  });

  const SignInBtn = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} className="w-full" variant={"default"}>
        {pending ? "Вхід..." : "Увійти"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <div className="space-y-6 gap-2 flex-col flex p-4">
        <div>
          <Label htmlFor="email" className="text-gray-500 mb-1">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password" className="text-gray-500 mb-1">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            defaultValue={signInDefaultValues.password}
          />
        </div>
        <div className="mt-8">
          <SignInBtn />
        </div>
        {data && !data.success && (
          <div className="text-center text-destructive">{data.message}</div>
        )}
      </div>
    </form>
  );
};

export default CredentialsSingInForm;
