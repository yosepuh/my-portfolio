'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Digital Talent Scholarship - Introduction to Cloud and Artificial Intelligence Applications for Digital Business",
    issuer: "Digital Talent Scholarship",
    date: "2024",
    src: "/images/certifications/digitalent.jpg"
  },
  {
    id: 2,
    title: "UI/UX Design with Lion Parcel - MySkills Bootcamp",
    issuer: "MySkills Bootcamp",
    date: "2024",
    src: "/images/certifications/myskill.jpg"
  },
  {
    id: 3,
    title: "Data Analyst Bootcamp - Dibimbing.id",
    issuer: "Online Course",
    date: "2025",
    src: "/images/certifications/ba.png"
  },
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen text-white font-orbitron px-6 pt-24 bg-black">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-maroon-700 to-gray-300 text-transparent bg-clip-text drop-shadow-lg">
        My Certifications & Licenses
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map(cert => (
          <div
            key={cert.id}
            className="p-6 bg-[rgba(50,0,0,0.7)] rounded-xl shadow-lg border border-red-700 flex flex-col"
          >
            <h3 className="text-xl font-bold text-red-400 mb-2 drop-shadow-lg">{cert.title}</h3>
            <p className="text-gray-100">{cert.issuer}</p>
            <p className="text-gray-200 mb-4">{cert.date}</p>

            {/* Image */}
            <Image
              src={cert.src}
              alt={cert.title}
              width={300}
              height={200}
              className="rounded-lg object-cover mb-3"
              unoptimized
            />

            {/* Buttons di bawah gambar */}
            <div className="flex gap-2 mt-2">
              <a
                href={cert.src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-3 py-1 bg-red-700 rounded text-white text-sm text-center hover:bg-red-600 transition"
              >
                View
              </a>
              <a
                href={cert.src}
                download
                className="flex-1 px-3 py-1 bg-red-700 rounded text-white text-sm text-center hover:bg-red-600 transition"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Back Button */}
      <Link
        href="/"
        className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-red-800 hover:bg-red-900 transition-all rounded-full p-3 shadow-lg"
      >
        <ArrowLeft className="text-white" size={24} />
      </Link>
    </div>
  );
}
