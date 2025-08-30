import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/providers";
import Navbar2 from "@/components/navbar/navbar2";
import CustomCursor from "@/components/ui/CustomCursor";
import StairsWrapper from "@/components/stairs/StairsWrapper";

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
      <body className={`${inter.className}`}>
        <Providers>
          <CustomCursor />
          <div className="relative z-[9997]">
            <Navbar2 />
          </div>
          <StairsWrapper>
            {children}
          </StairsWrapper>
        </Providers>
      </body>
    </html>
  );
}