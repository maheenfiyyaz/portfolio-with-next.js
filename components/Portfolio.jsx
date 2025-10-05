'use client';



export default function Portfolio() {
  const items = [
    {
      img: '/assets/cover img 1.jpeg',
      title: 'FRESH FOOD FARM WEBSITE',
      github: 'https://github.com/maheenfiyyaz/food-fram-website',
    },
    {
      img: '/assets/cover img2.webp',
      title: 'OLX CLONE WEBSITE',
      github: 'https://github.com/maheenfiyyaz/olx-pakistan-website',
    },
    {

      img: '/assets/cover img3.jpg',
      title: 'REDX CLONE WEBSITE',
      github: 'https://github.com/maheenfiyyaz/rexD-website',
    },
    {
      img: '/assets/lms.png',
      title: 'INTERNEE.PK WEBSITE',
      github: 'https://github.com/maheenfiyyaz/internee.pk-clone',
    },
    {
      img: '/assets/cds22.PNG',
      title: 'CDS22-formula WEBSITE',
      github: 'https://github.com/maheenfiyyaz/mini-hackathon-1',
    },
    {
      img: '/assets/Netflix_UI_for_Web.png',
      title: 'NETFLIX CLONE WEBSITE',
      github: 'https://github.com/maheenfiyyaz/netflix-clone',
    },
    {
      img: '/assets/furnite.PNG',
      title: 'FURNITE WEBSITE',
      github: 'https://github.com/maheenfiyyaz/furniture-website',
    },
      {
      img: '/assets/dasboard.PNG',
      title: ' EMPLOYEE MANAGEMENT DASHBOARD',
      github: 'https://github.com/maheenfiyyaz/final-hackathon',
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-8 bg-[var(--bg-color)]">
 
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        My{' '}
        <span className="bg-gradient-to-r from-blue-900 via-sky-600 to-blue-400 bg-clip-text text-transparent">
          Portfolio
        </span>
      </h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((it, idx) => (
          <div key={idx} className="relative group">
          
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500 via-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 blur-md animate-gradient-border transition duration-500"></div>

        
            <div className="relative bg-[var(--bg-color)] rounded-xl p-4 h-96 flex flex-col justify-between z-10 border-2 border-blue-600 group-hover:border-transparent transition-all duration-300">
             
              <img
                src={it.img}
                alt={it.title}
                className="h-64 w-full object-cover rounded-lg shadow-md group-hover:scale-105 transition duration-500"
              />

           
              <div className="flex items-center justify-between mt-3">
                <h5 className="font-semibold text-lg text-white group-hover:text-blue-400 transition duration-300">
                  {it.title}
                </h5>
                <div className="flex gap-3">
                  {/* GitHub icon */}
                  <a
                    href={it.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-blue-600 rounded-full text-white shadow-md hover:shadow-[0_0_20px_#3b82f6] transform hover:scale-125 hover:rotate-6 transition duration-300"
                  >
                    <i className="bx bxl-github text-xl"></i>
                  </a>

                  {/* LinkedIn icon */}
                  <a
                    href="https://www.linkedin.com/in/maheen-fayyaz-03485a2ab"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-blue-600 rounded-full text-white shadow-md hover:shadow-[0_0_20px_#3b82f6] transform hover:scale-125 hover:-rotate-6 transition duration-300"
                  >
                    <i className="bx bxl-linkedin text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
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
