import type { Metadata } from "next";
import Navbar from "./components/Navbar"
import Attribution from "./components/Attribution";
import localFont from "next/font/local";
import "./globals.css";


export const metadata: Metadata = {
  title: "Frontend Mentor Personal Finance App Solution by Defenstration",
  description: "Solution for the personal finance challend on Frontend Mentor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Attribution />
      </body>
    </html>
  );
}
