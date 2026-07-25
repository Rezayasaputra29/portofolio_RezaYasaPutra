"use client";
import Link from "next/link";
import { Code2, Terminal } from "lucide-react";
import LanguageToggle from "./LanguageToggle"; // Sesuaikan jika jalurnya berbeda

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-[#020617]/80 backdrop-blur-md border-b border-cyan-900/30">
      {/* Logo */}
      <div className="text-white font-black text-xl tracking-widest flex items-center gap-2">
        <span className="text-cyan-400">MY</span>PORTFOLIO WEBSITE
      </div>
      
      {/* Menu Navigasi Utama */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <Link href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</Link>
        <Link href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</Link>
        <Link href="#portfolio" className="hover:text-cyan-400 transition-colors duration-300">Portfolio</Link>
        <Link href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</Link>
      </div>

      {/* Ikon Kanan & Tombol Bahasa */}
      <div className="flex items-center gap-5 text-gray-400">
        <div className="hidden sm:flex items-center gap-4">
          
        </div>
        
        {/* Tombol Ganti Bahasa Dipasang di Sini */}
        <LanguageToggle />
      </div>
    </nav>
  );
}