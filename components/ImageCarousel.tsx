'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ImageCarousel({
  images,
}: {
  images: { src: string; alt?: string }[];
}) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-80 sm:h-[28rem] overflow-hidden rounded-2xl">
      <motion.div
        key={index}
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Corrected: removed inline comment inside the tag */}
        <Image
          src={images[index].src}
          alt={images[index].alt || `Project image ${index + 1}`}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
