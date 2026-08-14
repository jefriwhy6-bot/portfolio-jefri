"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, MessageCircle, ExternalLink, Send } from "lucide-react";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Langsung",
    href: "https://wa.me/6283129309655",
    color: "hover:border-green-500/30",
    iconColor: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Mail,
    label: "Email",
    value: "jefriwhy6@gmail.com",
    href: "mailto:jefriwhy6@gmail.com",
    color: "hover:border-accent/30",
    iconColor: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "jefri-wahyun8n",
    href: "https://linkedin.com/in/jefri-wahyun8n",
    color: "hover:border-blue-500/30",
    iconColor: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: ExternalLink,
    label: "Fastwork",
    value: "Pesan Jasa Saya",
    href: "https://fastwork.id/user/jefriwhy",
    color: "hover:border-neon-purple/30",
    iconColor: "text-neon-purple",
    bg: "bg-neon-purple/10",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-5 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] to-transparent" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-accent text-xs sm:text-sm font-medium tracking-widest uppercase mb-2 sm:mb-3">Kontak</p>
          <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Mari <span className="text-slate-500">Berkolaborasi</span>
          </h2>
          <p className="text-slate-500 mb-8 sm:mb-12 max-w-md mx-auto text-xs sm:text-base">
            Punya proyek yang butuh automation atau digital marketing? Saya siap bantu wujudkan.
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.a
          href="https://wa.me/6283129309655"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent-light text-white font-semibold hover:shadow-xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 mb-10"
        >
          <Send className="w-4 h-4" />
          Chat via WhatsApp
        </motion.a>

        {/* Channel cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8"
        >
          {channels.map((ch, i) => (
            <a
              key={i}
              href={ch.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass rounded-xl p-4 ${ch.color} transition-all duration-300 group hover:-translate-y-0.5`}
            >
              <div className={`w-9 h-9 rounded-lg ${ch.bg} flex items-center justify-center mx-auto mb-2.5`}>
                <ch.icon className={`w-4 h-4 ${ch.iconColor}`} />
              </div>
              <p className="text-[11px] text-slate-500">{ch.label}</p>
              <p className="text-xs text-white font-medium mt-0.5 truncate">{ch.value}</p>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-xs text-slate-600"
        >
          <MapPin className="w-3 h-3" />
          <span>Batutulis, Kota Bogor, Indonesia</span>
        </motion.div>
      </div>
    </section>
  );
}
