"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#050508]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-lg font-bold text-white">
          J<span className="text-accent">W</span>G
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6283129309655"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 transition-colors"
          >
            Hire Me
          </a>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-300 p-2"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#0a0a12]/95 backdrop-blur-xl border-b border-white/5 px-4 pb-4"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm text-slate-300 hover:text-white border-b border-white/5 last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6283129309655"
            target="_blank"
            className="block mt-3 text-center text-sm px-4 py-2.5 rounded-full bg-accent text-white"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
