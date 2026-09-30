"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle"; // Sesuaikan jika jalurnya berbeda

export default function Navbar() {
  const { language } = useLanguage();

  const links = [
    { href: "#home", label: { en: "Home", id: "Beranda" } },
    { href: "#about", label: { en: "About", id: "Tentang" } },
    { href: "#portfolio", label: { en: "Portfolio", id: "Portofolio" } },
    { href: "#contact", label: { en: "Contact", id: "Kontak" } },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-[#020617]/80 backdrop-blur-md border-b border-white/10">
      {/* Logo */}
      <div className="text-white font-semibold text-lg tracking-tight">
        <span className="text-cyan-400">Reza</span> Yasa Putra
      </div>

      {/* Menu Navigasi Utama */}
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            {link.label[language]}
          </Link>
        ))}
      </div>

      {/* Ikon Kanan & Tombol Bahasa */}
      <div className="flex items-center gap-5 text-gray-400">
        <LanguageToggle />
      </div>
    </nav>
  );
}