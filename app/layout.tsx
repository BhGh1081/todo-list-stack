import type { Metadata } from "next";
import { lusitana } from "./ui/font";
import "./globals.css";


export const metadata: Metadata = {
  title: "Todo list",
  description: "List of tasks",
};

export default function RootLayout({children,}:
  {children: React.ReactNode}) {

  return (
    <html lang="en">
      <body
        className={`${lusitana.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
