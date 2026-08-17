function Projectpage() {
  const projects = [
    {
      title: "E-Commerce Web Application",
      category: "React.js App",
      description: "Responsive e-commerce web interface with product catalogs, dynamic filtering, state-driven cart calculations, and product views.",
      tech: ["React.js", "Tailwind CSS", "React Hooks", "REST API"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Sufi Gamer Streaming Hub",
      category: "UI & Web Layout",
      description: "Modern landing page for content creators featuring gaming aesthetics, stream overlays, live stats display, and social integrations.",
      tech: ["React.js", "Tailwind CSS", "JavaScript"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Dynamic JavaScript Web Tools",
      category: "Vanilla JS",
      description: "A collection of interactive web utilities highlighting DOM manipulation, event handling, local storage management, and clean user state.",
      tech: ["JavaScript (ES6+)", "HTML5", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Personal Developer Portfolio",
      category: "Full React Setup",
      description: "Multi-page developer portfolio with client-side routing using React Router v6, custom responsive styling, and clean project architecture.",
      tech: ["React.js", "React Router", "Tailwind CSS", "Vite"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Title */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">Featured Projects</h1>
        <p className="text-gray-400 max-w-xl">
          Web applications and responsive web UI projects built with modern frontend tools.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((item, index) => (
          <div 
            key={index}
            className="bg-gray-800/40 p-6 rounded-xl border border-gray-700/60 hover:border-blue-500/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold uppercase text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                  {item.category}
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2 text-white">{item.title}</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div>
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-gray-900 text-gray-300 px-2.5 py-1 rounded border border-gray-700/80">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 border-t border-gray-700/60 pt-4">
                <a 
                  href={item.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                >
                  GitHub Code →
                </a>
                <a 
                  href={item.demo} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm font-medium text-blue-400 hover:underline"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projectpage;