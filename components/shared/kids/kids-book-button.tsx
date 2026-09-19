"use client";

import { PenLineIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAltegBooking } from "@/lib/hooks/use-alteg-booking";

const KidsBookButton = () => {
  const { openBooking } = useAltegBooking();

  return (
    <Button
      type="button"
      variant="book"
      size="long"
      onClick={() => openBooking()}
    >
      <PenLineIcon /> ЗАПИС
    </Button>
  );
};

export default KidsBookButton;
