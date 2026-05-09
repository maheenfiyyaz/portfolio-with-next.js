'use client';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 right-0 z-50 flex items-center justify-evenly px-8 py-4 bg-[#0F172A]/80 backdrop-blur-xl border-b border-[#6FA3B8]/20">
      <a
        href="/"
        className="text-3xl font-extrabold bg-gradient-to-r from-[#F8FAFC] via-[#9ED0E0] to-[#6FA3B8] bg-clip-text text-transparent"
      >
        Maheen
      </a>

      <nav
        className={`absolute md:static top-full left-0 w-full md:w-auto bg-[#0F172A]/95 md:bg-transparent backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 transition-all duration-300 p-4 md:p-0 ${
          open ? 'block' : 'hidden md:flex'
        }`}
      >
        {['Home', 'About', 'Tools', 'Portfolio'].map((item, idx) => (
          <a
            key={idx}
            href={`#${item.toLowerCase()}`}
            className="relative block md:inline text-lg font-medium px-4 py-2 md:px-0 md:py-0 text-[#F8FAFC] group transition-all duration-300"
            onClick={() => setOpen(false)}
          >
            {item}

            {/* underline */}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#6FA3B8] to-[#9ED0E0] transition-all duration-300 group-hover:w-full"></span>

            {/* glow */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-md bg-[#6FA3B8]/20 rounded-lg"></span>
          </a>
        ))}

        <a
          href="#contact"
          className="md:hidden block w-full text-center mt-2 px-6 py-2 rounded-full bg-[#6FA3B8] text-[#0F172A] font-semibold transition duration-300 hover:shadow-[0_0_20px_#6FA3B880]"
          onClick={() => setOpen(false)}
        >
          Contact Me
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <a
          href="#contact"
          className="hidden md:inline-block px-6 py-2 rounded-full bg-[#6FA3B8] text-[#0F172A] font-semibold transition duration-300 hover:bg-[#9ED0E0] hover:shadow-[0_0_20px_#6FA3B880]"
        >
          Contact Me
        </a>

        <button
          className="md:hidden text-3xl text-[#9ED0E0]"
          onClick={() => setOpen(!open)}
        >
          <i className={`bx ${open ? 'bx-x' : 'bx-menu'}`}> </i>
        </button>
      </div>
    </header>
  );
}