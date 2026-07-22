"use client";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, PlayCircle, FileCode2, Terminal, Code2, BrainCircuit, Award, LayoutGrid, Link } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "../../../src/data/projects";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  
  // Mencari data proyek berdasarkan ID yang ada di URL
  const project = projectsData.find((p) => p.id === Number(params.id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
        <h1>Project Not Found</h1>
      </div>
    );
  }

  // Fungsi Dinamis Ikon Demo
  const renderDemoIcon = (type: string) => {
    if (type === "live") return <ExternalLink size={18} />;
    if (type === "video") return <PlayCircle size={18} />;
    if (type === "colab") return <FileCode2 size={18} />;
    return null;
  };

  const demoText = project.demoType === "live" ? "Live Demo" : project.demoType === "video" ? "Watch Video" : "Open Colab";

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-cyan-900 overflow-x-hidden font-sans pb-24">
      
      {/* Background Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 pt-12 relative z-10">
        
        {/* Breadcrumb / Navigasi Atas */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 text-sm text-gray-400 mb-12">
          {/* [+] Menggunakan komponen Link dari Next.js */}
          <Link href="/#portfolio" className="flex items-center gap-2 hover:text-cyan-400 transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-cyan-500/50">
            <ArrowLeft size={16} /> Back
          </Link>
          <Link href="/#portfolio" className="hover:text-cyan-400 transition-colors">
            Projects
          </Link>
          <span>&gt;</span>
          <span className="text-cyan-400 font-semibold">{project.title}</span>
        </motion.div>

        {/* KONTEN UTAMA - 2 KOLOM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* ==================================================== */}
          {/* KOLOM KIRI: Deskripsi, Metrik, Tombol, dan Tech Stack */}
          {/* ==================================================== */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-5 flex flex-col">
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              {project.title}
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.solution}
            </p>

            {/* Kotak Metrik Utama (Gaya Data Science) */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                <div className="p-3 bg-cyan-900/30 rounded-full text-cyan-400"><Code2 size={24}/></div>
                <div>
                  <div className="text-2xl font-bold text-white">{project.techStack.length}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Technologies</div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                <div className="p-3 bg-emerald-900/30 rounded-full text-emerald-400"><BrainCircuit size={24}/></div>
                <div>
                  <div className="text-2xl font-bold text-white">{project.keyFeatures.length}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">Key Features</div>
                </div>
              </div>
            </div>

            {/* Tombol Aksi (Demo & GitHub) */}
            <div className="flex gap-4 mb-12">
              <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                {renderDemoIcon(project.demoType)} {demoText}
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-4 rounded-xl font-semibold transition-all">
                <FaGithub size={20} /> Github
              </a>
            </div>

            {/* Tech Stack List */}
            <div>
              <h3 className="text-sm font-semibold flex items-center gap-2 text-gray-300 mb-4 uppercase tracking-widest">
                <Terminal size={16} className="text-cyan-400"/> Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 bg-[#0f172a] border border-cyan-900/50 rounded-lg text-cyan-300 text-sm flex items-center gap-2 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> {tech}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

          {/* ==================================================== */}
          {/* KOLOM KANAN: Gambar Hero, Metrik AI, & Key Features */}
          {/* ==================================================== */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Gambar Utama (Hero Image) */}
            <div className="w-full aspect-video bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl">
              <span className="absolute inset-0 flex items-center justify-center text-cyan-900 font-mono text-xs opacity-50">Image: {project.image}</span>
              {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
            </div>

            {/* Key AI Metrics (Accuracy, Latency, dll) */}
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="bg-gradient-to-br from-cyan-900/20 to-[#0f172a] border border-cyan-500/20 rounded-2xl p-6 text-center shadow-lg">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">{metric.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Key Features List */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg"><Award size={20}/></span> 
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-400 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* VISUALISASI TAMBAHAN (Sangat Penting untuk Data Scientist) */}
            {project.visualizations && project.visualizations.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="p-2 bg-purple-500/20 text-purple-400 rounded-lg"><LayoutGrid size={20}/></span> 
                  Model Evaluation & Matrix
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.visualizations.map((vis, idx) => (
                    <div key={idx} className="w-full aspect-video bg-[#020617] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center relative">
                      <span className="text-gray-600 font-mono text-xs">Vis: {vis}</span>
                      {/* <img src={vis} className="w-full h-full object-contain" /> */}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </div>
      </div>
    </main>
  );
}