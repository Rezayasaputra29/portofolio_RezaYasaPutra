"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// [+] Import ikon UI standar tetap dari lucide-react
import { ArrowUpRight, Database, Cpu } from "lucide-react"; 
// [+] Import logo media sosial dari react-icons
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// Komponen Kecil untuk Efek Typewriter
const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 40); // Kecepatan ketikan
    return () => clearInterval(timer);
  }, [text]);

  return <span>{displayText}<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span></span>;
};

export default function HeroSection() {
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
            Hello, I am
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter leading-tight">
            Reza Yasa Putra, S.Kom <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-4xl md:text-5xl">
              Data Scientist & AI Engineer.
            </span>
          </h1>
          
          <div className="text-gray-400 text-lg max-w-lg mb-6 min-h-[80px]">
            <Typewriter text="Building Convolutional Neural Network architectures, intelligent classification systems, and designing data-driven solutions for complex problems." />
          </div>

          {/* [+] Baris Ikon Media Sosial dengan Tautan Aktif */}
          <div className="flex gap-4 mb-8">
            <a 
              href="https://www.linkedin.com/in/rezayasa-putra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-gray-400 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            >
              <FaLinkedin size={22} />
            </a>
            <a 
              href="https://github.com/Rezayasaputra29" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-400 text-gray-400 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://instagram.com/rezayasa_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400 hover:text-emerald-400 text-gray-400 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]"
            >
              <FaInstagram size={22} />
            </a>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#020617] px-6 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              View Projects <ArrowUpRight size={20} />
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors">
              Contact Me
            </button>
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
            className="relative z-10 w-64 h-80 rounded-2xl border border-cyan-500/30 shadow-[0_0_40px_rgba(34,211,238,0.2)] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]/90 z-10"></div>
            
            <img 
              src="/profile.jpeg" 
              alt="Reza Yasa Putra" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute bottom-4 w-full text-center z-20">
              <h3 className="text-white font-bold text-lg tracking-widest">REZA YASA PUTRA</h3>
              <p className="text-cyan-400 text-xs font-mono mt-1">Ready For Impact_</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -15, 10], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 right-10 z-0 p-4 bg-emerald-900/20 border border-emerald-500/20 rounded-xl hidden md:block"
          >
            <Database className="text-emerald-400/60 w-10 h-10" />
          </motion.div>

          <motion.div
            animate={{ y: [-15, 10, -15], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 left-10 z-20 p-4 bg-cyan-900/20 border border-cyan-500/20 rounded-xl hidden md:block"
          >
            <Cpu className="text-cyan-400/60 w-10 h-10" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}