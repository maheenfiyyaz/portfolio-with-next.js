'use client';

import { FaGithub, FaBehance } from 'react-icons/fa';

export default function Portfolio() {
  const devProjects = [
    {
      img: '/assets/cover img 1.jpeg',
      title: 'Fresh Food Farm Website',
      github: 'https://github.com/maheenfiyyaz/food-fram-website',
    },
    {
      img: '/assets/cover img2.webp',
      title: 'OLX Clone Website',
      github: 'https://github.com/maheenfiyyaz/olx-pakistan-website',
    },
    {
      img: '/assets/cover img3.jpg',
      title: 'RedX Clone Website',
      github: 'https://github.com/maheenfiyyaz/rexD-website',
    },
    {
      img: '/assets/lms.png',
      title: 'Internee.pk Website',
      github: 'https://github.com/maheenfiyyaz/internee.pk-clone',
    },
    {
      img: '/assets/cds22.PNG',
      title: 'CDS22 Formula Website',
      github: 'https://github.com/maheenfiyyaz/mini-hackathon-1',
    },
    {
      img: '/assets/Netflix_UI_for_Web.png',
      title: 'Netflix Clone Website',
      github: 'https://github.com/maheenfiyyaz/netflix-clone',
    },
    {
      img: '/assets/furnite.PNG',
      title: 'Furniture Website',
      github: 'https://github.com/maheenfiyyaz/furniture-website',
    },
    {
      img: '/assets/dasboard.PNG',
      title: 'Employee Management Dashboard',
      github: 'https://github.com/maheenfiyyaz/final-hackathon',
    },
  ];

  const designProjects = [
    {
      img: '/assets/design1.jpg',
      title: 'Brand Identity Design',
      behance: 'https://www.behance.net/maheenfayyaz',
    },
    {
      img: '/assets/design2.jpg',
      title: 'Social Media Kit',
      behance: 'https://www.behance.net/maheenfayyaz',
    },
    {
      img: '/assets/design3.jpg',
      title: 'UI/UX App Design',
      behance: 'https://www.behance.net/maheenfayyaz',
    },
    {
      img: '/assets/design4.jpg',
      title: 'Poster & Print Design',
      behance: 'https://www.behance.net/maheenfayyaz',
    },
  ];

  const DevCard = ({ it }) => (
    <div className="relative group">
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#6FA3B8] opacity-0 group-hover:opacity-100 blur-md transition duration-500 animate-gradient-border" />

      <div className="relative bg-[#0F172A] rounded-xl p-4 h-96 flex flex-col justify-between z-10 border border-[#6FA3B840] group-hover:border-[#9ED0E0] transition-all duration-300">

        <img
          src={it.img}
          alt={it.title}
          className="h-64 w-full object-cover rounded-lg shadow-md group-hover:scale-105 transition duration-500"
        />

        <div className="flex items-center justify-between mt-3">
          <h5 className="font-semibold text-base text-[#F8FAFC] group-hover:text-[#9ED0E0] transition duration-300">
            {it.title}
          </h5>

          <a
            href={it.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-[#6FA3B8] rounded-full text-white hover:shadow-[0_0_25px_#6FA3B880] hover:scale-110 transition duration-300"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
    </div>
  );

  const DesignCard = ({ it }) => (
    <div className="relative group">
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#6FA3B8] opacity-0 group-hover:opacity-100 blur-md transition duration-500 animate-gradient-border" />

      <div className="relative bg-[#0F172A] rounded-xl p-4 h-96 flex flex-col justify-between z-10 border border-[#6FA3B840] group-hover:border-[#9ED0E0] transition-all duration-300">

        <img
          src={it.img}
          alt={it.title}
          className="h-64 w-full object-cover rounded-lg shadow-md group-hover:scale-105 transition duration-500"
        />

        <div className="flex items-center justify-between mt-3">
          <h5 className="font-semibold text-base text-[#F8FAFC] group-hover:text-[#9ED0E0] transition duration-300">
            {it.title}
          </h5>

          <a
            href={it.behance}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-[#6FA3B8] rounded-full text-white hover:shadow-[0_0_25px_#6FA3B880] hover:scale-110 transition duration-300"
          >
            <FaBehance size={18} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-24 px-8 bg-[#0F172A] text-[#F8FAFC]">

      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
        My{' '}
        <span className="bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#F8FAFC] bg-clip-text text-transparent">
          Portfolio
        </span>
      </h2>

      <p className="text-[#9ED0E0] text-lg text-center mb-16">
        Development & Design Projects
      </p>

      {/* Dev Projects */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-[#6FA3B840]" />

          <h3 className="text-[#9ED0E0] font-semibold tracking-widest text-sm uppercase px-4">
            Development Projects
          </h3>

          <div className="h-px flex-1 bg-[#6FA3B840]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {devProjects.map((it, idx) => (
            <DevCard key={idx} it={it} />
          ))}
        </div>
      </div>

      {/* Design Projects */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-[#6FA3B840]" />

          <h3 className="text-[#9ED0E0] font-semibold tracking-widest text-sm uppercase px-4">
            Graphic Design Projects
          </h3>

          <div className="h-px flex-1 bg-[#6FA3B840]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {designProjects.map((it, idx) => (
            <DesignCard key={idx} it={it} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-border 4s linear infinite;
        }
      `}</style>
    </section>
  );
}