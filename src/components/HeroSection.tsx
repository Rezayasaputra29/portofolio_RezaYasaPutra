"use client";
import { motion } from "framer-motion";
// [+] Import ikon UI standar
import { ArrowUpRight } from "lucide-react"; 
// [+] Import logo media sosial
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
// [+] Import hook bahasa
import { useLanguage } from "../context/LanguageContext";

export default function HeroSection() {
  const { language } = useLanguage();

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center bg-[#020617] px-8 pt-20">
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* KOLOM KIRI: Teks & Informasi */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-start text-left"
        >
          <p className="text-cyan-400 font-mono tracking-widest text-sm mb-4 uppercase">
            {language === "en" ? "Hello, I am" : "Halo, Saya"}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter leading-tight">
            Reza Yasa Putra, S.Kom <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-4xl md:text-5xl">
              {language === "en" ? "Data Analyst" : "Data Analyst "}
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed mb-8">
            {language === "en"
              ? "Translating complex data into strategic business insights. Focused on developing interactive visualizations, data modeling, and analytical reporting to drive data-driven decisions."
              : "Menerjemahkan data kompleks menjadi wawasan bisnis yang strategis. Berfokus pada pengembangan visualisasi interaktif, pemodelan data, dan pelaporan analitik untuk mendorong keputusan yang tepat sasaran."}
          </p>

          {/* Baris Ikon Media Sosial dengan Tautan Aktif */}
          <div className="flex gap-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/rezayasa-putra" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/60 hover:text-cyan-400 text-gray-400 transition-colors"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="https://github.com/Rezayasaputra29" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/60 hover:text-cyan-400 text-gray-400 transition-colors"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://instagram.com/rezayasa_" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400/60 hover:text-emerald-400 text-gray-400 transition-colors"
            >
              <FaInstagram size={22} />
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#portfolio" className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#020617] px-6 py-3 rounded-full font-semibold transition-colors">
              {language === "en" ? "View Projects" : "Lihat Proyek"} <ArrowUpRight size={20} />
            </a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors flex items-center">
              {language === "en" ? "Contact Me" : "Hubungi Saya"}
            </a>
          </div>
        </motion.div>

        {/* KOLOM KANAN: Visualisasi 3D Interaktif */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          
          <motion.div
            animate={{ 
              y: [-10, 15, -10],
              rotateX: [0, 5, 0],
              rotateY: [0, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 w-64 h-80 rounded-2xl border border-white/10 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]/90 z-10"></div>
            
            <img 
              src="/profile.jpeg" 
              alt="Reza Yasa Putra" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute bottom-4 w-full text-center z-20">
              <h3 className="text-white font-bold text-lg tracking-tight">REZA YASA PUTRA</h3>
              <p className="text-cyan-400 text-xs font-mono mt-1">
                {language === "en" ? "Ready For Impact" : "Siap Berdampak"}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}