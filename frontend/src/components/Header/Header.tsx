import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiCart } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-xl font-bold ml-5">DeshCylce</div>

        {/* Search Bar for large screens */}
        <div className="hidden lg:block flex-1 mx-4 ml-28 lg:relative">
          <FaSearch className="text-xl right-[220px] top-3 absolute" />
          <input
            type="text"
            placeholder="Search..."
            className="w-[400px] px-4 py-2 rounded border border-gray-300"
          />
        </div>

        {/* Menu Items for large screens */}
        <div className="hidden lg:flex items-center space-x-9 mr-32 ">
          <a href="#" className="hover:text-gray-700">
            Home
          </a>
          <a href="#" className="hover:text-gray-700">
            Store
          </a>
          <div className="relative group ">
            <a
              href="#"
              className="hover:text-gray-700 flex items-center space-x-1"
            >
              Pages
              <IoIosArrowDown />
            </a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Page 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Page 2
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Page 3
              </a>
            </div>
          </div>
        </div>
        <div className="lg:flex items-center text-2xl space-x-6 relative hidden">
          <div className="w-5 h-5 rounded-full bg-gray-300 text-sm items-center justify-center flex absolute -right-4 bottom-4">
            2
          </div>
          <a href="#" className="hover:text-gray-700">
            <CgProfile />
          </a>
          <a href="#" className="hover:text-gray-700">
            <BiCart />
          </a>
        </div>

        {/* Mobile view icons */}
        <div className="lg:hidden flex items-center space-x-4">
          <button onClick={() => setIsSearchOpen(true)}>
            <FaSearch size={20} />
          </button>
          <a href="#" className="hover:text-gray-700">
            <FaShoppingCart size={20} />
          </a>
          <button onClick={() => setIsMenuOpen(true)}>
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Search Modal for mobile view */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 mb-4 rounded border border-gray-300"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsSearchOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile menu drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end">
          <div className="bg-white w-64 p-4">
            <button className="mb-4" onClick={() => setIsMenuOpen(false)}>
              <FaTimes size={20} />
            </button>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Home
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Store
            </a>
            <div className="relative group">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Pages
              </a>
              <div className="ml-4">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Page 1
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Page 2
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Page 3
                </a>
              </div>
            </div>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Login
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">
              Cart
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
