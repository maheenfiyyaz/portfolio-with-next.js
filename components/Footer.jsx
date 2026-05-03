export default function Footer() {
  return (
    <footer className="py-8 bg-[#0F172A] text-center text-[#F8FAFC]">

      <div className="flex justify-center gap-6 mb-4">

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/maheen-fayyaz-03485a2ab"
          className="text-[#9ED0E0] text-3xl p-2 rounded-full 
                     hover:text-[#F8FAFC] hover:shadow-[0_0_20px_#6FA3B880] 
                     transform hover:scale-110 hover:-rotate-3 transition duration-300"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/maheenfiyyaz"
          className="text-[#9ED0E0] text-3xl p-2 rounded-full 
                     hover:text-[#F8FAFC] hover:shadow-[0_0_20px_#6FA3B880] 
                     transform hover:scale-110 hover:rotate-3 transition duration-300"
        >
          <i className="bx bxl-github"></i>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/syeda_maheen_fayyaz/profilecard/"
          className="text-[#9ED0E0] text-3xl p-2 rounded-full 
                     hover:text-[#F8FAFC] hover:shadow-[0_0_20px_#6FA3B880] 
                     transform hover:scale-110 hover:-rotate-3 transition duration-300"
        >
          <i className="bx bxl-instagram-alt"></i>
        </a>

        {/* Behance */}
        <a
          href="https://www.behance.net/maheenfayyaz"
          className="text-[#9ED0E0] text-3xl p-2 rounded-full 
                     hover:text-[#F8FAFC] hover:shadow-[0_0_20px_#6FA3B880] 
                     transform hover:scale-110 hover:rotate-3 transition duration-300"
        >
          <i className="bx bxl-behance"></i>
        </a>

      </div>

      <p className="text-[#9ED0E0] text-sm">
        © Maheen Fayyaz | All Rights Reserved
      </p>
    </footer>
  );
}