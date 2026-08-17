import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800/80 border-t border-gray-700/60 text-gray-300 py-8 sm:py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        
        {/* Brand Section */}
        <div className="sm:col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold text-white mb-2">Abdul Ghaffar</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
            Junior Frontend Developer focused on building clean, responsive, and modern web applications.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition-colors">
                About & Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-400 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social / Connect Section */}
        <div>
          <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-3">
            Connect
          </h3>
          <div className="flex justify-center sm:justify-start gap-4 text-sm">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-6xl mx-auto px-4 pt-6 mt-6 border-t border-gray-700/40 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
        <p>© 2026 Abdul Ghaffar Memon. All rights reserved.</p>
        <p>Built with React.js & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;