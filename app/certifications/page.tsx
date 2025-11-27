'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CertificationsPage() {
  const certifications = [
    {
      id: 1,
      title:
        'Digital Talent Scholarship - Introduction to Cloud and Artificial Intelligence Applications for Digital Business',
      issuer: 'Digital Talent Scholarship',
      date: '2024',
      src: '/certificate/c/digitalent.jpg',
      description:
        'Learned foundational concepts of cloud computing and practical use cases of AI in digital business operations, including deploying simple cloud-based solutions.'
    },
    {
      id: 2,
      title: 'UI/UX Design with Lion Parcel - MySkills Bootcamp',
      issuer: 'MySkills Bootcamp',
      date: '2024',
      src: '/certificate/c/myskill.jpg',
      description:
        'Designed user-centered interfaces using Figma, explored design systems, prototyping, and usability principles applied to logistics service products.'
    },
    {
      id: 3,
      title: 'Data Analyst Bootcamp - Dibimbing.id',
      issuer: 'Online Course',
      date: '2025',
      src: '/certificate/c/dibimbing.jpg',
      description:
        'Completed a hands-on data analysis program covering SQL, spreadsheets, data cleaning, dashboard creation, and analytical storytelling to support business decisions.'
    },
  ];

  const background =
    'radial-gradient(circle at top left, #0b0b0b, #050505, #000000)';
  const textColor = '#e6eef6';

  return (
    <div
      className="min-h-screen font-orbitron px-6 pt-24 pb-20"
      style={{ background, color: textColor }}
    >
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 via-red-800 to-gray-300 text-transparent bg-clip-text drop-shadow-lg">
        My Certifications & Licenses
      </h1>

      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="w-full bg-[rgba(50,0,0,0.7)] rounded-xl border border-red-700 shadow-lg hover:scale-[1.01] hover:shadow-red-800/40 transition-transform duration-300 overflow-hidden flex flex-col md:flex-row"
          >
            {/* LEFT: Image */}
            <div className="md:w-[40%] w-full flex justify-center md:justify-start bg-black/40 p-4">
              <Image
                src={cert.src}
                alt={cert.title}
                width={450}
                height={350}
                className="rounded-md object-contain"
              />
            </div>

            {/* RIGHT: TEXT */}
            <div className="md:w-[60%] w-full p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-red-400 mb-2 leading-snug text-left">
                {cert.title}
              </h3>

              <p className="text-sm text-gray-300 text-left">{cert.issuer}</p>
              <p className="text-sm text-gray-400 mb-4 text-left">{cert.date}</p>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-300 mb-4 text-left">
                {cert.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-3 mt-3 w-full">
                <a
                  href={cert.src}
                  target="_blank"
                  className="w-full px-4 py-2 bg-red-700 rounded text-white text-sm text-center hover:bg-red-600 transition"
                >
                  View Certificate
                </a>

                <a
                  href={cert.src}
                  download={cert.title.replace(/\s+/g, '_') + '.jpg'}
                  className="w-full px-4 py-2 bg-red-700 rounded text-white text-sm text-center hover:bg-red-600 transition"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/"
        className="fixed bottom-6 right-6 z-50 bg-black/60 backdrop-blur-md border border-red-800 hover:bg-red-900 transition-all rounded-full p-3 shadow-lg"
      >
        <ArrowLeft className="text-white" size={24} />
      </Link>
    </div>
  );
}
