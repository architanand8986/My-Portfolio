import React from "react";

function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 w-full">
      <nav className="w-full flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Simplified Logo/Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">AA</span>
          </div>
          <div className="text-xl font-bold text-gray-800">Archit Anand</div>
        </div>

        {/* Simplified Navigation */}
        <div className="flex items-center gap-8">
          {/* Clean Navigation Links */}
          <ul className="hidden md:flex gap-8">
            <li>
              <a
                href="#welcome"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                Projects
              </a>
            </li>
          </ul>

          {/* Simple Contact Button */}
          <a
            href="#contact"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Simple Mobile Menu */}
      <div className="md:hidden border-t border-gray-200 bg-white">
        <div className="px-6 py-4 space-y-2">
          <a
            href="#welcome"
            className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            Projects
          </a>
          <a href="#contact" className="block py-2 text-blue-600 font-medium">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
