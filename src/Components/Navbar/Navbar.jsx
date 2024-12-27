import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="src/assets/logo.png"
            style={{ mixBlendMode: 'multiply', width: 50 }}
            alt="logo"
            className="rounded-full border-2 border-yellow-500 p-1"
          />
          <span className="text-lg font-bold tracking-wider text-yellow-300">Helping Hands</span>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to='/' className="hover:text-green-300">Home</Link>
          <Link to='/Donationblog' className="hover:text-green-300">Blog</Link>
          <Link to='/About' className="hover:text-green-300">About</Link>
          <Link to='/Contact' className="hover:text-green-300">Contact</Link>
          <Link
            to='/Donationblog'
            className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-semibold py-2 px-4 rounded"
          >
            Donate Now
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <a href="#Home" className="hover:text-green-300">Home</a>
            <a href="#Blogs" className="hover:text-green-300">Blogs</a>
            <a href="#About" className="hover:text-green-300">About</a>
            <a href="#Contact" className="hover:text-green-300">Contact</a>
            <a
              href="#Donate"
              className="bg-yellow-500 hover:bg-yellow-400 text-green-900 font-semibold py-2 px-4 rounded"
            >
              Donate Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
