export default function Tools() {
  const tools = [
    { name: "VS Code", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/visual-studio-code-icon.svg", type: "Code Editor" },
    { name: "React.js", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.svg", type: "Framework" },
    { name: "Next.js", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg", type: "Framework" },
    { name: "Node.js", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/node-js-icon.svg", type: "Runtime" },
    { name: "Tailwind CSS", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.svg", type: "CSS Framework" },
    { name: "Bootstrap", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.svg", type: "CSS Framework" },
    { name: "JavaScript", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/javascript-programming-language-icon.svg", type: "Language" },
    { name: "GitHub", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.svg", type: "Repository" },
    { name: "CSS3", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/css-icon.png", type: "Language" },
    { name: "HTML5", icon: "/assets/html-icon.webp", type: "Language" },
    { name: "Firebase", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-firebase-icon.svg", type: "Backend" },
    { name: "MongoDB", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/mongodb-icon.svg", type: "Database" },
  ];

  return (
    <section
      id="tools"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-[var(--second-bg-color)]"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Tools &{" "}
        <span className="bg-gradient-to-r from-blue-900 via-sky-600 to-blue-400 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-gray-300 text-lg md:text-xl text-center mb-12">
        My Professional Skills
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-[#0f172a] border border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center hover:scale-105 hover:shadow-[0_0_20px_#3b82f6] transition duration-300"
          >
            <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-3" />
            <h3 className="text-white font-semibold">{tool.name}</h3>
            <p className="text-gray-400 text-sm">{tool.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
