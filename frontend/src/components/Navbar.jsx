import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">MyStore</Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/myProduct" className="hover:text-gray-300">My Products</Link></li>
          <li><Link to="/createProduct" className="hover:text-gray-300">Add Product</Link></li>
          <li><Link to="/cart" className="hover:text-gray-300">Cart</Link></li>
        </ul>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            <li><Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/myProduct" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>My Products</Link></li>
            <li><Link to="/createProduct" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Add Product</Link></li>
            <li><Link to="/cart" className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Cart</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
