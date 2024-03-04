import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../data/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      nav.classList.toggle("window-scroll", window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-blue-700 p-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center text-start gap-0 line-h-0 p-1 ">
          <img src={logo} alt="Logo" className="w-[60px] flex text-white transition-all duration-300" />
          <span className="text-lg font-bold">Progyan <br /> Educations</span>
        </Link>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded={menuOpen ? "true" : "false"}
          onClick={handleMenuClick}
        >
          {menuOpen ? (
            <FiX className="w-5 h-5 text-white " />
          ) : (
            <FiMenu className="w-5 h-5 text-white " />
          )}
        </button>
        <div className={`w-full md:block md:w-auto ${menuOpen ? '' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border md:p-2 md:px-4 border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 md:border-0 md:hover:text-blue-700 md:p-0 text-white" onClick={handleMenuClick} >Home</Link>
            </li >
            <li>
              <Link to="/about" className="block py-2 px-3 md:border-0 md:hover:text-blue-700 md:p-0 text-white" onClick={handleMenuClick} >About</Link>
            </li >
            <li>
              <Link to="/courses" className="block py-2 px-3 md:border-0 md:hover:text-blue-700 md:p-0 text-white" onClick={handleMenuClick} >Courses</Link>
            </li >
            <li>
              <Link to="/contact" className="block py-2 px-3 md:border-0 md:hover:text-blue-700 md:p-0 text-white" onClick={handleMenuClick}>Contact</Link>

            </li >
            <li>
              <Link to="/register" className="block px-3 py-2 border border-transparent text-white transition-all duration-300 rounded font-bold hover:bg-gray-100 md:hover:text-black " onClick={handleMenuClick}>Join Now</Link>
            </li >
          </ul >
        </div >
      </div >
    </nav >
  );
};

export default Navbar;
