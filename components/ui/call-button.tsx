import Link from "next/link";
import { Button } from "./button";

type CallButtonProps = {
  phone?: string;
  label?: string;
};

function formatUaPhone(e164: string) {
  const digits = e164.replace(/[^\d+]/g, "");
  const m = digits.match(/^\+380(\d{2})(\d{3})(\d{4})$/);
  if (m) return `+380 ${m[1]} ${m[2]} ${m[3]}`;
  return e164;
}

const CallButton = ({ phone = "+380967201181", label }: CallButtonProps) => {
  const text = label ?? formatUaPhone(phone);

  return (
    <Button
      asChild
      variant="outline"
      className="min-w-[200px] justify-center tabular-nums"
    >
      <Link href={`tel:${phone}`}>{text}</Link>
    </Button>
  );
};

export default CallButton;
