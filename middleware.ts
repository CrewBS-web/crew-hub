import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  const { pathname } = request.nextUrl;

  const isTryingToAccessAdmin = pathname.startsWith("/admin-crew");
  const isUserLoggedIn = !!session;

  if (isTryingToAccessAdmin && !isUserLoggedIn) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (pathname === "/sign-in" && isUserLoggedIn) {
    return NextResponse.redirect(new URL("/admin-crew", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-crew/:path*", "/sign-in"]
};
