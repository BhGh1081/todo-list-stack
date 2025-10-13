import type { Metadata } from "next";
import { lusitana } from "./ui/font";
import "./ui/globals.css";
import { Provider } from "./provider";




export const metadata: Metadata = {
  title: "To do list",
  description: "List of tasks",
};

export default function RootLayout({ children, }:
  { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body
        className={`${lusitana.variable} antialiased`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
