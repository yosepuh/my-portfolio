'use client';

import FuturisticBackground from '@/components/FuturisticBackground';
import AnimatedCard from '@/components/AnimatedCard';
import projects from './data/projectsData';
import experiences from './data/experienceData';
import organizations from './data/organizationData';
import Link from 'next/link';
import Typewriter from '@/components/Typewriter';


export default function HomePage() {
  return (
    <div className="relative min-h-screen text-white font-orbitron px-6 pt-24">
      {/* Background Futuristic */}
      <FuturisticBackground />

      {/* Hero / About Me Section */}
      <section className="flex flex-col items-center justify-center text-center relative z-10 min-h-[70vh] space-y-6 animate-fadeInUp">
  <Typewriter
    text="Hi, I’m Grace Josephine!"
    speed={80}
    className="text-5xl font-bold text-white drop-shadow-md"
  />

  <p className="text-gray-200 drop-shadow-sm max-w-xl">
    Information Systems student with strong experience in business analysis, 
    ERP implementation, and production systems. Skilled in five ERP modules — 
    production, finance, sales, procurement, and inventory — and familiar with web-based application development and support. 
    Focused on creating efficient, data-driven solutions that connect technology with real business impact.
  </p>

  {/* Foto */}
  <img
    src="me.jpg"
    alt="Grace Josephine"
    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-red-700 shadow-xl"
  />

 {/* Tombol side by side */}
<div className="flex flex-wrap justify-center gap-4 mt-4">
  <a
    href="#projects"
    className="px-6 py-2 rounded-lg bg-[rgba(50,0,0,0.7)] border border-red-700 shadow-lg text-white font-bold hover:opacity-90 hover:shadow-red-500 transition backdrop-blur-md"
  >
    View My Projects
  </a>
  <a
    href="/certifications"
    className="px-6 py-2 rounded-lg bg-[rgba(50,0,0,0.7)] border border-red-700 shadow-lg text-white font-bold hover:opacity-90 hover:shadow-red-500 transition backdrop-blur-md"
  >
    View My Certifications
  </a>
</div>

</section>


      {/* Projects Section */}
      <section id="projects" className="mt-24 max-w-6xl mx-auto relative z-10">
       <h2 className="text-4xl font-semibold text-center mb-12 drop-shadow-md animate-text-flicker">
  Projects
</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <AnimatedCard key={p.id} delay={idx * 80}>
              <div className="p-6 h-64 flex flex-col justify-between rounded-xl shadow-lg border border-gradient-to-r from-red-600 via-maroon-700 to-black
                              bg-[rgba(50,0,0,0.7)] backdrop-blur-md transition transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
                <div>
                  <h3 className="text-xl font-semibold text-red-400 drop-shadow-sm">{p.title}</h3>
                  <p className="text-gray-100">{p.date}</p>
                  <p className="mt-2 line-clamp-3 text-gray-200">{p.description}</p>
                </div>
                <Link
                  href={`/projects/${p.id}`}
                  className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 via-maroon-700 to-black text-white font-bold hover:opacity-90 text-center transition"
                >
                  View Details
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mt-24 max-w-6xl mx-auto relative z-10">
         <h2 className="text-4xl font-semibold text-center mb-12 drop-shadow-md animate-text-flicker">
  Experiences
</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, idx) => (
            <AnimatedCard key={exp.id} delay={idx * 80}>
              <div className="p-6 h-64 flex flex-col justify-between rounded-xl shadow-lg border border-gradient-to-r from-maroon-700 via-black to-red-600
                              bg-[rgba(50,0,0,0.7)] backdrop-blur-md transition transform hover:scale-105 hover:shadow-2xl hover:shadow-maroon-500/50">
                <div>
                  <h3 className="text-xl font-semibold text-maroon-300 drop-shadow-sm">{exp.title}</h3>
                  <p className="text-gray-100">{exp.date}</p>
                  <p className="mt-2 line-clamp-3 text-gray-200">{exp.description}</p>
                </div>
                <Link
                  href={`/experience/${exp.id}`}
                  className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-maroon-700 via-black to-red-600 text-white font-bold hover:opacity-90 text-center transition"
                >
                  View Details
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
{/* Organizations Section */}
<section id="organizations" className="mt-24 max-w-6xl mx-auto relative z-10">
 <h2 className="text-4xl font-semibold text-center mb-12 drop-shadow-md animate-text-flicker">
  Organizations
</h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {organizations.map((org, idx) => (
      <AnimatedCard key={org.id} delay={idx * 80}>
        <div className="p-6 h-64 flex flex-col justify-between rounded-xl shadow-lg border border-gradient-to-r from-red-600 via-maroon-700 to-black bg-[rgba(50,0,0,0.7)] backdrop-blur-md transition transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50">
          <div>
            <h3 className="text-xl font-semibold text-red-400 drop-shadow-sm">{org.name}</h3>
            <p className="text-gray-100">{org.role}</p>
            <p className="mt-2 text-gray-200 line-clamp-3">{org.description}</p>
         </div>
                <Link
                  href={`/organization/${org.id}`}
                  className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-maroon-700 via-black to-red-600 text-white font-bold hover:opacity-90 text-center transition"
                >
                  View Details
                </Link>
              </div>
      </AnimatedCard>
    ))}
  </div>
</section>



      {/* Contact Section */}
      <section id="contact" className="mt-24 max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-semibold bg-gradient-to-r from-red-500 via-maroon-600 to-black text-transparent bg-clip-text drop-shadow-md">
          Get In Touch
        </h2>
        <p className="text-gray-100 mt-4 drop-shadow-sm">
          I’m always excited to connect, collaborate, or discuss new opportunities!
        </p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="mailto:gracejosephine@example.com" className="px-6 py-2 rounded-lg border border-red-500 hover:bg-red-500 hover:text-black transition">Email Me</a>
          <a href="https://www.linkedin.com/in/gracejosephine" className="px-6 py-2 rounded-lg border border-red-500 hover:bg-red-500 hover:text-black transition">LinkedIn</a>
          <a href="https://wa.link/jkywp5" className="px-6 py-2 rounded-lg border border-red-500 hover:bg-red-500 hover:text-black transition">WhatsApp</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-sm text-center text-gray-400 relative z-10">
        © {new Date().getFullYear()} Grace Josephine. All rights reserved.
      </footer>
    </div>
  );
}
