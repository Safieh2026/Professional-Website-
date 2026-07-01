import { NextResponse } from "next/server";

export function middleware(request: any) {
  const auth = request.cookies.get("auth")?.value;

  // If user is not authenticated, redirect to login
  if (auth !== "valid") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If cookie is valid, allow access
  return NextResponse.next();
}

// Apply middleware only to the protected route(s)
export const config = {
  matcher: ["/community/secure/:path*", "/community/secure"],
};
