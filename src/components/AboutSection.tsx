"use client";
import { motion } from "framer-motion";
import {
  Download,
  ArrowUpRight,
  Award,
  FolderGit2,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AboutSection() {
  const { language } = useLanguage();

  const stats = [
    {
      icon: GraduationCap,
      value: "3.76",
      label: { en: "Cum Laude GPA", valueID: "IPK Cum Laude" },
    },
    {
      icon: FolderGit2,
      value: "10+",
      label: { en: "Completed Projects", valueID: "Proyek Selesai" },
    },
    {
      icon: Award,
      value: "13",
      label: { en: "Certifications", valueID: "Sertifikasi" },
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#020617] px-8 py-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.07]"></div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* KOLOM KIRI: Teks & Balok Statistik */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          {/* Heading */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              {language === "en" ? "About " : "Tentang "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                {language === "en" ? "Me." : "Saya."}
              </span>
            </h2>
            <div className="h-[2px] w-20 bg-cyan-500/50 rounded-full"></div>
          </div>

          <h3 className="text-2xl text-cyan-50 font-semibold mb-4">
            {language === "en"
              ? "Hello, I'm Reza Yasa Putra, S.Kom"
              : "Halo, Saya Reza Yasa Putra, S.Kom"}
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {language === "en"
              ? "Informatics graduate (S.Kom.) specializing in Data Analysis. Currently completing a Data Analyst internship at the Bank BSI Head Office and holding a Machine Learning certification from DBS x Dicoding. Proficient in using Power BI, Python, and SQL to design operational monitoring systems and dynamic data visualizations. Experienced in building Machine Learning models and AI agents to accelerate and automate data-driven business decision-making."
              : "Lulusan Sarjana Informatika (S.Kom.) dengan fokus pada Analisis Data. Saat ini berkarir sebagai Data Analyst Intern di Kantor Pusat Bank BSI dan memegang sertifikasi Machine Learning dari DBS x Dicoding. Memiliki keahlian dalam mengngunakan Power BI, Python, dan SQL untuk merancang sistem monitoring operasional dan visualisasi data yang dinamis. Berpengalaman dalam membangun model Machine Learning dan AI Agent guna mempercepat serta mengotomatisasi pengambilan keputusan bisnis berbasis data."}
          </p>

          {/* Deretan Balok Statistik Horizontal */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/50 hover:bg-cyan-900/10 transition-all group"
              >
                <stat.icon className="text-cyan-400 w-7 h-7 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 text-center">
                  {language === "en" ? stat.label.en : stat.label.valueID}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Tombol Aksi */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/CV_REZA_YASA_PUTRA.pdf"
              download="CV_REZA_YASA_PUTRA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#020617] px-8 py-3.5 rounded-full font-semibold transition-all"
            >
              <Download size={18} />{" "}
              {language === "en" ? "Download CV" : "Unduh CV"}
            </a>

            <a
              href="#portfolio"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-600 text-gray-300 hover:border-emerald-400 hover:text-emerald-400 transition-colors"
            >
              {language === "en" ? "View Projects" : "Lihat Proyek"}{" "}
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* KOLOM KANAN: Foto Profil 3D */}
        <motion.div
          initial={{ opacity: 0, x: 80, rotateY: 20 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full flex justify-center lg:justify-end perspective-1000"
        >
          <div className="relative w-full max-w-sm aspect-[4/5] group">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-[#020617] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-20 opacity-80"></div>

              <Image
                src="/profile2.jpeg"
                alt="Reza Yasa Putra"
                width={400}
                height={500}
                className="rounded-3xl transition-transform duration-700 group-hover:scale-105 object-cover"
              />

              <div className="absolute bottom-6 left-6 z-30">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                  <span className="text-xs font-mono text-gray-300">
                    {language === "en"
                      ? "Open to Work"
                      : "Terbuka untuk Bekerja"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
