"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant={"ghost"}>
      <ChevronLeft /> Назад
    </Button>
  );
};

export default BackButton;
