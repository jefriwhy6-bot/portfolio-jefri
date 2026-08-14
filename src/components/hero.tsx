"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-neon-cyan/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-indigo/8 rounded-full blur-[80px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Workflow nodes decoration */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <motion.circle cx="15%" cy="25%" r="3" fill="#FF6D5A" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }} />
        <motion.circle cx="80%" cy="20%" r="3" fill="#22D3EE" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} />
        <motion.circle cx="70%" cy="70%" r="3" fill="#6366F1" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 2 }} />
        <motion.circle cx="25%" cy="75%" r="3" fill="#FF9166" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }} />
        <motion.line x1="15%" y1="25%" x2="80%" y2="20%" stroke="#22D3EE" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 0.5 }} />
        <motion.line x1="80%" y1="20%" x2="70%" y2="70%" stroke="#6366F1" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1 }} />
        <motion.line x1="25%" y1="75%" x2="70%" y2="70%" stroke="#FF6D5A" strokeWidth="0.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: 1.5 }} />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-400 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            Available for freelance projects
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight">
            <span className="text-white">Jefri Wahyu</span>
            <br />
            <span className="gradient-text">Gunawan</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-400 font-body mb-3 font-light">
            Digital Marketing Specialist &{" "}
            <span className="text-neon-cyan font-medium">Workflow Automation</span> Developer
          </p>

          <p className="text-sm sm:text-base text-slate-500 font-body max-w-xl mx-auto mb-10 leading-relaxed">
            Membantu bisnis tumbuh lebih efisien lewat strategi digital marketing
            dan sistem automation yang memangkas kerja manual hingga 95%.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> Lihat Proyek
          </a>
          <a
            href="https://wa.me/6283129309655"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full border border-white/10 text-slate-300 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300 text-sm font-medium flex items-center gap-2 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" /> Hubungi Saya
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
    </section>
  );
}
