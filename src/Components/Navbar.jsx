import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { X } from "lucide-react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Only show "Home" if not on "/"
  const shouldShowHome = location.pathname !== "/";

  const navLinks = [
    ...(shouldShowHome ? [{ label: "Home", path: "/" }] : []),
    { label: "Post a Job", path: "/post-job" },
    { label: "Find Work", path: "/find-work" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-10 h-16">
        <h1 className="text-2xl font-bold text-yellow-500">HelpMe!</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-gray-800 font-medium">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `transition duration-200 hover:text-yellow-500 ${
                      isActive ? "text-yellow-500 font-semibold border-0" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/sign-up">
            <FaUserCircle className="text-2xl text-gray-700 hover:text-yellow-500 transition" />
          </NavLink>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center gap-4">
          <NavLink to="/sign-up">
            <FaUserCircle className="text-2xl text-gray-700 hover:text-yellow-500 transition" />
          </NavLink>
          <div onClick={toggleMobileMenu}>
            {isMobileOpen ? (
              <X className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-50 shadow-md">
          <ul className="flex flex-col items-center justify-center text-center">
            {navLinks.map((link, idx) => (
              <li
                key={idx}
                className="w-full py-4 border-b border-gray-200 text-lg text-gray-800 hover:bg-yellow-100 transition-all duration-300"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block w-full ${
                      isActive ? "text-yellow-500 font-semibold" : ""
                    }`
                  }
                  onClick={() => setIsMobileOpen(false)} // Close menu on click
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
