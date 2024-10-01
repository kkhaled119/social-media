import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // استيراد أيقونة البرجر

const Header = () => {
  const path = useLocation().pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة لإدارة ظهور القائمة

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // تبديل حالة القائمة
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-800">
              <span className="px-2 py-1 bg-gradient-to-r from-slate-700 to-green-500 rounded-xl text-white">
                Adventures
              </span>
              Blog
            </Link>
          </div>

          {/* Search Form */}
          <form className="hidden lg:flex">
            <div className="relative">
              <input
                type="text"
                placeholder="Search ..."
                className="rounded-lg border border-gray-300 pr-10 py-2"
              />
              <AiOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </form>

          {/* User Actions and Hamburger Icon */}
          <div className="flex items-center space-x-4">
            {/* Navbar Links for larger screens */}
            <div className="hidden lg:flex space-x-4">
              <Link
                to="/"
                className={`text-gray-800 hover:text-gray-600 ${
                  path === "/" ? "font-bold" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-800 hover:text-gray-600 ${
                  path === "/about" ? "font-bold" : ""
                }`}
              >
                About
              </Link>
              <Link
                to="/projects"
                className={`text-gray-800 hover:text-gray-600 ${
                  path === "/projects" ? "font-bold" : ""
                }`}
              >
                Projects
              </Link>
            </div>

            {/* Mobile Hamburger Icon */}
            <button className="lg:hidden" onClick={toggleMenu}>
              <GiHamburgerMenu className="text-gray-800 w-8 h-8" />
            </button>
          </div>

          <div className="flex gap-2 items-center">
            <button className="hidden sm:inline bg-gray-600 w-12 h-10 text-white rounded">
              <FaMoon className="text-center" />
            </button>
            <Link to="/sign-in">
              <button className="bg-gradient-to-r from-slate-700 to-green-500 rounded-md text-white px-4 py-2">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        {/* Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border border-gray-200 shadow-md mt-2 rounded-md">
            <Link
              to="/"
              className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                path === "/" ? "font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                path === "/about" ? "font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`block px-4 py-2 text-gray-800 hover:bg-gray-100 ${
                path === "/projects" ? "font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
