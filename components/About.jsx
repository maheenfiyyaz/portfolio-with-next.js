export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 gap-16 py-20 bg-[var(--second-bg-color)]"
    >
     
      <div className="about-img flex justify-center relative">
        
        <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full animate-pulse bg-gradient-to-r from-blue-500 to-sky-400 blur-2xl opacity-40"></div>

        <img
          src="/assets/Untitled design.png"
          alt="Maheen"
          className="relative w-72 md:w-80 object-cover border-4 border-blue-500 rounded-full profile-anim hover:shadow-[0_0_25px_#3b82f6] transition duration-300"
        />
      </div>

      <div className="max-w-2xl about-content text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About{' '}
          <span className="bg-gradient-to-r from-blue-900 via-sky-600 to-blue-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold">
          I'm a <span className="text-blue-500">MERN Stack Developer</span>
        </h3>

        <p className="mt-6 text-lg md:text-xl leading-relaxed">
          Passionate <span className="font-semibold">MERN Stack Developer</span> skilled in{' '}
          <span className="text-blue-500">MongoDB, Express.js, React.js, Node.js</span>.  
          Experienced in building responsive web & mobile apps.  
          Also skilled in <span className="font-semibold">Digital Marketing & WordPress</span>.  
          Currently learning advanced web technologies at <span className="font-semibold">SMIT</span>.
        </p>

       
        <div className="mt-10 grid grid-cols-2 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-3xl font-bold text-blue-500">20+</h4>
            <p className="text-gray-300">Projects Finished</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-500">1+</h4>
            <p className="text-gray-300">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}

