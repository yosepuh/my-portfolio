'use client';

import { useState } from 'react';
import AnimatedCard from '@/components/AnimatedCard';
import FuturisticBackground from '@/components/FuturisticBackground';
import projects from './data/projectsData';
import experiences from './data/experienceData';
import organizations from './data/organizationData';
import Link from 'next/link';

export default function HomePage() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [showAllOrganizations, setShowAllOrganizations] = useState(false);
  const limit = 6;

  const syne = { fontFamily: "'Syne', sans-serif" };
  const jakarta = { fontFamily: "'Plus Jakarta Sans', sans-serif" };

  return (
    <div className="min-h-screen bg-[#F0F7FF] relative" style={jakarta}>
      <FuturisticBackground />

      {/* HERO */}
      <section id="about" className="pt-28 pb-16 px-6 max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-[#DBEEFF] text-[#1A5F9E] text-xs font-bold px-4 py-1.5 rounded-full tracking-wide mb-5">
              ✦ Open to Opportunities
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A2540] leading-none tracking-tight" style={syne}>
              Hi, I&apos;m<br />
              <span className="text-[#1A7EC8]">Grace</span><br />
              Josephine!
            </h1>
            <p className="mt-5 text-sm text-[#0A2540]/60 leading-relaxed max-w-md mx-auto md:mx-0">
              Information Systems student at President University, passionate about turning data and systems into meaningful business impact. Experienced in ERP systems, QA testing, Power BI dashboards, and business analysis.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
              <a href="#projects" className="px-5 py-2.5 bg-[#1A7EC8] text-white text-sm font-bold rounded-full hover:bg-[#1567A8] transition">
                View Projects
              </a>
              <a href="#contact" className="px-5 py-2.5 bg-white text-[#1A7EC8] text-sm font-bold rounded-full border border-[#DBEEFF] hover:border-[#1A7EC8] transition">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="w-52 h-52 rounded-3xl overflow-hidden border-4 border-white shadow-lg shadow-[#1A7EC8]/10">
                <img src="me.jpg" alt="Grace Josephine" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-[#1A7EC8] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow" style={syne}>
                IS Student ✦
              </div>
            </div>
            <div className="bg-white rounded-2xl px-5 py-3 border border-[#DBEEFF] shadow-sm flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#1A7EC8] animate-pulse" />
              <span className="text-xs font-semibold text-[#0A2540]">Available for work</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <SectionTitle syne={syne}>Education</SectionTitle>
        <div className="mt-8 bg-white rounded-3xl border border-[#DBEEFF] p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="border-l-4 border-[#1A7EC8] pl-6">
            <h3 className="text-xl font-extrabold text-[#0A2540]" style={syne}>
              Bachelor of Information Systems
            </h3>
            <p className="text-sm text-[#0A2540]/60 mt-1">President University</p>
            <p className="text-sm text-[#0A2540]/50 mt-0.5">2023 – Present · 8th Semester</p>
          </div>
          <span className="self-start md:self-center bg-[#EFF6FF] text-[#1A5F9E] text-xs font-bold px-4 py-2 rounded-full border border-[#DBEEFF]">
            Expected 2026
          </span>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <SectionTitle syne={syne}>Skills</SectionTitle>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Core Skills", bg: "bg-[#0A2540]", titleColor: "text-white", tagBg: "bg-white/10 text-white/80 border-white/10", items: ["Business Analysis", "Requirement Analysis", "Process Mapping (BPMN)", "ERP Implementation", "Application Support", "Workflow Design"] },
            { title: "Tools", bg: "bg-[#1A7EC8]", titleColor: "text-white", tagBg: "bg-white/20 text-white border-white/20", items: ["Odoo ERP", "Epicor ERP", "Power BI", "Figma", "Jira", "Laravel", "VS Code"] },
            { title: "Languages & DB", bg: "bg-white", titleColor: "text-[#0A2540]", tagBg: "bg-[#EFF6FF] text-[#1A5F9E] border-[#DBEEFF]", items: ["Java", "PHP", "Python", "JavaScript", "TypeScript", "ReactJS", "SQL", "PostgreSQL"] },
            { title: "Soft Skills", bg: "bg-[#EFF6FF]", titleColor: "text-[#0A2540]", tagBg: "bg-white text-[#1A5F9E] border-[#DBEEFF]", items: ["Analytical Thinking", "Problem Solving", "Communication", "Leadership", "Collaboration", "Detail-Oriented"] },
          ].map((cat) => (
            <div key={cat.title} className={`${cat.bg} rounded-3xl p-6 border border-[#DBEEFF] shadow-sm`}>
              <h3 className={`text-sm font-extrabold ${cat.titleColor} mb-4`} style={syne}>{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className={`text-xs font-semibold px-3 py-1 rounded-xl border ${cat.tagBg}`}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <SectionTitle syne={syne}>Projects</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(showAllProjects ? projects : projects.slice(0, limit)).map((p, idx) => (
            <AnimatedCard key={p.id} delay={idx * 80}>
              <div className="bg-white rounded-3xl border border-[#DBEEFF] p-6 flex flex-col justify-between h-60 hover:border-[#1A7EC8] hover:shadow-md hover:shadow-[#1A7EC8]/10 transition-all duration-200 shadow-sm">
                <div>
                  <h3 className="text-sm font-extrabold text-[#0A2540]" style={syne}>{p.title}</h3>
                  <p className="text-xs text-[#0A2540]/40 mt-1">{p.date}</p>
                  <p className="mt-2 line-clamp-3 text-sm text-[#0A2540]/60 leading-relaxed">{p.description}</p>
                </div>
                <Link href={`/projects/${p.id}`} className="mt-4 self-start text-xs font-bold text-[#1A7EC8] border border-[#DBEEFF] px-4 py-2 rounded-xl hover:bg-[#EFF6FF] transition">
                  View Details →
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
        {projects.length > limit && (
          <div className="flex justify-center mt-8">
            <button onClick={() => setShowAllProjects(!showAllProjects)} className="px-6 py-2.5 rounded-full border-2 border-[#1A7EC8] text-[#1A7EC8] text-sm font-bold hover:bg-[#1A7EC8] hover:text-white transition">
              {showAllProjects ? "See Less" : "See More Projects"}
            </button>
          </div>
        )}
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <SectionTitle syne={syne}>Experiences</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(showAllExperiences ? experiences : experiences.slice(0, limit)).map((exp, idx) => (
            <AnimatedCard key={exp.id} delay={idx * 80}>
              <div className="bg-white rounded-3xl border border-[#DBEEFF] p-6 flex flex-col justify-between h-60 hover:border-[#1A7EC8] hover:shadow-md hover:shadow-[#1A7EC8]/10 transition-all duration-200 shadow-sm">
                <div>
                  <h3 className="text-sm font-extrabold text-[#0A2540]" style={syne}>{exp.title}</h3>
                  <p className="text-xs text-[#0A2540]/40 mt-1">{exp.date}</p>
                  <p className="mt-2 line-clamp-3 text-sm text-[#0A2540]/60 leading-relaxed">{exp.description}</p>
                </div>
                <Link href={`/experience/${exp.id}`} className="mt-4 self-start text-xs font-bold text-[#1A7EC8] border border-[#DBEEFF] px-4 py-2 rounded-xl hover:bg-[#EFF6FF] transition">
                  View Details →
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
        {experiences.length > limit && (
          <div className="flex justify-center mt-8">
            <button onClick={() => setShowAllExperiences(!showAllExperiences)} className="px-6 py-2.5 rounded-full border-2 border-[#1A7EC8] text-[#1A7EC8] text-sm font-bold hover:bg-[#1A7EC8] hover:text-white transition">
              {showAllExperiences ? "See Less" : "See More Experiences"}
            </button>
          </div>
        )}
      </section>

      {/* ORGANIZATIONS */}
      <section id="organizations" className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <SectionTitle syne={syne}>Organizations</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(showAllOrganizations ? organizations : organizations.slice(0, limit)).map((org, idx) => (
            <AnimatedCard key={org.id} delay={idx * 80}>
              <div className="bg-white rounded-3xl border border-[#DBEEFF] p-6 flex flex-col justify-between h-60 hover:border-[#1A7EC8] hover:shadow-md hover:shadow-[#1A7EC8]/10 transition-all duration-200 shadow-sm">
                <div>
                  <h3 className="text-sm font-extrabold text-[#0A2540]" style={syne}>{org.name}</h3>
                  <p className="text-xs text-[#0A2540]/40 mt-1">{org.role}</p>
                  <p className="mt-2 line-clamp-3 text-sm text-[#0A2540]/60 leading-relaxed">{org.description}</p>
                </div>
                <Link href={`/organization/${org.id}`} className="mt-4 self-start text-xs font-bold text-[#1A7EC8] border border-[#DBEEFF] px-4 py-2 rounded-xl hover:bg-[#EFF6FF] transition">
                  View Details →
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
        {organizations.length > limit && (
          <div className="flex justify-center mt-8">
            <button onClick={() => setShowAllOrganizations(!showAllOrganizations)} className="px-6 py-2.5 rounded-full border-2 border-[#1A7EC8] text-[#1A7EC8] text-sm font-bold hover:bg-[#1A7EC8] hover:text-white transition">
              {showAllOrganizations ? "See Less" : "See More Organizations"}
            </button>
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 max-w-5xl mx-auto relative z-10">
        <div className="bg-[#0A2540] rounded-3xl p-10 text-center shadow-lg">
          <span className="inline-block bg-[#1A7EC8] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide mb-4">
            ✦ Let&apos;s Connect
          </span>
          <h2 className="text-3xl font-extrabold text-white" style={syne}>Get In Touch!</h2>
          <p className="mt-3 text-sm text-white/50 max-w-sm mx-auto">
            Always excited to connect, collaborate, or discuss new opportunities!
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <a href="mailto:yosephine.career@gmail.com" className="px-5 py-2.5 bg-white text-[#0A2540] text-sm font-bold rounded-full hover:bg-[#EFF6FF] transition">Email Me</a>
            <a href="https://www.linkedin.com/in/grsphine/" className="px-5 py-2.5 bg-[#1A7EC8] text-white text-sm font-bold rounded-full hover:bg-[#1567A8] transition">LinkedIn</a>
            <a href="https://wa.link/jkywp5" className="px-5 py-2.5 border border-white/20 text-white text-sm font-bold rounded-full hover:bg-white/10 transition">WhatsApp</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-[#0A2540]/30 relative z-10">
        © {new Date().getFullYear()} Grace Josephine. All rights reserved. ✦
      </footer>
    </div>
  );
}

function SectionTitle({ children, syne }: { children: React.ReactNode; syne: React.CSSProperties }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-3xl font-extrabold text-[#0A2540] whitespace-nowrap" style={syne}>
        {children}
      </h2>
      <div className="flex-1 h-px bg-[#DBEEFF]" />
    </div>
  );
}