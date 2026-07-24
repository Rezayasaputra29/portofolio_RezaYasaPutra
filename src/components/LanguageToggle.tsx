"use client";

import { useLanguage } from "../context/LanguageContext"; 
import { Globe } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all text-sm font-semibold text-gray-300 hover:text-white"
    >
      <Globe size={16} className={language === "en" ? "text-cyan-400" : "text-emerald-400"} />
      {language === "en" ? "EN" : "ID"}
    </button>
  );
}