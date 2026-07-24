import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "../src/context/LanguageContext";
import Navbar from "../src/components/navbar"; // [+] Import Navbar di sini

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reza Yasa Putra - Portfolio",
  description: "Data Scientist & AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020617] text-white">
        <LanguageProvider>
          {/* [+] Navbar diletakkan di sini agar ada di SEMUA halaman (termasuk halaman detail proyek) */}
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}