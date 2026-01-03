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
  const pathname: string = usePathname() as string;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={pathname === "/"}>
            <Link href="/">
              <span className="font-semibold">Головна</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={pathname.includes("services")}>
            <Link href="/services">
              <span className="font-semibold">Наші послуги</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={pathname.includes("staff")}>
            <Link href="/staff">
              <span className="font-semibold">Наші майстри</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={pathname === "/academy"}>
            <Link href="/academy">
              <span className="font-semibold">Академія</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={pathname.includes("blog")}>
            <Link href="/blog">
              <span className="font-semibold">Блог</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
