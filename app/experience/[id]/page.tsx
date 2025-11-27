'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import experiences from '@/app/data/experienceData';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, ChevronUp, Expand } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ExperienceDetail() {
  const params = useParams();
  const { id } = params || {};
  const exp = experiences.find((e) => String(e.id) === String(id));

  const background =
    'radial-gradient(circle at top left, #0b0b0b, #050505, #000000)';
  const textColor = '#e6eef6';

  const media = exp?.media || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState<string | null>(null);

  const subProjects = (exp as any)?.subProjects || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const [subActiveIndexes, setSubActiveIndexes] = useState<
    Record<string, number>
  >(() => {
    const map: Record<string, number> = {};
    subProjects.forEach((sp: any) => {
      map[sp.id] = 0;
    });
    return map;
  });

  const [fullscreenSub, setFullscreenSub] = useState<string | null>(null);

  // Ensures safe usage of next/image paths
  const normalizePath = (path?: string) => {
    if (!path) return '/placeholder.png';
    if (path.startsWith('/')) return path;
    return '/' + path.replace(/^\/+/, '');
  };

  if (!exp) {
    return (
      <main
        className="min-h-screen flex items-center justify-center p-6 text-center"
        style={{ background, color: textColor }}
      >
        <p className="text-lg font-medium opacity-70">
          Experience not found.
        </p>
      </main>
    );
  }

  const nextImage = () => {
    if (media.length > 0) {
      setActiveIndex((prev) => (prev + 1) % media.length);
    }
  };

  const prevImage = () => {
    if (media.length > 0) {
      setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
    }
  };

  const nextSubImage = (subId: string, slidesLength: number) => {
    setSubActiveIndexes((prev) => ({
      ...prev,
      [subId]: (prev[subId] + 1) % slidesLength,
    }));
  };

  const prevSubImage = (subId: string, slidesLength: number) => {
    setSubActiveIndexes((prev) => ({
      ...prev,
      [subId]: (prev[subId] - 1 + slidesLength) % slidesLength,
    }));
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="min-h-screen relative overflow-auto transition-colors duration-700"
      style={{ background, color: textColor }}
    >
      <Navbar />

      {/* Back Button */}
      <Link
        href="/#experience"
        className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-red-800 hover:bg-red-900 transition-all rounded-full p-3 shadow-lg"
      >
        <ArrowLeft className="text-white" size={24} />
      </Link>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16 space-y-8">
        {/* Title */}
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-red-500 via-[#800000] to-black text-transparent bg-clip-text drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {exp.title}
        </motion.h1>

        {exp.date && (
          <p className="text-gray-400 italic">{exp.date}</p>
        )}

        {/* Top-level Carousel */}
        {media.length > 0 && (
          <motion.div
            className="relative mt-6 w-full overflow-hidden rounded-2xl border border-white/6 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[400px] flex items-center justify-center bg-black/30">
              <Image
                src={normalizePath(media[activeIndex]?.src)}
                alt={media[activeIndex]?.alt || exp.title}
                fill
                priority
                className="object-contain transition-all duration-700"
              />
            </div>

            {/* Fullscreen Button */}
            {media[activeIndex]?.src && (
              <button
                onClick={() =>
                  setFullscreen(normalizePath(media[activeIndex].src))
                }
                className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-md z-20 hover:bg-white/20 transition"
                aria-label="Fullscreen"
              >
                <Expand size={22} className="text-white" />
              </button>
            )}

            {/* Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-red-900 transition text-white"
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-red-900 transition text-white"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3 pb-2">
              {media.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition ${
                    i === activeIndex
                      ? 'bg-red-500 scale-110'
                      : 'bg-gray-600 hover:bg-red-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Description */}
        <motion.section
          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="leading-relaxed">
            {exp.details || exp.description}
          </p>
        </motion.section>

        {/* Sub Projects */}
        {subProjects.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Selected Internship Projects
            </h2>
            <p className="text-gray-300">
              Click a project to expand details and view related media.
            </p>

            <div className="mt-4 space-y-3">
              {subProjects.map((proj: any, idx: number) => {
                const slides = proj.media || [];
                const subActive = subActiveIndexes[proj.id] ?? 0;

                return (
                  <div
                    key={proj.id}
                    className="rounded-lg border border-white/8 bg-white/3 overflow-hidden"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full flex items-center justify-between px-4 py-3"
                      aria-expanded={openIndex === idx}
                    >
                      <div>
                        <h3 className="text-lg font-medium">
                          {proj.title}
                        </h3>
                        {proj.description && (
                          <p className="text-sm text-gray-300 mt-1 line-clamp-2">
                            {proj.description}
                          </p>
                        )}
                      </div>

                      <div className="ml-4">
                        {openIndex === idx ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                      </div>
                    </button>

                    {/* Accordion Content */}
                    {openIndex === idx && (
                      <div className="px-4 pb-4">
                        {proj.highlights && (
                          <ul className="list-disc list-inside text-gray-300 mb-3 space-y-1">
                            {proj.highlights.map(
                              (h: string, i: number) => (
                                <li key={i}>{h}</li>
                              ),
                            )}
                          </ul>
                        )}

                        {/* Sub Carousel */}
                        {slides.length > 0 && (
                          <div className="relative mt-2">
                            <div className="relative w-full h-[300px] flex items-center justify-center bg-black/20 rounded-md overflow-hidden">
                              <Image
                                src={normalizePath(
                                  slides[subActive]?.src,
                                )}
                                alt={
                                  slides[subActive]?.alt ||
                                  proj.title
                                }
                                fill
                                priority
                                className="object-contain transition-all duration-700"
                              />
                            </div>

                            {/* Fullscreen Button */}
                            {slides[subActive]?.src && (
                              <button
                                onClick={() =>
                                  setFullscreenSub(
                                    normalizePath(
                                      slides[subActive].src,
                                    ),
                                  )
                                }
                                className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-md z-20 hover:bg-white/20 transition"
                                aria-label="Fullscreen"
                              >
                                <Expand
                                  size={22}
                                  className="text-white"
                                />
                              </button>
                            )}

                            {/* Controls */}
                            <button
                              onClick={() =>
                                prevSubImage(proj.id, slides.length)
                              }
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                              aria-label="Previous slide"
                            >
                              ‹
                            </button>

                            <button
                              onClick={() =>
                                nextSubImage(proj.id, slides.length)
                              }
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
                              aria-label="Next slide"
                            >
                              ›
                            </button>

                            {/* Sub Dots */}
                            <div className="flex justify-center gap-2 mt-3 pb-1">
                              {slides.map((_: any, i: number) => (
                                <span
                                  key={i}
                                  onClick={() =>
                                    setSubActiveIndexes((prev) => ({
                                      ...prev,
                                      [proj.id]: i,
                                    }))
                                  }
                                  className={`w-3 h-3 rounded-full cursor-pointer transition ${
                                    i === subActive
                                      ? 'bg-red-500 scale-110'
                                      : 'bg-gray-600 hover:bg-red-400'
                                  }`}
                                />
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
          </section>
        )}

        {/* Features & Technologies */}
        {exp.features && (
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Key Contributions
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {exp.features.map(
                  (f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ),
                )}
              </ul>
            </div>

            {exp.technologies && (
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(
                    (t: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-red-900/40 border border-red-700/40 rounded-full"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>
            )}
          </motion.div>
        )}

        {/* Links */}
        {(exp.link || exp.reportLink) && (
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            {exp.reportLink && (
              <motion.a
                href={exp.reportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-[#800000] to-black text-white font-medium hover:opacity-90 transition text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                View My Report Internship
              </motion.a>
            )}
          </div>
        )}

        {/* Fullscreen Modals */}
        {fullscreen && (
          <div
            onClick={() => setFullscreen(null)}
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center cursor-pointer p-4"
          >
            <Image
              src={fullscreen}
              alt="Fullscreen image"
              width={1500}
              height={1000}
              className="object-contain max-w-full max-h-full rounded-lg"
            />
          </div>
        )}

        {fullscreenSub && (
          <div
            onClick={() => setFullscreenSub(null)}
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center cursor-pointer p-4"
          >
            <Image
              src={fullscreenSub}
              alt="Fullscreen sub-project image"
              width={1500}
              height={1000}
              className="object-contain max-w-full max-h-full rounded-lg"
            />
          </div>
        )}
      </main>
    </div>
  );
}
