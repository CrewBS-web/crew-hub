"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/shared/logo";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Logo height={208} width={208} fixColor={false} />
      <div className="p-6 w-1/2 sm:w-1/3 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Не знайдено</h1>
        <p className="text-destructive">Данної сторінки не існує</p>
        <Button
          className="mt-4 ml-2"
          variant={"outline"}
          onClick={() => (window.location.href = "/")}
        >
          Повернутись на головну
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
