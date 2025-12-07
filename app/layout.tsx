import type { Metadata } from "next";
import { lusitana } from "./ui/font";
import "./ui/globals.css";
import { NextAuthSessionProvider } from "./provider";
import { ListLogo } from "./ui/listLogo";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/solid";
import { auth } from "@/auth";




export const metadata: Metadata = {
  title: "To do list",
  description: "List of tasks",
};

export default async function RootLayout({ children, }:
  { children: React.ReactNode }) {

  const session = await auth();

  return (
    <html lang="en">
      <body className={`${lusitana.variable} antialiased`}>
        <NextAuthSessionProvider session={session}>
        <div className="flex flex-col items-center justify-center h-screen space-y-2 md:p-4 p-2">
          <header className="h-auto w-full relative">
            <ListLogo />
            <div className="flex items-center absolute right-4 top-5">
              <Link href='/add-task'>
                <p className="hidden md:block text-white absolute top-30 right-4 text-[20px]">Add</p>
                <PlusIcon className="md:hidden w-8 h-8" />
              </Link>
            </div>
          </header>
          <main className="flex justify-center grow w-full">
            
              {children}
            
          </main>
        </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
