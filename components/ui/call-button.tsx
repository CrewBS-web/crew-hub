import Link from "next/link";
import { Button } from "./button";

const CallButton = () => {
  return (
    <Button asChild variant={"outline"}>
      <Link href={"tel:+380967201181"}>+380 96 720 1181</Link>
    </Button>
  );
};

export default CallButton;
