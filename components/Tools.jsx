import { Zap, Palette } from 'lucide-react';

export default function Tools() {
  const devTools = [
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

  const designTools = [
    { name: "Figma", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/figma-icon.svg", type: "UI/UX Design" },
    { name: "Adobe Illustrator", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-illustrator-icon.svg", type: "Vector Design" },
    { name: "Adobe Photoshop", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-photoshop-icon.svg", type: "Photo Editing" },
    { name: "Canva", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.svg", type: "Graphic Design" },
  ];

  const ToolCard = ({ tool }) => (
    <div className="bg-[#0F172A] border border-[#6FA3B840] rounded-xl p-5 flex flex-col items-center justify-center 
    hover:scale-105 hover:shadow-[0_0_25px_#6FA3B860] hover:border-[#9ED0E0] transition duration-300 group">
      
      <img
        src={tool.icon}
        alt={tool.name}
        className="w-12 h-12 mb-3 group-hover:scale-110 transition duration-300"
      />

      <h3 className="text-[#F8FAFC] font-semibold text-center">
        {tool.name}
      </h3>

      <p className="text-[#9ED0E0] text-sm">
        {tool.type}
      </p>
    </div>
  );

  return (
    <section
      id="tools"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-20 bg-[#0F172A] text-[#F8FAFC]"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Tools &{" "}
        <span className="bg-gradient-to-r from-[#6FA3B8] via-[#9ED0E0] to-[#F8FAFC] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>

      <p className="text-[#9ED0E0] text-lg md:text-xl text-center mb-16">
        Development & Design Skills
      </p>

      {/* Dev Tools */}
      <div className="w-full max-w-6xl mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-[#6FA3B840]" />

          <h3 className="text-[#9ED0E0] font-semibold tracking-widest text-sm uppercase px-4 flex items-center gap-2">
            <Zap size={15} /> Development
          </h3>

          <div className="h-px flex-1 bg-[#6FA3B840]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {devTools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>

      {/* Design Tools */}
      <div className="w-full max-w-6xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-[#6FA3B840]" />

          <h3 className="text-[#9ED0E0] font-semibold tracking-widest text-sm uppercase px-4 flex items-center gap-2">
            <Palette size={15} /> Design
          </h3>

          <div className="h-px flex-1 bg-[#6FA3B840]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {designTools.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}