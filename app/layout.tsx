import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import SmoothScroll from "@/components/sub/SmoothScroll";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: " Anand Talande",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" type="image/png" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-x-hidden`}
      >
        <SmoothScroll>
          <StarsCanvas />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
