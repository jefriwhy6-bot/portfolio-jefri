"use client";

import { motion } from "framer-motion";
import { Workflow, PenTool, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Otomatisasi Proses Bisnis dengan n8n",
    subtitle: "Chatbot · Auto-Post · Integrasi Data",
    description: "Saya rancang dan bangun sistem otomatisasi end-to-end menggunakan n8n — dari chatbot WhatsApp, auto-posting konten, integrasi database, hingga notifikasi otomatis. Hemat waktu, kurangi error manual.",
    icon: Workflow,
    link: "https://fastwork.id/user/jefriwhy/ai-automation-76940023",
    price: "Mulai Rp 500rb",
  },
  {
    title: "Web App Auto-Post ke Threads",
    subtitle: "Sesuai Profil Brand Anda",
    description: "Aplikasi web yang generate & publish konten otomatis ke Threads berdasarkan profil brand Anda. Lengkap dengan penjadwalan, AI content generation, dan analitik performa.",
    icon: PenTool,
    link: "#",
    price: "Custom Quote",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-neon-cyan text-sm font-medium tracking-widest uppercase mb-3">Layanan</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Tersedia di <span className="text-slate-500">Fastwork</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm">Langsung pesan, konsultasi gratis</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={i}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group glass rounded-2xl p-6 sm:p-8 hover:border-accent/20 transition-all duration-300 cursor-pointer hover:-translate-y-1 block"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/10 to-accent-light/5 border border-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-5 h-5 text-accent" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-neon-cyan/70 mb-3 font-medium">{service.subtitle}</p>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{service.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">{service.price}</span>
                <span className="text-xs text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Pesan di Fastwork →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
