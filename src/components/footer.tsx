export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-heading text-sm font-bold text-white">J<span className="text-accent">W</span>G</span>
          <span className="text-xs text-slate-600">© {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com/in/jefri-wahyun8n" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 hover:text-slate-300 transition-colors">
            LinkedIn
          </a>
          <a href="https://fastwork.id/user/jefriwhy" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 hover:text-slate-300 transition-colors">
            Fastwork
          </a>
          <a href="https://wa.me/6283129309655" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 hover:text-slate-300 transition-colors">
            WhatsApp
          </a>
          <a href="mailto:jefriwhy6@gmail.com" className="text-xs text-slate-600 hover:text-slate-300 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
