"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import ExitButton from "@/app/admin-crew/exit-button";
import Logo from "../logo";

const AdminNavBar = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu className="flex justify-between">
      <div className="text-center">
        <Logo height={68} width={68} fixColor={false} /> Admin
      </div>

      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            active={pathname === "/admin-crew/services"}
          >
            <Link href="/admin-crew/services">
              <span className="font-semibold">Послуги</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={pathname === "/admin-crew/staff"}>
            <Link href="/admin-crew/staff">
              <span className="font-semibold">Майстри</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild active={pathname === "/admin-crew/blog"}>
            <Link href="/admin-crew/blog">
              <span className="font-semibold">Блог</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            active={pathname === "/admin-crew/location"}
          >
            <Link href="/admin-crew/location">
              <span className="font-semibold">Локації</span>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div>
        <ExitButton />
      </div>
    </NavigationMenu>
  );
};

export default AdminNavBar;
