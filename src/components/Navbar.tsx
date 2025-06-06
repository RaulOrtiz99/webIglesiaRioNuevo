import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Grupos de Crecimiento', path: '/grupos-crecimiento' },
    { name: 'Familia Joven', path: '/familia-joven' },
    { name: 'Misiones', path: '/misiones' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-black/30 backdrop-blur-sm'
      } py-2`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-celestial-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">RN</span>
            </div>
            <span className={`font-bold text-xl ${
              scrolled ? 'text-celestial-700' : 'text-white'
            }`}>
              Río Nuevo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`font-medium transition duration-200 ${
                  scrolled
                    ? (location.pathname === link.path ? 'text-celestial-600' : 'text-gray-700 hover:text-celestial-600') 
                    : 'text-white hover:text-celestial-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link 
            to="/donar" 
            className="hidden md:inline-block bg-celestial-500 hover:bg-celestial-600 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Donar
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4 px-2 absolute left-4 right-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 px-4 font-medium rounded-md ${
                    location.pathname === link.path
                      ? 'bg-celestial-100 text-celestial-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/donar"
                className="bg-celestial-500 text-white py-2 px-4 rounded-md text-center mt-2"
              >
                Donar
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;