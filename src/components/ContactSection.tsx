"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Terminal, Loader2, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// Pastikan import ini sesuai dengan lokasi file supabase.ts milikmu
import { supabase } from "../lib/supabase";

export default function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);
  
  // State untuk menampung ketikan user
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  // State untuk animasi tombol (loading, sukses, error)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const { error } = await supabase
        .from('messages')
        .insert([
          { 
            sender_name: formData.name, 
            sender_email: formData.email, 
            subject: formData.subject, 
            message_body: formData.message 
          }
        ]);

      if (error) throw error;

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 3000);
      
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#020617] px-8 py-24 overflow-hidden flex flex-col items-center justify-center perspective-1000">
      
      {/* Background 3D Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Connect.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          
          {/* ========================================= */}
          {/* BAGIAN KIRI: Info Kontak & Sosial Media   */}
          {/* ========================================= */}
          <div className="w-full lg:w-5/12 flex flex-col gap-8">
            
            <div className="flex flex-col gap-4">
              <motion.a href="mailto:prezayasa@gmail.com" whileHover={{ x: 10 }} className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-cyan-900/20 hover:border-cyan-500/50 transition-all group">
                <div className="p-4 bg-[#0f172a] rounded-xl text-cyan-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.1)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"><Mail size={24} /></div>
                <div><p className="text-sm text-gray-400 mb-1 uppercase tracking-wider font-medium">Email</p><h4 className="text-white font-semibold md:text-lg break-all">prezayasa@gmail.com</h4></div>
              </motion.a>

              <motion.a href="https://wa.me/6283178938753" target="_blank" rel="noreferrer" whileHover={{ x: 10 }} className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-emerald-900/20 hover:border-emerald-500/50 transition-all group">
                <div className="p-4 bg-[#0f172a] rounded-xl text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(52,211,153,0.1)] group-hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]"><FaWhatsapp size={24} /></div>
                <div><p className="text-sm text-gray-400 mb-1 uppercase tracking-wider font-medium">WhatsApp</p><h4 className="text-white font-semibold md:text-lg">+62 831-7893-8753</h4></div>
              </motion.a>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-purple-900/20 hover:border-purple-500/50 transition-all group cursor-default">
                <div className="p-4 bg-[#0f172a] rounded-xl text-purple-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"><MapPin size={24} /></div>
                <div><p className="text-sm text-gray-400 mb-1 uppercase tracking-wider font-medium">Location</p><h4 className="text-white font-semibold md:text-lg">Padang, Indonesia</h4></div>
              </motion.div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-white/10 mt-auto">
              <a href="https://www.linkedin.com/in/rezayasa-putra/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 text-gray-400 hover:text-[#0A66C2] hover:-translate-y-2 transition-all duration-300 shadow-lg" title="LinkedIn Profile"><FaLinkedin size={26} /></a>
              <a href="https://github.com/Rezayasaputra29" target="_blank" rel="noreferrer" className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-white/50 hover:bg-white/10 text-gray-400 hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-lg" title="GitHub Repository"><FaGithub size={26} /></a>
            </div>

          </div>

          {/* ========================================= */}
          {/* BAGIAN KANAN: Form 3D Glassmorphism       */}
          {/* ========================================= */}
          <div className="w-full lg:w-7/12 relative perspective-1000 z-10">
            
            <div className={`absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-emerald-500/10 rounded-3xl blur-xl transition-opacity duration-500 pointer-events-none -z-10 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <form 
              onSubmit={handleSubmit}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative z-10 p-8 md:p-10 rounded-3xl bg-[#0a0f1c]/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-6 transition-all duration-500 hover:border-cyan-500/30 hover:translate-y-[-5px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <Terminal size={20} className="text-cyan-400" />
                <h3 className="text-xl font-bold text-white tracking-widest uppercase text-sm">Send a Message</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                  <input required type="text" id="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-[#020617] text-white border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-700" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                  <input required type="email" id="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" className="w-full bg-[#020617] text-white border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-700" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input required type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Hiring / Project Discussion" className="w-full bg-[#020617] text-white border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-700" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea required id="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Hello, I'd like to talk about..." className="w-full bg-[#020617] text-white border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-gray-700 resize-none custom-scrollbar"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "loading" || status === "success"}
                className={`group w-full mt-4 font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3
                  ${status === "success" 
                    ? "bg-emerald-600 text-white shadow-[0_0_20px_rgba(52,211,153,0.4)]" 
                    : status === "error"
                    ? "bg-red-600 text-white"
                    : "bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)]"
                  } disabled:opacity-80 disabled:cursor-not-allowed`}
              >
                {status === "idle" && (
                  <><span>Send Message</span> <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
                {status === "loading" && (
                  <><span>Sending...</span> <Loader2 size={18} className="animate-spin" /></>
                )}
                {status === "success" && (
                  <><span>Message Sent!</span> <CheckCircle2 size={18} /></>
                )}
                {status === "error" && (
                  <span>Failed. Try Again!</span>
                )}
              </button>
              
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}