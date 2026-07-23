"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutGrid,
  Award,
  Briefcase,
  Cpu,
  ArrowRight,
  ExternalLink,
  PlayCircle,
  FileCode2,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { experiencesData } from "../data/experiences"; // [+] Tambahkan import ini
// Import Data
import { projectsData } from "../data/projects";
import { certificatesData, Certificate } from "../data/certificates";
import {
  SiPython,
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
  SiHtml5,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiGit,
  SiVercel,
} from "react-icons/si";

// [+] TANDAI: Tambahkan FaFileExcel di baris ini
import {
  FaBrain,
  FaRobot,
  FaNetworkWired,
  FaDatabase,
  FaGlobe,
  FaFileExcel,
} from "react-icons/fa";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const tabs = [
    { id: "projects", label: "Projects", icon: LayoutGrid },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "techstack", label: "Tech Stack", icon: Cpu },
  ];
  // DATA KATEGORI TECH STACK
  const techCategories = [
    {
      title: "AI & Data Science",
      icon: FaBrain,
      color: "text-cyan-400",
      techs: [
        { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
        { name: "TensorFlow.js", icon: SiTensorflow, color: "text-[#FF6F00]" },
        { name: "Pandas", icon: SiPandas, color: "text-[#150458]" },
        { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-[#F7931E]" },
        { name: "CNN", icon: FaNetworkWired, color: "text-cyan-400" },
        { name: "IndoBERT", icon: FaRobot, color: "text-purple-400" },
        { name: "NLP", icon: FaBrain, color: "text-pink-400" },
      ],
    },
    {
      title: "Web & Database",
      icon: FaGlobe,
      color: "text-emerald-400",
      techs: [
        { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
        { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
        { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      ],
    },
    {
      title: "Tools & Deployment",
      icon: FaDatabase,
      color: "text-yellow-400",
      techs: [
        { name: "Git", icon: SiGit, color: "text-[#F05032]" },
        { name: "Vercel", icon: SiVercel, color: "text-white" },
        { name: "MS Excel", icon: FaFileExcel, color: "text-[#217346]" },
      ],
    },
  ];
  const renderDemoButton = (type: string, link: string) => {
    if (type === "live")
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="p-2 bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-400 rounded-full border border-transparent hover:border-emerald-500/30"
        >
          <ExternalLink size={18} />
        </a>
      );
    if (type === "video")
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="p-2 bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 rounded-full border border-transparent hover:border-purple-500/30"
        >
          <PlayCircle size={18} />
        </a>
      );
    if (type === "colab")
      return (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="p-2 bg-white/5 hover:bg-yellow-500/20 text-gray-400 hover:text-yellow-400 rounded-full border border-transparent hover:border-yellow-500/30"
        >
          <FileCode2 size={18} />
        </a>
      );
    return null;
  };

  return (
    <section
      id="portfolio"
      className="relative w-full min-h-screen bg-[#020617] px-8 py-24 overflow-hidden flex flex-col items-center perspective-1000"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, rotateX: -30, y: 100 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full flex flex-col items-center max-w-6xl"
      >
        <div className="text-center max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              Showcase.
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id ? "text-white shadow-[0_5px_20px_rgba(34,211,238,0.3)] -translate-y-1" : "text-gray-400 hover:text-cyan-300 hover:bg-white/5"}`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600/80 to-emerald-600/80 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <tab.icon size={18} className="relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="w-full min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* KONTEN PROJECTS */}
            {activeTab === "projects" && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projectsData.map((project) => (
                  <div
                    key={project.id}
                    className="group flex flex-col justify-between bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
                  >
                    <div>
                      <div className="h-48 bg-[#020617] border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                        <Cpu className="text-cyan-500 w-16 h-16 opacity-50 group-hover:scale-125 transition-transform duration-500" />
                      </div>
                      <div className="p-6 pb-2">
                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mt-1 mb-2 leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {project.shortDesc}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 mt-auto">
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 rounded-full border border-transparent hover:border-cyan-500/30"
                        >
                          <FaGithub size={18} />
                        </a>
                        {renderDemoButton(project.demoType, project.demoLink)}
                      </div>
                      <Link
                        href={`/project/${project.id}`}
                        className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-white transition-colors group/btn"
                      >
                        Details{" "}
                        <ArrowRight
                          size={16}
                          className="group-hover/btn:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* KONTEN CERTIFICATES */}
            {activeTab === "certificates" && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {certificatesData.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => setSelectedCert(cert)}
                    className="group relative w-full aspect-[4/3] bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(52,211,153,0.2)] cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-[#020617] flex items-center justify-center overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent transition-opacity duration-500 z-20"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1 drop-shadow-lg">
                        {cert.issuer}
                      </p>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors line-clamp-2 drop-shadow-lg">
                        {cert.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 3. KONTEN EXPERIENCE (Magazine Style 3D) */}
            {activeTab === "experience" && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                className="w-full flex flex-col gap-24 md:gap-32 py-10"
              >
                {experiencesData.map((exp, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    key={exp.id}
                    // Membuat tata letak zig-zag (kiri-kanan berselang-seling)
                    className={`flex flex-col gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                  >
                    {/* BAGIAN TEKS (Narrative & Metrics) */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-mono tracking-widest uppercase">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-cyan-400 font-medium mb-6">
                        @ {exp.company}
                      </h4>
                      <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        {exp.description}
                      </p>
                      <ul className="space-y-4">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-4 text-gray-300"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* ==================================================== */}
                    {/* BAGIAN VISUAL (3D Hover Gallery - 3 Images)          */}
                    {/* ==================================================== */}
                    <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] relative perspective-1000 group mt-8 lg:mt-0">
                      {/* GAMBAR 1 (Utama - Belakang Kiri Atas) */}
                      {/* Saat grup di-hover: geser ke kiri atas. Saat div ini di-hover: maju ke depan (z-50) & membesar */}
                      <div className="absolute top-0 left-0 w-[70%] h-[60%] bg-[#0a0f1c] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 z-10 group-hover:-translate-x-6 group-hover:-translate-y-4 group-hover:rotate-[-4deg] hover:!z-50 hover:!scale-110 cursor-pointer">
                        <span className="text-gray-600 font-mono text-xs absolute z-0 inset-0 flex items-center justify-center">
                          Img 1: {exp.image1}
                        </span>
                        <img
                          src={exp.image1}
                          alt="Dokumentasi 1"
                          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity z-10 relative"
                        />
                      </div>

                      {/* GAMBAR 2 (Dokumentasi 2 - Tengah Kanan) */}
                      <div className="absolute top-[20%] right-0 w-[65%] h-[55%] bg-[#020617] rounded-2xl overflow-hidden border-4 border-[#020617] shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 z-20 group-hover:translate-x-6 group-hover:rotate-[4deg] hover:!z-50 hover:!scale-110 cursor-pointer">
                        <span className="text-gray-600 font-mono text-xs absolute z-0 inset-0 flex items-center justify-center">
                          Img 2: {exp.image2}
                        </span>
                        <img
                          src={exp.image2}
                          alt="Dokumentasi 2"
                          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity z-10 relative"
                        />
                      </div>

                      {/* GAMBAR 3 (Sertifikat / Tambahan - Bawah Kiri) */}
                      <div className="absolute bottom-0 left-[10%] w-[55%] h-[50%] bg-[#0f172a] rounded-2xl overflow-hidden border-4 border-cyan-900/50 shadow-[0_20px_50px_rgba(34,211,238,0.2)] transition-all duration-500 z-30 group-hover:-translate-x-2 group-hover:translate-y-6 group-hover:rotate-[-2deg] hover:!z-50 hover:!scale-110 cursor-pointer">
                        <span className="text-gray-600 font-mono text-xs absolute z-0 inset-0 flex items-center justify-center">
                          Img 3: {exp.image3}
                        </span>
                        <img
                          src={exp.image3}
                          alt="Dokumentasi 3"
                          className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity z-10 relative"
                        />
                      </div>

                      {/* Ornamen Garis Neon (Opsional untuk estetika) */}
                      <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-3xl z-0 transition-transform duration-700 group-hover:translate-x-8 group-hover:-translate-y-8"></div>
                      <div className="absolute bottom-10 left-0 w-20 h-20 border-b-2 border-l-2 border-emerald-500/30 rounded-bl-3xl z-0 transition-transform duration-700 group-hover:-translate-x-8 group-hover:translate-y-8"></div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* KONTEN TECH STACK (3D Floating Logos) */}
            {activeTab === "techstack" && (
              <motion.div
                key="techstack"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                className="w-full max-w-5xl mx-auto py-8 flex flex-col gap-12"
              >
                <div className="text-center mb-4">
                  <p className="text-gray-400 text-lg">
                    Technologies and tools I frequently use to build data-driven
                    solutions and modern applications.
                  </p>
                </div>

                {techCategories.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden group"
                  >
                    {/* Efek Cahaya Latar di setiap Kategori */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -z-10 group-hover:bg-cyan-500/10 transition-colors duration-700"></div>

                    <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                      <category.icon className={`text-2xl ${category.color}`} />
                      <h3 className="text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                      {category.techs.map((tech, idx) => (
                        <motion.div
                          key={idx}
                          // Animasi melayang (floating) terus-menerus secara acak
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 3 + (idx % 3),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: idx * 0.1,
                          }}
                          className="relative flex flex-col items-center justify-center p-4 bg-[#020617]/50 border border-white/5 rounded-xl hover:bg-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer group/item perspective-1000"
                        >
                          <div className="text-4xl mb-3 transform transition-transform duration-500 group-hover/item:scale-125 group-hover/item:rotate-y-[15deg] group-hover/item:-translate-y-2">
                            <tech.icon
                              className={`${tech.color} drop-shadow-lg`}
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-500 group-hover/item:text-white transition-colors text-center">
                            {tech.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ==========================================
          [PERBAIKAN 3]: MODAL DETAIL SERTIFIKAT (Fokus Gambar Super Besar)
          ========================================== */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-4 md:py-8">
            {/* Latar Belakang Gelap */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
            />

            {/* Kotak Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-5xl bg-[#0a0f1c] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col"
            >
              {/* BAGIAN ATAS: Gambar Sertifikat Membesar Maksimal */}
              <div className="w-full bg-[#050810] relative flex items-center justify-center p-4">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  // Kunci utamanya di sini: Tinggi gambar dipaksa mengisi ruang maksimal tanpa memutus rasio
                  className="w-full h-auto max-h-[65vh] object-contain rounded-lg drop-shadow-2xl"
                />
              </div>

              {/* BAGIAN BAWAH: Judul & Tombol Close dengan layout rapi */}
              <div className="w-full p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0a0f1c] border-t border-white/5">
                <div>
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1 block">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {selectedCert.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Issue Date: {selectedCert.issueDate}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-8 py-3 w-full md:w-auto bg-white/5 hover:bg-red-500/80 text-white rounded-lg transition-colors font-medium border border-white/10 whitespace-nowrap"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
