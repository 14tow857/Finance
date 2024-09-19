
import { NextResponse } from "next/server";
import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

// Bảo vệ đường dẫn (routes)
const isProtectedRoute = createRouteMatcher([
  "/",
]);

export default clerkMiddleware((auth, request) => {
  //Sử lí đăng kí tài khoản 
  if (isProtectedRoute(request)) {
    auth().protect(); // Bảo vệ yêu cầu này nếu nó thuộc về đường dẫn được bảo vệ
  }
  return NextResponse.next(); // Tiếp tục xử lý yêu cầu
});


export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
