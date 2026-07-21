"use client";
import Link from "next/link";
import { Code2, Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-[#020617]/80 backdrop-blur-md border-b border-cyan-900/30">
      {/* Logo */}
      <div className="text-white font-black text-xl tracking-widest flex items-center gap-2">
        <span className="text-cyan-400">AI</span>_ENGINEER
      </div>
      
      {/* Menu Navigasi Utama */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <Link href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</Link>
        <Link href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</Link>
        <Link href="#portfolio" className="hover:text-cyan-400 transition-colors duration-300">Portfolio</Link>
        <Link href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</Link>
      </div>

      {/* Ikon Kanan */}
      <div className="flex gap-4 text-gray-400">
        <Code2 size={20} className="hover:text-emerald-400 cursor-pointer transition-colors" />
        <Terminal size={20} className="hover:text-cyan-400 cursor-pointer transition-colors" />
      </div>
    </nav>
  );
}