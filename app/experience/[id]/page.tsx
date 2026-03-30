'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import experiences from '@/app/data/experienceData';
import { ArrowLeft, ChevronDown, ChevronUp, Expand } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import FuturisticBackground from '@/components/FuturisticBackground';

const syne = { fontFamily: "'Syne', sans-serif" };
const jakarta = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

export default function ExperienceDetail() {
  const params = useParams();
  const { id } = params || {};
  const exp = experiences.find((e) => String(e.id) === String(id));

  const media = exp?.media || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState<string | null>(null);

  const subProjects = (exp as any)?.subProjects || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [subActiveIndexes, setSubActiveIndexes] = useState<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    subProjects.forEach((sp: any) => { map[sp.id] = 0; });
    return map;
  });
  const [fullscreenSub, setFullscreenSub] = useState<string | null>(null);

  const normalizePath = (path?: string) => {
    if (!path) return '/placeholder.png';
    return path.startsWith('/') ? path : '/' + path.replace(/^\/+/, '');
  };

  if (!exp) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F0F7FF]" style={jakarta}>
        <div className="text-center">
          <p className="text-[#0A2540]/50 text-lg">Experience not found.</p>
          <Link href="/#experiences" className="mt-4 inline-block text-[#1A7EC8] font-bold text-sm hover:underline">
            ← Back to Experiences
          </Link>
        </div>
      </main>
    );
  }

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % media.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  const nextSubImage = (subId: string, len: number) => setSubActiveIndexes((prev) => ({ ...prev, [subId]: (prev[subId] + 1) % len }));
  const prevSubImage = (subId: string, len: number) => setSubActiveIndexes((prev) => ({ ...prev, [subId]: (prev[subId] - 1 + len) % len }));
  const toggleAccordion = (index: number) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className="min-h-screen bg-[#F0F7FF] relative" style={jakarta}>
      <FuturisticBackground />

      <Link href="/#experiences" className="fixed bottom-6 right-6 z-50 bg-[#1A7EC8] hover:bg-[#1567A8] transition-all rounded-full p-3 shadow-lg" aria-label="Back">
        <ArrowLeft className="text-white" size={22} />
      </Link>

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-16 space-y-6 relative z-10">

        {/* Header */}
        <div className="animate-fadeInUp">
          <Link href="/#experiences" className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A7EC8] hover:text-[#1567A8] mb-6 transition">
            <ArrowLeft size={14} /> Back to Experiences
          </Link>
          <span className="block text-xs font-bold text-[#1A7EC8] tracking-widest uppercase mb-2">Experience</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A2540] leading-tight" style={syne}>{exp.title}</h1>
          {exp.date && <p className="mt-2 text-sm text-[#0A2540]/40 italic">{exp.date}</p>}
        </div>

        {/* Top Carousel */}
        {media.length > 0 && (
          <div className="relative w-full overflow-hidden rounded-3xl border border-[#DBEEFF] shadow-sm bg-white animate-fadeInUp">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              <Image src={normalizePath(media[activeIndex]?.src)} alt={media[activeIndex]?.alt || exp.title} fill priority className="object-contain transition-all duration-500" />
              {media[activeIndex]?.src && (
                <button onClick={() => setFullscreen(normalizePath(media[activeIndex].src))} className="absolute bottom-3 right-3 bg-[#0A2540]/60 p-2 rounded-xl z-20 hover:bg-[#1A7EC8] transition">
                  <Expand size={18} className="text-white" />
                </button>
              )}
              <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white border border-[#DBEEFF] w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#EFF6FF] hover:border-[#1A7EC8] transition shadow-sm text-lg font-bold text-[#0A2540]">‹</button>
              <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border border-[#DBEEFF] w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#EFF6FF] hover:border-[#1A7EC8] transition shadow-sm text-lg font-bold text-[#0A2540]">›</button>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {media.map((_, i) => (
                  <span key={i} onClick={() => setActiveIndex(i)} className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${i === activeIndex ? 'bg-[#1A7EC8] scale-110' : 'bg-[#DBEEFF] hover:bg-[#1A7EC8]/40'}`} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Description */}
        <div className="bg-white rounded-3xl border border-[#DBEEFF] p-8 shadow-sm animate-fadeInUp">
          <p className="text-sm text-[#0A2540]/70 leading-relaxed">{exp.details || exp.description}</p>
        </div>

        {/* Sub Projects Accordion */}
        {subProjects.length > 0 && (
          <div className="space-y-4 animate-fadeInUp">
            <h2 className="text-2xl font-extrabold text-[#0A2540]" style={syne}>Selected Internship Projects</h2>
            <p className="text-sm text-[#0A2540]/50">Click a project to expand details and view related media.</p>
            <div className="space-y-3">
              {subProjects.map((proj: any, idx: number) => {
                const slides = proj.media || [];
                const subActive = subActiveIndexes[proj.id] ?? 0;
                return (
                  <div key={proj.id} className="rounded-2xl border border-[#DBEEFF] bg-white overflow-hidden shadow-sm">
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#EFF6FF] transition"
                    >
                      <div>
                        <h3 className="text-sm font-extrabold text-[#0A2540]" style={syne}>{proj.title}</h3>
                        {proj.description && <p className="text-xs text-[#0A2540]/50 mt-1 line-clamp-2">{proj.description}</p>}
                      </div>
                      <div className="ml-4 text-[#1A7EC8] flex-shrink-0">
                        {openIndex === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    {openIndex === idx && (
                      <div className="px-6 pb-6 border-t border-[#DBEEFF]">
                        {proj.highlights && (
                          <ul className="space-y-2 mt-4 mb-4">
                            {proj.highlights.map((h: string, i: number) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-[#0A2540]/70">
                                <span className="mt-1 w-2 h-2 rounded-full bg-[#1A7EC8] flex-shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                        {slides.length > 0 && (
                          <div className="relative mt-2">
                            <div className="relative w-full h-[300px] flex items-center justify-center bg-[#F0F7FF] rounded-2xl overflow-hidden border border-[#DBEEFF]">
                              <Image src={normalizePath(slides[subActive]?.src)} alt={slides[subActive]?.alt || proj.title} fill priority className="object-contain transition-all duration-500" />
                              {slides[subActive]?.src && (
                                <button onClick={() => setFullscreenSub(normalizePath(slides[subActive].src))} className="absolute bottom-3 right-3 bg-[#0A2540]/60 p-2 rounded-xl z-20 hover:bg-[#1A7EC8] transition">
                                  <Expand size={16} className="text-white" />
                                </button>
                              )}
                              <button onClick={() => prevSubImage(proj.id, slides.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border border-[#DBEEFF] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#EFF6FF] transition shadow-sm text-[#0A2540] font-bold">‹</button>
                              <button onClick={() => nextSubImage(proj.id, slides.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border border-[#DBEEFF] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#EFF6FF] transition shadow-sm text-[#0A2540] font-bold">›</button>
                            </div>
                            <div className="flex justify-center gap-2 mt-3">
                              {slides.map((_: any, i: number) => (
                                <span key={i} onClick={() => setSubActiveIndexes((prev) => ({ ...prev, [proj.id]: i }))} className={`w-2 h-2 rounded-full cursor-pointer transition-all ${i === subActive ? 'bg-[#1A7EC8] scale-110' : 'bg-[#DBEEFF] hover:bg-[#1A7EC8]/40'}`} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Key Contributions + Technologies */}
        {exp.features && (
          <div className="grid sm:grid-cols-2 gap-4 animate-fadeInUp">
            <div className="bg-white rounded-3xl border border-[#DBEEFF] p-6 shadow-sm">
              <h3 className="text-base font-extrabold text-[#0A2540] mb-4" style={syne}>Key Contributions</h3>
              <ul className="space-y-2">
                {exp.features.map((f: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0A2540]/70">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#1A7EC8] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            {exp.technologies && (
              <div className="bg-white rounded-3xl border border-[#DBEEFF] p-6 shadow-sm">
                <h3 className="text-base font-extrabold text-[#0A2540] mb-4" style={syne}>Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t: string, i: number) => (
                    <span key={i} className="px-4 py-1.5 rounded-xl bg-[#EFF6FF] border border-[#DBEEFF] text-xs font-semibold text-[#1A5F9E]">{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Report Link */}
        {exp.reportLink && (
          <a href={exp.reportLink} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#1A7EC8] text-white text-sm font-bold hover:bg-[#1567A8] transition shadow-sm">
            View Internship Report →
          </a>
        )}
      </main>

      {fullscreen && (
        <div onClick={() => setFullscreen(null)} className="fixed inset-0 bg-[#0A2540]/80 backdrop-blur-sm z-[9999] flex items-center justify-center cursor-pointer p-4">
          <Image src={fullscreen} alt="Fullscreen" width={1500} height={1000} className="object-contain max-w-full max-h-full rounded-2xl" />
        </div>
      )}
      {fullscreenSub && (
        <div onClick={() => setFullscreenSub(null)} className="fixed inset-0 bg-[#0A2540]/80 backdrop-blur-sm z-[9999] flex items-center justify-center cursor-pointer p-4">
          <Image src={fullscreenSub} alt="Fullscreen" width={1500} height={1000} className="object-contain max-w-full max-h-full rounded-2xl" />
        </div>
      )}
    </div>
  );
}