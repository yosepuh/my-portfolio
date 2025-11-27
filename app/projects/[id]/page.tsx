'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import projects from '@/app/data/projectsData';
import { motion } from 'framer-motion';
import { ArrowLeft, Expand } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectDetail() {
  const params = useParams();
  const { id } = params || {};

  const project = projects.find((p) =>
    typeof p.id === 'number' ? p.id === Number(id) : String(p.id) === String(id)
  );

  const background = 'radial-gradient(circle at top left, #0b0f12 0%, #060708 30%, #030304 100%)';
  const textColor = '#e6eef6';
  const mutedText = 'text-gray-400';
  const accent = 'bg-gradient-to-r from-red-700 via-[#6b0000] to-black';

  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState<string | null>(null);

  if (!project) {
    return (
      <main
        className="min-h-screen flex items-center justify-center text-center p-6"
        style={{ background, color: textColor }}
      >
        <p className="text-lg font-medium opacity-80">Project not found.</p>
      </main>
    );
  }

  const media = project.media || [];

  const nextImage = () => {
    if (media.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % media.length);
  };

  const prevImage = () => {
    if (media.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const isExperiencePath =
    typeof project.detailPath === 'string' && project.detailPath.startsWith('/experience');

  return (
    <div className="min-h-screen relative overflow-auto transition-colors duration-700" style={{ background, color: textColor }}>
      <Navbar />

      {/* Floating Back Button */}
      <Link
        href="/#projects"
        className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-red-800 hover:bg-red-900 transition-all rounded-full p-3 shadow-lg"
        aria-label="Back to projects"
      >
        <ArrowLeft className="text-white" size={24} />
      </Link>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16 space-y-8">

        {/* Title */}
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-red-400 via-red-300 to-white text-transparent bg-clip-text drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.title}
        </motion.h1>

        {project.date && <p className={`italic ${mutedText}`}>{project.date}</p>}

        {/* Image Carousel */}
        {media.length > 0 && (
          <motion.div
            className="relative mt-6 w-full overflow-hidden rounded-2xl border border-white/6 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[400px] flex items-center justify-center bg-black/30">

              <Image
                src={media[activeIndex]?.src || '/placeholder.png'}
                alt={media[activeIndex]?.alt || project.title}
                fill
                className="object-contain transition-all duration-700"
                priority
              />

              {/* Fullscreen button */}
              {media[activeIndex]?.src && (
                <button
                  onClick={() => setFullscreen(media[activeIndex].src)}
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

              {/* Dots (fixed position) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-20">
                {media.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition ${
                      i === activeIndex ? 'bg-red-500 scale-110' : 'bg-gray-600 hover:bg-red-400'
                    }`}
                  />
                ))}
              </div>

            </div>
          </motion.div>
        )}

        {/* Description */}
        <motion.section
          className="p-6 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/6 shadow-inner"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="leading-relaxed" style={{ color: textColor }}>
            {project.details || project.description}
          </p>
        </motion.section>

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <motion.section
            className="p-6 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/6 shadow-inner space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold">Features</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              {project.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <motion.section
            className="p-6 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/6 shadow-inner space-y-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-red-900/40 border border-red-800 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* CTA */}
        {isExperiencePath ? (
          <div className="mt-4">
            <a
              href={project.detailPath}
              className={`inline-block px-6 py-3 rounded-xl ${accent} text-white font-medium hover:opacity-90 transition`}
            >
              Learn more (Experience)
            </a>
          </div>
        ) : project.externalLink ? (
          <motion.a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 mt-4 rounded-xl ${accent} text-white font-medium hover:opacity-90 transition`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            View Project
          </motion.a>
        ) : null}

        {/* Fullscreen Modal */}
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
      </main>
    </div>
  );
}
