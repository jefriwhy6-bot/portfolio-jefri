"use client";

import { motion } from "framer-motion";
import { ExternalLink, Bot, Newspaper, Image, Users } from "lucide-react";

const projects = [
  {
    title: "WhatsApp AI Chatbot",
    subtitle: "Smart Customer Service",
    description: "Aplikasi web full-stack chatbot AI untuk WhatsApp business. Fitur auto-reply cerdas berbasis RAG, CRM mini, manajemen pesanan, katalog produk dengan sync ke WhatsApp, knowledge base, dan multi-agent support.",
    highlights: ["Auto-reply AI", "CRM", "Order Management", "Knowledge Base", "Katalog Sync", "Multi-Agent"],
    icon: Bot,
    demoUrl: "https://wahay-app-mgtx.vercel.app",
    color: "from-green-500/20 via-emerald-500/10 to-transparent",
    accent: "green-500",
  },
  {
    title: "AI Auto Post",
    subtitle: "Dasbor Publikasi Konten Media Sosial",
    description: "Aplikasi web yang generate konten AI berdasarkan profil brand, dilengkapi sistem antrian/jadwal, automasi publikasi harian, dashboard analitik, dan publish otomatis ke Threads, Instagram, dan Facebook.",
    highlights: ["AI Content Gen", "Multi-Platform", "Scheduling", "Analytics", "Brand Profile"],
    icon: Newspaper,
    demoUrl: null,
    color: "from-neon-indigo/20 via-purple-500/10 to-transparent",
    accent: "neon-indigo",
  },
  {
    title: "AI Influencer / UGC Content Generator",
    subtitle: "Next.js Full-Stack Web App",
    description: "Web app untuk generate konten AI influencer & UGC. Fitur Character Builder, Image Generation (Gemini/Imagen), Video Generation (Veo 3.1 + HeyGen), Storyboard multi-scene, Script Generator, Product Detection, Content Calendar, dan Batch Generate untuk A/B testing.",
    highlights: ["Gemini AI", "Image & Video Gen", "Storyboard", "Script Generator", "Content Calendar", "Batch Generate"],
    icon: Users,
    demoUrl: null,
    color: "from-neon-purple/20 via-pink-500/10 to-transparent",
    accent: "neon-purple",
  },
  {
    title: "Otomasi Metadata Stok Foto",
    subtitle: "n8n Workflow Automation",
    description: "Sistem otomatisasi berbasis n8n untuk generate title, keywords, dan category secara otomatis, mendukung 4 platform sekaligus (Adobe Stock, Shutterstock, Canva, Getty Images). Mengurangi proses manual berjam-jam menjadi hitungan menit.",
    highlights: ["n8n", "4 Platform", "AI Metadata", "Bulk Processing"],
    icon: Image,
    demoUrl: null,
    color: "from-accent/20 via-orange-500/10 to-transparent",
    accent: "accent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-5 sm:px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/3 w-px h-40 bg-gradient-to-b from-transparent via-neon-cyan/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-2 sm:mb-3">Portfolio</p>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-slate-500">Projects</span>
          </h2>
          <p className="text-slate-500 mt-2 sm:mt-3 text-xs sm:text-base">Proyek nyata yang sudah saya bangun dan deliver ke klien</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Gradient glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-4 sm:p-7 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                    <project.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white leading-tight">{project.title}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">{project.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.highlights.map((h, j) => (
                    <span key={j} className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">
                      {h}
                    </span>
                  ))}
                </div>

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors w-fit"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Lihat Demo Live
                  </a>
                ) : (
                  <span className="text-xs text-slate-600 italic">Case study, demo privat</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
