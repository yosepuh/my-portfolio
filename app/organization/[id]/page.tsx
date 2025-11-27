// Next.js Organization Detail Page
'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import organizations from '@/app/data/organizationData';
import { motion } from 'framer-motion';
import { ArrowLeft, Expand } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function OrganizationDetail() {
  const params = useParams();
  const { id } = params || {};

  const org = organizations.find((o) =>
    typeof o.id === 'number' ? o.id === Number(id) : String(o.id) === String(id)
  );

  const background = 'radial-gradient(circle at top left, #0b0f12 0%, #060708 30%, #030304 100%)';
  const textColor = '#e6eef6';
  const mutedText = 'text-gray-400';
  const accent = 'bg-gradient-to-r from-red-700 via-[#6b0000] to-black';

  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState<string | null>(null);

  if (!org) {
    return (
      <main
        className="min-h-screen flex items-center justify-center text-center p-6"
        style={{ background, color: textColor }}
      >
        <p className="text-lg font-medium opacity-80">Organization not found.</p>
      </main>
    );
  }

  const media = org.media || [];

  const nextImage = () => {
    if (media.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % media.length);
  };

  const prevImage = () => {
    if (media.length === 0) return;
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <div
      className="min-h-screen relative overflow-auto transition-colors duration-700"
      style={{ background, color: textColor }}
    >
      <Navbar />

      {/* Floating Back Button */}
      <Link
        href="/#organizations"
        className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-red-800 hover:bg-red-900 transition-all rounded-full p-3 shadow-lg"
        aria-label="Back to home"
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
          {org.name}
        </motion.h1>

        <p className={`italic ${mutedText}`}>{org.industry}</p>

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
                alt={media[activeIndex]?.alt || org.name}
                fill
                className="object-contain transition-all duration-700"
                priority
              />

              {/* Fullscreen */}
              {media[activeIndex]?.src && (
                <button
                  onClick={() => setFullscreen(media[activeIndex].src)}
                  className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-md z-20 hover:bg-white/20 transition"
                >
                  <Expand size={22} className="text-white" />
                </button>
              )}

              {/* Controls */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-red-900 transition text-white"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-red-900 transition text-white"
              >
                ›
              </button>

              {/* Dots */}
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

        {/* Description Section */}
        <motion.section
          className="p-6 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/6 shadow-inner space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {/* Main Description */}
          <p className="leading-relaxed whitespace-pre-line" style={{ color: textColor }}>
            {org.description}
          </p>

          {/* Details */}
          {org.details && (
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Details</h3>
              <p className="whitespace-pre-line opacity-90">{org.details}</p>
            </div>
          )}

          {/* Achievements */}
          {org.achievements && org.achievements.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Achievements</h3>
              <ul className="list-disc pl-5 space-y-1 opacity-90">
                {org.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {org.technologiesUsed && org.technologiesUsed.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {org.technologiesUsed.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        {/* Website */}
        {org.website && (
          <a
            href={org.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block px-6 py-3 mt-4 rounded-xl ${accent} text-white font-medium hover:opacity-90 transition`}
          >
            Visit Organization
          </a>
        )}

        {/* Fullscreen Preview */}
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
