"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Bot, Target } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "Rp100jt", label: "Omzet/bulan", color: "text-accent" },
  { icon: Zap, value: "95%", label: "Efisiensi", color: "text-neon-cyan" },
  { icon: Bot, value: "Full-Stack", label: "Web App & SaaS", color: "text-neon-indigo" },
  { icon: Target, value: "3+", label: "Tahun", color: "text-neon-purple" },
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-24 md:py-32 px-5 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-2 sm:mb-3">Tentang Saya</p>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-white leading-tight">
            Digital Marketing
            <br />
            <span className="text-slate-400">& Workflow Automation</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              Berpengalaman membangun workflow automation (n8n) dan strategi digital marketing
              untuk efisiensi operasional serta pertumbuhan bisnis. Menggabungkan otomatisasi teknis
              dengan pemasaran berbasis data agar bisnis bekerja lebih cerdas.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed">
              Pernah membangun toko online dari nol hingga mencapai omzet{" "}
              <span className="text-accent font-semibold">Rp100 juta/bulan</span> lewat strategi iklan
              di Tokopedia, Shopee, dan Facebook/Instagram Ads. Kini fokus mengembangkan sistem
              automation berbasis n8n dan AI untuk membantu bisnis lain bekerja lebih efisien,
              memangkas kerja manual hingga 95% dan memungkinkan skalabilitas tanpa menambah SDM.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="glass rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center group hover:border-white/10 transition-all">
                <s.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${s.color} mx-auto mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform`} />
                <p className="font-heading text-lg sm:text-2xl font-bold text-white">{s.value}</p>
                <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 sm:mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
