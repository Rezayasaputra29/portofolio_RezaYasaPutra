"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  PlayCircle,
  FileCode2,
  Terminal,
  Code2,
  BrainCircuit,
  Award,
  LayoutGrid,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { projectsData } from "../../../src/data/projects";

export default function ProjectDetail() {
  const params = useParams();
  const project = projectsData.find((p) => p.id === Number(params.id));

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project Not Found
      </div>
    );

  const renderDemoIcon = (type: string) => {
    if (type === "live") return <ExternalLink size={18} />;
    if (type === "video") return <PlayCircle size={18} />;
    return <FileCode2 size={18} />;
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-cyan-900 overflow-x-hidden pb-24">
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-8 pt-12 relative z-10">
        {/* PERBAIKAN: Tombol Back yang Jelas */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 text-sm text-gray-400 mb-12"
        >
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 text-white bg-white/10 hover:bg-cyan-900/50 px-5 py-2.5 rounded-xl border border-white/20 hover:border-cyan-500 transition-all"
          >
            <ArrowLeft size={16} />{" "}
            <span className="font-semibold">Back to Portfolio</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* KOLOM KIRI */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 flex flex-col"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.solution}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                <div className="p-3 bg-cyan-900/30 rounded-full text-cyan-400">
                  <Code2 size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {project.techStack.length}
                  </div>
                  <div className="text-xs text-gray-400 uppercase">
                    Technologies
                  </div>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4">
                <div className="p-3 bg-emerald-900/30 rounded-full text-emerald-400">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {project.keyFeatures.length}
                  </div>
                  <div className="text-xs text-gray-400 uppercase">
                    Key Features
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-12">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-emerald-600 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg hover:scale-105"
              >
                {renderDemoIcon(project.demoType)}{" "}
                {project.demoType === "live" ? "Live Demo" : "View Project"}
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-4 rounded-xl font-bold transition-all hover:bg-white/10"
              >
                <FaGithub size={20} /> Code
              </a>
            </div>

            <div>
              <h3 className="text-sm font-semibold flex items-center gap-2 text-gray-300 mb-4 uppercase">
                <Terminal size={16} className="text-cyan-400" /> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#0f172a] border border-cyan-900/50 rounded-lg text-cyan-300 text-sm shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* POSISI GAMBAR UTAMA */}
            {/* Letakkan gambar di folder: public/images/projects/nama-gambar.png */}
            {/* Gambar Utama (Hero Image) */}
            <div className="group w-full rounded-2xl overflow-hidden relative border border-white/10 bg-[#0a0f1c] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)] cursor-default">
              {/* Efek Kaca (Glass Overlay) & Cahaya Bawah saat di-hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

              {/* Gambar utuh menyesuaikan tinggi aslinya (h-auto & object-contain) */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain transform group-hover:scale-[1.03] transition-transform duration-700 ease-out relative z-0"
              />
            </div>

            {/* CONDITIONAL RENDERING: Kotak Metrik (Hanya muncul jika di data ada 'metrics') */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-cyan-900/20 to-[#0f172a] border border-cyan-500/20 rounded-2xl p-6 text-center shadow-lg"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="p-2 bg-yellow-500/20 text-yellow-400 rounded-lg">
                  <Award size={20} />
                </span>{" "}
                Key Features
              </h3>
              <ul className="space-y-4">
                {project.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-gray-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CONDITIONAL RENDERING: Visualisasi */}
            {project.visualizations && project.visualizations.length > 0 && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="p-2 bg-purple-500/20 text-purple-400 rounded-lg">
                    <LayoutGrid size={20} />
                  </span>
                  Model Evaluation & Metrics
                </h3>

                {/* UBAH: Dari grid 2 kolom menjadi tumpukan vertikal (flex-col) yang lebar */}
                <div className="flex flex-col gap-10">
                  {project.visualizations.map((vis, idx) => (
                    <div
                      key={idx}
                      className="w-full bg-[#0a0f1c] border border-white/10 rounded-xl p-6 flex flex-col items-center group"
                    >
                      {/* Label otomatis berdasarkan urutan gambar */}
                      <span className="text-gray-400 text-sm font-semibold mb-6 uppercase tracking-widest border-b border-white/10 pb-2">
                        {idx === 0
                          ? "Training & Validation Loss"
                          : "Confusion Matrix Analysis"}
                      </span>

                      {/* Kontainer gambar dengan efek zoom saat di-hover */}
                      <div className="w-full flex justify-center items-center overflow-hidden rounded-lg bg-white/5 p-4">
                        <img
                          src={vis}
                          alt={`Visualization ${idx + 1}`}
                          className="max-w-full h-auto max-h-[600px] object-contain group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      </div>
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
