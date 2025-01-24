import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/providers";
import Navbar2 from "@/components/component/frontend/navbar/navbar2";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linpack Club",
  description: "Created By Linpack Club",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
   
      <body className={`${inter.className}`} >
      <Providers>
         <Navbar2 />
      {children}
      </Providers>
      </body>
      
    </html>

  );
}
