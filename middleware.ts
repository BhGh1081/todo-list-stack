import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
    const isLogedIn = !!req.auth?.user

    if(!isLogedIn){
        const redirectUrl = new URL('login', req.url);
        redirectUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
        return NextResponse.redirect(redirectUrl);
    }
})

export const config = {
    matcher: ['/add-task'],
    runtime: 'nodejs'
}