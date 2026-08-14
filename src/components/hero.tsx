"use client";

import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-5 sm:px-6 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-52 sm:w-80 h-52 sm:h-80 bg-neon-cyan/8 rounded-full blur-[80px] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-40 sm:w-64 h-40 sm:h-64 bg-neon-indigo/8 rounded-full blur-[60px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-sm text-slate-400 mb-6 sm:mb-8"
          >
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent" />
            Available for freelance projects
          </motion.div>

          <h1 className="font-heading text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 leading-[0.9] tracking-tight">
            <span className="text-white">Jefri Wahyu</span>
            <br />
            <span className="gradient-text">Gunawan</span>
          </h1>

          <p className="text-sm sm:text-xl md:text-2xl text-slate-400 font-body mb-2 sm:mb-3 font-light leading-relaxed">
            Full-Stack Developer · AI Automation ·{" "}
            <span className="text-neon-cyan font-medium">Digital Marketing</span>
          </p>

          <p className="text-xs sm:text-base text-slate-500 font-body max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Membantu bisnis tumbuh lebih efisien lewat strategi digital marketing
            dan sistem automation yang memangkas kerja manual hingga 95%.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="#projects"
            className="group w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-semibold text-sm hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> Lihat Proyek
          </a>
          <a
            href="https://wa.me/6283129309655"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 sm:px-7 sm:py-3.5 rounded-full border border-white/10 text-slate-300 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" /> Hubungi Saya
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#050508] to-transparent" />
    </section>
  );
}
