export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 gap-16 py-20 bg-[#0F172A]"
    >
      {/* Image */}
      <div className="about-img flex justify-center relative">
        <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse bg-gradient-to-r from-[#6FA3B8] to-[#9ED0E0] blur-2xl opacity-40"></div>

        <img
          src="/assets/my pic.png"
          alt="Maheen"
          className="relative w-72 md:w-80 object-cover border-4 border-[#6FA3B8] rounded-full profile-anim hover:shadow-[0_0_25px_#6FA3B8] transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="max-w-2xl about-content text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F8FAFC]">
          About{' '}
          <span className="bg-gradient-to-r from-[#F8FAFC] via-[#9ED0E0] to-[#6FA3B8] bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#F8FAFC]">
          MERN Stack Developer{' '}
          <span className="text-[#6FA3B8]">&</span>{' '}
          Graphic Designer
        </h3>

        <p className="text-lg md:text-xl leading-relaxed text-slate-300">
          I&apos;m a{' '}
          <span className="font-semibold text-[#F8FAFC]">
            Full-Stack Developer & Creative Designer
          </span>{' '}
          who builds modern digital experiences from the ground up — both
          technically and visually. On the dev side, I work with{' '}
          <span className="text-[#9ED0E0]">
            MongoDB, Express.js, React.js & Node.js
          </span>{' '}
          to craft scalable, responsive web applications. On the design side,
          I create{' '}
          <span className="text-[#9ED0E0]">
            brand identities, UI/UX designs, social media visuals, and graphic
            content
          </span>{' '}
          using tools like Figma, Adobe Illustrator & Photoshop. Currently
          leveling up at{' '}
          <span className="font-semibold text-[#F8FAFC]">SMIT</span> while
          working on real-world projects that blend clean code with strong
          visual storytelling.
        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ['20+', 'Projects Done'],
            ['1+', 'Years Experience'],
            ['15+', 'Brands Designed'],
            ['2', 'Skills Mastered'],
          ].map(([num, text]) => (
            <div
              key={text}
              className="p-4 rounded-xl border border-[#6FA3B8]/20 bg-[#6FA3B8]/10"
            >
              <h4 className="text-3xl font-bold text-[#9ED0E0]">{num}</h4>
              <p className="text-slate-400 text-sm mt-1">{text}</p>
            </div>
          ))}
        </div>

        {/* Skills pills */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
          {[
            'React.js',
            'Node.js',
            'MongoDB',
            'Express.js',
            'Figma',
            'Adobe Illustrator',
            'Photoshop',
            'Brand Identity',
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-1.5 rounded-full text-sm border border-[#6FA3B8]/30 bg-[#6FA3B8]/10 text-[#9ED0E0] hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}