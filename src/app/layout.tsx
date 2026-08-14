import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jefri Wahyu Gunawan - Digital Marketing & Automation Developer",
  description: "Digital Marketing Specialist & Workflow Automation Developer (n8n). Membantu bisnis tumbuh lebih efisien lewat strategi digital marketing dan sistem automation yang memangkas kerja manual hingga 95%.",
  openGraph: {
    title: "Jefri Wahyu Gunawan - Portfolio",
    description: "Digital Marketing Specialist & Workflow Automation Developer (n8n). Strategi digital + automation untuk bisnis yang ingin scale tanpa tambah SDM.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="antialiased">
      <body className="min-h-screen bg-[#050508] text-slate-200 overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
