import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white relative border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-20 px-4 sm:px-8">
        
        {/* Logo */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">
            <Link to="/" onClick={() => setIsOpen(false)}>Abdul Ghaffar</Link>
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm transition-colors">
            Resume
          </button>
          <Link to="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-sm transition-colors">
            Contact Me
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-700 px-4 pt-4 pb-6 space-y-4">
          <ul className="flex flex-col gap-3 font-medium">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="block py-1 hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block py-1 hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)} className="block py-1 hover:text-blue-400">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-1 hover:text-blue-400">Contact</Link>
            </li>
          </ul>

          <div className="flex flex-col gap-2 pt-2 border-t border-gray-800">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm">
              Resume
            </button>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)} 
              className="w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;