"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, User, Terminal, Globe } from "lucide-react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Mengecek apakah user sudah pernah melihat splash screen di sesi ini
    const hasSeenSplash = sessionStorage.getItem("splashSeen");

    if (hasSeenSplash) {
      setIsVisible(false); // Jika sudah, langsung hilangkan
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("splashSeen", "true"); // Simpan ke memori browser
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#020617]" // Warna latar Slate super gelap
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex gap-4 mb-8"
          >
            <div className="p-3 rounded-full bg-cyan-900/30 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <Code2 className="text-cyan-400" size={24} />
            </div>
            <div className="p-3 rounded-full bg-cyan-900/30 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <User className="text-cyan-400" size={24} />
            </div>
            <div className="p-3 rounded-full bg-emerald-900/30 border border-emerald-500/30 shadow-[0_0_15px_rgba(52,211,153,0.4)]">
              <Terminal className="text-emerald-400" size={24} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Welcome To My
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
              Portfolio Website
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-12 flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/20"
          >
            <Globe className="text-cyan-400" size={16} />
            <span className="text-cyan-300 text-sm font-medium tracking-wide">
              Initializing Environment...
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
