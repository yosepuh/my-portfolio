'use client';
import { useTheme } from '@/hooks/useTheme';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import experiences from '@/app/data/experienceData';
import ImageCarousel from '@/components/ImageCarousel';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function ExperienceDetail() {
  const { theme } = useTheme();
  const params = useParams();
  const { id } = params || {};
  const exp = experiences.find((e) => e.id === id);

  // background styling
  const background =
    theme === 'dark'
      ? 'radial-gradient(circle at top left, #1a0000, #0a0000, #000000)'
      : 'radial-gradient(circle at top left, #ffeded, #ffe5e5, #fff0f0)';

  if (!exp) {
    return (
      <main
        className="min-h-screen flex items-center justify-center p-6 text-center"
        style={{ background, color: theme === 'dark' ? '#f5f5f5' : '#111' }}
      >
        <p className="text-lg font-medium opacity-70">
          Experience not found.
        </p>
      </main>
    );
  }

  return (
    <div
      className="min-h-screen relative overflow-auto transition-colors duration-700"
      style={{ background, color: theme === 'dark' ? '#f5f5f5' : '#111' }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Floating Back Button */}
      <Link
        href="/#experience"
        className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-red-800 hover:bg-red-900 transition-all rounded-full p-3 shadow-lg"
      >
        <ArrowLeft className="text-white" size={24} />
      </Link>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16 space-y-8">
        {/* Animated title */}
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

        {/* Carousel jika ada media */}
        {exp.media && exp.media.length > 0 && (
          <div className="mt-6">
            <ImageCarousel images={exp.media} />
          </div>
        )}

        {/* Description */}
        <motion.section
          className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p className="leading-relaxed">{exp.details || exp.description}</p>
        </motion.section>

        {/* Features & Tech Stack */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {exp.features && exp.features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Contributions</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {exp.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {exp.technologies && exp.technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((t, i) => (
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

        {/* Link */}
        {exp.link && (
          <motion.a
            href={exp.link}
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
