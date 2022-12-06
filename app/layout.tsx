import "./globals.css";

import { Inter } from "@next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx("bg-background font-sans", inter.variable)}>
      <head />
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
