import Link from "next/link";

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
    <Link
      href={`tel:${phone}`}
      className="min-w-[200px] text-center tabular-nums px-6 py-2.5 rounded-2xl text-sm font-medium transition-transform duration-200 hover:scale-[1.03]"
      style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.3)",
        boxShadow:
          "0 2px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.45)",
      }}
    >
      {text}
    </Link>
  );
};

export default CallButton;
