import type { Metadata } from "next";
import { lusitana } from "../ui/font";
import "@/app/ui/globals.css";
import { Header } from "../ui/header";
import { SeProvider } from "../providers/sessionProvider";




export const metadata: Metadata = {
  title: "To do list",
  description: "List of tasks",
};

export default async function RootLayout({ children }:
  { children: React.ReactNode }) {


  return (
    <html lang="en">
      <body className={`${lusitana.variable} antialiased`}>
        <SeProvider>
          <div className="flex flex-col items-center justify-center h-screen overflow-hidden space-y-2 md:px-4 px-2">
            <Header />
            <main className="flex h-[calc(100vh-200px)] justify-center flex-1 w-full md:mt-55 sm:mt-20.5 mt-24.5">
              {children}
            </main>
          </div>
        </SeProvider>
      </body>
    </html>
  );
}
