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

const AdminNavBar = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu className="flex justify-between">
      <h2 className="text-2xl font-bold">CREW</h2>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/admin-crew/services" legacyBehavior passHref>
            <NavigationMenuLink active={pathname === "/admin-crew/services"}>
              <span className="font-semibold">Послуги</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin-crew/staff" legacyBehavior passHref>
            <NavigationMenuLink active={pathname === "/admin-crew/staff"}>
              <span className="font-semibold">Майстри</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/admin-crew/blog" legacyBehavior passHref>
            <NavigationMenuLink active={pathname === "/admin-crew/blog"}>
              <span className="font-semibold">Блог</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div>
        <ExitButton />
      </div>
    </NavigationMenu>
  );
};

export default AdminNavBar;
