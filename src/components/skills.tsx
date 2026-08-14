"use client";

import { motion } from "framer-motion";
import { Cpu, BarChart3, Code, LineChart, Palette } from "lucide-react";

const skillGroups = [
  {
    category: "Automation & AI",
    icon: Cpu,
    color: "border-accent/20 hover:border-accent/40",
    dot: "bg-accent",
    skills: ["n8n Automation", "AI Agent Development", "API Integration", "Workflow Design", "Python", "Webhooks"],
  },
  {
    category: "Web & App Development",
    icon: Code,
    color: "border-neon-indigo/20 hover:border-neon-indigo/40",
    dot: "bg-neon-indigo",
    skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PHP", "MySQL", "PostgreSQL", "Full-Stack Web App"],
  },
  {
    category: "Digital Marketing",
    icon: BarChart3,
    color: "border-neon-cyan/20 hover:border-neon-cyan/40",
    dot: "bg-neon-cyan",
    skills: ["Meta Ads (Facebook/IG)", "Marketplace Ads", "SEO", "Content Strategy", "Copywriting"],
  },
  {
    category: "Analytics & Data",
    icon: LineChart,
    color: "border-emerald-500/20 hover:border-emerald-500/40",
    dot: "bg-emerald-500",
    skills: ["Google Analytics", "Search Console", "Data Scraping", "Performance Tracking"],
  },
  {
    category: "Tools & Platform",
    icon: Palette,
    color: "border-neon-purple/20 hover:border-neon-purple/40",
    dot: "bg-neon-purple",
    skills: ["WordPress", "Vercel", "Docker", "Supabase", "Canva", "CapCut"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-neon-indigo text-sm font-medium tracking-widest uppercase mb-3">Keahlian</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Skills & <span className="text-slate-500">Tools</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`glass rounded-2xl p-5 sm:p-6 border ${group.color} transition-all duration-300`}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-2 h-2 rounded-full ${group.dot}`} />
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm bg-white/[0.03] text-slate-300 border border-white/5 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
