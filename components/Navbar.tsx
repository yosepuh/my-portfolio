"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const sections = ["about", "education", "skills", "projects", "experiences", "organizations", "contact"];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      window.location.href = `/#${section}`;
      return;
    }
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-3 flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-[#DBEEFF]">
      <Link href="/" className="text-lg font-extrabold text-[#0A2540] tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
        Grace<span className="text-[#1A7EC8]">.</span>
      </Link>

      <div className="hidden md:flex gap-1">
        {sections.map((section) => (
          <a key={section} href={`#${section}`} onClick={(e) => handleNavClick(e, section)} className="text-xs font-semibold px-4 py-2 rounded-full text-[#0A2540]/60 hover:text-[#1A7EC8] hover:bg-[#EFF6FF] transition-all duration-200">
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>

      <button aria-label="Toggle menu" className="md:hidden p-2 text-[#0A2540]" onClick={() => setMenuOpen(!menuOpen)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
        </svg>
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-[#DBEEFF] shadow-sm">
          <div className="flex flex-col px-6 py-3 gap-1">
            {sections.map((section) => (
              <a key={section} href={`#${section}`} onClick={(e) => handleNavClick(e, section)} className="block px-4 py-2 rounded-xl text-sm font-semibold text-[#0A2540]/70 hover:text-[#1A7EC8] hover:bg-[#EFF6FF] transition-all">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}