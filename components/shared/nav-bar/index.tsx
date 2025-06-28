"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink active={pathname === "/"}>
              <span className="font-semibold">Головна</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/services" legacyBehavior passHref>
            <NavigationMenuLink active={pathname.includes("services")}>
              <span className="font-semibold">Наші послуги</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/staff" legacyBehavior passHref>
            <NavigationMenuLink active={pathname.includes("staff")}>
              <span className="font-semibold">Наші майстри</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/academy" legacyBehavior passHref>
            <NavigationMenuLink active={pathname === "/academy"}>
              <span className="font-semibold">Академія</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink active={pathname.includes("blog")}>
              <span className="font-semibold">Блог</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
