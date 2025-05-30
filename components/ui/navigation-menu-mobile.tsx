import Link from "next/link";
import CallButton from "./call-button";
import SocialLinks from "../shared/social-links";

interface NavigationMenuMobileProps {
  onLinkClick: () => void;
}

const NavigationMenuMobile = ({ onLinkClick }: NavigationMenuMobileProps) => {
  return (
    <div className="flex flex-col justify-between h-full p-3">
      <div className="flex flex-col gap-8 text-xl">
        <Link onClick={onLinkClick} href="/">
          Головна
        </Link>
        <Link onClick={onLinkClick} href="/services">
          Наші послуги
        </Link>
        <Link onClick={onLinkClick} href="/staff">
          Наші майстри
        </Link>
        <Link onClick={onLinkClick} href="/academy">
          Академія
        </Link>
        <Link onClick={onLinkClick} href="/blog">
          Блог
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <CallButton />
        <SocialLinks />
      </div>
    </div>
  );
};

export default NavigationMenuMobile;
