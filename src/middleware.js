import { NextResponse } from "next/server";

export const middleware = (request)=>{
    const path  = request.nextUrl.pathname;
    const isProtectedPath = path === "/dashboard"
    const isAuthPath = path === "/login" || path === "/signup"
    const token = request.cookies.get("token")?.value || "";

    if(isProtectedPath && !token) return NextResponse.redirect(new URL('/login', request.url));
    if(isAuthPath && token) return NextResponse.redirect(new URL('/dashboard',request.url));
}

export const config = {
  matcher: [
    "/dashboard",
    "/login",
  ],
}