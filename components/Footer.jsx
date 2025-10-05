export default function Footer() {
  return (
    <footer className="py-8 bg-[var(--bg-color)] text-center">
      <div className="flex justify-center gap-6 mb-4">

        <a
          href="https://www.linkedin.com/in/maheen-fayyaz-03485a2ab"
          className="text-blue-400 text-3xl p-2 rounded-full 
                     hover:text-blue-400 hover:shadow-[0_0_20px_#3b82f6] 
                     transform hover:scale-110 hover:-rotate-3 transition duration-300"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/maheenfiyyaz"
          className="text-blue-400 text-3xl p-2 rounded-full 
                     hover:text-blue-400 hover:shadow-[0_0_20px_#3b82f6] 
                     transform hover:scale-110 hover:rotate-3 transition duration-300"
        >
          <i className="bx bxl-github"></i>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/syeda_maheen_fayyaz/profilecard/"
          className="text-blue-400 text-3xl p-2 rounded-full 
                     hover:text-blue-400 hover:shadow-[0_0_20px_#3b82f6] 
                     transform hover:scale-110 hover:-rotate-3 transition duration-300"
        >
          <i className="bx bxl-instagram-alt"></i>
        </a>
      </div>
      <p className="text-blue-500">&copy; Maheen Fayyaz | All Rights Reserved</p>
    </footer>
  );
}
