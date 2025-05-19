// middleware.ts

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile", // Only apply middleware to this route
// };







// middleware.ts

// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;

// //   if (pathname === "/profile") {
// //     return NextResponse.redirect(new URL("/hello", request.url));
// //   }

//     if (pathname === "/profile") {
//       return NextResponse.rewrite(new URL("/hello", request.url));
//     }

//   return NextResponse.next(); // Proceed as normal for other routes
// }






// import { NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const theme = request.cookies.get("theme");

//   // If theme cookie doesn't exist, set it
//   if (!theme) {
//     const response = NextResponse.next();
//     response.cookies.set("theme", "dark");
//     return response;
//   }

//   // If theme cookie exists, just continue
//   return NextResponse.next();
// }




import { NextResponse } from "next/server";

export function middleware() {

  const response = NextResponse.next();

  response.headers.set("x-custom-header", "custom-value");

  return response;
}