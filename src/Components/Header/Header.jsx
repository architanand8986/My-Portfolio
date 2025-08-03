import React from "react";

function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 w-full">
      <nav className="w-full flex items-center justify-between px-6 py-4 max-w-4xl mx-auto">
        <div className="text-2xl font-bold text-gray-800 tracking-tight select-none">
          MyPortfolio
        </div>
        <div className="flex items-center gap-4">
          <ul className="flex gap-1 bg-gray-50 rounded-full px-2 py-2 shadow-sm border border-gray-200">
            <li>
              <a
                href="#welcome"
                className="px-4 py-2 rounded-full text-gray-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="px-4 py-2 rounded-full text-gray-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="px-4 py-2 rounded-full text-gray-600 font-medium hover:bg-blue-600 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                Projects
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="ml-2 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
