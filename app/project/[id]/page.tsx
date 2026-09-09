"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  PlayCircle,
  FileCode2,
  Download,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { projectsData } from "../../../src/data/projects";
import { useLanguage } from "../../../src/context/LanguageContext";

export default function ProjectDetail() {
  const params = useParams();
  const { language } = useLanguage();

  const project = projectsData.find((p) => p.id === Number(params.id));

  if (!project)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0A0B0F] text-white">
        {language === "en" ? "Project not found" : "Proyek tidak ditemukan"}
      </div>
    );

  const renderDemoIcon = (type: string) => {
    if (type === "live") return <ExternalLink size={18} />;
    if (type === "video") return <PlayCircle size={18} />;
    return <FileCode2 size={18} />;
  };

  return (
    <main className="min-h-screen bg-[#0A0B0F] text-[#EDEDE7] selection:bg-[#C99A46]/30 overflow-x-hidden pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-28 md:pt-32 relative z-10">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-[#8B8F98] hover:text-[#EDEDE7] transition-colors"
          >
            <ArrowLeft size={15} />
            {language === "en" ? "Back to portfolio" : "Kembali ke portofolio"}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* KOLOM KIRI */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col"
          >
            <h1 className="font-serif text-4xl md:text-5xl leading-[1.08] tracking-tight text-white mb-6">
              {project.title[language]}
            </h1>

            <p className="text-[#9CA0AA] text-base md:text-lg leading-relaxed mb-8">
              {project.solution[language]}
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border border-white/10 rounded-xl p-5 transition-colors hover:border-[#C99A46]/40">
                <div className="font-mono text-2xl text-white">
                  {project.techStack.length}
                </div>
                <div className="text-xs text-[#6E7280] mt-1">
                  {language === "en" ? "Technologies" : "Teknologi"}
                </div>
              </div>
              <div className="border border-white/10 rounded-xl p-5 transition-colors hover:border-[#C99A46]/40">
                <div className="font-mono text-2xl text-white">
                  {project.keyFeatures[language].length}
                </div>
                <div className="text-xs text-[#6E7280] mt-1">
                  {language === "en" ? "Key features" : "Fitur utama"}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {project.demoType !== "none" && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  download={
                    project.demoType === "pdf" || project.demoType === "excel"
                  }
                  className="flex-1 flex items-center justify-center gap-2 bg-[#C99A46] text-[#0A0B0F] px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:bg-[#DDB05C] hover:-translate-y-0.5"
                >
                  {project.demoType === "pdf" || project.demoType === "excel" ? (
                    <Download size={18} />
                  ) : (
                    renderDemoIcon(project.demoType)
                  )}
                  {project.demoType === "pdf"
                    ? language === "en"
                      ? "Download Dashboard"
                      : "Unduh Dashboard"
                    : project.demoType === "excel"
                      ? language === "en"
                        ? "Download Excel"
                        : "Unduh Data Excel"
                      : project.demoType === "live"
                        ? "Live Demo"
                        : language === "en"
                          ? "View Project"
                          : "Lihat Proyek"}
                </a>
              )}

              {project.datasetLink ? (
                <a
                  href={project.datasetLink}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="flex-1 flex items-center justify-center gap-2 border border-white/15 text-white px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:border-white/30 hover:bg-white/5 hover:-translate-y-0.5"
                >
                  <Download size={18} />
                  {language === "en" ? "Download Dataset" : "Unduh Dataset"}
                </a>
              ) : project.github !== "" ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-white/15 text-white px-6 py-3.5 rounded-lg font-semibold text-sm transition-all hover:border-white/30 hover:bg-white/5 hover:-translate-y-0.5"
                >
                  <FaGithub size={18} />
                  {language === "en" ? "Code" : "Kode"}
                </a>
              ) : null}
            </div>

            {/* Tech stack */}
            <div>
              <h3 className="text-sm font-medium text-[#B7BAC2] mb-4">
                {language === "en" ? "Tech stack" : "Teknologi"}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3 py-1.5 border border-white/10 rounded-md text-[#B7BAC2] transition-colors hover:border-[#C99A46]/40 hover:text-[#C99A46]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* KOLOM KANAN */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Hero image */}
            <div className="group w-full rounded-xl overflow-hidden relative border border-white/10 bg-[#111219] shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#C99A46]/30 hover:shadow-[0_20px_50px_rgba(201,154,70,0.12)] cursor-default">
              <img
                src={project.image}
                alt={project.title[language]}
                className="w-full h-auto object-contain transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="border border-white/10 rounded-xl p-6 text-center transition-colors hover:border-[#C99A46]/40"
                  >
                    <div className="font-mono text-2xl md:text-3xl text-[#C99A46] mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-[#6E7280]">
                      {metric.label[language]}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Key features */}
            <div className="border border-white/10 rounded-xl p-8">
              <h3 className="text-lg font-medium text-white mb-6">
                {language === "en" ? "Key Features" : "Fitur Utama"}
              </h3>
              <ul className="space-y-4">
                {project.keyFeatures[language].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 text-sm text-[#9CA0AA] leading-relaxed"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C99A46] flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visualizations */}
            {project.visualizations && project.visualizations.length > 0 && (
              <div className="border border-white/10 rounded-xl p-8">
                <h3 className="text-lg font-medium text-white mb-8">
                  {language === "en"
                    ? "Data Analysis & Visualizations"
                    : "Analisis Data & Visualisasi"}
                </h3>

                <div className="flex flex-col gap-8">
                  {project.visualizations.map((vis, idx) => (
                    <div
                      key={idx}
                      className="border border-white/10 rounded-lg overflow-hidden p-4 sm:p-6 flex flex-col group transition-colors hover:border-[#C99A46]/30"
                    >
                      <h4 className="text-sm font-medium text-[#C99A46] mb-4 pb-3 border-b border-white/10">
                        {vis.label[language]}
                      </h4>

                      <div className="flex flex-col gap-5 items-center">
                        <div className="w-full flex justify-center items-center overflow-hidden rounded-lg bg-[#0A0B0F] p-2 md:p-6 border border-white/5">
                          <img
                            src={vis.url}
                            alt={vis.label[language]}
                            className="max-w-full h-auto max-h-[500px] object-contain transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                          />
                        </div>

                        {vis.description && (
                          <div className="w-full pl-4 border-l-2 border-[#C99A46]/40">
                            <p className="text-sm text-[#9CA0AA] leading-relaxed">
                              {vis.description[language]}
                            </p>
                          </div>
                        )}
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
