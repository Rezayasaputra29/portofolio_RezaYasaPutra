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

// Import Data
import { projectsData } from "../data/projects";
import { certificatesData, Certificate } from "../data/certificates";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("projects");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const tabs = [
    { id: "projects", label: "Projects", icon: LayoutGrid },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "techstack", label: "Tech Stack", icon: Cpu },
  ];

  const renderDemoButton = (type: string, link: string) => {
    if (type === "live")
      return (
        <a href={link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-400 rounded-full border border-transparent hover:border-emerald-500/30">
          <ExternalLink size={18} />
        </a>
      );
    if (type === "video")
      return (
        <a href={link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 rounded-full border border-transparent hover:border-purple-500/30">
          <PlayCircle size={18} />
        </a>
      );
    if (type === "colab")
      return (
        <a href={link} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-yellow-500/20 text-gray-400 hover:text-yellow-400 rounded-full border border-transparent hover:border-yellow-500/30">
          <FileCode2 size={18} />
        </a>
      );
    return null;
  };

  return (
    <section id="portfolio" className="relative w-full min-h-screen bg-[#020617] px-8 py-24 overflow-hidden flex flex-col items-center perspective-1000">
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
            Portfolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Showcase.</span>
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
                <motion.div layoutId="active-tab" className="absolute inset-0 bg-gradient-to-r from-cyan-600/80 to-emerald-600/80 rounded-xl" transition={{ type: "spring", stiffness: 300, damping: 25 }} />
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
              <motion.div key="projects" initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(10px)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                  <div key={project.id} className="group flex flex-col justify-between bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]">
                    <div>
                      <div className="h-48 bg-[#020617] border-b border-white/10 relative overflow-hidden flex items-center justify-center">
                        <Cpu className="text-cyan-500 w-16 h-16 opacity-50 group-hover:scale-125 transition-transform duration-500" />
                      </div>
                      <div className="p-6 pb-2">
                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">{project.category}</span>
                        <h3 className="text-xl font-bold text-white mt-1 mb-2 leading-snug">{project.title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.shortDesc}</p>
                      </div>
                    </div>
                    <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 mt-auto">
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 rounded-full border border-transparent hover:border-cyan-500/30"><FaGithub size={18} /></a>
                        {renderDemoButton(project.demoType, project.demoLink)}
                      </div>
                      <Link href={`/project/${project.id}`} className="flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-white transition-colors group/btn">
                        Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* KONTEN CERTIFICATES */}
            {activeTab === "certificates" && (
              <motion.div key="certificates" initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(10px)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificatesData.map((cert) => (
                  <div 
                    key={cert.id} 
                    onClick={() => setSelectedCert(cert)}
                    className="group relative w-full aspect-[4/3] bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(52,211,153,0.2)] cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-[#020617] flex items-center justify-center overflow-hidden">
                       <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-10" />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/70 to-transparent transition-opacity duration-500 z-20"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1 drop-shadow-lg">{cert.issuer}</p>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors line-clamp-2 drop-shadow-lg">{cert.title}</h3>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* KONTEN EXPERIENCE */}
            {activeTab === "experience" && (
               <motion.div key="experience" initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(10px)" }} className="max-w-4xl mx-auto border-l-2 border-cyan-900/50 pl-8 space-y-12">
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-cyan-500 rounded-full border-4 border-[#020617] shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                    <h3 className="text-2xl font-bold text-white">Digital Marketing Business Consultant</h3>
                    <h4 className="text-emerald-400 font-medium text-lg mb-2">Apindo (MSIB Internship)</h4>
                    <p className="text-gray-400 leading-relaxed">Provided digital marketing consultancy for local small and medium enterprises. Achieved recognition as one of the top three performers.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-cyan-900 rounded-full border-4 border-[#020617]"></div>
                    <h3 className="text-2xl font-bold text-white">Data Analyst Intern</h3>
                    <h4 className="text-emerald-400 font-medium text-lg mb-2">Institut Pemerintahan Dalam Negeri (IPDN)</h4>
                    <p className="text-gray-400 leading-relaxed">Conducted industrial field practice at the Jatinangor central office. Managed documentation submissions and comprehensively analyzed internal IT system vulnerabilities.</p>
                  </div>
               </motion.div>
            )}

            {/* KONTEN TECH STACK */}
            {activeTab === "techstack" && (
               <motion.div key="techstack" initial={{ opacity: 0, filter: "blur(10px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(10px)" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">AI & Machine Learning</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "TensorFlow.js", "CNN", "IndoBERT", "ResNet", "FER-2013"].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-[#0f172a] border border-cyan-900/50 rounded-lg text-cyan-300 text-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Frontend Development</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Next.js", "Tailwind CSS", "Framer Motion"].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-[#0f172a] border border-emerald-900/50 rounded-lg text-emerald-300 text-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Backend & Database</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Laravel", "Supabase", "SQL", "Git"].map((tech) => (
                        <span key={tech} className="px-4 py-2 bg-[#0f172a] border border-purple-900/50 rounded-lg text-purple-300 text-sm">{tech}</span>
                      ))}
                    </div>
                  </div>
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
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
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
                  <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-1 block">{selectedCert.issuer}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{selectedCert.title}</h3>
                  <p className="text-gray-400 text-sm">Issue Date: {selectedCert.issueDate}</p>
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