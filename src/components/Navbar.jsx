import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../data/images/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      nav.classList.toggle('window-scroll', window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(true);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md py-3 z-50 bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-2" />
          <span className="text-lg font-bold">Progyan Educations</span>
        </Link>

        {/* Menu Button */}
        <button
          className="md:hidden text-gray-400 focus:outline-none"
          onClick={handleMenuClick}
        >
          <FiMenu size={24} />
        </button>

        {/* Menu Links */}
        <ul className={`md:flex md:items-center space-x-8 text-xl ${menuOpen ? 'flex' : 'hidden'}`}>
          <li>
            <Link to="/" className="hover:text-yellow-500 transition-colors duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-500 transition-colors duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-yellow-500 transition-colors duration-300">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-500 transition-colors duration-300">
              Contact Us
            </Link>
          </li>
          <li>
            <button className="btn rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300">
              Login
            </button>
          </li>
        </ul>

        {/* Close Menu Button */}
        <button
          className={`md:hidden text-gray-400 focus:outline-none ${menuOpen ? 'block' : 'hidden'}`}
          onClick={handleCloseClick}
        >
          <FiX size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
