'use client';

import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import projects from '@/app/data/projectsData';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ProjectDetail() {
  const { theme } = useTheme();
  const params = useParams();
  const { id } = params || {};
  const project = projects.find((p) => p.id === Number(id));

  const background =
    theme === 'dark'
      ? 'radial-gradient(circle at top left, #1a0000, #0a0000, #000000)'
      : 'radial-gradient(circle at top left, #ffeded, #ffe5e5, #fff0f0)';

  const [activeIndex, setActiveIndex] = useState(0);

  if (!project) {
    return (
      <main
        className="min-h-screen flex items-center justify-center text-center p-6"
        style={{ background, color: theme === 'dark' ? '#f5f5f5' : '#111' }}
      >
        <p className="text-lg font-medium opacity-70">Project not found.</p>
      </main>
    );
  }

  const nextImage = () => {
    if (!project.media || project.media.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % project.media!.length);
  };

  const prevImage = () => {
    if (!project.media || project.media.length === 0) return;
    setActiveIndex(
      (prev) => (prev - 1 + project.media!.length) % project.media!.length
    );
  };

  return (
    <div
      className="min-h-screen relative overflow-auto transition-colors duration-700"
      style={{ background, color: theme === 'dark' ? '#f5f5f5' : '#111' }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Floating Back Button */}
      <Link
        href="/#projects"
        className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-red-800 hover:bg-red-900 transition-all rounded-full p-3 shadow-lg"
      >
        <ArrowLeft className="text-white" size={24} />
      </Link>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16 space-y-8">
        {/* Animated Title */}
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-red-500 via-[#800000] to-black text-transparent bg-clip-text drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {project.title}
        </motion.h1>

        {project.date && <p className="text-gray-400 italic">{project.date}</p>}

        {/* Image Carousel */}
        {project.media && project.media.length > 0 && (
          <motion.div
            className="relative mt-6 w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-[400px] flex items-center justify-center bg-black/20">
              <Image
                src={project.media[activeIndex].src}
                alt={project.media[activeIndex].alt}
                fill
                className="object-contain transition-all duration-700"
                priority
              />
            </div>

            {/* Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-red-900 transition"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-red-900 transition"
            >
              ›
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3 pb-2">
              {project.media.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition ${
                    i === activeIndex
                      ? 'bg-red-600 scale-110'
                      : 'bg-gray-500 hover:bg-red-400'
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
            {project.details || project.description}
          </p>
        </motion.section>

        {/* Features & Technologies */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-red-900/40 border border-red-700/40 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* External Link */}
        {project.externalLink && (
          <motion.a
            href={project.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 mt-4 rounded-xl bg-gradient-to-r from-red-600 via-[#800000] to-black text-white font-medium hover:opacity-90 transition"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            View Project
          </motion.a>
        )}
      </main>
    </div>
  );
}
