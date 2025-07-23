import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes,FaSearch  } from "react-icons/fa";

const ClientNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/60 py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600 flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto mr-2" />
          ElectroBay
        </Link>

        {/* Desktop Category Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/electronics" className="text-gray-500 hover:text-gray-600">Electronics</Link>
          <Link to="/fashion" className="text-gray-500 hover:text-gray-600">Fashion</Link>
          <Link to="/home" className="text-gray-500 hover:text-gray-600">Home</Link>
          <Link to="/appliances" className="text-gray-500 hover:text-gray-600">Appliances</Link>
        </nav>

        {/* Search bar */}
        <div className="hidden lg:block flex-1 max-w-md mx-6 relative">
            <input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" >
                <FaSearch className="w-4 h-4" />
            </button>
        </div>


        {/* Right icons */}
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="text-gray-500 hover:text-gray-600 text-xl">
            <FaShoppingCart />
          </Link>
          <Link to="/login" className="text-gray-500 hover:text-gray-600 text-xl">
            <FaUser />
          </Link>

          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-3 px-4 space-y-2">
           <input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          <Link to="/electronics" className="block text-gray-700 hover:text-gray-600">Electronics</Link>
          <Link to="/fashion" className="block text-gray-700 hover:text-gray-600">Fashion</Link>
          <Link to="/home" className="block text-gray-700 hover:text-gray-600">Home</Link>
          <Link to="/appliances" className="block text-gray-700 hover:text-gray-600">Appliances</Link>
        </div>
      )}
    </header>
  );
};

export default ClientNavbar;
