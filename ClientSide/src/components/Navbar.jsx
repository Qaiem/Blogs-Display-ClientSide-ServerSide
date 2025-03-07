import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaXmark,
} from "react-icons/fa6";
import Modal from "./Modal"; // Import the Modal component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
    { path: "/services", link: "Services" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "/", label: "Facebook" },
    { icon: <FaGithub />, href: "/", label: "Github" },
    { icon: <FaInstagram />, href: "/", label: "Instagram" },
  ];

  return (
    <>
      <header className="bg-black text-white fixed top-0 left-0 right-0 shadow-lg">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="https://www.linkedin.com/in/qaiem-mehdi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-white"
          >
            Qaiem<span className="text-orange-500">Mehdi</span>
          </a>

          {/* Navigation items for large screens */}
          <ul className="hidden md:flex gap-8 text-lg">
            {navItems.map(({ path, link }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "hover:text-orange-500 transition"
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Social links and Login button for large screens */}
          <div className="hidden lg:flex gap-4 items-center">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="hover:text-orange-500"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
            <button
              onClick={() => setIsModalOpen(true)} // Open the modal
              className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all duration-200"
            >
              Log In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full bg-black md:hidden transition-all duration-150 ease-in-out">
              <ul className="flex flex-col items-center py-8 space-y-6">
                {navItems.map(({ path, link }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className="text-white hover:text-orange-500 text-lg"
                      onClick={toggleMenu} // Close menu when an item is clicked
                    >
                      {link}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center gap-6 pb-8">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="text-white hover:text-orange-500"
                    aria-label={label}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Login Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
