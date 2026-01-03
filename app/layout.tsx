import React from "react";
import type { Metadata } from "next";
import { lusitana } from "@/app/ui/font";
import "@/app/ui/globals.css";


export const metadata: Metadata = {
    title: "To do list",
    description: "List of tasks",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {


    return (
        <html lang="en overflow-hidden">
            <body className={`${lusitana.variable} antialiased overflow-hidden`}>
                {children}
            </body>
        </html>
    )
}