import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-toggle")) {
        setOpenDropdown(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="">
      <div className="container mx-auto px-4 md:flex items-center gap-6 border-b">
        {/* Logo */}
        <div className="flex items-center justify-between md:w-auto w-full">
          <Link to='/' className="py-5 px-2 text-[#FFB100] flex-1 font-bold text-2xl">
            Prasang
          </Link>

          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu`}
        >
          <Link to='/' className="py-2 px-3 block">
            Home
          </Link>
          <Link to='/allevents' className="py-2 px-3 block">
            Events
          </Link>
          {/* Dropdown menu */}
          <div className="relative">
            <button
              type="button"
              className="dropdown-toggle py-2 px-3 hover:bg-gray-50 flex items-center gap-2 rounded"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <Link to='/allservices' className="pointer-events-none select-none">Services</Link>
              <svg
                className="w-3 h-3 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            {openDropdown && (
              <div className="dropdown-menu absolute bg-gray-50 rounded-b-lg pb-2 w-48">
                <Link to='/allServices' className="block px-6 py-2 hover:bg-gray-100">
                  All Services
                </Link>
                <a href="#" className="block px-6 py-2 hover:bg-gray-100">
                  Web Development
                </a>
                <a href="#" className="block px-6 py-2 hover:bg-gray-100">
                  SEO
                </a>
              </div>
            )}
          </div>
          <a href="#" className="py-2 px-3 block">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;