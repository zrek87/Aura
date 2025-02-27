import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          {/* Logo */}
          <a
            href=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Aura logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Aura
            </span>
          </a>

          {/* Search Bar - Responsive */}
          <div className="flex-grow mx-1 hidden md:block">
            <form className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 pl-4 pr-10 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-2 text-gray-500 dark:text-gray-400"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Contact and Login */}
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a
              href="tel:5541251234"
              className="text-sm text-gray-500 dark:text-white hover:underline"
            >
              (123) 456-7890
            </a>
            <a
              href="#"
              className="text-sm text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="block md:hidden p-4">
          <form className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 pl-4 pr-10 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="absolute right-3 top-2 text-gray-500 dark:text-gray-400"
            >
              🔍
            </button>
          </form>
        </div>
      </nav>

      {/* Bottom Navigation Bar */}
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
