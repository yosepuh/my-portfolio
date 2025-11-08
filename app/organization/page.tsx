'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';
import { motion } from 'framer-motion';
import certifications from '@/app/data/organizationData'; // nanti bikin data tsx mirip projectsData

export default function CertificatesPage() {
  const { theme } = useTheme();
  const background =
    theme === 'dark'
      ? 'radial-gradient(circle at top left, #1a0000, #0a0000, #000000)'
      : 'radial-gradient(circle at top left, #ffeded, #ffe5e5, #fff0f0)';

  return (
    <div
      className="min-h-screen transition-colors duration-700"
      style={{ background, color: theme === 'dark' ? '#f5f5f5' : '#111' }}
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-red-500 via-[#800000] to-black text-transparent bg-clip-text text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Certifications & Licenses
        </motion.h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow-lg hover:border-red-700/40"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="text-sm opacity-80">{cert.issuer}</p>
              <p className="text-sm mt-2">{cert.description}</p>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 text-sm bg-red-900/60 border border-red-800/40 rounded-lg hover:bg-red-800 transition"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
