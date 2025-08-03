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
          {/* Clean Navigation Links + GitHub + Contact */}
          <ul className="hidden md:flex gap-8 items-center">
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
            <li>
              <a
                href="https://github.com/architanand8986"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

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
          <div className="flex items-center gap-2 pt-2">
            <a href="#contact" className="block py-2 text-blue-600 font-medium">
              Contact
            </a>
            <a
              href="https://github.com/architanand8986"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
