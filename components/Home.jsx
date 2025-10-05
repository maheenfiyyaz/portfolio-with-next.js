'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const texts = ['MERN Stack Developer', 'React Developer', 'Frontend Developer'];
  const [display, setDisplay] = useState('');
  const [tix, setTix] = useState({ i: 0, j: 0, forward: true });

  useEffect(() => {
    let mounted = true;
    const tick = () => {
      const { i, j, forward } = tix;
      const text = texts[i];
      if (forward) {
        if (j < text.length) {
          setDisplay(text.slice(0, j + 1));
          setTix({ i, j: j + 1, forward: true });
        } else {
          setTimeout(() => setTix({ i, j, forward: false }), 700);
        }
      } else {
        if (j > 0) {
          setDisplay(text.slice(0, j - 1));
          setTix({ i, j: j - 1, forward: false });
        } else {
          setTix({ i: (i + 1) % texts.length, j: 0, forward: true });
        }
      }
    };

    const id = setInterval(() => { if (mounted) tick(); }, 90);
    return () => { mounted = false; clearInterval(id); };
  }, [tix]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 pt-28 gap-12 md:gap-40"
    >
      
      <div className="home-content max-w-lg text-center md:text-left">
        <h3 className="text-2xl md:text-3xl">Hi, Myself</h3>
        <h1 className="whitespace-nowrap text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-sky-600 to-blue-400">
          Maheen Fayyaz
        </h1>

        <h3 className="text-xl md:text-2xl mt-2">
          I'm a <span className="text-blue-500">{display}</span>
        </h3>
        <p className="mt-4 text-base">
          Creative MERN Stack Developer skilled in MongoDB, Express.js, React.js,
          Node.js, and building responsive full-stack apps.
        </p>

      
        <div className="flex items-center justify-center md:justify-start mt-6 gap-4">
          <a
            href="https://www.linkedin.com/in/maheen-fayyaz-03485a2ab"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-blue-500 relative group"
          >
            <i className="bx bxl-linkedin-square"></i>
            <span className="absolute inset-0 rounded-full group-hover:shadow-[0_0_20px_#3b82f6] transition duration-300"></span>
          </a>
          <a
            href="https://github.com/maheenfiyyaz"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-blue-500 relative group"
          >
            <i className="bx bxl-github"></i>
            <span className="absolute inset-0 rounded-full group-hover:shadow-[0_0_20px_#3b82f6] transition duration-300"></span>
          </a>
          <a
            href="https://www.instagram.com/syeda_maheen_fayyaz/profilecard/"
            target="_blank"
            rel="noreferrer"
            className="text-3xl text-blue-500 relative group"
          >
            <i className="bx bxl-instagram-alt"></i>
            <span className="absolute inset-0 rounded-full group-hover:shadow-[0_0_20px_#3b82f6] transition duration-300"></span>
          </a>
        </div>

        <a
          href="/assets/cv.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 px-6 py-2 rounded-full bg-blue-500 text-white font-semibold hover:shadow-[0_0_20px_#3b82f6] transition duration-300"
        >
          Download CV
        </a>
      </div>

      <div className="home-img flex justify-center md:justify-end relative">
       
        <div className="absolute w-84 h-84 rounded-full animate-pulse bg-gradient-to-r from-blue-500 to-sky-400 blur-2xl opacity-40"></div>

        <img
          src="/assets/Untitled design.png"
          alt="profile"
          className="relative w-64 md:w-80 object-cover border-4 border-blue-500 rounded-full profile-anim hover:shadow-[0_0_25px_#3b82f6] transition duration-300"
        />
      </div>
    </section>
  );
}