// https://www.youtube.com/watch?v=Yw7yWHigGKI

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Đức Võ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light w-full min-h-screen`}>
        <NavBar />
        <MainLayout className="py-10 relative">{children}</MainLayout>
        <Footer />
      </body>
    </html>
  );
}
