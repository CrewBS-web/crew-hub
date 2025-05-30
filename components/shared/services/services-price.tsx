import { cn } from "@/lib/utils";

interface ProductPriceProps {
  value: number;
  className?: string;
}

const ProductPrice = ({ value, className }: ProductPriceProps) => {
  const stringValue = value.toFixed(2);
  const [intValue] = stringValue.split(".");
  return (
    <p className={cn("text-2xl", className)}>
      {intValue}
      <span className="text-xs"> грн.</span>
    </p>
  );
};

export default ProductPrice;
