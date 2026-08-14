"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Workflow Automation Developer",
    company: "Freelance",
    period: "2025 – sekarang",
    location: "Bogor",
    points: [
      "Merancang dan membangun sistem otomatisasi menggunakan n8n untuk memproses data dari Google Sheets, menghasilkan konten artikel dengan AI, hingga publikasi otomatis ke Blogger dan WordPress.",
      "Mengintegrasikan berbagai API (OpenAI, Google Sheets, Blogger, Cloudinary) untuk alur kerja yang efisien.",
      "Menerapkan kontrol kualitas otomatis (keunikan konten & duplicate checker).",
      "Hasil: mengurangi waktu proses manual hingga 95%, mampu menangani puluhan–ratusan artikel per hari.",
    ],
  },
  {
    title: "Digital Marketing",
    company: "PT Pakuan Berkah Sejahtera",
    period: "2023",
    location: "Bogor",
    points: [
      "Menangani pemasaran produk B2B ayam frozen di media sosial dan e-commerce.",
      "Mengelola kampanye iklan Facebook & Instagram untuk meningkatkan penjualan.",
      "Membuat konten organik dan menangani customer engagement.",
    ],
  },
  {
    title: "Digital Marketing",
    company: "CV Acrylic Concept",
    period: "2022",
    location: "Bogor",
    points: [
      "Membangun dan mengelola toko online manufaktur dari nol (Tokopedia, Shopee, Bukalapak).",
      "Mencapai omzet Rp100 juta/bulan melalui strategi iklan marketplace & media sosial.",
      "Bertanggung jawab penuh atas seluruh toko online dan akun sosial media.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-neon-cyan text-sm font-medium tracking-widest uppercase mb-3">Pengalaman</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-14 text-white">
            Journey <span className="text-slate-500">saya</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-neon-cyan to-neon-indigo opacity-30" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-10 sm:pl-14"
              >
                <div className="absolute left-0 sm:left-1 top-2 w-6 h-6 rounded-full bg-[#050508] border-2 border-accent/60 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="glass rounded-2xl p-5 sm:p-7 hover:border-white/10 transition-all group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-accent/80 text-sm font-medium flex items-center gap-1.5 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5" /> {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 shrink-0">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-slate-300/90 leading-relaxed flex gap-2.5">
                        <span className="text-neon-cyan/60 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-neon-cyan/60" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
