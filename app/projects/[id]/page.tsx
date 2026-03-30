'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import projects from '@/app/data/projectsData';
import { ArrowLeft, Expand } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import FuturisticBackground from '@/components/FuturisticBackground';

const syne = { fontFamily: "'Syne', sans-serif" };
const jakarta = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

export default function ProjectDetail() {
  const params = useParams();
  const { id } = params || {};

  const project = projects.find((p) =>
    typeof p.id === 'number' ? p.id === Number(id) : String(p.id) === String(id)
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState<string | null>(null);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F0F7FF]" style={jakarta}>
        <div className="text-center">
          <p className="text-[#0A2540]/50 text-lg">Project not found.</p>
          <Link href="/#projects" className="mt-4 inline-block text-[#1A7EC8] font-bold text-sm hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  const media = project.media || [];
  const nextImage = () => setActiveIndex((prev) => (prev + 1) % media.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  const isExperiencePath = typeof project.detailPath === 'string' && project.detailPath.startsWith('/experience');

  return (
    <div className="min-h-screen bg-[#F0F7FF] relative" style={jakarta}>
      <FuturisticBackground />

      <Link href="/#projects" className="fixed bottom-6 right-6 z-50 bg-[#1A7EC8] hover:bg-[#1567A8] transition-all rounded-full p-3 shadow-lg" aria-label="Back to projects">
        <ArrowLeft className="text-white" size={22} />
      </Link>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-6 relative z-10">

        <div className="animate-fadeInUp">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A7EC8] hover:text-[#1567A8] mb-6 transition">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <span className="block text-xs font-bold text-[#1A7EC8] tracking-widest uppercase mb-2">Project</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] leading-tight" style={syne}>
            {project.title}
          </h1>
          {project.date && <p className="mt-2 text-sm text-[#0A2540]/40 italic">{project.date}</p>}
        </div>

        {media.length > 0 && (
          <div className="relative w-full overflow-hidden rounded-3xl border border-[#DBEEFF] shadow-sm bg-white animate-fadeInUp">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <Image src={media[activeIndex]?.src || '/placeholder.png'} alt={media[activeIndex]?.alt || project.title} fill className="object-contain transition-all duration-500" priority />
              {media[activeIndex]?.src && (
                <button onClick={() => setFullscreen(media[activeIndex].src)} className="absolute bottom-3 right-3 bg-[#0A2540]/60 backdrop-blur-sm p-2 rounded-xl z-20 hover:bg-[#1A7EC8] transition" aria-label="Fullscreen">
                  <Expand size={18} className="text-white" />
                </button>
              )}
              <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white border border-[#DBEEFF] text-[#0A2540] w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#EFF6FF] hover:border-[#1A7EC8] transition shadow-sm text-lg font-bold" aria-label="Previous">‹</button>
              <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border border-[#DBEEFF] text-[#0A2540] w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#EFF6FF] hover:border-[#1A7EC8] transition shadow-sm text-lg font-bold" aria-label="Next">›</button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {media.map((_, i) => (
                  <span key={i} onClick={() => setActiveIndex(i)} className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${i === activeIndex ? 'bg-[#1A7EC8] scale-110' : 'bg-[#DBEEFF] hover:bg-[#1A7EC8]/40'}`} />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl border border-[#DBEEFF] p-8 shadow-sm animate-fadeInUp">
          <p className="text-sm text-[#0A2540]/70 leading-relaxed">{project.details || project.description}</p>
        </div>

        {project.features && project.features.length > 0 && (
          <div className="bg-white rounded-3xl border border-[#DBEEFF] p-8 shadow-sm space-y-4 animate-fadeInUp">
            <h2 className="text-xl font-extrabold text-[#0A2540]" style={syne}>Features</h2>
            <ul className="space-y-2">
              {project.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#0A2540]/70">
                  <span className="mt-1 w-2 h-2 rounded-full bg-[#1A7EC8] flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="bg-white rounded-3xl border border-[#DBEEFF] p-8 shadow-sm space-y-4 animate-fadeInUp">
            <h2 className="text-xl font-extrabold text-[#0A2540]" style={syne}>Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-4 py-1.5 rounded-xl bg-[#EFF6FF] border border-[#DBEEFF] text-xs font-semibold text-[#1A5F9E]">{tech}</span>
              ))}
            </div>
          </div>
        )}

        {isExperiencePath ? (
          <a href={project.detailPath} className="inline-block px-6 py-3 rounded-full bg-[#1A7EC8] text-white text-sm font-bold hover:bg-[#1567A8] transition shadow-sm">
            Learn more (Experience)
          </a>
        ) : project.externalLink ? (
          <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#1A7EC8] text-white text-sm font-bold hover:bg-[#1567A8] transition shadow-sm">
            View Project →
          </a>
        ) : null}

      </main>

      {fullscreen && (
        <div onClick={() => setFullscreen(null)} className="fixed inset-0 bg-[#0A2540]/80 backdrop-blur-sm z-[9999] flex items-center justify-center cursor-pointer p-4">
          <Image src={fullscreen} alt="Fullscreen" width={1500} height={1000} className="object-contain max-w-full max-h-full rounded-2xl" />
        </div>
      )}
    </div>
  );
}