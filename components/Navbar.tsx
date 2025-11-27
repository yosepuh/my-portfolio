"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // pastikan sama persis dengan id section di page.tsx
  const sections = [
    "about",
    "projects",
    "experiences",
    "organizations",
    "contact",
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
  e.preventDefault();

  // kalau bukan di homepage → redirect
  if (pathname !== "/") {
    window.location.href = `/#${section}`;
    return;
  }

  // kalau di homepage → scroll halus
  if (typeof window !== "undefined") {
    const element = window.document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  setMenuOpen(false);
};


  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#4B0000] via-[#330000] to-black/90 backdrop-blur-md border-b border-slate-700/30 z-50">
      <div className="w-full flex items-center justify-between px-8 md:px-16 py-4">
        <Link
          href="/"
          className="text-xl font-semibold text-white hover:text-[#b34747] transition"
        >
          Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, section)}
              className="hover:text-[#b34747] transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-md text-white hover:bg-black/20 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="transition-transform duration-200"
            style={{ transform: menuOpen ? "rotate(90deg)" : "none" }}
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-[#4B0000] via-[#330000] to-black/90 backdrop-blur-md border-t border-slate-700/30 shadow-lg">
          <div className="flex flex-col px-6 py-3 space-y-2">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleNavClick(e, section)}
                className="block px-3 py-2 rounded-md text-white hover:bg-black/30 hover:text-[#b34747] transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
