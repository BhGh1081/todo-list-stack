import { NextResponse } from "next/server";
import { auth } from "./auth";
import { startsWith } from "zod";

export default auth((req) => {
    const isLogedIn = !!req.auth?.user;

    /* const response = NextResponse.next();
    response.headers.set("x-pathname", req.nextUrl.pathname); */

    if (!isLogedIn) {
        const redirectUrl = new URL('login', req.url);
        //const hideHeader = req.nextUrl.pathname.startsWith('/login');
        //if (req.nextUrl.pathname !== '/login') {
            redirectUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
            return NextResponse.redirect(redirectUrl);
        //}
    }
})

export const config = {
    matcher: ['/add-task'],
    runtime: 'nodejs'
}