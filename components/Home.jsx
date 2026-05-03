'use client';
import { useEffect, useState } from 'react';
import {
  Briefcase,
  Palette,
  Download,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaBehance,
} from 'react-icons/fa';

export default function Home() {
  const texts = [
    'MERN Stack Developer',
    'Graphic Designer',
    'UI/UX Designer',
    'Frontend Developer',
    'Brand Identity Designer',
  ];

  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    let timeout;

    if (forward) {
      if (charIdx < texts[idx].length) {
        timeout = setTimeout(() => {
          setDisplay(texts[idx].slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 85);
      } else {
        timeout = setTimeout(() => setForward(false), 1200);
      }
    } else {
      if (charIdx > 0) {
        timeout = setTimeout(() => {
          setDisplay(texts[idx].slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 55);
      } else {
        setIdx((i) => (i + 1) % texts.length);
        setForward(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIdx, forward, idx]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-28 pt-24 pb-16 gap-10 bg-[#020617] text-white"
    >
      {/* background glows */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-20 right-20 w-72 h-72 bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />

      {/* LEFT */}
      <div className="max-w-xl z-10 text-center lg:text-left flex flex-col justify-center">
        <p className="uppercase tracking-[4px] text-sm text-[#9ED0E0] mb-4 font-semibold flex items-center gap-2 justify-center lg:justify-start">
          <Sparkles size={16} />
          Available For Projects
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-3">
          <span className="block bg-gradient-to-r from-white to-[#9ED0E0] bg-clip-text text-transparent">
            Maheen
          </span>
          <span className="block bg-gradient-to-r from-[#6FA3B8] to-[#d7f1fa] bg-clip-text text-transparent">
            Fayyaz
          </span>
        </h1>

        <h3 className="text-xl h-10 text-slate-300 mb-5">
          I&apos;m a{' '}
          <span className="text-[#9ED0E0] font-semibold border-r-2 border-[#9ED0E0] pr-1 animate-pulse">
            {display}
          </span>
        </h3>

        {/* tags */}
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-5">
          {['MERN Stack', 'React.js', 'UI/UX', 'Graphic Design', 'Branding'].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-[#6FA3B840] bg-[#6FA3B815] text-[#cdebf5] text-sm hover:scale-105 transition"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-slate-400 leading-7 text-base max-w-lg mb-6">
          Full-stack developer and creative designer focused on building modern
          digital experiences with clean UI, scalable solutions and powerful
          visual branding.
        </p>

        {/* socials */}
        <div className="flex gap-4 justify-center lg:justify-start mb-6">
          {[
            { href: 'https://www.linkedin.com/in/maheen-fayyaz-03485a2ab', icon: <FaLinkedinIn /> },
            { href: 'https://github.com/maheenfiyyaz', icon: <FaGithub /> },
            { href: 'https://www.instagram.com/syeda_maheen_fayyaz/profilecard/', icon: <FaInstagram /> },
            { href: 'https://www.behance.net/', icon: <FaBehance /> },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl border border-[#6FA3B830] bg-white/5 backdrop-blur-md flex items-center justify-center text-[#9ED0E0] text-xl hover:scale-110 hover:border-[#9ED0E0] hover:shadow-[0_0_22px_#6FA3B870] transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* buttons */}
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <a
            href="/assets/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#6FA3B8] hover:bg-[#88bfd6] hover:shadow-[0_0_25px_#6FA3B880] font-semibold transition-all"
          >
            <Download size={18} />
            Download CV
          </a>

          <a
            href="#portfolio"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-[#6FA3B850] text-[#9ED0E0] hover:bg-[#6FA3B815] transition-all"
          >
            View Work <ArrowRight size={18} />
          </a>
        </div>
      </div>

      {/* RIGHT — extra px on sides to give badges room */}
      <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] flex items-center justify-center z-10 mx-16">
        {/* glow */}
        <div className="absolute w-[115%] h-[115%] rounded-full bg-[#6FA3B825] blur-[80px] animate-pulse" />

        {/* rings */}
        <div className="absolute inset-[-30px] rounded-full border border-[#6FA3B840] animate-[spin_30s_linear_infinite_reverse]" />
        <div className="absolute inset-[-14px] rounded-full border border-dashed border-[#6FA3B840] animate-[spin_18s_linear_infinite]" />

        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6FA3B840] to-transparent animate-pulse" />

        <img
          src="/assets/my pic.png"
          alt="Maheen"
          className="relative z-10 w-full h-full object-cover rounded-full border-[6px] border-white/20 shadow-[0_0_60px_#6FA3B850]"
        />

        {/* badge top right — moved further out, z-20 */}
        <div className="absolute top-6 -right-16 bg-[#0f172a]/90 backdrop-blur-md border border-[#6FA3B840] px-4 py-2 rounded-xl flex gap-2 items-center text-sm shadow-lg whitespace-nowrap z-20 animate-bounce">
          <Palette size={16} className="text-[#9ED0E0]" />
          Graphic Designer
        </div>

        {/* badge bottom left */}
        <div
          className="absolute bottom-6 -left-16 bg-[#0f172a]/90 backdrop-blur-md border border-[#6FA3B840] px-4 py-2 rounded-xl flex gap-2 items-center text-sm shadow-lg whitespace-nowrap z-20 animate-bounce"
          style={{ animationDelay: '1s' }}
        >
          <Briefcase size={16} className="text-[#9ED0E0]" />
          Full Stack Dev
        </div>
      </div>
    </section>
  );
}