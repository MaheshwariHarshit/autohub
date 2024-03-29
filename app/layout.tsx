import type { Metadata } from "next";
import "./globals.css";
import { relative } from "path";
import {Navbar, Footer} from "../components/index"

export const metadata: Metadata = {
  title: "Auto Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
